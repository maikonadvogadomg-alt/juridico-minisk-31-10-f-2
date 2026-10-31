import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * 🧰 Ferramentas — páginas HTML que funcionam sozinhas, abertas DENTRO do jurídico
 * (igual à Auditoria). Para colocar uma nova: copie o .html para client/public/ferramentas/
 * e acrescente uma linha na lista abaixo.
 */
export const FERRAMENTAS: { id: string; arquivo: string; icone: string; nome: string; descricao: string }[] = [
  { id: "mini-juridico", arquivo: "mini-juridico/index.html", icone: "⚖️", nome: "Mini Jurídico (modular)", descricao: "O assistente jurídico modular: Processar, Editor A4 com Word, Conversa por voz, Documentos, Modelos e ementas, e as ferramentas dele (Limpador, Comunicações DJEN, Perito, Juntador…). Tem o 🦙 Ollama." },
  { id: "caca-bug", arquivo: "mini-juridico/ferramentas/cacabug/index.html", icone: "🐞", nome: "Caça-Bug", descricao: "Acha e explica erros de projetos (com a 🤖 IA e o 🦙 Ollama)." },
  { id: "montador", arquivo: "montador-universal.html", icone: "🧩", nome: "Montador Universal", descricao: "Abre qualquer arquivo (PDF, Word, Excel…) e cria modelos de regras por linha." },
  { id: "colador", arquivo: "colador.html", icone: "🔗", nome: "Colador de Links", descricao: "Guarda e abre os links das suas versões e projetos, com dois visores e exportar em MD." },
  { id: "ollama", arquivo: "../ollama.html", icone: "🦙", nome: "Ollama — IA grátis", descricao: "Liga e escolhe a IA que roda no próprio computador ou celular." },
  { id: "auditoria", arquivo: "../auditoria.html", icone: "🧮", nome: "Auditoria Pericial", descricao: "Cálculos e auditoria financeira." },
  { id: "comparador", arquivo: "../comparador.html", icone: "⚖️", nome: "Comparador", descricao: "Compara dois textos e mostra o que mudou." },
];

const base = () => (import.meta.env.BASE_URL || "/");

function Topo({ titulo, voltar }: { titulo: string; voltar: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 border-b bg-background">
      <Link href={voltar}>
        <Button size="icon" variant="ghost" aria-label="Voltar"><ArrowLeft className="w-4 h-4" /></Button>
      </Link>
      <span className="text-sm font-medium">{titulo}</span>
    </div>
  );
}

export function FerramentasLista() {
  return (
    <div className="min-h-screen bg-background">
      <Topo titulo="🧰 Ferramentas" voltar="/" />
      <div className="p-4 grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
        {FERRAMENTAS.map((f) => (
          <Link key={f.id} href={"/ferramenta/" + f.id} className="block rounded-xl border p-4 hover:bg-muted transition-colors" data-testid={"ferramenta-" + f.id}>
            <div className="text-lg font-semibold">{f.icone} {f.nome}</div>
            <div className="text-sm text-muted-foreground mt-1">{f.descricao}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function FerramentaAberta() {
  const { id } = useParams<{ id: string }>();
  const f = FERRAMENTAS.find((x) => x.id === id);
  if (!f) return <div className="p-6">Ferramenta não encontrada. <Link href="/ferramentas" className="underline">Voltar</Link></div>;
  const src = base() + "ferramentas/" + f.arquivo;
  return (
    <div className="h-screen flex flex-col">
      <Topo titulo={f.icone + " " + f.nome} voltar="/ferramentas" />
      <iframe src={src} className="flex-1 w-full border-0" title={f.nome}
        allow="microphone; camera; clipboard-read; clipboard-write; fullscreen; autoplay"
        data-testid={"iframe-" + f.id} />
    </div>
  );
}
