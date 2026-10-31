/**
 * 🔊 Voz do próprio aparelho (a "voz de robô" do celular/computador).
 * Usada quando a voz neural do servidor (edge-tts, em Python) não está instalada ou falha.
 * - espera as vozes carregarem (no Android elas chegam depois);
 * - divide o texto em pedaços (o Chrome corta falas longas depois de ~15 s);
 * - prefere uma voz em português do Brasil.
 */
let fila: SpeechSynthesisUtterance[] = [];

function vozesProntas(): Promise<SpeechSynthesisVoice[]> {
  const ss = window.speechSynthesis;
  const v = ss.getVoices();
  if (v.length) return Promise.resolve(v);
  return new Promise((ok) => {
    let feito = false;
    const fim = () => { if (feito) return; feito = true; ok(ss.getVoices()); };
    try { ss.addEventListener("voiceschanged", fim, { once: true } as any); } catch { /* */ }
    setTimeout(fim, 1500);
  });
}

function pedacos(texto: string, max = 220): string[] {
  const limpo = String(texto || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_`>|]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const frases = limpo.match(/[^.!?;:\n]+[.!?;:]*\s*/g) || [limpo];
  const out: string[] = [];
  let atual = "";
  for (const f of frases) {
    if ((atual + f).length > max && atual) { out.push(atual.trim()); atual = ""; }
    if (f.length > max) {
      for (let i = 0; i < f.length; i += max) out.push(f.slice(i, i + max));
    } else atual += f;
  }
  if (atual.trim()) out.push(atual.trim());
  return out.filter(Boolean);
}

export function temFalaNoAparelho(): boolean {
  return typeof window !== "undefined" && !!window.speechSynthesis && typeof (window as any).SpeechSynthesisUtterance === "function";
}

export function pararFalaAparelho() {
  fila = [];
  try { window.speechSynthesis?.cancel(); } catch { /* */ }
}

/** Fala o texto com a voz do aparelho. Chama aoTerminar no fim (ou se não der). Devolve false se o aparelho não tem voz. */
export function falarNoAparelho(texto: string, aoTerminar?: () => void): boolean {
  if (!temFalaNoAparelho()) { aoTerminar?.(); return false; }
  pararFalaAparelho();
  const partes = pedacos(texto);
  if (!partes.length) { aoTerminar?.(); return true; }
  vozesProntas().then((vozes) => {
    // prefere as vozes NATURAIS (no Edge do computador: "Microsoft Francisca/Antonio Online (Natural)")
    const natural = (v: SpeechSynthesisVoice) => /natural|online|neural|google|premium|enhanced/i.test(v.name);
    const voz =
      vozes.find((v) => /pt[-_]BR/i.test(v.lang) && natural(v)) ||
      vozes.find((v) => /pt[-_]BR/i.test(v.lang)) ||
      vozes.find((v) => /^pt/i.test(v.lang)) || null;
    const minhaFila: SpeechSynthesisUtterance[] = partes.map((p) => {
      const u = new SpeechSynthesisUtterance(p);
      u.lang = "pt-BR"; u.rate = 1; u.pitch = 1;
      if (voz) u.voice = voz;
      return u;
    });
    fila = minhaFila;
    minhaFila.forEach((u, i) => {
      const ultimo = i === minhaFila.length - 1;
      u.onend = () => { if (ultimo && fila === minhaFila) { fila = []; aoTerminar?.(); } };
      u.onerror = () => { if (fila === minhaFila) { fila = []; aoTerminar?.(); } };
    });
    // pequeno atraso depois do cancel() (defeito do Chrome que pula a fala)
    setTimeout(() => { if (fila === minhaFila) minhaFila.forEach((u) => window.speechSynthesis.speak(u)); }, 120);
  });
  return true;
}

/** Se a voz do servidor já falhou nesta sessão (edge-tts não instalado), pula direto para a voz do aparelho. */
let semVozServidor = false;
export const servidorSemVoz = () => semVozServidor;
export const marcarServidorSemVoz = (v = true) => { semVozServidor = v; };
