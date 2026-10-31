# 🧬 Receita para recriar: Assistente Jurídico

_Gerada sem IA, lendo 217 arquivo(s). Serve para remontar este app como HTML modular — com qualquer IA, um arquivo por vez._

## 1. O que é

- **Nome:** Assistente Jurídico
- **Partes de código:** 175 (89 tela, 68 logica, 10 servidor, 4 dados, 4 estilo)
- **Tem servidor (rotas /api):** sim — veja o passo do servidor
- **Peças de fora (bibliotecas):** @capacitor/cli, @electric-sql/pglite, @google/genai, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-menubar, @radix-ui/react-navigation-menu, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot, @radix-ui/react-switch, @radix-ui/react-tabs, @radix-ui/react-toast, @radix-ui/react-toggle, @radix-ui/react-toggle-group, @radix-ui/react-tooltip…

## 2. Estrutura modular proposta

```
index.html            ← a página; chama os módulos NA ORDEM
css/app.css           ← o visual
js/00-core.js         ← a "locomotiva": cria window.APP (registrar, guardar, avisar)
js/10-init.js         ← dados (era migrations/0000_init.sql)
js/15-db.js           ← dados (era server/db.ts)
js/20-localdb.js      ← Banco de dados LOCAL — antes era Postgres na nuvem (Neon/Replit), com  (era server/localdb.ts)
js/25-schema.js       ← dados (era shared/schema.ts)
js/30-cacador-erros.js← 🐞 CAÇADOR DE ERROS — só observa, não muda nada no Jurídico. Anota soz (era client/public/cacador-erros.js)
js/35-ai-code-studio.js← Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite a (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/ai-code-studio.js)
js/40-analisador-universal.js← Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite a (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/analisador-universal.js)
js/45-cirurgiao.js    ← Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite a (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/cirurgiao.js)
js/50-gerador-eas.js  ← Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite a (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/gerador-eas.js)
js/55-limpador.js     ← Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite a (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/limpador.js)
js/60-base.js         ← Meu Chat — 00-base.js: peças comuns (MC) (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/00-base.js)
js/65-banco.js        ← Meu Chat — 10-banco.js: onde tudo fica guardado (IndexedDB do aparelho (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/10-banco.js)
js/70-provedores.js   ← Meu Chat — 20-provedores.js: conversar com as IAs (Gemini, Groq, OpenR (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/20-provedores.js)
js/75-memoria.js      ← Meu Chat — 30-memoria.js: 🧠 a memória que vai junto em TODA conversa. (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/30-memoria.js)
js/80-voz.js          ← Meu Chat — 40-voz.js: 🎤 falar (ditado) e 🔊 ouvir a resposta. 🔊 DOIS (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/40-voz.js)
js/85-internet.js     ← Meu Chat — 50-internet.js: 🌐 pesquisar e 🔗 ler links. - Gemini e Cla (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/50-internet.js)
js/90-previa.js       ← Meu Chat — 60-previa.js: 👁 ver o código funcionando, na hora. - HTML: (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/60-previa.js)
js/91-texto.js        ← Meu Chat — 70-texto.js: mostra a resposta da IA bonitinha (negrito, li (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/70-texto.js)
js/92-chat.js         ← Meu Chat — 80-chat.js: a conversa (mensagens, fotos, mandar, parar, li (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/80-chat.js)
js/93-config.js       ← Meu Chat — 85-config.js: ⚙️ chaves das IAs, modelo, busca, voz, instru (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/85-config.js)
js/94-cofre.js        ← Meu Chat — 87-cofre.js: 🔐 Cofre de chaves. Mostra cada chave guardada (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/87-cofre.js)
js/95-backup.js       ← Meu Chat — 90-backup.js: 💾 backup de tudo (conversas + memória + ajus (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/90-backup.js)
js/96-ponte-lab.js    ← 🔬 Ponte com o Laboratório: quando o Meu Chat está DENTRO do Laboratór (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/95-ponte-lab.js)
js/97-cofre-arquivo.js← 🔐 Arquivo de chaves do Maikon — o MESMO formato no Mini SK, no Meu Ch (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/lib/cofre-arquivo.js)
js/98-guia-maikon.js  ← 🧭 Guia das ferramentas do Maikon — o MESMO texto em todos os apps (Mi (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/lib/guia-maikon.js)
js/98-montar.js       ← Monta ferramentas/*.js do Caça-Bug a partir dos HTML originais (sem me (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/montar.py)
js/98-perito.js       ← Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite a (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/perito.js)
js/98-projeto-lab.js  ← Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite a (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/projeto-lab.js)
js/98-triagem.js      ← Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite a (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/triagem.js)
js/98-zip.js          ← Caça-Bug — 20-zip.js (o mesmo do Mini SK) Lê e cria arquivos .zip SEM  (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/20-zip.js)
js/98-projeto.js      ← Caça-Bug — 30-projeto.js Projetos: importar (.zip, arquivos soltos ou  (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/30-projeto.js)
js/98-ferramentas.js  ← Caça-Bug — 40-ferramentas.js Abre cada ferramenta (Cirurgião, Projeto  (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/40-ferramentas.js)
js/98-organizar.js    ← Caça-Bug — 45-organizar.js Aba 🗂️ Organizar: pega o projeto em uso (a (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/45-organizar.js)
js/98-relatorios.js   ← Caça-Bug — 50-relatorios.js 📋 Relatórios guardados: cada análise fica (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/50-relatorios.js)
js/98-comparar.js     ← Caça-Bug — 60-comparar.js ⚖️ Comparar versões: escolha 2 ou mais proje (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/60-comparar.js)
js/98-ia.js           ← Caça-Bug — 70-ia.js · 🤖 IA O MEU CHAT aqui dentro: as suas chaves (Ge (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/70-ia.js)
js/98-expo-core.js    ← expo-core.js — ☁️ Consertar um projeto EXPO para gerar APK pelo EAS Us (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/lib/expo-core.js)
js/98-organizar-core.js← logica (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/lib/organizar-core.js)
js/98-plano-core.js   ← logica (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/lib/plano-core.js)
js/98-ia.js           ← Assistente Jurídico — 10-ia.js Fala com a IA. Principal: Google Gemini (era client/public/ferramentas/mini-juridico/js/10-ia.js)
js/98-voz.js          ← Assistente Jurídico — 12-voz.js 🎤 Ditado (falar e virar texto) e 🔊 l (era client/public/ferramentas/mini-juridico/js/12-voz.js)
js/98-importar.js     ← Assistente Jurídico — 15-importar.js Lê arquivos: PDF, Word (.docx), T (era client/public/ferramentas/mini-juridico/js/15-importar.js)
js/98-texto.js        ← Assistente Jurídico — 18-texto.js Transforma o texto que a IA devolve  (era client/public/ferramentas/mini-juridico/js/18-texto.js)
js/98-processar.js    ← Assistente Jurídico — 20-processar.js ⚡ Processar: cole/abra o texto d (era client/public/ferramentas/mini-juridico/js/20-processar.js)
js/98-drive.js        ← Assistente Jurídico — 22-drive.js ☁️ GOOGLE DRIVE DIRETO: manda e busc (era client/public/ferramentas/mini-juridico/js/22-drive.js)
js/98-regras.js       ← Assistente Jurídico — 25-regras.js 📜 O "cérebro" do seu escritório, q (era client/public/ferramentas/mini-juridico/js/25-regras.js)
js/98-editor.js       ← Assistente Jurídico — 30-editor.js ✏️ Editor com formatação de verdade (era client/public/ferramentas/mini-juridico/js/30-editor.js)
js/98-docx.js         ← Assistente Jurídico — 35-docx.js ⬇ Word de VERDADE (.docx), feito aqui (era client/public/ferramentas/mini-juridico/js/35-docx.js)
js/98-conversa.js     ← Assistente Jurídico — 40-conversa.js 💬 Conversa com a IA sobre o caso (era client/public/ferramentas/mini-juridico/js/40-conversa.js)
js/98-documentos.js   ← Assistente Jurídico — 50-documentos.js 📁 Documentos salvos no aparelh (era client/public/ferramentas/mini-juridico/js/50-documentos.js)
js/98-biblioteca.js   ← Assistente Jurídico — 55-biblioteca.js 📐 Modelos (peças prontas com [ (era client/public/ferramentas/mini-juridico/js/55-biblioteca.js)
js/98-codigos.js      ← Assistente Jurídico — 60-codigos.js 🧪 MEUS CÓDIGOS: playground que GU (era client/public/ferramentas/mini-juridico/js/60-codigos.js)
js/98-ferramentas.js  ← Assistente Jurídico — 70-ferramentas.js 🧰 As ferramentas que já funci (era client/public/ferramentas/mini-juridico/js/70-ferramentas.js)
js/98-config.js       ← Assistente Jurídico — 80-config.js ⚙️ Chave da IA (Gemini grátis + Gro (era client/public/ferramentas/mini-juridico/js/80-config.js)
js/98-use-mobile.js   ← logica (era client/src/hooks/use-mobile.tsx)
js/98-use-toast.js    ← logica (era client/src/hooks/use-toast.ts)
js/98-extrair-texto.js← 📄 Extrair texto de arquivos (PDF, Word, HTML…) — com conserto das "le (era client/src/lib/extrair-texto.ts)
js/98-fala-aparelho.js← 🔊 Voz do próprio aparelho (a "voz de robô" do celular/computador). Us (era client/src/lib/fala-aparelho.ts)
js/98-queryclient.js  ← logica (era client/src/lib/queryClient.ts)
js/98-utils.js        ← logica (era client/src/lib/utils.ts)
js/98-app.js          ← tela (era client/src/App.tsx)
js/98-postcss-config.js← logica (era postcss.config.js)
js/98-abrir-pronto.js ← Usado pelo app pronto para Windows (Abrir-CodeLens.bat): liga o servid (era scripts/abrir-pronto.mjs)
js/98-iniciar.js      ← Liga o CodeLens com um comando só: 1) instala as peças na primeira vez (era scripts/iniciar.mjs)
js/98-chat.js         ← logica (era shared/models/chat.ts)
js/98-tailwind-config.js← logica (era tailwind.config.ts)
js/98-vite-config.js  ← logica (era vite.config.ts)
js/98-cacador-erros.js← 🐞 Caçador de erros — lado do SERVIDOR (só observa; não muda o funcion (era server/cacador-erros.ts)
js/98-djen.js         ← Robô Jurídico DJEN — Lógica de consulta e processamento Consulta a API (era server/djen.ts)
js/98-env.js          ← Lê o arquivo .env (se existir) ANTES de tudo. É onde ficam as chaves ( (era server/env.ts)
js/98-gemini-ponte.js ← Ponte do Gemini — chave nova "AQ." (e a antiga "AIza"). O Google troco (era server/gemini-ponte.ts)
js/98-storage.js      ← servidor (era server/storage.ts)
js/98-tts.js          ← Voz neural da Microsoft (a mesma do Edge), grátis, precisa de internet (era server/tts.ts)
js/98-ollama.js       ← 🦙 Ollama — IA grátis rodando no PRÓPRIO computador (ou no Termux do c (era server/ollama.ts)
js/98-routes.js       ← servidor (era server/routes.ts)
js/98-web.js          ← Mostra a TELA do app no mesmo endereço do servidor. Era isto que falta (era server/web.ts)
js/98-server.js       ← servidor (era server/index.ts)
js/98-client.js       ← Assistente Jurídico (era client/index.html)
js/98-comparador.js   ← Comparador Jurídico — TJMG + BCB — Comparador Juridico — TJMG (Fator)  (era client/public/comparador.html)
js/98-colador.js      ← Colador de Links — 🔗 Colador de Links (era client/public/ferramentas/colador.html)
js/98-meu-chat.js     ← Meu Chat (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/index.html)
js/98-cacabug.js      ← Caça-Bug (era client/public/ferramentas/mini-juridico/ferramentas/cacabug/index.html)
js/98-colador.js      ← Colador de Links — 🔗 Colador de Links (era client/public/ferramentas/mini-juridico/ferramentas/colador.html)
js/98-colecionador.js ← Colecionador de Comandos (era client/public/ferramentas/mini-juridico/ferramentas/colecionador.html)
js/98-comparador.js   ← Comparador de Versões — ⚖️ Comparador de Versões (era client/public/ferramentas/mini-juridico/ferramentas/comparador.html)
js/98-comunicacoes.js ← Comunicações Processuais — ⚖️ Comunicações Processuais (era client/public/ferramentas/mini-juridico/ferramentas/comunicacoes.html)
js/98-extrator.js     ← Extrator de Sites — 🛠️ Extrator de Sites (era client/public/ferramentas/mini-juridico/ferramentas/extrator.html)
js/98-juntador.js     ← Juntador de Arquivos — 🧩 Juntador de Arquivos (era client/public/ferramentas/mini-juridico/ferramentas/juntador.html)
js/98-laboratorio.js  ← Laboratório HTML — Advocacia Previdenciária (era client/public/ferramentas/mini-juridico/ferramentas/laboratorio.html)
js/98-limpador.js     ← Limpador de Processos — Limpador de Processos (era client/public/ferramentas/mini-juridico/ferramentas/limpador.html)
js/98-organizador.js  ← Organizador de Documentos — 📑 Organizador de Documentos (era client/public/ferramentas/mini-juridico/ferramentas/organizador.html)
js/98-perito.js       ← Perito de Metadados — Perito de Metadados (era client/public/ferramentas/mini-juridico/ferramentas/perito.html)
js/98-mini-juridico.js← Assistente Jurídico (era client/public/ferramentas/mini-juridico/index.html)
js/98-montador-universal.js← Montador Universal — 🧩 Montador Universal (era client/public/ferramentas/montador-universal.html)
js/98-ollama.js       ← 🦙 Ollama — SK Jurídico — 🦙 Ollama — IA grátis no seu aparelho (era client/public/ollama.html)
js/98-pwa-install.js  ← tela (era client/src/components/pwa-install.tsx)
js/98-theme-provider.js← tela (era client/src/components/theme-provider.tsx)
js/98-theme-toggle.js ← tela (era client/src/components/theme-toggle.tsx)
js/98-tiptap-editor.js← tela (era client/src/components/tiptap-editor.tsx)
js/98-accordion.js    ← tela (era client/src/components/ui/accordion.tsx)
js/98-alert-dialog.js ← tela (era client/src/components/ui/alert-dialog.tsx)
js/98-alert.js        ← tela (era client/src/components/ui/alert.tsx)
js/98-aspect-ratio.js ← tela (era client/src/components/ui/aspect-ratio.tsx)
js/98-avatar.js       ← tela (era client/src/components/ui/avatar.tsx)
js/98-badge.js        ← tela (era client/src/components/ui/badge.tsx)
js/98-breadcrumb.js   ← tela (era client/src/components/ui/breadcrumb.tsx)
js/98-button.js       ← tela (era client/src/components/ui/button.tsx)
js/98-calendar.js     ← tela (era client/src/components/ui/calendar.tsx)
js/98-card.js         ← tela (era client/src/components/ui/card.tsx)
js/98-carousel.js     ← tela (era client/src/components/ui/carousel.tsx)
js/98-chart.js        ← tela (era client/src/components/ui/chart.tsx)
js/98-checkbox.js     ← tela (era client/src/components/ui/checkbox.tsx)
js/98-collapsible.js  ← tela (era client/src/components/ui/collapsible.tsx)
js/98-command.js      ← tela (era client/src/components/ui/command.tsx)
js/98-context-menu.js ← tela (era client/src/components/ui/context-menu.tsx)
js/98-dialog.js       ← tela (era client/src/components/ui/dialog.tsx)
js/98-drawer.js       ← tela (era client/src/components/ui/drawer.tsx)
js/98-dropdown-menu.js← tela (era client/src/components/ui/dropdown-menu.tsx)
js/98-form.js         ← tela (era client/src/components/ui/form.tsx)
js/98-hover-card.js   ← tela (era client/src/components/ui/hover-card.tsx)
js/98-input-otp.js    ← tela (era client/src/components/ui/input-otp.tsx)
js/98-input.js        ← tela (era client/src/components/ui/input.tsx)
js/98-label.js        ← tela (era client/src/components/ui/label.tsx)
js/98-menubar.js      ← tela (era client/src/components/ui/menubar.tsx)
js/98-navigation-menu.js← tela (era client/src/components/ui/navigation-menu.tsx)
js/98-pagination.js   ← tela (era client/src/components/ui/pagination.tsx)
js/98-popover.js      ← tela (era client/src/components/ui/popover.tsx)
js/98-progress.js     ← tela (era client/src/components/ui/progress.tsx)
js/98-radio-group.js  ← tela (era client/src/components/ui/radio-group.tsx)
js/98-resizable.js    ← tela (era client/src/components/ui/resizable.tsx)
js/98-scroll-area.js  ← tela (era client/src/components/ui/scroll-area.tsx)
js/98-select.js       ← tela (era client/src/components/ui/select.tsx)
js/98-separator.js    ← tela (era client/src/components/ui/separator.tsx)
js/98-sheet.js        ← tela (era client/src/components/ui/sheet.tsx)
js/98-sidebar.js      ← tela (era client/src/components/ui/sidebar.tsx)
js/98-skeleton.js     ← tela (era client/src/components/ui/skeleton.tsx)
js/98-slider.js       ← tela (era client/src/components/ui/slider.tsx)
js/98-switch.js       ← tela (era client/src/components/ui/switch.tsx)
js/98-table.js        ← tela (era client/src/components/ui/table.tsx)
js/98-tabs.js         ← tela (era client/src/components/ui/tabs.tsx)
js/98-textarea.js     ← tela (era client/src/components/ui/textarea.tsx)
js/98-toast.js        ← tela (era client/src/components/ui/toast.tsx)
js/98-toaster.js      ← tela (era client/src/components/ui/toaster.tsx)
js/98-toggle-group.js ← tela (era client/src/components/ui/toggle-group.tsx)
js/98-toggle.js       ← tela (era client/src/components/ui/toggle.tsx)
js/98-tooltip.js      ← tela (era client/src/components/ui/tooltip.tsx)
js/98-auditoria-financeira.js← tela (era client/src/pages/auditoria-financeira.tsx)
js/98-code-assistant.js← tela (era client/src/pages/code-assistant.tsx)
js/98-comparador-juridico.js← tela (era client/src/pages/comparador-juridico.tsx)
js/98-consulta-corporativo.js← tela (era client/src/pages/consulta-corporativo.tsx)
js/98-consulta-pdpj.js← tela (era client/src/pages/consulta-pdpj.tsx)
js/98-consulta-processual.js← tela (era client/src/pages/consulta-processual.tsx)
js/98-ferramentas.js  ← tela (era client/src/pages/ferramentas.tsx)
js/98-filtrador.js    ← tela (era client/src/pages/filtrador.tsx)
js/98-jurisprudencia.js← tela (era client/src/pages/jurisprudencia.tsx)
js/98-legal-assistant.js← tela (era client/src/pages/legal-assistant.tsx)
js/98-login.js        ← tela (era client/src/pages/login.tsx)
js/98-not-found.js    ← tela (era client/src/pages/not-found.tsx)
js/98-painel-processos.js← tela (era client/src/pages/painel-processos.tsx)
js/98-playground.js   ← tela (era client/src/pages/playground.tsx)
js/98-previdenciario.js← tela (era client/src/pages/previdenciario.tsx)
js/98-robo-djen.js    ← tela (era client/src/pages/robo-djen.tsx)
js/98-token-generator.js← tela (era client/src/pages/token-generator.tsx)
js/98-tramitacao.js   ← tela (era client/src/pages/tramitacao.tsx)
js/98-auditoria.js    ← Auditoria Financeira - Assistente Jurídico — 📊 Auditoria Financeira (era public/auditoria.html)
js/99-app.js          ← o último: monta a tela com o que embarcou
```

## 3. As partes, uma por uma

| # | Era | Vira | Tipo | O que faz | Usa |
|---|---|---|---|---|---|
| 1 | `migrations/0000_init.sql` | `js/10-init.js` | dados | — | — |
| 2 | `server/db.ts` | `js/15-db.js` | dados | — | — |
| 3 | `server/localdb.ts` | `js/20-localdb.js` | dados | Banco de dados LOCAL — antes era Postgres na nuvem (Neon/Replit), com DATABASE_URL e senha | — |
| 4 | `shared/schema.ts` | `js/25-schema.js` | dados | — | — |
| 5 | `client/public/cacador-erros.js` | `js/30-cacador-erros.js` | logica | 🐞 CAÇADOR DE ERROS — só observa, não muda nada no Jurídico. Anota sozinho: - erros da pág | — |
| 6 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/ai-code-studio.js` | `js/35-ai-code-studio.js` | logica | Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o origina | — |
| 7 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/analisador-universal.js` | `js/40-analisador-universal.js` | logica | Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o origina | — |
| 8 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/cirurgiao.js` | `js/45-cirurgiao.js` | logica | Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o origina | — |
| 9 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/gerador-eas.js` | `js/50-gerador-eas.js` | logica | Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o origina | — |
| 10 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/limpador.js` | `js/55-limpador.js` | logica | Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o origina | — |
| 11 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/00-base.js` | `js/60-base.js` | logica | Meu Chat — 00-base.js: peças comuns (MC) | — |
| 12 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/10-banco.js` | `js/65-banco.js` | logica | Meu Chat — 10-banco.js: onde tudo fica guardado (IndexedDB do aparelho — não some ao fecha | — |
| 13 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/20-provedores.js` | `js/70-provedores.js` | logica | Meu Chat — 20-provedores.js: conversar com as IAs (Gemini, Groq, OpenRouter, OpenAI, DeepS | — |
| 14 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/30-memoria.js` | `js/75-memoria.js` | logica | Meu Chat — 30-memoria.js: 🧠 a memória que vai junto em TODA conversa. A IA guarda sozinha | — |
| 15 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/40-voz.js` | `js/80-voz.js` | logica | Meu Chat — 40-voz.js: 🎤 falar (ditado) e 🔊 ouvir a resposta. 🔊 DOIS "motores" de voz (⚙ | — |
| 16 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/50-internet.js` | `js/85-internet.js` | logica | Meu Chat — 50-internet.js: 🌐 pesquisar e 🔗 ler links. - Gemini e Claude pesquisam sozinh | — |
| 17 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/60-previa.js` | `js/90-previa.js` | logica | Meu Chat — 60-previa.js: 👁 ver o código funcionando, na hora. - HTML: abre a página como  | — |
| 18 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/70-texto.js` | `js/91-texto.js` | logica | Meu Chat — 70-texto.js: mostra a resposta da IA bonitinha (negrito, listas, links, blocos  | — |
| 19 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/80-chat.js` | `js/92-chat.js` | logica | Meu Chat — 80-chat.js: a conversa (mensagens, fotos, mandar, parar, lista de conversas). C | — |
| 20 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/85-config.js` | `js/93-config.js` | logica | Meu Chat — 85-config.js: ⚙️ chaves das IAs, modelo, busca, voz, instruções, tema | — |
| 21 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/87-cofre.js` | `js/94-cofre.js` | logica | Meu Chat — 87-cofre.js: 🔐 Cofre de chaves. Mostra cada chave guardada (👁 ver, 📋 copiar) | — |
| 22 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/90-backup.js` | `js/95-backup.js` | logica | Meu Chat — 90-backup.js: 💾 backup de tudo (conversas + memória + ajustes) e restaurar SEM | — |
| 23 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/95-ponte-lab.js` | `js/96-ponte-lab.js` | logica | 🔬 Ponte com o Laboratório: quando o Meu Chat está DENTRO do Laboratório (aba 🤖 IA), o La | — |
| 24 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/99-app.js` | css/app.css | logica | Meu Chat — 99-app.js: liga tudo quando abre | — |
| 25 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/lib/cofre-arquivo.js` | `js/97-cofre-arquivo.js` | logica | 🔐 Arquivo de chaves do Maikon — o MESMO formato no Mini SK, no Meu Chat e no que vier dep | — |
| 26 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/lib/guia-maikon.js` | `js/98-guia-maikon.js` | logica | 🧭 Guia das ferramentas do Maikon — o MESMO texto em todos os apps (Mini SK, Meu Chat…). A | — |
| 27 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/montar.py` | `js/98-montar.js` | logica | Monta ferramentas/*.js do Caça-Bug a partir dos HTML originais (sem mexer neles). Uso: pyt | — |
| 28 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/perito.js` | `js/98-perito.js` | logica | Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o origina | — |
| 29 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/projeto-lab.js` | `js/98-projeto-lab.js` | logica | Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o origina | — |
| 30 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/triagem.js` | `js/98-triagem.js` | logica | Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o origina | — |
| 31 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/00-core.js` | css/app.css | logica | Caça-Bug — 00-core.js (a mesma base do Mini SK, com banco próprio) Base de tudo: atalhos,  | — |
| 32 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/20-zip.js` | `js/98-zip.js` | logica | Caça-Bug — 20-zip.js (o mesmo do Mini SK) Lê e cria arquivos .zip SEM biblioteca externa ( | — |
| 33 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/30-projeto.js` | `js/98-projeto.js` | logica | Caça-Bug — 30-projeto.js Projetos: importar (.zip, arquivos soltos ou pasta), guardar no a | — |
| 34 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/40-ferramentas.js` | `js/98-ferramentas.js` | logica | Caça-Bug — 40-ferramentas.js Abre cada ferramenta (Cirurgião, Projeto Lab, Triagem, Perito | — |
| 35 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/45-organizar.js` | `js/98-organizar.js` | logica | Caça-Bug — 45-organizar.js Aba 🗂️ Organizar: pega o projeto em uso (aquela pasta "embolad | — |
| 36 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/50-relatorios.js` | `js/98-relatorios.js` | logica | Caça-Bug — 50-relatorios.js 📋 Relatórios guardados: cada análise fica salva no aparelho,  | — |
| 37 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/60-comparar.js` | `js/98-comparar.js` | logica | Caça-Bug — 60-comparar.js ⚖️ Comparar versões: escolha 2 ou mais projetos guardados e veja | — |
| 38 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/70-ia.js` | `js/98-ia.js` | logica | Caça-Bug — 70-ia.js · 🤖 IA O MEU CHAT aqui dentro: as suas chaves (Gemini, Groq, OpenRout | — |
| 39 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/99-app.js` | css/app.css | logica | Caça-Bug — 99-app.js Liga tudo: abas de baixo, tela de Projetos e tela de Diagnóstico | — |
| 40 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/lib/expo-core.js` | `js/98-expo-core.js` | logica | expo-core.js — ☁️ Consertar um projeto EXPO para gerar APK pelo EAS Usado pelo Caça-Bug (D | app.json |
| 41 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/lib/organizar-core.js` | `js/98-organizar-core.js` | logica | base, dir, ext, norm | — |
| 42 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/lib/plano-core.js` | `js/98-plano-core.js` | logica | ext, uniq, normRota, arvore | — |
| 43 | `client/public/ferramentas/mini-juridico/js/00-core.js` | css/app.css | logica | Assistente Jurídico — 00-core.js  (A LOCOMOTIVA: vem primeiro) Cria o "caixa comum" J que  | — |
| 44 | `client/public/ferramentas/mini-juridico/js/10-ia.js` | `js/98-ia.js` | logica | Assistente Jurídico — 10-ia.js Fala com a IA. Principal: Google Gemini (chave grátis, AIza | — |
| 45 | `client/public/ferramentas/mini-juridico/js/12-voz.js` | `js/98-voz.js` | logica | Assistente Jurídico — 12-voz.js 🎤 Ditado (falar e virar texto) e 🔊 leitura em voz NATURA | — |
| 46 | `client/public/ferramentas/mini-juridico/js/15-importar.js` | `js/98-importar.js` | logica | Assistente Jurídico — 15-importar.js Lê arquivos: PDF, Word (.docx), TXT, MD, RTF, HTML. P | — |
| 47 | `client/public/ferramentas/mini-juridico/js/18-texto.js` | `js/98-texto.js` | logica | Assistente Jurídico — 18-texto.js Transforma o texto que a IA devolve (com ##, **negrito** | — |
| 48 | `client/public/ferramentas/mini-juridico/js/20-processar.js` | `js/98-processar.js` | logica | Assistente Jurídico — 20-processar.js ⚡ Processar: cole/abra o texto do processo → escolha | — |
| 49 | `client/public/ferramentas/mini-juridico/js/22-drive.js` | `js/98-drive.js` | logica | Assistente Jurídico — 22-drive.js ☁️ GOOGLE DRIVE DIRETO: manda e busca arquivos na SUA co | — |
| 50 | `client/public/ferramentas/mini-juridico/js/25-regras.js` | `js/98-regras.js` | logica | Assistente Jurídico — 25-regras.js 📜 O "cérebro" do seu escritório, que cresce com o temp | — |
| 51 | `client/public/ferramentas/mini-juridico/js/30-editor.js` | `js/98-editor.js` | logica | Assistente Jurídico — 30-editor.js ✏️ Editor com formatação de verdade (folha A4, padrão A | — |
| 52 | `client/public/ferramentas/mini-juridico/js/35-docx.js` | `js/98-docx.js` | logica | Assistente Jurídico — 35-docx.js ⬇ Word de VERDADE (.docx), feito aqui no aparelho, sem in | — |
| 53 | `client/public/ferramentas/mini-juridico/js/40-conversa.js` | `js/98-conversa.js` | logica | Assistente Jurídico — 40-conversa.js 💬 Conversa com a IA sobre o caso — por texto ou por  | — |
| 54 | `client/public/ferramentas/mini-juridico/js/50-documentos.js` | `js/98-documentos.js` | logica | Assistente Jurídico — 50-documentos.js 📁 Documentos salvos no aparelho + 🕐 histórico do  | — |
| 55 | `client/public/ferramentas/mini-juridico/js/55-biblioteca.js` | `js/98-biblioteca.js` | logica | Assistente Jurídico — 55-biblioteca.js 📐 Modelos (peças prontas com [CAMPOS]) e 📚 Ementa | — |
| 56 | `client/public/ferramentas/mini-juridico/js/60-codigos.js` | `js/98-codigos.js` | logica | Assistente Jurídico — 60-codigos.js 🧪 MEUS CÓDIGOS: playground que GUARDA. Para os seus c | — |
| 57 | `client/public/ferramentas/mini-juridico/js/70-ferramentas.js` | `js/98-ferramentas.js` | logica | Assistente Jurídico — 70-ferramentas.js 🧰 As ferramentas que já funcionam, cada uma no se | — |
| 58 | `client/public/ferramentas/mini-juridico/js/80-config.js` | `js/98-config.js` | logica | Assistente Jurídico — 80-config.js ⚙️ Chave da IA (Gemini grátis + Groq de reserva), voz,  | — |
| 59 | `client/public/ferramentas/mini-juridico/js/99-app.js` | css/app.css | logica | Assistente Jurídico — 99-app.js  (O ÚLTIMO VAGÃO: vem por último) Monta cada módulo na sua | — |
| 60 | `client/src/hooks/use-mobile.tsx` | `js/98-use-mobile.js` | logica | useIsMobile, onChange | — |
| 61 | `client/src/hooks/use-toast.ts` | `js/98-use-toast.js` | logica | genId, addToRemoveQueue, dispatch, toast | toast |
| 62 | `client/src/lib/extrair-texto.ts` | `js/98-extrair-texto.js` | logica | 📄 Extrair texto de arquivos (PDF, Word, HTML…) — com conserto das "letrinhas". Usado no l | — |
| 63 | `client/src/lib/fala-aparelho.ts` | `js/98-fala-aparelho.js` | logica | 🔊 Voz do próprio aparelho (a "voz de robô" do celular/computador). Usada quando a voz neu | — |
| 64 | `client/src/lib/queryClient.ts` | `js/98-queryclient.js` | logica | resolveUrl, throwIfResNotOk, apiRequest | — |
| 65 | `client/src/lib/utils.ts` | `js/98-utils.js` | logica | — | — |
| 66 | `client/src/App.tsx` | `js/98-app.js` | tela | ErrorBoundary, Router, App | queryClient.ts, toaster, tooltip, theme-provider |
| 67 | `client/src/main.tsx` | css/app.css | logica | — | App.tsx |
| 68 | `postcss.config.js` | `js/98-postcss-config.js` | logica | — | — |
| 69 | `scripts/abrir-pronto.mjs` | `js/98-abrir-pronto.js` | logica | Usado pelo app pronto para Windows (Abrir-CodeLens.bat): liga o servidor com o Node que ve | — |
| 70 | `scripts/iniciar.mjs` | `js/98-iniciar.js` | logica | Liga o CodeLens com um comando só: 1) instala as peças na primeira vez (npm install) 2) mo | — |
| 71 | `shared/models/chat.ts` | `js/98-chat.js` | logica | — | — |
| 72 | `tailwind.config.ts` | `js/98-tailwind-config.js` | logica | — | — |
| 73 | `vite.config.ts` | `js/98-vite-config.js` | logica | — | — |
| 74 | `server/cacador-erros.ts` | `js/98-cacador-erros.js` | servidor | 🐞 Caçador de erros — lado do SERVIDOR (só observa; não muda o funcionamento) - guarda os  | — |
| 75 | `server/djen.ts` | `js/98-djen.js` | servidor | Robô Jurídico DJEN — Lógica de consulta e processamento Consulta a API do DJEN/CNJ, extrai | localdb.ts |
| 76 | `server/env.ts` | `js/98-env.js` | servidor | Lê o arquivo .env (se existir) ANTES de tudo. É onde ficam as chaves (senha do app, chaves | — |
| 77 | `server/gemini-ponte.ts` | `js/98-gemini-ponte.js` | servidor | Ponte do Gemini — chave nova "AQ." (e a antiga "AIza"). O Google trocou o formato das chav | — |
| 78 | `server/storage.ts` | `js/98-storage.js` | servidor | DatabaseStorage | localdb.ts |
| 79 | `server/tts.ts` | `js/98-tts.js` | servidor | Voz neural da Microsoft (a mesma do Edge), grátis, precisa de internet. Padrão: voz Franci | — |
| 80 | `server/ollama.ts` | `js/98-ollama.js` | servidor | 🦙 Ollama — IA grátis rodando no PRÓPRIO computador (ou no Termux do celular). O servidor  | — |
| 81 | `server/routes.ts` | `js/98-routes.js` | servidor | truncateChatHistory, cleanPemKey, limparLetrinhasServidor, textoRuimServidor | storage.ts, tts.ts, ollama.ts, djen.ts |
| 82 | `server/web.ts` | `js/98-web.js` | servidor | Mostra a TELA do app no mesmo endereço do servidor. Era isto que faltava: o servidor só ti | — |
| 83 | `server/index.ts` | `js/98-server.js` | servidor | log | cacador-erros.ts, routes.ts, web.ts |
| 84 | `client/index.html` | `js/98-client.js` | tela | Assistente Jurídico | favicon.png, icon-192.png, manifest.json, cacador-erros.js |
| 85 | `client/public/comparador.html` | `js/98-comparador.js` | tela | Comparador Jurídico — TJMG + BCB — Comparador Juridico — TJMG (Fator) + BCB (Juros) | — |
| 86 | `client/public/ferramentas/colador.html` | `js/98-colador.js` | tela | Colador de Links — 🔗 Colador de Links | manifest.json |
| 87 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/css/app.css` | css/app.css | estilo | — | — |
| 88 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/index.html` | `js/98-meu-chat.js` | tela | Meu Chat | manifest.json, icon-192.png, app.css, 00-base.js |
| 89 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/css/app.css` | css/app.css | estilo | Caça-Bug — aparência. Cores do Mini SK (escuro), letras legíveis no celular | — |
| 90 | `client/public/ferramentas/mini-juridico/ferramentas/cacabug/index.html` | `js/98-cacabug.js` | tela | Caça-Bug | manifest.json, icon-192.png, app.css, 00-core.js |
| 91 | `client/public/ferramentas/mini-juridico/ferramentas/colador.html` | `js/98-colador.js` | tela | Colador de Links — 🔗 Colador de Links | — |
| 92 | `client/public/ferramentas/mini-juridico/ferramentas/colecionador.html` | `js/98-colecionador.js` | tela | Colecionador de Comandos | — |
| 93 | `client/public/ferramentas/mini-juridico/ferramentas/comparador.html` | `js/98-comparador.js` | tela | Comparador de Versões — ⚖️ Comparador de Versões | — |
| 94 | `client/public/ferramentas/mini-juridico/ferramentas/comunicacoes.html` | `js/98-comunicacoes.js` | tela | Comunicações Processuais — ⚖️ Comunicações Processuais | — |
| 95 | `client/public/ferramentas/mini-juridico/ferramentas/extrator.html` | `js/98-extrator.js` | tela | Extrator de Sites — 🛠️ Extrator de Sites | — |
| 96 | `client/public/ferramentas/mini-juridico/ferramentas/juntador.html` | `js/98-juntador.js` | tela | Juntador de Arquivos — 🧩 Juntador de Arquivos | — |
| 97 | `client/public/ferramentas/mini-juridico/ferramentas/laboratorio.html` | `js/98-laboratorio.js` | tela | Laboratório HTML — Advocacia Previdenciária | — |
| 98 | `client/public/ferramentas/mini-juridico/ferramentas/limpador.html` | `js/98-limpador.js` | tela | Limpador de Processos — Limpador de Processos | — |
| 99 | `client/public/ferramentas/mini-juridico/ferramentas/organizador.html` | `js/98-organizador.js` | tela | Organizador de Documentos — 📑 Organizador de Documentos | — |
| 100 | `client/public/ferramentas/mini-juridico/ferramentas/perito.html` | `js/98-perito.js` | tela | Perito de Metadados — Perito de Metadados | — |
| 101 | `client/public/ferramentas/mini-juridico/css/app.css` | css/app.css | estilo | Assistente Jurídico — visual: azul-tinta e papel. Feito para o celular primeiro | — |
| 102 | `client/public/ferramentas/mini-juridico/index.html` | `js/98-mini-juridico.js` | tela | Assistente Jurídico | manifest.json, icon-192.png, app.css, jszip.min.js |
| 103 | `client/public/ferramentas/montador-universal.html` | `js/98-montador-universal.js` | tela | Montador Universal — 🧩 Montador Universal | — |
| 104 | `client/public/ollama.html` | `js/98-ollama.js` | tela | 🦙 Ollama — SK Jurídico — 🦙 Ollama — IA grátis no seu aparelho | — |
| 105 | `client/src/components/pwa-install.tsx` | `js/98-pwa-install.js` | tela | PwaInstallBanner, handler, handleInstall, handleDismiss | button |
| 106 | `client/src/components/theme-provider.tsx` | `js/98-theme-provider.js` | tela | ThemeProvider, toggleTheme, useTheme | — |
| 107 | `client/src/components/theme-toggle.tsx` | `js/98-theme-toggle.js` | tela | ThemeToggle | button, theme-provider |
| 108 | `client/src/components/tiptap-editor.tsx` | `js/98-tiptap-editor.js` | tela | TiptapEditor, applySize, applyLineHeight, Sep | — |
| 109 | `client/src/components/ui/accordion.tsx` | `js/98-accordion.js` | tela | — | utils |
| 110 | `client/src/components/ui/alert-dialog.tsx` | `js/98-alert-dialog.js` | tela | AlertDialogHeader, AlertDialogFooter | utils, button |
| 111 | `client/src/components/ui/alert.tsx` | `js/98-alert.js` | tela | — | utils |
| 112 | `client/src/components/ui/aspect-ratio.tsx` | `js/98-aspect-ratio.js` | tela | — | — |
| 113 | `client/src/components/ui/avatar.tsx` | `js/98-avatar.js` | tela | — | utils |
| 114 | `client/src/components/ui/badge.tsx` | `js/98-badge.js` | tela | Badge | utils |
| 115 | `client/src/components/ui/breadcrumb.tsx` | `js/98-breadcrumb.js` | tela | BreadcrumbSeparator, BreadcrumbEllipsis | utils |
| 116 | `client/src/components/ui/button.tsx` | `js/98-button.js` | tela | — | utils |
| 117 | `client/src/components/ui/calendar.tsx` | `js/98-calendar.js` | tela | Calendar | utils, button |
| 118 | `client/src/components/ui/card.tsx` | `js/98-card.js` | tela | — | utils |
| 119 | `client/src/components/ui/carousel.tsx` | `js/98-carousel.js` | tela | useCarousel | utils, button |
| 120 | `client/src/components/ui/chart.tsx` | `js/98-chart.js` | tela | useChart, ChartStyle, getPayloadConfigFromPayload | utils |
| 121 | `client/src/components/ui/checkbox.tsx` | `js/98-checkbox.js` | tela | — | utils |
| 122 | `client/src/components/ui/collapsible.tsx` | `js/98-collapsible.js` | tela | — | — |
| 123 | `client/src/components/ui/command.tsx` | `js/98-command.js` | tela | CommandDialog, CommandShortcut | utils, dialog |
| 124 | `client/src/components/ui/context-menu.tsx` | `js/98-context-menu.js` | tela | ContextMenuShortcut | utils |
| 125 | `client/src/components/ui/dialog.tsx` | `js/98-dialog.js` | tela | DialogHeader, DialogFooter | utils |
| 126 | `client/src/components/ui/drawer.tsx` | `js/98-drawer.js` | tela | Drawer, DrawerHeader, DrawerFooter | utils |
| 127 | `client/src/components/ui/dropdown-menu.tsx` | `js/98-dropdown-menu.js` | tela | DropdownMenuShortcut | utils |
| 128 | `client/src/components/ui/form.tsx` | `js/98-form.js` | tela | useFormField | utils, label |
| 129 | `client/src/components/ui/hover-card.tsx` | `js/98-hover-card.js` | tela | — | utils |
| 130 | `client/src/components/ui/input-otp.tsx` | `js/98-input-otp.js` | tela | — | utils |
| 131 | `client/src/components/ui/input.tsx` | `js/98-input.js` | tela | — | utils |
| 132 | `client/src/components/ui/label.tsx` | `js/98-label.js` | tela | — | utils |
| 133 | `client/src/components/ui/menubar.tsx` | `js/98-menubar.js` | tela | MenubarMenu, MenubarGroup, MenubarPortal, MenubarRadioGroup | utils |
| 134 | `client/src/components/ui/navigation-menu.tsx` | `js/98-navigation-menu.js` | tela | — | utils |
| 135 | `client/src/components/ui/pagination.tsx` | `js/98-pagination.js` | tela | Pagination, PaginationLink, PaginationPrevious, PaginationNext | utils, button |
| 136 | `client/src/components/ui/popover.tsx` | `js/98-popover.js` | tela | — | utils |
| 137 | `client/src/components/ui/progress.tsx` | `js/98-progress.js` | tela | — | utils |
| 138 | `client/src/components/ui/radio-group.tsx` | `js/98-radio-group.js` | tela | — | utils |
| 139 | `client/src/components/ui/resizable.tsx` | `js/98-resizable.js` | tela | ResizablePanelGroup, ResizableHandle | utils |
| 140 | `client/src/components/ui/scroll-area.tsx` | `js/98-scroll-area.js` | tela | — | utils |
| 141 | `client/src/components/ui/select.tsx` | `js/98-select.js` | tela | — | utils |
| 142 | `client/src/components/ui/separator.tsx` | `js/98-separator.js` | tela | — | utils |
| 143 | `client/src/components/ui/sheet.tsx` | `js/98-sheet.js` | tela | SheetHeader, SheetFooter | utils |
| 144 | `client/src/components/ui/sidebar.tsx` | `js/98-sidebar.js` | tela | useSidebar, SidebarProvider, handleKeyDown, Sidebar | use-mobile, utils, button, input |
| 145 | `client/src/components/ui/skeleton.tsx` | `js/98-skeleton.js` | tela | Skeleton | utils |
| 146 | `client/src/components/ui/slider.tsx` | `js/98-slider.js` | tela | — | utils |
| 147 | `client/src/components/ui/switch.tsx` | `js/98-switch.js` | tela | — | utils |
| 148 | `client/src/components/ui/table.tsx` | `js/98-table.js` | tela | — | utils |
| 149 | `client/src/components/ui/tabs.tsx` | `js/98-tabs.js` | tela | — | utils |
| 150 | `client/src/components/ui/textarea.tsx` | `js/98-textarea.js` | tela | — | utils |
| 151 | `client/src/components/ui/toast.tsx` | `js/98-toast.js` | tela | — | utils |
| 152 | `client/src/components/ui/toaster.tsx` | `js/98-toaster.js` | tela | Toaster | use-toast, toast |
| 153 | `client/src/components/ui/toggle-group.tsx` | `js/98-toggle-group.js` | tela | — | utils, toggle |
| 154 | `client/src/components/ui/toggle.tsx` | `js/98-toggle.js` | tela | — | utils |
| 155 | `client/src/components/ui/tooltip.tsx` | `js/98-tooltip.js` | tela | — | utils |
| 156 | `client/src/pages/auditoria-financeira.tsx` | `js/98-auditoria-financeira.js` | tela | AuditoriaFinanceira | button |
| 157 | `client/src/pages/code-assistant.tsx` | `js/98-code-assistant.js` | tela | detectProvider, CodeBlock, doCopy, RenderText | button, textarea, input, label |
| 158 | `client/src/pages/comparador-juridico.tsx` | `js/98-comparador-juridico.js` | tela | ComparadorJuridico | button |
| 159 | `client/src/pages/consulta-corporativo.tsx` | `js/98-consulta-corporativo.js` | tela | ConsultaCorporativo, formatCpf, searchAdvogado, searchMagistrados | button, input, card, select |
| 160 | `client/src/pages/consulta-pdpj.tsx` | `js/98-consulta-pdpj.js` | tela | ConsultaPdpj, formatCpf, baseBody, testConnection | button, input, card, badge |
| 161 | `client/src/pages/consulta-processual.tsx` | `js/98-consulta-processual.js` | tela | formatDate, formatDateShort, formatProcessoNumber, ConsultaProcessual | button, input, card, select |
| 162 | `client/src/pages/ferramentas.tsx` | `js/98-ferramentas.js` | tela | base, Topo, FerramentasLista, FerramentaAberta | button |
| 163 | `client/src/pages/filtrador.tsx` | `js/98-filtrador.js` | tela | saveLS, loadLS, cleanMarkdownNoise, splitParagraphs | button, textarea, input, label |
| 164 | `client/src/pages/jurisprudencia.tsx` | `js/98-jurisprudencia.js` | tela | Jurisprudencia, updateFormat, handler, vozDoAparelho | extrair-texto, fala-aparelho, tiptap-editor, button |
| 165 | `client/src/pages/legal-assistant.tsx` | `js/98-legal-assistant.js` | tela | LegalAssistant, updateFormat, handler, iniciarDitado | extrair-texto, fala-aparelho, tiptap-editor, button |
| 166 | `client/src/pages/login.tsx` | `js/98-login.js` | tela | LoginPage, handleSubmit | card, button, input, use-toast |
| 167 | `client/src/pages/not-found.tsx` | `js/98-not-found.js` | tela | NotFound | card, button |
| 168 | `client/src/pages/painel-processos.tsx` | `js/98-painel-processos.js` | tela | formatProcessoNumber, formatDate, formatDateTime, detectTribunal | button, input, card, badge |
| 169 | `client/src/pages/playground.tsx` | `js/98-playground.js` | tela | lerLocais, gravarLocais, ehLocal, App | button, tabs, input, use-toast |
| 170 | `client/src/pages/previdenciario.tsx` | `js/98-previdenciario.js` | tela | naturezaLabel, naturezaBadge, parseValorBR, fmtBR | use-toast, button, badge, theme-toggle |
| 171 | `client/src/pages/robo-djen.tsx` | `js/98-robo-djen.js` | tela | RoboDjenPage, gerarToken, copiarToken, buscarOAB | button, input, card, badge |
| 172 | `client/src/pages/token-generator.tsx` | `js/98-token-generator.js` | tela | TokenGenerator, formatCpf, generateToken, copyToClipboard | button, input, card, badge |
| 173 | `client/src/pages/tramitacao.tsx` | `js/98-tramitacao.js` | tela | fmt, fmtPhone, TramitacaoPage, handleTestConnection | button, input, card, badge |
| 174 | `public/auditoria.html` | `js/98-auditoria.js` | tela | Auditoria Financeira - Assistente Jurídico — 📊 Auditoria Financeira | — |
| 175 | `client/src/index.css` | css/app.css | estilo | — | — |

## 4. Montar passo a passo (cada bloco é um pedido pronto: 📋 Copiar → colar na IA)

### Passo 0 — combinar as regras com a IA

```text
Vamos recriar o app "Assistente Jurídico" como HTML MODULAR, que abre pelo index.html, sem servidor e sem nada da Replit.
Regras: (1) index.html chama os arquivos js/ na ordem, antes do </body>; (2) js/00-core.js cria window.APP com APP.registrar(modulo), APP.guardar(chave, valor) em IndexedDB/localStorage e APP.avisar(texto); (3) cada arquivo js/NN-nome.js cuida de UM assunto, começa com (function (APP) { e termina com })(window.APP); (4) js/99-app.js vem por último e monta a tela com os módulos registrados; (5) textos em português do Brasil.
Vou pedir UM arquivo por vez. Responda só com o arquivo completo, sem cortar nada. Primeiro: crie index.html, css/app.css e js/00-core.js.
```

### Passo 1 — `js/10-init.js` (era `migrations/0000_init.sql`, 141 linhas)

```text
Crie js/10-init.js. Ele é uma parte de dados do app.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 2 — `js/15-db.js` (era `server/db.ts`, 2 linhas)

```text
Crie js/15-db.js. Ele é uma parte de dados do app.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 3 — `js/20-localdb.js` (era `server/localdb.ts`, 239 linhas)

```text
Crie js/20-localdb.js. Ele faz: Banco de dados LOCAL — antes era Postgres na nuvem (Neon/Replit), com DATABASE_URL e senha. Agora é o mesmo Postgres, mas rodando dentro do próprio programa (PGlite) e guardado na pasta  dados/banco . Sem internet, sem senha, sem conta. Copie a pasta "dados" para fazer backup.
No app original ele tinha estas funções/partes: pastaDoBanco, tirarTrava, abrirComRede, fim, pega, abrirBancoSeguro, fecharBanco.
O original usava as bibliotecas path, fs, @electric-sql/pglite, drizzle-orm: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 4 — `js/25-schema.js` (era `shared/schema.ts`, 267 linhas)

```text
Crie js/25-schema.js. Ele é uma parte de dados do app.
O original usava as bibliotecas drizzle-orm, drizzle-zod, zod: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 5 — `js/30-cacador-erros.js` (era `client/public/cacador-erros.js`, 142 linhas)

```text
Crie js/30-cacador-erros.js. Ele faz: 🐞 CAÇADOR DE ERROS — só observa, não muda nada no Jurídico. Anota sozinho: - erros da página (vermelhos do console, falhas no código) - chamadas ao servidor que deram errado (/api…): o endereço, o código.
No app original ele tinha estas funções/partes: esconder, texto, anotar, explicar, buscarServidor, css, atualizarBotao, relatorio, esc, desenhar, montar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 6 — `js/35-ai-code-studio.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/ai-code-studio.js`, 3 linhas)

```text
Crie js/35-ai-code-studio.js. Ele faz: Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o original e rode montar.py).
No app original ele tinha estas funções/partes: est, uid, isMobile, escapeHtml, copyText, activeConv, MODULE_Storage, save, saveSoon, load, normMemory, stamp, download, exportAll, importBackup, handleImport, MODULE_Provider, models.
Ele chamava estes endereços: https://api.anthropic.com/v1/messages, https://api.anthropic.com/v1/models?limit=100, https://google.serper.dev/search. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 7 — `js/40-analisador-universal.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/analisador-universal.js`, 3 linhas)

```text
Crie js/40-analisador-universal.js. Ele faz: Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o original e rode montar.py).
No app original ele tinha estas funções/partes: handleFileInput, importZip, handleFolderInput, tryDecodeText, renderTree, buildTree, renderNode, countFiles, toggleFolder, expandAll, collapseAll, filterFiles, getFileIcon, formatSize, openFile, closeTab, renderTabs, renderEditor.
O original usava as bibliotecas @capacitor/cli: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 8 — `js/45-cirurgiao.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/cirurgiao.js`, 3 linhas)

```text
Crie js/45-cirurgiao.js. Ele faz: Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o original e rode montar.py).
No app original ele tinha estas funções/partes: esc, fmtB, fmtN, usd, agora, pausa, tokensDe, extDe, decode, pareceBinario, inflate, lerZip, CRC, crc32, escreverZip, baixar, copiar, status.
Ele chamava estes endereços: ${c.base}/models/${encodeURIComponent(c.modelo)}:generateContent, ${c.base}/messages, ${c.base}/chat/completions, https://registry.npmjs.org/, https://registry.npmjs.org/-/v1/search?size=20&text=, https://pypi.org/pypi/. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 9 — `js/50-gerador-eas.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/gerador-eas.js`, 3 linhas)

```text
Crie js/50-gerador-eas.js. Ele faz: Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o original e rode montar.py).
No app original ele tinha estas funções/partes: switchTab, autoId, atualizar, importarProjeto, preencherDados, gerarTudo, renderArquivos, copiar, exportarZip, fileIcon, esc, escHtml, loadJSZ.
O original usava as bibliotecas @capacitor/cli: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 10 — `js/55-limpador.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/limpador.js`, 3 linhas)

```text
Crie js/55-limpador.js. Ele faz: Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o original e rode montar.py).
No app original ele tinha estas funções/partes: esc, fmt, linhasDaPagina, lerPdf, lerTxt, progresso, adicionar, regrasAtivas, minhasRegras, normLinha, acharRepetidas, limparPagina, processar, montarRegras, montarRepetidas, aplicar, faixas, verPagina.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 11 — `js/60-base.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/00-base.js`, 43 linhas)

```text
Crie js/60-base.js. Ele faz: Meu Chat — 00-base.js: peças comuns (MC).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 12 — `js/65-banco.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/10-banco.js`, 26 linhas)

```text
Crie js/65-banco.js. Ele faz: Meu Chat — 10-banco.js: onde tudo fica guardado (IndexedDB do aparelho — não some ao fechar).
No app original ele tinha estas funções/partes: abrir, req, loja.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 13 — `js/70-provedores.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/20-provedores.js`, 203 linhas)

```text
Crie js/70-provedores.js. Ele faz: Meu Chat — 20-provedores.js: conversar com as IAs (Gemini, Groq, OpenRouter, OpenAI, DeepSeek, Claude). - Várias chaves; quando uma acaba (limite/cota), passa sozinho para a próxima ("revezar"). - Busca a lista de modelos de verdade na hora de testar a chave (nada de nome velho chumbado). - As chaves ficam SÓ neste aparelho.
No app original ele tinha estas funções/partes: detectar, procurarOllama, chaves, salvarChaves, pontoGemini, listarModelos, modeloDe, testarChave, erroLegivel, ehLimite, cabAnthropic, lerSSE, pedir, parcial, conversar.
Ele chamava estes endereços: http://127.0.0.1:11434/api/tags. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 14 — `js/75-memoria.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/30-memoria.js`, 54 linhas)

```text
Crie js/75-memoria.js. Ele faz: Meu Chat — 30-memoria.js: 🧠 a memória que vai junto em TODA conversa. A IA guarda sozinha o que for importante escrevendo [[lembrar: …]] no fim da resposta (o app tira isso do texto, guarda e mostra "🧠 guardei"). [[esquecer: …]] apaga.
No app original ele tinha estas funções/partes: texto, salvar, lembrar, esquecer, aplicarMarcas, sistema, abrir.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 15 — `js/80-voz.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/40-voz.js`, 190 linhas)

```text
Crie js/80-voz.js. Ele faz: Meu Chat — 40-voz.js: 🎤 falar (ditado) e 🔊 ouvir a resposta. 🔊 DOIS "motores" de voz (⚙️ → Voz): - 📱 "Voz do aparelho" (o padrão): funciona com QUALQUER IA (Gemini, Groq, Claude, Ollama…), grátis e sem limite. Você escolhe a voz (as ⭐ são as naturais), a velocidade e o tom.
No app original ele tinha estas funções/partes: podeOuvir, ouvir, parar, marcar, paraFala, pedacos, motor, temAndroid, temNavegador, natural, vozesAparelho, cfgVoz, falarFrase, enfileirar, verificarFim, pararAparelho, fluxo, pegar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 16 — `js/85-internet.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/50-internet.js`, 58 linhas)

```text
Crie js/85-internet.js. Ele faz: Meu Chat — 50-internet.js: 🌐 pesquisar e 🔗 ler links. - Gemini e Claude pesquisam sozinhos (a busca vem embutida neles). - As outras IAs: usa a SUA chave de busca (Serper, Tavily ou Brave), se tiver, e manda os resultados junto. - Link na mensagem: o app lê a página (pelo leitor r.jina.ai, grátis) e manda o texto para a IA.
No app original ele tinha estas funções/partes: buscar, lerLink, preparar.
Ele chamava estes endereços: https://google.serper.dev/search, https://api.tavily.com/search, https://api.search.brave.com/res/v1/web/search?count=8&country=BR&search_lang=pt-br&q=, https://r.jina.ai/. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 17 — `js/90-previa.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/60-previa.js`, 72 linhas)

```text
Crie js/90-previa.js. Ele faz: Meu Chat — 60-previa.js: 👁 ver o código funcionando, na hora. - HTML: abre a página como ela é. - TSX / JSX (React): monta com React + Babel + Tailwind (pela internet) e mostra o componente. Os erros aparecem embaixo, em vermelho.
No app original ele tinha estas funções/partes: paginaHTML, paginaReact, falha, req, App, tipoDe, abrir.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 18 — `js/91-texto.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/70-texto.js`, 45 linhas)

```text
Crie js/91-texto.js. Ele faz: Meu Chat — 70-texto.js: mostra a resposta da IA bonitinha (negrito, listas, links, blocos de código com 📋 copiar, ⤓ baixar e 👁 ver funcionando).
No app original ele tinha estas funções/partes: inline, render, ligar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 19 — `js/92-chat.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/80-chat.js`, 169 linhas)

```text
Crie js/92-chat.js. Ele faz: Meu Chat — 80-chat.js: a conversa (mensagens, fotos, mandar, parar, lista de conversas). Cada conversa fica guardada no aparelho. Vai para a IA: a memória + as últimas mensagens.
No app original ele tinha estas funções/partes: nova, abrirConversa, guardar, reduzir, anexar, pintarAnexos, htmlMsg, dedup, hora, pintar, mandar, responder, depois, ouvirEMandar, levarParaClaude, acao, pintarLista, cliqueLista.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 20 — `js/93-config.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/85-config.js`, 99 linhas)

```text
Crie js/93-config.js. Ele faz: Meu Chat — 85-config.js: ⚙️ chaves das IAs, modelo, busca, voz, instruções, tema.
No app original ele tinha estas funções/partes: opcoesVoz, pintar, clique, mudou, aplicarTema, abrir.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 21 — `js/94-cofre.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/87-cofre.js`, 89 linhas)

```text
Crie js/94-cofre.js. Ele faz: Meu Chat — 87-cofre.js: 🔐 Cofre de chaves. Mostra cada chave guardada (👁 ver, 📋 copiar) e leva SÓ as chaves para outro app/aparelho num arquivo trancado com senha — o mesmo arquivo do Mini SK (js/lib/cofre-arquivo.js).
No app original ele tinha estas funções/partes: todas, pintar, status, conteudo, baixar, trazer.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 22 — `js/95-backup.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/90-backup.js`, 44 linhas)

```text
Crie js/95-backup.js. Ele faz: Meu Chat — 90-backup.js: 💾 backup de tudo (conversas + memória + ajustes) e restaurar SEM APAGAR NADA.
No app original ele tinha estas funções/partes: gerar, baixar, restaurar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 23 — `js/96-ponte-lab.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/95-ponte-lab.js`, 20 linhas)

```text
Crie js/96-ponte-lab.js. Ele faz: 🔬 Ponte com o Laboratório: quando o Meu Chat está DENTRO do Laboratório (aba 🤖 IA), o Laboratório pode mandar texto para a caixa de escrever (o plano do projeto, a memória, a comparação A × B). Só aceita mensagens da própria página (mesmo endereço).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 24 — `js/97-cofre-arquivo.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/lib/cofre-arquivo.js`, 61 linhas)

```text
Crie js/97-cofre-arquivo.js. Ele faz: 🔐 Arquivo de chaves do Maikon — o MESMO formato no Mini SK, no Meu Chat e no que vier depois. Guarda SÓ as chaves (IA, GitHub, Expo, pesquisa e "Minhas chaves"), trancadas com uma senha sua (AES-GCM 256 + PBKDF2 com 250 mil voltas — sem a senha, o arquivo não abre). Assim dá para levar as chaves de um app/aparelho para outro sem passar pelo WhatsApp.
No app original ele tinha estas funções/partes: b64, deB64, chaveDaSenha, normal, selar, abrir, contar, mascara.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 25 — `js/98-guia-maikon.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/js/lib/guia-maikon.js`, 94 linhas)

```text
Crie js/98-guia-maikon.js. Ele faz: 🧭 Guia das ferramentas do Maikon — o MESMO texto em todos os apps (Mini SK, Meu Chat…). A IA de cada app lê isto sozinha: assim ela já sabe o que ele tem, para que serve cada coisa, e quando é melhor mandar para outra ferramenta ou "levar para o Claude". Para atualizar: troque este arquivo nos apps (o Claude manda a versão nova junto).
No app original ele tinha estas funções/partes: resumoParaClaude, esconder.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 26 — `js/98-montar.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/montar.py`, 81 linhas)

```text
Crie js/98-montar.js. Ele faz: Monta ferramentas/*.js do Caça-Bug a partir dos HTML originais (sem mexer neles). Uso: python3 montar.py   (os originais ficam em /home/claude/cacabug-fontes e /home/claude).
No app original ele tinha estas funções/partes: fim_body, inserir_antes, libs_locais, importFiles.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 27 — `js/98-perito.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/perito.js`, 3 linhas)

```text
Crie js/98-perito.js. Ele faz: Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o original e rode montar.py).
No app original ele tinha estas funções/partes: EMBUTIDO, esc, latin1, deLatin1, juntar, utf8, decTexto, tamanhoTxt, sha256js, sha256, inflar, inflarZlib, mkData, dataPdf, dataExif, dataIso, difTxt, num.
Ele chamava estes endereços: https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&q=. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 28 — `js/98-projeto-lab.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/projeto-lab.js`, 3 linhas)

```text
Crie js/98-projeto-lab.js. Ele faz: Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o original e rode montar.py).
No app original ele tinha estas funções/partes: esc, tick, fmtSize, fmtDate, normPath, dirname, basename, extOf, joinPath, hex, inflate, mask, lineFinder, parseLenientJSON, langOf, sniff, zipEntries, parsePax.
Ele chamava estes endereços: https://api.anthropic.com/v1/messages, https://api.anthropic.com/v1/models?limit=100. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 29 — `js/98-triagem.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/triagem.js`, 3 linhas)

```text
Crie js/98-triagem.js. Ele faz: Ferramenta do Caça-Bug — gerada a partir do HTML original (não edite aqui; edite o original e rode montar.py).
No app original ele tinha estas funções/partes: renderLista, abrirConversa, conversaAtiva, renderMensagens, enviarMensagem, formatarHora, salvar, extOf, normPath, findPaths, compatible, sniffType, looksWindows, extForType, fnNames, computeSig, jaccard, speakerOf.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 30 — `js/98-zip.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/20-zip.js`, 120 linhas)

```text
Crie js/98-zip.js. Ele faz: Caça-Bug — 20-zip.js (o mesmo do Mini SK) Lê e cria arquivos .zip SEM biblioteca externa (funciona offline). Usa o descompactador que já vem no navegador (DecompressionStream).
No app original ele tinha estas funções/partes: CRC_TABLE, crc32, streamThrough, read, write.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 31 — `js/98-projeto.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/30-projeto.js`, 215 linhas)

```text
Crie js/98-projeto.js. Ele faz: Caça-Bug — 30-projeto.js Projetos: importar (.zip, arquivos soltos ou pasta), guardar no aparelho, escolher o projeto ativo e fazer o DIAGNÓSTICO RÁPIDO: - que tipo de projeto é (Replit, Vite/React, Expo, Capacitor, servidor, PWA);.
No app original ele tinha estas funções/partes: listar, pegar, entradasDe, guardar, escolher, apagar, arquivoZip, semExt, importarArquivos, texto, raizComum, mascara, examinarIndex, diagnostico, tem, consertarCaminhos.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 32 — `js/98-ferramentas.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/40-ferramentas.js`, 136 linhas)

```text
Crie js/98-ferramentas.js. Ele faz: Caça-Bug — 40-ferramentas.js Abre cada ferramenta (Cirurgião, Projeto Lab, Triagem, Perito…) DENTRO do app, sem mexer no jeito delas funcionarem: - entrega o projeto ativo automaticamente (não precisa importar de novo);.
No app original ele tinha estas funções/partes: REG, baixar, tenta, comKit, lista, porId, esperarHub, olha, criarFrame, noFrame, alimentar, abrir, abrirComparacao, guardarRelatorio, montarLista.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 33 — `js/98-organizar.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/45-organizar.js`, 54 linhas)

```text
Crie js/98-organizar.js. Ele faz: Caça-Bug — 45-organizar.js Aba 🗂️ Organizar: pega o projeto em uso (aquela pasta "embolada") e devolve tudo separado — usa js/lib/organizar-core.js.
No app original ele tinha estas funções/partes: montar, analisar, num, zipar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 34 — `js/98-relatorios.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/50-relatorios.js`, 50 linhas)

```text
Crie js/98-relatorios.js. Ele faz: Caça-Bug — 50-relatorios.js 📋 Relatórios guardados: cada análise fica salva no aparelho, com data, ferramenta e projeto. Não some quando você sai da ferramenta. Abrir · copiar · baixar · mandar (Drive/WhatsApp) · apagar.
No app original ele tinha estas funções/partes: guardar, listar, nomeArq, cabecalho, montar, zipTodos.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 35 — `js/98-comparar.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/60-comparar.js`, 244 linhas)

```text
Crie js/98-comparar.js. Ele faz: Caça-Bug — 60-comparar.js ⚖️ Comparar versões: escolha 2 ou mais projetos guardados e veja - a tabela de RECURSOS por versão (IA, voz, PDF, Word, DJEN…) ✓ / — - arquivos: só numa, só na outra, mudaram, iguais.
No app original ele tinha estas funções/partes: raizComum, indice, difLinhas, soEm, comparar, textoRelatorio, bloco, montar, html, det, ligar, verDiferenca, mostra.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 36 — `js/98-ia.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/70-ia.js`, 78 linhas)

```text
Crie js/98-ia.js. Ele faz: Caça-Bug — 70-ia.js · 🤖 IA O MEU CHAT aqui dentro: as suas chaves (Gemini, Groq, OpenRouter…), o 🦙 Ollama sozinho quando estiver ligado (no PC ou no Termux), voz, internet e fotos. Os botões 📎 colocam na caixa do chat o DIAGNÓSTICO, o PLANO, um RELATÓRIO.
No app original ele tinha estas funções/partes: quadro, mandar, esconderChaves, colar, precisaProjeto, acao, escolher, pintar, montar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 37 — `js/98-expo-core.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/lib/expo-core.js`, 192 linhas)

```text
Crie js/98-expo-core.js. Ele faz: expo-core.js — ☁️ Consertar um projeto EXPO para gerar APK pelo EAS Usado pelo Caça-Bug (Diagnóstico) e pelo Mini SK (painel ☁️ EAS). Junta o que os geradores antigos faziam separado (app.json, eas.json, autorizações, receita do GitHub) + limpeza da Replit, numa passada só.
No app original ele tinha estas funções/partes: json, raizDe, slugDe, ler, permissoes, tem, consertar, existe, tirarImg, limpa, base.
O original usava as bibliotecas fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 38 — `js/98-organizar-core.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/lib/organizar-core.js`, 347 linhas)

```text
Crie js/98-organizar-core.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: base, dir, ext, norm, slug, chaveConteudo, hash, assuntoDe, incompleto, ehModuloES, sintaxe, conversaColada, tentarConsertar, resumo, cortar, add, analisar, relatorio.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 39 — `js/98-plano-core.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/js/lib/plano-core.js`, 171 linhas)

```text
Crie js/98-plano-core.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: ext, uniq, normRota, arvore, andar, gerar, chave, dedup, temRota, tem, markdown, tab.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 40 — `js/98-ia.js` (era `client/public/ferramentas/mini-juridico/js/10-ia.js`, 199 linhas)

```text
Crie js/98-ia.js. Ele faz: Assistente Jurídico — 10-ia.js Fala com a IA. Principal: Google Gemini (chave grátis, AIza… ou AQ.…). Reserva: Groq (grátis, chave gsk_…) — se o Gemini der "limite", troca sozinho. O modelo antigo (gemini-1.5-flash) foi desligado pelo Google: era um dos.
No app original ele tinha estas funções/partes: cfg, salvar, sistemaBase, textoDeErro, gFetch, corpoGemini, gemini, groq, ollama, ollamaInfo, compat, claude, modelosOpenRouter, gerar, modelos.
Ele chamava estes endereços: https://api.anthropic.com/v1/messages, https://openrouter.ai/api/v1/models. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 41 — `js/98-voz.js` (era `client/public/ferramentas/mini-juridico/js/12-voz.js`, 149 linhas)

```text
Crie js/98-voz.js. Ele faz: Assistente Jurídico — 12-voz.js 🎤 Ditado (falar e virar texto) e 🔊 leitura em voz NATURAL. A voz é a do Gemini (gente de verdade, não robô) — usa a mesma chave grátis. Voz "de robô" do aparelho NUNCA é usada. No navegador Edge, as vozes.
No app original ele tinha estas funções/partes: cfg, limpar, pedacos, wav, audioGemini, parar, vozesNaturais, falar, fim, ditar, botaoDitado.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 42 — `js/98-importar.js` (era `client/public/ferramentas/mini-juridico/js/15-importar.js`, 60 linhas)

```text
Crie js/98-importar.js. Ele faz: Assistente Jurídico — 15-importar.js Lê arquivos: PDF, Word (.docx), TXT, MD, RTF, HTML. PDF e Word usam bibliotecas que vêm da internet só na 1ª vez. Foto/escaneado (precisa de OCR): use a ferramenta 🧹 Limpador.
No app original ele tinha estas funções/partes: pdf, docx, rtf, htmlParaTexto, lerArquivo, escolher.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 43 — `js/98-texto.js` (era `client/public/ferramentas/mini-juridico/js/18-texto.js`, 77 linhas)

```text
Crie js/98-texto.js. Ele faz: Assistente Jurídico — 18-texto.js Transforma o texto que a IA devolve (com ##, **negrito**, listas) em texto formatado de verdade — para mostrar na tela e para o Editor/Word.
No app original ele tinha estas funções/partes: inline, mdParaHtml, cel, htmlParaTexto, limparHtml, andar, textoParaHtml.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 44 — `js/98-processar.js` (era `client/public/ferramentas/mini-juridico/js/20-processar.js`, 119 linhas)

```text
Crie js/98-processar.js. Ele faz: Assistente Jurídico — 20-processar.js ⚡ Processar: cole/abra o texto do processo → escolha o que fazer → resultado formatado → Editor, Word, ouvir, salvar ou conversar sobre ele. As ações vieram do "Assistente Jurídico Pro" antigo (mesmos pedidos).
No app original ele tinha estas funções/partes: montar, pintarAcoes, conta, executar, podar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 45 — `js/98-drive.js` (era `client/public/ferramentas/mini-juridico/js/22-drive.js`, 87 linhas)

```text
Crie js/98-drive.js. Ele faz: Assistente Jurídico — 22-drive.js ☁️ GOOGLE DRIVE DIRETO: manda e busca arquivos na SUA conta do Drive, numa pasta "Assistente Jurídico", sem precisar do app do Drive. Precisa de um "ID do cliente" (Client ID) do Google — é de graça, faz uma.
No app original ele tinha estas funções/partes: cfg, salvar, configurado, conectar, api, pasta, enviar, listar, baixar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 46 — `js/98-regras.js` (era `client/public/ferramentas/mini-juridico/js/25-regras.js`, 97 linhas)

```text
Crie js/98-regras.js. Ele faz: Assistente Jurídico — 25-regras.js 📜 O "cérebro" do seu escritório, que cresce com o tempo, SEM mexer no código: - Regras: como a IA deve escrever e processar (cole quantas quiser; liga/desliga). - Memória: o que a IA deve saber (dados do escritório, preferências, casos).
No app original ele tinha estas funções/partes: carregar, paraIA, montar, exportar, pintar, clique.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 47 — `js/98-editor.js` (era `client/public/ferramentas/mini-juridico/js/30-editor.js`, 133 linhas)

```text
Crie js/98-editor.js. Ele faz: Assistente Jurídico — 30-editor.js ✏️ Editor com formatação de verdade (folha A4, padrão ABNT): negrito, itálico, sublinhado, títulos, citação recuada, alinhamento, recuo da 1ª linha, listas, fonte e tamanho. Baixa em Word (.docx) de verdade.
No app original ele tinha estas funções/partes: montar, voltarSelecao, estilizar, marcarMudou, html, texto, nomeArquivo, paginaHtml, abrir, salvar, iaNaSelecao.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 48 — `js/98-docx.js` (era `client/public/ferramentas/mini-juridico/js/35-docx.js`, 146 linhas)

```text
Crie js/98-docx.js. Ele faz: Assistente Jurídico — 35-docx.js ⬇ Word de VERDADE (.docx), feito aqui no aparelho, sem internet. Folha A4, margens ABNT (3/3/2/2 cm), Times 12, espaçamento 1,5, recuo de 2,5 cm na 1ª linha, citação recuada 4 cm em 10 pt,.
No app original ele tinha estas funções/partes: tamanhoMeioPonto, run, runs, paragrafo, alinhamento, corpo, bloco, filhos, despeja, gerar, baixar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 49 — `js/98-conversa.js` (era `client/public/ferramentas/mini-juridico/js/40-conversa.js`, 128 linhas)

```text
Crie js/98-conversa.js. Ele faz: Assistente Jurídico — 40-conversa.js 💬 Conversa com a IA sobre o caso — por texto ou por VOZ. 📎 Contexto: o documento do Editor, o texto do Processar ou um arquivo. 🔁 Modo voz: você fala → a IA responde em voz natural → escuta de novo.
No app original ele tinha estas funções/partes: nova, montar, definirContexto, pintarContexto, listar, pintar, guardar, enviar, escutar, alternarModoVoz, pintarModo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 50 — `js/98-documentos.js` (era `client/public/ferramentas/mini-juridico/js/50-documentos.js`, 80 linhas)

```text
Crie js/98-documentos.js. Ele faz: Assistente Jurídico — 50-documentos.js 📁 Documentos salvos no aparelho + 🕐 histórico do que a IA fez. Abrir no Editor, baixar em Word, mandar ao Drive, duplicar, apagar. 💾 Backup de tudo num arquivo só (e restaurar em outro aparelho).
No app original ele tinha estas funções/partes: nomeArq, montar, casa, pintar, item, acao, backup, restaurar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 51 — `js/98-biblioteca.js` (era `client/public/ferramentas/mini-juridico/js/55-biblioteca.js`, 87 linhas)

```text
Crie js/98-biblioteca.js. Ele faz: Assistente Jurídico — 55-biblioteca.js 📐 Modelos (peças prontas com [CAMPOS]) e 📚 Ementas (jurisprudência que VOCÊ guarda — a IA só usa as que você marcar; nada inventado). 🪄 Preencher modelo com o caso: a IA completa os [CAMPOS] com o texto do ⚡ Processar.
No app original ele tinha estas funções/partes: montar, pintarModelos, pintarEmentas, acao.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 52 — `js/98-codigos.js` (era `client/public/ferramentas/mini-juridico/js/60-codigos.js`, 104 linhas)

```text
Crie js/98-codigos.js. Ele faz: Assistente Jurídico — 60-codigos.js 🧪 MEUS CÓDIGOS: playground que GUARDA. Para os seus códigos jurídicos (calculadoras, modelos em HTML, ferramentas antigas…). Cole ou importe (vários de uma vez, inclusive .zip), rode ao vivo.
No app original ele tinha estas funções/partes: humano, tipoDe, montar, carregar, pintar, abrir, modo, rodar, fechar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 53 — `js/98-ferramentas.js` (era `client/public/ferramentas/mini-juridico/js/70-ferramentas.js`, 58 linhas)

```text
Crie js/98-ferramentas.js. Ele faz: Assistente Jurídico — 70-ferramentas.js 🧰 As ferramentas que já funcionam, cada uma no seu arquivo (ferramentas/), abertas aqui dentro. Ficam "vivas": trocar de aba não apaga o que estava sendo feito nelas.
No app original ele tinha estas funções/partes: montar, passarChave, abrir.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 54 — `js/98-config.js` (era `client/public/ferramentas/mini-juridico/js/80-config.js`, 176 linhas)

```text
Crie js/98-config.js. Ele faz: Assistente Jurídico — 80-config.js ⚙️ Chave da IA (Gemini grátis + Groq de reserva), voz, seus dados e regras do escritório (a IA segue sempre). Tudo fica só neste aparelho.
No app original ele tinha estas funções/partes: montar, pintarOutra, salvarO, pintarProv, salvarDr, preencherOl, olMsg, pintarCat, guardarChave, pintarVoz, guardarVoz.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 55 — `js/98-use-mobile.js` (era `client/src/hooks/use-mobile.tsx`, 20 linhas)

```text
Crie js/98-use-mobile.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: useIsMobile, onChange.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 56 — `js/98-use-toast.js` (era `client/src/hooks/use-toast.ts`, 192 linhas)

```text
Crie js/98-use-toast.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: genId, addToRemoveQueue, dispatch, toast, update, dismiss, useToast.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 57 — `js/98-extrair-texto.js` (era `client/src/lib/extrair-texto.ts`, 202 linhas)

```text
Crie js/98-extrair-texto.js. Ele faz: 📄 Extrair texto de arquivos (PDF, Word, HTML…) — com conserto das "letrinhas". Usado no lugar de  fetch("/api/upload/extract-text", ...)  — devolve a mesma resposta ({ text }), então o resto do jurídico não muda. O que ele faz a mais: 1. manda UM arquivo de cada vez ao servidor (um arquivo ruim não estraga os outros);.
No app original ele tinha estas funções/partes: limparLetrinhas, textoRuim, extensao, tipoReal, htmlParaTexto, carregarTesseract, avisar, lerPdfAqui, lerAqui, fetchExtrair.
O original usava as bibliotecas pdfjs-dist, mammoth: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/upload/extract-text. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 58 — `js/98-fala-aparelho.js` (era `client/src/lib/fala-aparelho.ts`, 85 linhas)

```text
Crie js/98-fala-aparelho.js. Ele faz: 🔊 Voz do próprio aparelho (a "voz de robô" do celular/computador). Usada quando a voz neural do servidor (edge-tts, em Python) não está instalada ou falha. - espera as vozes carregarem (no Android elas chegam depois); - divide o texto em pedaços (o Chrome corta falas longas depois de ~15 s);.
No app original ele tinha estas funções/partes: vozesProntas, fim, pedacos, temFalaNoAparelho, pararFalaAparelho, falarNoAparelho, natural, servidorSemVoz, marcarServidorSemVoz.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 59 — `js/98-queryclient.js` (era `client/src/lib/queryClient.ts`, 69 linhas)

```text
Crie js/98-queryclient.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: resolveUrl, throwIfResNotOk, apiRequest.
O original usava as bibliotecas @tanstack/react-query: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 60 — `js/98-utils.js` (era `client/src/lib/utils.ts`, 7 linhas)

```text
Crie js/98-utils.js. Ele é uma parte de logica do app.
O original usava as bibliotecas clsx, tailwind-merge: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 61 — `js/98-app.js` (era `client/src/App.tsx`, 176 linhas)

```text
Crie js/98-app.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ErrorBoundary, Router, App.
Ele usa o que já foi criado em: js/98-queryclient.js (pelo APP).
O original usava as bibliotecas react, wouter, @tanstack/react-query: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/auth/check. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 62 — `js/98-postcss-config.js` (era `postcss.config.js`, 7 linhas)

```text
Crie js/98-postcss-config.js. Ele é uma parte de logica do app.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 63 — `js/98-abrir-pronto.js` (era `scripts/abrir-pronto.mjs`, 34 linhas)

```text
Crie js/98-abrir-pronto.js. Ele faz: Usado pelo app pronto para Windows (Abrir-CodeLens.bat): liga o servidor com o Node que vem junto, espera ficar pronto e abre o navegador.
No app original ele tinha estas funções/partes: tick.
O original usava as bibliotecas child_process, path, fs, http, url: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 64 — `js/98-iniciar.js` (era `scripts/iniciar.mjs`, 124 linhas)

```text
Crie js/98-iniciar.js. Ele faz: Liga o CodeLens com um comando só: 1) instala as peças na primeira vez (npm install) 2) monta a tela se ela ainda não existe ou se você mudou algo em src/.
No app original ele tinha estas funções/partes: say, fail, run, newestMtime, walk, waitUp, tick, openBrowser, portaLivre, jaEstaAberto.
O original usava as bibliotecas child_process, fs, path, http, net, url: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 65 — `js/98-chat.js` (era `shared/models/chat.ts`, 35 linhas)

```text
Crie js/98-chat.js. Ele é uma parte de logica do app.
O original usava as bibliotecas drizzle-orm, drizzle-zod, zod: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 66 — `js/98-tailwind-config.js` (era `tailwind.config.ts`, 108 linhas)

```text
Crie js/98-tailwind-config.js. Ele é uma parte de logica do app.
O original usava as bibliotecas tailwindcss, tailwindcss-animate, @tailwindcss/typography: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 67 — `js/98-vite-config.js` (era `vite.config.ts`, 26 linhas)

```text
Crie js/98-vite-config.js. Ele é uma parte de logica do app.
O original usava as bibliotecas vite, @vitejs/plugin-react, path: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 68 — `js/98-cacador-erros.js` (era `server/cacador-erros.ts`, 61 linhas)

```text
Crie js/98-cacador-erros.js. Ele faz: 🐞 Caçador de erros — lado do SERVIDOR (só observa; não muda o funcionamento) - guarda os últimos erros do servidor (com a ROTA e o MOTIVO de verdade) - também grava em erros-servidor.log (na pasta de onde o servidor roda) - GET /api/_erros → a tela (botão 🐞) mostra junto com os erros dela.
No app original ele tinha estas funções/partes: esconder, texto, anotarErro, ligarCacador.
O original usava as bibliotecas async_hooks, fs, path, express: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /api/_erros, DELETE /api/_erros. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 69 — `js/98-djen.js` (era `server/djen.ts`, 381 linhas)

```text
Crie js/98-djen.js. Ele faz: Robô Jurídico DJEN — Lógica de consulta e processamento Consulta a API do DJEN/CNJ, extrai datas e associa clientes.
No app original ele tinha estas funções/partes: getDjenConfig, saveDjenConfig, gerarTokenJwt, obterToken, buscarPublicacoesDJEN, parseData, formatData, extrairDadosSessao, normalizarProcesso, executarRobo, addLog, gerarTokenPublico, listarClientes, criarCliente, deletarCliente, listarPublicacoes, listarExecucoes, dadosSimulados.
Ele usa o que já foi criado em: js/20-localdb.js (pelo APP).
O original usava as bibliotecas drizzle-orm, @shared/schema, crypto, jsonwebtoken: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 70 — `js/98-env.js` (era `server/env.ts`, 21 linhas)

```text
Crie js/98-env.js. Ele faz: Lê o arquivo .env (se existir) ANTES de tudo. É onde ficam as chaves (senha do app, chaves de IA, DataJud…). Veja o .env.exemplo.
O original usava as bibliotecas path, fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 71 — `js/98-gemini-ponte.js` (era `server/gemini-ponte.ts`, 139 linhas)

```text
Crie js/98-gemini-ponte.js. Ele faz: Ponte do Gemini — chave nova "AQ." (e a antiga "AIza"). O Google trocou o formato das chaves (2026): as novas começam com "AQ." e são RECUSADAS no caminho "compatível com OpenAI" (…/v1beta/openai/…) quando vão como "Authorization: Bearer". No caminho próprio do Gemini elas funcionam.
No app original ele tinha estas funções/partes: partes, corpoNativo, erroOpenAI, chat, pedaco, modelos.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 72 — `js/98-storage.js` (era `server/storage.ts`, 276 linhas)

```text
Crie js/98-storage.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: DatabaseStorage.
Ele usa o que já foi criado em: js/20-localdb.js (pelo APP).
O original usava as bibliotecas @shared/schema, drizzle-orm: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 73 — `js/98-tts.js` (era `server/tts.ts`, 87 linhas)

```text
Crie js/98-tts.js. Ele faz: Voz neural da Microsoft (a mesma do Edge), grátis, precisa de internet. Padrão: voz Francisco, velocidade 1,15, tom 5% mais grave — dá para trocar no .env: TTS_VOZ=pt-BR-FranciscoNeural   (ou pt-BR-FranciscaNeural, pt-BR-AntonioNeural…) TTS_VELOCIDADE=1.15.
No app original ele tinha estas funções/partes: VOZ, VELOCIDADE, TOM, pedacos, umPedacoNode, umPedacoPython, edgeTts.
O original usava as bibliotecas os, path, fs, child_process, util, msedge-tts: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 74 — `js/98-ollama.js` (era `server/ollama.ts`, 82 linhas)

```text
Crie js/98-ollama.js. Ele faz: 🦙 Ollama — IA grátis rodando no PRÓPRIO computador (ou no Termux do celular). O servidor do jurídico fala com ele em http://127.0.0.1:11434 (sem chave, sem internet). Rotas: GET  /api/ollama/status         → está ligado? quais modelos tem?.
No app original ele tinha estas funções/partes: comTempo, status, ligarOllama.
O original usava as bibliotecas express, child_process, path: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /api/ollama/status, POST /api/ollama/ligar, POST /api/ollama/baixar. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 75 — `js/98-routes.js` (era `server/routes.ts`, 5667 linhas)

```text
Crie js/98-routes.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: truncateChatHistory, cleanPemKey, limparLetrinhasServidor, textoRuimServidor, temProgramasOcr, cleanHtml, requireAuth, sanitizeKey, autoDetectProvider, geminiStream, geminiStreamMessages, seedData, increment, decrement, reset, addTask, registerRoutes, cleanContent.
Ele usa o que já foi criado em: js/98-storage.js, js/98-tts.js, js/98-ollama.js, js/98-djen.js (pelo APP).
O original usava as bibliotecas express, http, @shared/schema, @google/genai, openai, multer, mammoth, pdf-parse, docx, fs, path, child_process, os, util, jsonwebtoken, html-entities, jszip: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /sw.js, GET /api/auth/check, POST /api/auth/login, POST /api/auth/logout, GET /parecer/:id, GET /api/tjmg/fatores, POST /api/pdpj/test-connection, GET /api/pdpj/status, POST /api/pdpj/comunicacoes, POST /api/pdpj/representados, POST /api/pdpj/habilitacao, POST /api/pdpj/pessoa, POST /api/webhooks/tramitacao, GET /api/demo-key-status, GET /api/demo-key-config, POST /api/demo-key-config, GET /api/perplexity-key-status, POST /api/demo-key-test, POST /api/tts, POST /api/voice-chat, POST /api/share/parecer, GET /api/snippets, GET /api/snippets/:id, POST /api/snippets, PATCH /api/snippets/:id, DELETE /api/snippets/:id, GET /api/custom-actions, POST /api/custom-actions, PATCH /api/custom-actions/:id, DELETE /api/custom-actions/:id. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Ele chamava estes endereços: https://www.debit.com.br/tabelas/tribunal-justica-mg, ${baseUrl}${endpoint}, ${baseUrl}/domicilio-eletronico/api/v1/representados, ${baseUrl}/domicilio-eletronico/api/v1/habilita/verificar/${documento}, ${baseUrl}/domicilio-eletronico/api/v1/${endpoint}/${documento}, ${testUrl}/chat/completions, https://api.perplexity.ai/chat/completions, ${cUrl}/chat/completions, ${CORPORATIVO_BASE}/advogado/oab/${cpf}, ${CORPORATIVO_BASE}/advogado/oab/${uf.toUpperCase()}/${inscricao.replace(/\D/g, , ${CORPORATIVO_BASE}/magistrado?siglaTribunal=${tribunal}, ${TRAMITACAO_BASE}${path}, ${prevUrl.replace(/\/$/, , ${url}/chat/completions. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 76 — `js/98-web.js` (era `server/web.ts`, 51 linhas)

```text
Crie js/98-web.js. Ele faz: Mostra a TELA do app no mesmo endereço do servidor. Era isto que faltava: o servidor só tinha as rotas /api, então no PC aparecia "Cannot GET /" ou "404 com metade de um HTML". - Montado (npm run build → pasta dist/): serve os arquivos prontos.
No app original ele tinha estas funções/partes: setupWeb.
O original usava as bibliotecas express, http, path, fs, vite: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 77 — `js/98-server.js` (era `server/index.ts`, 121 linhas)

```text
Crie js/98-server.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: log.
Ele usa o que já foi criado em: js/98-cacador-erros.js, js/98-routes.js, js/98-web.js (pelo APP).
O original usava as bibliotecas express, express-session, memorystore, http: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 78 — `js/98-client.js` (era `client/index.html`, 25 linhas)

```text
Crie js/98-client.js. Ele faz: Assistente Jurídico.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 79 — `js/98-comparador.js` (era `client/public/comparador.html`, 494 linhas)

```text
Crie js/98-comparador.js. Ele faz: Comparador Jurídico — TJMG + BCB — Comparador Juridico — TJMG (Fator) + BCB (Juros).
No app original ele tinha estas funções/partes: setClock, setStatus, fmtBRL, toNumberBR, parseDateBR, dateToYM, listMonths, addScenario, renderScenarios, renderTable.
Ele chamava estes endereços: https://api.bcb.gov.br/dados/serie/bcdata.sgs.. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 80 — `js/98-colador.js` (era `client/public/ferramentas/colador.html`, 776 linhas)

```text
Crie js/98-colador.js. Ele faz: Colador de Links — 🔗 Colador de Links.
No app original ele tinha estas funções/partes: uid, ler, gravar, nomeDe, pintar, fixar, tirar, mover, recarregar, pintarJanela, iniciar, montar, salvar, daLista, contar, pintarListas, caixaDe, quadro.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 81 — `js/98-meu-chat.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/ferramentas/meu-chat/index.html`, 90 linhas)

```text
Crie js/98-meu-chat.js. Ele faz: Meu Chat.
Ele usa o que já foi criado em: js/60-base.js, js/65-banco.js, js/70-provedores.js, js/75-memoria.js, js/80-voz.js, js/85-internet.js, js/90-previa.js, js/91-texto.js, js/92-chat.js, js/97-cofre-arquivo.js, js/98-guia-maikon.js, js/93-config.js, js/94-cofre.js, js/95-backup.js, js/96-ponte-lab.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 82 — `js/98-cacabug.js` (era `client/public/ferramentas/mini-juridico/ferramentas/cacabug/index.html`, 72 linhas)

```text
Crie js/98-cacabug.js. Ele faz: Caça-Bug.
Ele usa o que já foi criado em: js/98-zip.js, js/98-projeto.js, js/45-cirurgiao.js, js/98-projeto-lab.js, js/40-analisador-universal.js, js/98-triagem.js, js/50-gerador-eas.js, js/55-limpador.js, js/35-ai-code-studio.js, js/98-perito.js, js/98-ferramentas.js, js/98-relatorios.js, js/98-comparar.js, js/98-plano-core.js, js/98-expo-core.js, js/98-organizar-core.js, js/98-organizar.js, js/98-ia.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 83 — `js/98-colador.js` (era `client/public/ferramentas/mini-juridico/ferramentas/colador.html`, 695 linhas)

```text
Crie js/98-colador.js. Ele faz: Colador de Links — 🔗 Colador de Links.
No app original ele tinha estas funções/partes: uid, ler, gravar, outra, nomeDe, pintar, fixar, tirar, mover, recarregar, pintarJanela, iniciar, montar, salvar, daLista, contar, pintarListas, quadro.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 84 — `js/98-colecionador.js` (era `client/public/ferramentas/mini-juridico/ferramentas/colecionador.html`, 1672 linhas)

```text
Crie js/98-colecionador.js. Ele faz: Colecionador de Comandos.
No app original ele tinha estas funções/partes: req, QR8bitByte, QRBitBuffer, QRPolynomial, QRRSBlock, QRCode, esc, semAcento, uid, toast, ler, salvar, copiar, adivinhar, desenharFiltros, desenhar, cartao, lembrete.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 85 — `js/98-comparador.js` (era `client/public/ferramentas/mini-juridico/ferramentas/comparador.html`, 389 linhas)

```text
Crie js/98-comparador.js. Ele faz: Comparador de Versões — ⚖️ Comparador de Versões.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 86 — `js/98-comunicacoes.js` (era `client/public/ferramentas/mini-juridico/ferramentas/comunicacoes.html`, 287 linhas)

```text
Crie js/98-comunicacoes.js. Ele faz: Comunicações Processuais — ⚖️ Comunicações Processuais.
No app original ele tinha estas funções/partes: esc, carregarDados, iso, periodo, limpar, fData, parse, chave, status, montarParams, buscar, render, baixar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 87 — `js/98-extrator.js` (era `client/public/ferramentas/mini-juridico/ferramentas/extrator.html`, 265 linhas)

```text
Crie js/98-extrator.js. Ele faz: Extrator de Sites — 🛠️ Extrator de Sites.
No app original ele tinha estas funções/partes: esc, LEITOR, hist, salvarHist, renderHist, status, buscar, absoluto, analisar, addRec, extrair, realce, conteudoAba, mostrar, copiar, baixar, nomeBase, CRC.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 88 — `js/98-juntador.js` (era `client/public/ferramentas/mini-juridico/ferramentas/juntador.html`, 437 linhas)

```text
Crie js/98-juntador.js. Ele faz: Juntador de Arquivos — 🧩 Juntador de Arquivos.
No app original ele tinha estas funções/partes: esc, uid, toast, ext, lang, isTexto, bytesFmt, linhas, decode, pareceBinario, b64, unb64, inflate, lerZip, CRC, crc32, escreverZip, textoDocx.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 89 — `js/98-laboratorio.js` (era `client/public/ferramentas/mini-juridico/ferramentas/laboratorio.html`, 823 linhas)

```text
Crie js/98-laboratorio.js. Ele faz: Laboratório HTML — Advocacia Previdenciária.
No app original ele tinha estas funções/partes: separar, ler, cssDosAjustes, regra, completo, guardar, caminho, limpo, info, marcar, pagina, quemE, hex, transparente, num, montar, carregar, enviar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 90 — `js/98-limpador.js` (era `client/public/ferramentas/mini-juridico/ferramentas/limpador.html`, 654 linhas)

```text
Crie js/98-limpador.js. Ele faz: Limpador de Processos — Limpador de Processos.
No app original ele tinha estas funções/partes: esc, fmt, linhasDaPagina, lerPdf, lerTxt, progresso, adicionar, regrasAtivas, minhasRegras, normLinha, acharRepetidas, limparPagina, processar, montarRegras, montarRepetidas, aplicar, faixas, verPagina.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 91 — `js/98-organizador.js` (era `client/public/ferramentas/mini-juridico/ferramentas/organizador.html`, 558 linhas)

```text
Crie js/98-organizador.js. Ele faz: Organizador de Documentos — 📑 Organizador de Documentos.
No app original ele tinha estas funções/partes: esc, tipoDe, compDe, numDe, moedaPorData, lerPdf, organizar, deTexto, moldeDe, bate, aplicar, camposUsados, status, tudo, renderLinhas, escolherRegra, renderRegras, fmtComp.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 92 — `js/98-perito.js` (era `client/public/ferramentas/mini-juridico/ferramentas/perito.html`, 1123 linhas)

```text
Crie js/98-perito.js. Ele faz: Perito de Metadados — Perito de Metadados.
No app original ele tinha estas funções/partes: EMBUTIDO, esc, latin1, deLatin1, juntar, utf8, decTexto, tamanhoTxt, sha256js, sha256, inflar, inflarZlib, mkData, dataPdf, dataExif, dataIso, difTxt, num.
Ele chamava estes endereços: https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&q=. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 93 — `js/98-mini-juridico.js` (era `client/public/ferramentas/mini-juridico/index.html`, 66 linhas)

```text
Crie js/98-mini-juridico.js. Ele faz: Assistente Jurídico.
Ele usa o que já foi criado em: js/98-ia.js, js/98-voz.js, js/98-drive.js, js/98-importar.js, js/98-texto.js, js/98-regras.js, js/98-processar.js, js/98-editor.js, js/98-docx.js, js/98-conversa.js, js/98-documentos.js, js/98-biblioteca.js, js/98-codigos.js, js/98-ferramentas.js, js/98-config.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 94 — `js/98-montador-universal.js` (era `client/public/ferramentas/montador-universal.html`, 952 linhas)

```text
Crie js/98-montador-universal.js. Ele faz: Montador Universal — 🧩 Montador Universal.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 95 — `js/98-ollama.js` (era `client/public/ollama.html`, 120 linhas)

```text
Crie js/98-ollama.js. Ele faz: 🦙 Ollama — SK Jurídico — 🦙 Ollama — IA grátis no seu aparelho.
No app original ele tinha estas funções/partes: chamar, emUso, pintar, ocupado, ver.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 96 — `js/98-pwa-install.js` (era `client/src/components/pwa-install.tsx`, 86 linhas)

```text
Crie js/98-pwa-install.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: PwaInstallBanner, handler, handleInstall, handleDismiss.
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 97 — `js/98-theme-provider.js` (era `client/src/components/theme-provider.tsx`, 47 linhas)

```text
Crie js/98-theme-provider.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ThemeProvider, toggleTheme, useTheme.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 98 — `js/98-theme-toggle.js` (era `client/src/components/theme-toggle.tsx`, 19 linhas)

```text
Crie js/98-theme-toggle.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ThemeToggle.
O original usava as bibliotecas lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 99 — `js/98-tiptap-editor.js` (era `client/src/components/tiptap-editor.tsx`, 542 linhas)

```text
Crie js/98-tiptap-editor.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: TiptapEditor, applySize, applyLineHeight, Sep, toolbar.
O original usava as bibliotecas @tiptap/react, @tiptap/starter-kit, @tiptap/extension-text-align, @tiptap/extension-text-style, @tiptap/extension-color, @tiptap/extension-underline, @tiptap/extension-highlight, @tiptap/extension-font-family, @tiptap/extension-table, @tiptap/extension-link, @tiptap/core, react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 100 — `js/98-accordion.js` (era `client/src/components/ui/accordion.tsx`, 57 linhas)

```text
Crie js/98-accordion.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-accordion, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 101 — `js/98-alert-dialog.js` (era `client/src/components/ui/alert-dialog.tsx`, 140 linhas)

```text
Crie js/98-alert-dialog.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: AlertDialogHeader, AlertDialogFooter.
O original usava as bibliotecas react, @radix-ui/react-alert-dialog: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 102 — `js/98-alert.js` (era `client/src/components/ui/alert.tsx`, 60 linhas)

```text
Crie js/98-alert.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 103 — `js/98-aspect-ratio.js` (era `client/src/components/ui/aspect-ratio.tsx`, 6 linhas)

```text
Crie js/98-aspect-ratio.js. Ele é uma parte de tela do app.
O original usava as bibliotecas @radix-ui/react-aspect-ratio: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 104 — `js/98-avatar.js` (era `client/src/components/ui/avatar.tsx`, 52 linhas)

```text
Crie js/98-avatar.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-avatar: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 105 — `js/98-badge.js` (era `client/src/components/ui/badge.tsx`, 39 linhas)

```text
Crie js/98-badge.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Badge.
O original usava as bibliotecas react, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 106 — `js/98-breadcrumb.js` (era `client/src/components/ui/breadcrumb.tsx`, 116 linhas)

```text
Crie js/98-breadcrumb.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: BreadcrumbSeparator, BreadcrumbEllipsis.
O original usava as bibliotecas react, @radix-ui/react-slot, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 107 — `js/98-button.js` (era `client/src/components/ui/button.tsx`, 63 linhas)

```text
Crie js/98-button.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-slot, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 108 — `js/98-calendar.js` (era `client/src/components/ui/calendar.tsx`, 69 linhas)

```text
Crie js/98-calendar.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Calendar.
O original usava as bibliotecas react, lucide-react, react-day-picker: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 109 — `js/98-card.js` (era `client/src/components/ui/card.tsx`, 86 linhas)

```text
Crie js/98-card.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 110 — `js/98-carousel.js` (era `client/src/components/ui/carousel.tsx`, 261 linhas)

```text
Crie js/98-carousel.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useCarousel.
O original usava as bibliotecas react, embla-carousel-react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 111 — `js/98-chart.js` (era `client/src/components/ui/chart.tsx`, 366 linhas)

```text
Crie js/98-chart.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useChart, ChartStyle, getPayloadConfigFromPayload.
O original usava as bibliotecas react, recharts: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 112 — `js/98-checkbox.js` (era `client/src/components/ui/checkbox.tsx`, 29 linhas)

```text
Crie js/98-checkbox.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-checkbox, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 113 — `js/98-collapsible.js` (era `client/src/components/ui/collapsible.tsx`, 12 linhas)

```text
Crie js/98-collapsible.js. Ele é uma parte de tela do app.
O original usava as bibliotecas @radix-ui/react-collapsible: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 114 — `js/98-command.js` (era `client/src/components/ui/command.tsx`, 152 linhas)

```text
Crie js/98-command.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: CommandDialog, CommandShortcut.
O original usava as bibliotecas react, @radix-ui/react-dialog, cmdk, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 115 — `js/98-context-menu.js` (era `client/src/components/ui/context-menu.tsx`, 199 linhas)

```text
Crie js/98-context-menu.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ContextMenuShortcut.
O original usava as bibliotecas react, @radix-ui/react-context-menu, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 116 — `js/98-dialog.js` (era `client/src/components/ui/dialog.tsx`, 123 linhas)

```text
Crie js/98-dialog.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: DialogHeader, DialogFooter.
O original usava as bibliotecas react, @radix-ui/react-dialog, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 117 — `js/98-drawer.js` (era `client/src/components/ui/drawer.tsx`, 119 linhas)

```text
Crie js/98-drawer.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Drawer, DrawerHeader, DrawerFooter.
O original usava as bibliotecas react, vaul: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 118 — `js/98-dropdown-menu.js` (era `client/src/components/ui/dropdown-menu.tsx`, 199 linhas)

```text
Crie js/98-dropdown-menu.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: DropdownMenuShortcut.
O original usava as bibliotecas react, @radix-ui/react-dropdown-menu, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 119 — `js/98-form.js` (era `client/src/components/ui/form.tsx`, 179 linhas)

```text
Crie js/98-form.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useFormField.
O original usava as bibliotecas react, @radix-ui/react-label, @radix-ui/react-slot, react-hook-form: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 120 — `js/98-hover-card.js` (era `client/src/components/ui/hover-card.tsx`, 30 linhas)

```text
Crie js/98-hover-card.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-hover-card: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 121 — `js/98-input-otp.js` (era `client/src/components/ui/input-otp.tsx`, 70 linhas)

```text
Crie js/98-input-otp.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, input-otp, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 122 — `js/98-input.js` (era `client/src/components/ui/input.tsx`, 24 linhas)

```text
Crie js/98-input.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 123 — `js/98-label.js` (era `client/src/components/ui/label.tsx`, 25 linhas)

```text
Crie js/98-label.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-label, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 124 — `js/98-menubar.js` (era `client/src/components/ui/menubar.tsx`, 257 linhas)

```text
Crie js/98-menubar.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: MenubarMenu, MenubarGroup, MenubarPortal, MenubarRadioGroup, MenubarSub, MenubarShortcut.
O original usava as bibliotecas react, @radix-ui/react-menubar, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 125 — `js/98-navigation-menu.js` (era `client/src/components/ui/navigation-menu.tsx`, 129 linhas)

```text
Crie js/98-navigation-menu.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-navigation-menu, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 126 — `js/98-pagination.js` (era `client/src/components/ui/pagination.tsx`, 118 linhas)

```text
Crie js/98-pagination.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Pagination, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis.
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 127 — `js/98-popover.js` (era `client/src/components/ui/popover.tsx`, 30 linhas)

```text
Crie js/98-popover.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-popover: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 128 — `js/98-progress.js` (era `client/src/components/ui/progress.tsx`, 29 linhas)

```text
Crie js/98-progress.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-progress: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 129 — `js/98-radio-group.js` (era `client/src/components/ui/radio-group.tsx`, 43 linhas)

```text
Crie js/98-radio-group.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-radio-group, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 130 — `js/98-resizable.js` (era `client/src/components/ui/resizable.tsx`, 46 linhas)

```text
Crie js/98-resizable.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ResizablePanelGroup, ResizableHandle.
O original usava as bibliotecas lucide-react, react-resizable-panels: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 131 — `js/98-scroll-area.js` (era `client/src/components/ui/scroll-area.tsx`, 47 linhas)

```text
Crie js/98-scroll-area.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-scroll-area: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 132 — `js/98-select.js` (era `client/src/components/ui/select.tsx`, 161 linhas)

```text
Crie js/98-select.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-select, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 133 — `js/98-separator.js` (era `client/src/components/ui/separator.tsx`, 30 linhas)

```text
Crie js/98-separator.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-separator: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 134 — `js/98-sheet.js` (era `client/src/components/ui/sheet.tsx`, 141 linhas)

```text
Crie js/98-sheet.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: SheetHeader, SheetFooter.
O original usava as bibliotecas react, @radix-ui/react-dialog, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 135 — `js/98-sidebar.js` (era `client/src/components/ui/sidebar.tsx`, 728 linhas)

```text
Crie js/98-sidebar.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useSidebar, SidebarProvider, handleKeyDown, Sidebar, SidebarTrigger, SidebarRail, SidebarInset, SidebarInput, SidebarHeader, SidebarFooter, SidebarSeparator, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent, SidebarMenu, SidebarMenuItem.
O original usava as bibliotecas react, @radix-ui/react-slot, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 136 — `js/98-skeleton.js` (era `client/src/components/ui/skeleton.tsx`, 16 linhas)

```text
Crie js/98-skeleton.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Skeleton.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 137 — `js/98-slider.js` (era `client/src/components/ui/slider.tsx`, 27 linhas)

```text
Crie js/98-slider.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-slider: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 138 — `js/98-switch.js` (era `client/src/components/ui/switch.tsx`, 28 linhas)

```text
Crie js/98-switch.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-switch: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 139 — `js/98-table.js` (era `client/src/components/ui/table.tsx`, 118 linhas)

```text
Crie js/98-table.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 140 — `js/98-tabs.js` (era `client/src/components/ui/tabs.tsx`, 54 linhas)

```text
Crie js/98-tabs.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-tabs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 141 — `js/98-textarea.js` (era `client/src/components/ui/textarea.tsx`, 23 linhas)

```text
Crie js/98-textarea.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 142 — `js/98-toast.js` (era `client/src/components/ui/toast.tsx`, 128 linhas)

```text
Crie js/98-toast.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-toast, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 143 — `js/98-toaster.js` (era `client/src/components/ui/toaster.tsx`, 34 linhas)

```text
Crie js/98-toaster.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Toaster.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 144 — `js/98-toggle-group.js` (era `client/src/components/ui/toggle-group.tsx`, 62 linhas)

```text
Crie js/98-toggle-group.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-toggle-group, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 145 — `js/98-toggle.js` (era `client/src/components/ui/toggle.tsx`, 44 linhas)

```text
Crie js/98-toggle.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-toggle, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 146 — `js/98-tooltip.js` (era `client/src/components/ui/tooltip.tsx`, 31 linhas)

```text
Crie js/98-tooltip.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-tooltip: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 147 — `js/98-auditoria-financeira.js` (era `client/src/pages/auditoria-financeira.tsx`, 25 linhas)

```text
Crie js/98-auditoria-financeira.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: AuditoriaFinanceira.
O original usava as bibliotecas wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 148 — `js/98-code-assistant.js` (era `client/src/pages/code-assistant.tsx`, 750 linhas)

```text
Crie js/98-code-assistant.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: detectProvider, CodeBlock, doCopy, RenderText, RenderContent, CodeAssistant, applyKey, saveCurrentKey, loadKey, removeKey, stopGeneration, clearHistory, exportConversation, handleImport, copyMessage, copyTextOnly.
O original usava as bibliotecas react, lucide-react, wouter: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/code-assistant. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 149 — `js/98-comparador-juridico.js` (era `client/src/pages/comparador-juridico.tsx`, 25 linhas)

```text
Crie js/98-comparador-juridico.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ComparadorJuridico.
O original usava as bibliotecas wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 150 — `js/98-consulta-corporativo.js` (era `client/src/pages/consulta-corporativo.tsx`, 479 linhas)

```text
Crie js/98-consulta-corporativo.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ConsultaCorporativo, formatCpf, searchAdvogado, searchMagistrados, copyToClipboard, formatAdvText.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/corporativo/advogado/cpf/${cpfClean}, /api/corporativo/advogado/oab/${oabUf}/${num}, /api/corporativo/magistrados/${magTribunal}. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 151 — `js/98-consulta-pdpj.js` (era `client/src/pages/consulta-pdpj.tsx`, 671 linhas)

```text
Crie js/98-consulta-pdpj.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ConsultaPdpj, formatCpf, baseBody, testConnection, fetchComunicacoes, fetchRepresentados, checkHabilitacao, fetchPessoa, copyJson.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/pdpj/status, /api/pdpj/test-connection, /api/pdpj/comunicacoes, /api/pdpj/representados, /api/pdpj/habilitacao, /api/pdpj/pessoa. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 152 — `js/98-consulta-processual.js` (era `client/src/pages/consulta-processual.tsx`, 656 linhas)

```text
Crie js/98-consulta-processual.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: formatDate, formatDateShort, formatProcessoNumber, ConsultaProcessual.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/datajud/consulta, /api/datajud/consulta-oab. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 153 — `js/98-ferramentas.js` (era `client/src/pages/ferramentas.tsx`, 63 linhas)

```text
Crie js/98-ferramentas.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: base, Topo, FerramentasLista, FerramentaAberta.
O original usava as bibliotecas wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 154 — `js/98-filtrador.js` (era `client/src/pages/filtrador.tsx`, 742 linhas)

```text
Crie js/98-filtrador.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: saveLS, loadLS, cleanMarkdownNoise, splitParagraphs, normalizeForCompare, makeShingles, signature, jaccard, parseLines, buildRegexList, applyBanRules, applyCaptureRules, filterText, escapeHtml, download, FiltradorJuridico, walk, exportTxt.
O original usava as bibliotecas react, wouter, lucide-react, mammoth, pdfjs-dist: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 155 — `js/98-jurisprudencia.js` (era `client/src/pages/jurisprudencia.tsx`, 3842 linhas)

```text
Crie js/98-jurisprudencia.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Jurisprudencia, updateFormat, handler, vozDoAparelho, resetPromptTplForm, openNewPromptTpl, openEditPromptTpl, savePromptTpl, copyPromptTplToClipboard, resetDocTplForm, openNewDocTpl, openEditDocTpl, saveDocTpl, handleDocxTemplateUpload, loadFromHistory, resetModelForm, openNewModel, openEditModel.
O original usava as bibliotecas react, wouter, @tanstack/react-query, @shared/schema, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/tts, /api/doc-templates/upload-docx, /api/export/word-with-template, /api/jurisprudencia/buscar, /api/import/url, /api/upload/transcribe, /api/ai/process, /api/ai/refine. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 156 — `js/98-legal-assistant.js` (era `client/src/pages/legal-assistant.tsx`, 5427 linhas)

```text
Crie js/98-legal-assistant.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: LegalAssistant, updateFormat, handler, iniciarDitado, refreshDemoKeyStatus, startMic, resetPromptTplForm, openNewPromptTpl, openEditPromptTpl, savePromptTpl, copyPromptTplToClipboard, resetDocTplForm, openNewDocTpl, openEditDocTpl, saveDocTpl, handleDocxTemplateUpload, loadFromHistory, resetModelForm.
O original usava as bibliotecas react, wouter, @tanstack/react-query, @shared/schema, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/demo-key-status, /api/demo-key-config, /api/tts, /api/voice-chat, /api/doc-templates/upload-docx, /api/export/word-with-template, /api/jurisprudencia/buscar, /api/code-assistant, /api/import/url, /api/upload/transcribe, /api/ai/process, /api/ai/refine, /api/git-push, /api/ai-usage-summary, /api/ai-usage-credit, /api/demo-key-test. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 157 — `js/98-login.js` (era `client/src/pages/login.tsx`, 100 linhas)

```text
Crie js/98-login.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: LoginPage, handleSubmit.
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/auth/login. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 158 — `js/98-not-found.js` (era `client/src/pages/not-found.tsx`, 33 linhas)

```text
Crie js/98-not-found.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: NotFound.
O original usava as bibliotecas lucide-react, wouter: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 159 — `js/98-painel-processos.js` (era `client/src/pages/painel-processos.tsx`, 758 linhas)

```text
Crie js/98-painel-processos.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: formatProcessoNumber, formatDate, formatDateTime, detectTribunal, PainelProcessos, searchByOab, addFromOabResult, addAllFromOab, addProcesso, refreshProcesso, toggleExpand, saveApelido, toggleStatus, copyAllData.
O original usava as bibliotecas react, @tanstack/react-query, wouter, @shared/schema, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/datajud/consulta-oab, /api/datajud/consulta. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 160 — `js/98-playground.js` (era `client/src/pages/playground.tsx`, 1503 linhas)

```text
Crie js/98-playground.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: lerLocais, gravarLocais, ehLocal, App, mostrarStatus, handleFile, processarDados, get, copiarWord, salvarLocal, excluir, Field, testarAPI, detectMode, preprocessJSX, Playground, runCodeWithAI, getContentForMode.
O original usava as bibliotecas react, wouter, lucide-react, @tanstack/react-query, @shared/schema: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/code/run. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 161 — `js/98-previdenciario.js` (era `client/src/pages/previdenciario.tsx`, 770 linhas)

```text
Crie js/98-previdenciario.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: naturezaLabel, naturezaBadge, parseValorBR, fmtBR, extrairTextoPdf, extrairTextoOrdenado, parsearDtcCtc, UploadZone, SectionCard, InfoRow, PrevidenciarioPage, processarCnisOuCarta, processarDtcCtc, set, exportarCsv, exportarJson.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 162 — `js/98-robo-djen.js` (era `client/src/pages/robo-djen.tsx`, 1053 linhas)

```text
Crie js/98-robo-djen.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: RoboDjenPage, gerarToken, copiarToken, buscarOAB, buscarProcesso.
O original usava as bibliotecas react, @tanstack/react-query, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/djen/config, /api/djen/gerar-token, /api/pesquisa/oab?${params}, /api/pesquisa/processo?${params}. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 163 — `js/98-token-generator.js` (era `client/src/pages/token-generator.tsx`, 450 linhas)

```text
Crie js/98-token-generator.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: TokenGenerator, formatCpf, generateToken, copyToClipboard.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/jwt/status, /api/jwt/generate. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 164 — `js/98-tramitacao.js` (era `client/src/pages/tramitacao.tsx`, 830 linhas)

```text
Crie js/98-tramitacao.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: fmt, fmtPhone, TramitacaoPage, handleTestConnection.
O original usava as bibliotecas react, @tanstack/react-query, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/tramitacao/test, /api/tramitacao/clientes?page=${clientePage}&per_page=20, /api/tramitacao/clientes/${selectedCliente.id}, /api/tramitacao/usuarios. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 165 — `js/98-auditoria.js` (era `public/auditoria.html`, 35 linhas)

```text
Crie js/98-auditoria.js. Ele faz: Auditoria Financeira - Assistente Jurídico — 📊 Auditoria Financeira.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 166 — `js/99-app.js` e conferir

```text
Crie js/99-app.js: ele olha APP.modulos e monta o menu/abas com um botão para cada módulo. Depois, me mande o index.html atualizado com todos os <script src="js/…"> na ordem certa: js/00-core.js, js/10-init.js, js/15-db.js, js/20-localdb.js, js/25-schema.js, js/30-cacador-erros.js, js/35-ai-code-studio.js, js/40-analisador-universal.js, js/45-cirurgiao.js, js/50-gerador-eas.js, js/55-limpador.js, js/60-base.js, js/65-banco.js, js/70-provedores.js, js/75-memoria.js, js/80-voz.js, js/85-internet.js, js/90-previa.js, js/91-texto.js, js/92-chat.js, js/93-config.js, js/94-cofre.js, js/95-backup.js, js/96-ponte-lab.js, js/97-cofre-arquivo.js, js/98-guia-maikon.js, js/98-montar.js, js/98-perito.js, js/98-projeto-lab.js, js/98-triagem.js, js/98-zip.js, js/98-projeto.js, js/98-ferramentas.js, js/98-organizar.js, js/98-relatorios.js, js/98-comparar.js, js/98-ia.js, js/98-expo-core.js, js/98-organizar-core.js, js/98-plano-core.js, js/98-ia.js, js/98-voz.js, js/98-importar.js, js/98-texto.js, js/98-processar.js, js/98-drive.js, js/98-regras.js, js/98-editor.js, js/98-docx.js, js/98-conversa.js, js/98-documentos.js, js/98-biblioteca.js, js/98-codigos.js, js/98-ferramentas.js, js/98-config.js, js/98-use-mobile.js, js/98-use-toast.js, js/98-extrair-texto.js, js/98-fala-aparelho.js, js/98-queryclient.js, js/98-utils.js, js/98-app.js, js/98-postcss-config.js, js/98-abrir-pronto.js, js/98-iniciar.js, js/98-chat.js, js/98-tailwind-config.js, js/98-vite-config.js, js/98-cacador-erros.js, js/98-djen.js, js/98-env.js, js/98-gemini-ponte.js, js/98-storage.js, js/98-tts.js, js/98-ollama.js, js/98-routes.js, js/98-web.js, js/98-server.js, js/98-client.js, js/98-comparador.js, js/98-colador.js, js/98-meu-chat.js, js/98-cacabug.js, js/98-colador.js, js/98-colecionador.js, js/98-comparador.js, js/98-comunicacoes.js, js/98-extrator.js, js/98-juntador.js, js/98-laboratorio.js, js/98-limpador.js, js/98-organizador.js, js/98-perito.js, js/98-mini-juridico.js, js/98-montador-universal.js, js/98-ollama.js, js/98-pwa-install.js, js/98-theme-provider.js, js/98-theme-toggle.js, js/98-tiptap-editor.js, js/98-accordion.js, js/98-alert-dialog.js, js/98-alert.js, js/98-aspect-ratio.js, js/98-avatar.js, js/98-badge.js, js/98-breadcrumb.js, js/98-button.js, js/98-calendar.js, js/98-card.js, js/98-carousel.js, js/98-chart.js, js/98-checkbox.js, js/98-collapsible.js, js/98-command.js, js/98-context-menu.js, js/98-dialog.js, js/98-drawer.js, js/98-dropdown-menu.js, js/98-form.js, js/98-hover-card.js, js/98-input-otp.js, js/98-input.js, js/98-label.js, js/98-menubar.js, js/98-navigation-menu.js, js/98-pagination.js, js/98-popover.js, js/98-progress.js, js/98-radio-group.js, js/98-resizable.js, js/98-scroll-area.js, js/98-select.js, js/98-separator.js, js/98-sheet.js, js/98-sidebar.js, js/98-skeleton.js, js/98-slider.js, js/98-switch.js, js/98-table.js, js/98-tabs.js, js/98-textarea.js, js/98-toast.js, js/98-toaster.js, js/98-toggle-group.js, js/98-toggle.js, js/98-tooltip.js, js/98-auditoria-financeira.js, js/98-code-assistant.js, js/98-comparador-juridico.js, js/98-consulta-corporativo.js, js/98-consulta-pdpj.js, js/98-consulta-processual.js, js/98-ferramentas.js, js/98-filtrador.js, js/98-jurisprudencia.js, js/98-legal-assistant.js, js/98-login.js, js/98-not-found.js, js/98-painel-processos.js, js/98-playground.js, js/98-previdenciario.js, js/98-robo-djen.js, js/98-token-generator.js, js/98-tramitacao.js, js/98-auditoria.js, js/99-app.js.
```

## 5. Conferir no final

- [ ] Abrir o index.html na prévia: aparece a tela sem erro (▤ console vazio)?
- [ ] Cada botão abre a sua parte?
- [ ] Fechar e abrir de novo: os dados continuam?
- [ ] Nada com "replit", "REPL_", "@workspace" no código (🏗️ Preparar confere).
- [ ] 📱 PWA → deixar instalável; 📦 APK ou 🖥️ .exe.
