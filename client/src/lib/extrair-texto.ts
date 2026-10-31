/**
 * 📄 Extrair texto de arquivos (PDF, Word, HTML…) — com conserto das "letrinhas".
 *
 * Usado no lugar de  fetch("/api/upload/extract-text", ...)  — devolve a mesma resposta
 * ({ text }), então o resto do jurídico não muda. O que ele faz a mais:
 *  1. manda UM arquivo de cada vez ao servidor (um arquivo ruim não estraga os outros);
 *  2. se o PDF veio "cheio de letrinhas e desenhos" (fonte sem tradução, PDF escaneado,
 *     PDF de imagem do processo), lê de novo AQUI no aparelho, página por página, e faz
 *     OCR (lê a imagem da página) nas páginas ruins;
 *  3. se o servidor estiver desligado, lê o arquivo aqui mesmo (PDF, Word, HTML, texto).
 */

const PALAVRAS = /\b(de|da|do|das|dos|que|e|o|a|os|as|em|no|na|para|por|com|não|se|ao|um|uma|é|art|lei|autos|processo|juiz|autor|réu|parte|fls)\b/gi;

/** Tira caracteres que nunca são texto (controle, "privados" da fonte, �). */
export function limparLetrinhas(t: string): string {
  return String(t || "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[-￰-￿�]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n");
}

/** O texto parece "letrinhas" (lixo) em vez de português? */
export function textoRuim(t: string): boolean {
  const s = String(t || "");
  const sem = s.replace(/\s+/g, "");
  if (sem.length < 40) return true; // quase nada: provavelmente imagem
  const estranhos = (s.match(/[\u0000-\u0008\u000E-\u001F-�]/g) || []).length;
  if (estranhos / sem.length > 0.03) return true;
  const bons = (s.match(/[\p{L}\p{N}.,;:!?()\[\]"'ºª§%$\-–—\/@#&*+=]/gu) || []).length;
  if (bons / sem.length < 0.85) return true;
  const palavras = s.split(/\s+/).filter(Boolean).length;
  if (palavras > 60) {
    const comuns = (s.match(PALAVRAS) || []).length;
    if (comuns / palavras < 0.04) return true; // letras "trocadas" (fonte sem tradução)
  }
  return false;
}

function extensao(f: File): string {
  const e = (f.name || "").toLowerCase().split(".").pop() || "";
  return e === (f.name || "").toLowerCase() ? "" : e;
}
async function tipoReal(f: File): Promise<string> {
  try {
    const cab = new Uint8Array(await f.slice(0, 8).arrayBuffer());
    const s = String.fromCharCode(...cab);
    if (s.startsWith("%PDF")) return "pdf";
    if (s.startsWith("PK")) return extensao(f) === "docx" || /wordprocessing/.test(f.type) ? "docx" : (extensao(f) || "zip");
  } catch { /* */ }
  const e = extensao(f);
  if (e) return e;
  if (f.type === "application/pdf") return "pdf";
  if (/html/.test(f.type)) return "html";
  return "txt";
}

function htmlParaTexto(h: string): string {
  try {
    const doc = new DOMParser().parseFromString(h, "text/html");
    doc.querySelectorAll("script,style,noscript").forEach((e) => e.remove());
    doc.querySelectorAll("br").forEach((e) => e.replaceWith("\n"));
    doc.querySelectorAll("p,div,li,tr,h1,h2,h3,h4,h5,h6,section,article").forEach((e) => e.append("\n"));
    return (doc.body?.textContent || "").replace(/[ \t ]+/g, " ").replace(/\n\s*\n\s*\n+/g, "\n\n").trim();
  } catch { return h.replace(/<[^>]+>/g, " "); }
}

// ── leitura de PDF aqui no aparelho (pdf.js) + OCR (Tesseract) só nas páginas ruins ──
let tesseract: any = null;
async function carregarTesseract(): Promise<any> {
  if ((window as any).Tesseract) return (window as any).Tesseract;
  await new Promise<void>((ok, erro) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
    s.onload = () => ok(); s.onerror = () => erro(new Error("Sem internet para baixar o leitor de imagem (OCR)."));
    document.head.appendChild(s);
  });
  return (window as any).Tesseract;
}

export type Progresso = (msg: string) => void;
function avisar(p: Progresso | undefined, m: string) {
  try { p?.(m); } catch { /* */ }
  // aviso pequeno na tela enquanto lê (some sozinho no fim)
  try {
    let d = document.getElementById("extrair-aviso");
    if (!m) { d?.remove(); }
    else {
      if (!d) {
        d = document.createElement("div"); d.id = "extrair-aviso";
        d.setAttribute("style", "position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:99999;background:#1f2937;color:#fff;padding:10px 14px;border-radius:12px;font:600 14px system-ui;box-shadow:0 4px 18px #0006;max-width:92vw;text-align:center");
        document.body.appendChild(d);
      }
      d.textContent = m;
    }
  } catch { /* */ }
  try { window.dispatchEvent(new CustomEvent("extrair-progresso", { detail: m })); } catch { /* */ }
}

/** Lê o PDF no aparelho. Páginas com texto bom ficam como estão; as ruins passam pelo OCR. */
export async function lerPdfAqui(f: File, aoProgresso?: Progresso, maxOcr = 80): Promise<string> {
  const pdfjs: any = await import("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  const pdf = await pdfjs.getDocument({ data: await f.arrayBuffer() }).promise;
  const n = pdf.numPages;
  const paginas: string[] = [];
  let worker: any = null, feitasOcr = 0;
  try {
    for (let i = 1; i <= n; i++) {
      avisar(aoProgresso, `📄 ${f.name}: página ${i} de ${n}…`);
      const pg = await pdf.getPage(i);
      const tc = await pg.getTextContent();
      let txt = "", ultimoY: number | null = null;
      for (const it of tc.items as any[]) {
        if (!("str" in it)) continue;
        const y = it.transform?.[5];
        if (ultimoY !== null && Math.abs(y - ultimoY) > 2) txt += "\n";
        txt += it.str; if (it.hasEOL) txt += "\n";
        ultimoY = y;
      }
      txt = limparLetrinhas(txt).trim();
      if (!textoRuim(txt) || feitasOcr >= maxOcr) { paginas.push(txt); pg.cleanup?.(); continue; }
      // página ruim → OCR (lê a "foto" da página)
      try {
        avisar(aoProgresso, `🔎 ${f.name}: lendo a imagem da página ${i} de ${n} (OCR)…`);
        const T = await carregarTesseract();
        if (!worker) worker = await T.createWorker("por");
        const vp = pg.getViewport({ scale: 2 });
        const cv = document.createElement("canvas");
        cv.width = Math.floor(vp.width); cv.height = Math.floor(vp.height);
        const ctx = cv.getContext("2d")!;
        await pg.render({ canvasContext: ctx, viewport: vp, canvas: cv } as any).promise;
        const r = await worker.recognize(cv);
        cv.width = cv.height = 0; // devolve a memória
        feitasOcr++;
        const ocr = limparLetrinhas(r?.data?.text || "").trim();
        paginas.push(ocr || txt);
      } catch (e: any) {
        paginas.push(txt || `[Página ${i}: não consegui ler (${e?.message || "erro no OCR"})]`);
      }
      pg.cleanup?.();
    }
  } finally {
    try { await worker?.terminate(); } catch { /* */ }
    try { await pdf.destroy(); } catch { /* */ }
  }
  return paginas.filter(Boolean).join("\n\n");
}

async function lerAqui(f: File, tipo: string, p?: Progresso): Promise<string> {
  if (tipo === "pdf") return lerPdfAqui(f, p);
  if (tipo === "docx") {
    const mammoth: any = await import("mammoth");
    const r = await mammoth.extractRawText({ arrayBuffer: await f.arrayBuffer() });
    return r.value || "";
  }
  const t = await f.text();
  if (["html", "htm", "xml"].includes(tipo) || /^\s*<(!doctype|html|\?xml)/i.test(t)) return htmlParaTexto(t);
  return t;
}

/** Igual ao fetch("/api/upload/extract-text", { method:"POST", body }) — mas com o conserto das letrinhas. */
export async function fetchExtrair(body: FormData, aoProgresso?: Progresso): Promise<Response> {
  const arquivos = (body.getAll("files") as any[]).filter((x) => x && typeof x === "object" && "name" in x) as File[];
  const partes: string[] = [];
  const avisos: string[] = [];
  for (const f of arquivos) {
    const tipo = await tipoReal(f);
    let texto = "", doServidor = false, precisaOcr = false;
    try {
      const fd = new FormData(); fd.append("files", f, f.name || ("arquivo." + tipo));
      const r = await fetch("/api/upload/extract-text", { method: "POST", body: fd });
      const ct = r.headers.get("content-type") || "";
      if (r.ok && ct.includes("json")) {
        const j = await r.json();
        texto = limparLetrinhas(j.text || "");
        precisaOcr = !!j.precisaOcr;
        doServidor = true;
      }
    } catch { /* servidor desligado: lê aqui */ }
    try {
      if (!doServidor) {
        avisar(aoProgresso, `📄 Lendo ${f.name} aqui no aparelho…`);
        texto = limparLetrinhas(await lerAqui(f, tipo, aoProgresso));
      } else if (tipo === "pdf" && (precisaOcr || textoRuim(texto))) {
        avisar(aoProgresso, `🔎 ${f.name} veio com letras estranhas — lendo de novo, página por página…`);
        const outro = await lerPdfAqui(f, aoProgresso);
        if (outro && (!textoRuim(outro) || outro.replace(/\s/g, "").length > texto.replace(/\s/g, "").length)) texto = outro;
        else avisos.push(f.name + ": continua difícil de ler (PDF de imagem ruim?)");
      } else if (["html", "htm", "xml"].includes(tipo) && /<[a-z][\s\S]*>/i.test(texto)) {
        texto = htmlParaTexto(texto);
      }
    } catch (e: any) {
      avisos.push(f.name + ": " + (e?.message || "erro ao ler"));
    }
    if (texto.trim()) partes.push(texto.trim());
  }
  avisar(aoProgresso, "");
  return new Response(JSON.stringify({ text: partes.join("\n\n---\n\n"), avisos }), { status: 200, headers: { "Content-Type": "application/json" } });
}
