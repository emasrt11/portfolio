# Portfolio di Emanuele Sirtori: istruzioni per l'AI

Sito portfolio personale di un UX/UI designer. Non c'entra con altri progetti. Lingua del progetto: **italiano** (testi del
sito, commenti, documentazione). Il designer decide l'aspetto: proponi, mostra, e chiedi conferma sulle scelte importanti.

## Leggi prima di lavorare
- [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md): token, tipografia, ombre, icone, dimensioni, componenti e **regole d'uso dei token**.
- [CONCEPT.md](CONCEPT.md): l'idea del sito (home come canvas in stile lavagna), le decisioni prese e quelle ancora aperte.

## Stack
Vite + React + TypeScript + Tailwind v4 + shadcn/ui (stile `new-york`). Icone `lucide-react`. Alias `@` = `src`.
Componenti in `src/components/ui/`. Token e utility tipografiche in `src/index.css`. Pubblicazione: GitHub Pages con
`.github/workflows/deploy.yml` a ogni push su `main`.

## Ambiente (importante)
Sul PC del designer **non c'è Node né Git** e gli script sono bloccati. Sviluppo e anteprima si fanno in **GitHub Codespaces**:
`npm install`, `npm run dev` (anteprima), `npm run build` (controllo tipi e build). Non presumere strumenti locali. Se non puoi
eseguire la build o provare una modifica, **dillo chiaramente**: non dire che funziona senza averlo verificato.

## Regole sui token (da rispettare sempre)
1. Nei componenti usa solo i **token semantici** (via ruoli Tailwind o variabili CSS); i primitivi mai.
2. Scegli **per ruolo** (sfondo, testo, bordo, azione), non per colore. Sfondo e testo vanno **in coppia** come nella tabella
   dei contrasti (vedi DESIGN-SYSTEM.md).
3. **Non inventare valori**: niente hex, px, ombre, raggi o font scritti a mano. Se serve un valore che non esiste, proponi un
   nuovo token e chiedi conferma (poi va aggiunto sia in Figma sia in `src/index.css` sia in DESIGN-SYSTEM.md).
4. Il blu di selezione (`--accent`) non è mai testo: per link e testo colorato `--accent-link`. Sui bottoni principali:
   fondo `--accent-strong`, testo `--accent-on-strong`.
5. Testo solo con le utility `type-*` (famiglia, peso, misura e interlinea della scala). Ombre solo con `shadow-e1` … `e4`.
   Spaziature solo dalla scala (4, 8, 12, 16, 20, 24, 32, 48 px).
6. Contrasto minimo 4,5:1 per il testo e 3:1 per elementi grafici e controlli. Verifica ogni nuova coppia di colori.
7. Tabella di traduzione Figma ↔ CSS ↔ Tailwind: in DESIGN-SYSTEM.md, sezione "Istruzioni per un'AI o uno script".

## Convenzioni di codice
- Stessi **nomi e varianti** in Figma e nel codice (Button: Primary, Secondary, Outline, Ghost). Se aggiungi o cambi un
  componente, aggiorna la tabella "Mappatura Figma ↔ codice" in DESIGN-SYSTEM.md.
- Il contenuto dei riquadri deve essere **testo reale nell'HTML** (non immagini), per accessibilità e indicizzazione.
- Accessibilità: navigazione da tastiera (anche per spostare i riquadri del canvas), focus visibile, etichette sui controlli,
  alternativa alla vista canvas (lista), e rispetto di `prefers-reduced-motion` (niente zoom animato né movimenti).
- Animazioni sobrie e con uno scopo; solo CSS e un po' di JavaScript. Niente librerie pesanti senza chiedere.
- Il mobile si decide per ultimo (orientamento: canvas con gesti). Non progettarlo prima.
- Il sito è pubblico: **non inserire** email o altri dati personali nel codice, né contenuti di clienti o datori di lavoro
  (per esempio i case study di Opyn ed Emporium) senza conferma esplicita del designer.

## Come lavorare con il designer
- Procedi un passo alla volta e **mostra il risultato visivo** (screenshot, anteprima) a ogni passo.
- Spiega in modo semplice, senza dare per scontato che conosca Git, npm o il terminale: indica i passi da fare.
- Quando due strade sono valide, proponi una raccomandazione e chiedi; non decidere in silenzio.
- Riporta sempre cosa è stato verificato e cosa no.
