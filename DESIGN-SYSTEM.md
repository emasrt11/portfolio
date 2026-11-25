# Design system del portfolio

Base: **shadcn/ui** (stile `new-york`) + Tailwind v4. I componenti sono in `src/components/ui/`.
Regola: **stesso nome e stesse varianti in Figma e nel codice**.

File Figma: `https://www.figma.com/design/sEAyeY8KRpkKppW9lgUCK7/` (key `sEAyeY8KRpkKppW9lgUCK7`). Il vecchio file
`1N57CN2pklBri19oLnzetJ` non è più usato.

Pagina `Foundations` in Figma, sei riquadri affiancati (l'ultimo, **Come usare i token**, nodo 27:91, è la guida per chi
disegna, chi sviluppa e per l'AI): **Tipografia** (nodo 17:21), **Colori** (19:2, primitivi,
semantici e contrasti calcolati), **Spaziature e raggi** (19:297, con la griglia a punti), **Ombre e profondità** (22:2) e
**Icone e dimensioni** (24:2). Pagina `Icons` (23:2): 28 componenti `Icon/<nome>`. Collection: `Primitives`, `Semantic`,
`Typography`, `Sizing`; stili di effetto `Elevation/1-4`. Attenzione: in Figma i post-it esistono sia tra i primitivi sia tra i semantici con lo stesso nome
(`sticky/blue`…): i componenti usano **i semantici**.

## Direzione visiva (cambiata il 2026-11-23, terza versione)

**Lavagna chiara con griglia a punti**, ispirata a FigJam: sfondo grigio chiarissimo con punti (16px), pannelli e riquadri
bianchi, miniature pastello come i post-it, azione principale in blu. Un solo tema, chiaro. Sostituisce le palette
precedenti (blu notte; editor scuro). Il riferimento fornito dall'utente è uno screenshot: sfondo `#F5F5F5`, punti da 2px
circa `#B6B6B6`, passo 17px. Il concept della home è in [CONCEPT.md](CONCEPT.md).

## Come si usano i token (regole pratiche)

1. **I componenti usano solo i semantici**, mai i primitivi. I primitivi sono i valori grezzi e si cambiano in un punto solo.
2. **Si sceglie per ruolo**, non per colore: sfondo → `bg/…`, testo → `text/…`, bordo → `border/…`, azione → `accent/strong`.
3. **Sfondo e testo vanno in coppia**: su `bg/panel` testo `text/primary` o `text/secondary`; su `accent/strong` testo
   `accent/on-strong`; su `highlight/default` testo `highlight/text`; sui post-it sempre `text/primary`.
4. **Il blu di selezione (`accent/default`) non è mai testo**; per il testo colorato e i link si usa `accent/link`.
5. **Distanze**: dentro un gruppo piccolo `space/xs`-`sm`, dentro una card `space/lg`, tra sezioni `space/3xl`-`4xl`.
6. **Ombre solo con gli stili `Elevation/…`**, non con valori a mano. Ombra più alta = elemento più "sopra".
7. **Testo solo con gli stili `Text/…`**: non cambiare a mano famiglia, peso o misura.

Ogni variabile, stile e componente ha in Figma una **descrizione d'uso** (quando usarlo e quando no): si legge aprendo la
variabile nel pannello Variabili (campo Description) e in Dev Mode. Le descrizioni dei primitivi dicono da quali semantici
sono usati.

### Istruzioni per un'AI o uno script

Stesso contenuto del riquadro Figma "Come usare i token" (27:91):

1. Usa solo token che esistono (questo file e la pagina Foundations di Figma).
2. Nei componenti solo i **semantici**; i primitivi mai. Leggi la Description della variabile per scegliere.
3. **Non inventare valori** (hex, px, ombre, raggi, font a mano). Se serve un valore nuovo, proponi un token e chiedi conferma.
4. Abbina sempre sfondo e testo come nella tabella dei contrasti; dopo ogni nuova coppia verifica ≥ 4,5 (testo) o ≥ 3 (grafica).
5. Nel codice usa i ruoli Tailwind o le variabili CSS; in Figma i nomi con la barra.
6. Le icone sono Lucide (`lucide-react`; in Figma la pagina `Icons`).
7. Se due token sembrano adatti, scegli quello con la descrizione più vicina e, nel dubbio, chiedi.

| Figma | CSS | Tailwind |
|---|---|---|
| bg/canvas · bg/panel · bg/raised | `--bg-canvas` · `--bg-panel` · `--bg-raised` | `bg-background` · `bg-surface` · `bg-raised` |
| text/primary · text/secondary | `--text-primary` · `--text-secondary` | `text-foreground` · `text-muted-foreground` |
| border/default · border/strong | `--border-default` · `--border-strong` | `border-border` · `border-border-strong` |
| accent/strong-hover · accent/strong-pressed | `--accent-strong-hover` · `--accent-strong-pressed` | `bg-action-hover` · `bg-action-pressed` |
| bg/raised-hover · bg/raised-pressed | `--bg-raised-hover` · `--bg-raised-pressed` | `bg-raised-hover` · `bg-raised-pressed` |
| bg/disabled · text/disabled | `--bg-disabled` · `--text-disabled` | `bg-disabled` · `text-disabled-foreground` |
| accent/strong · accent/on-strong | `--accent-strong` · `--accent-on-strong` | `bg-primary` / `text-brand` · `text-primary-foreground` |
| accent/default · accent/link · accent/subtle | `--accent` · `--accent-link` · `--accent-subtle` | `ring-ring` · `text-link` · `bg-subtle` |
| sticky/blue … | `--sticky-blue` … | `bg-sticky-blue` … |
| space/xs … 4xl | `--space-xs` … `--space-4xl` | `p-1` … `p-12` (4, 8, 12, 16, 20, 24, 32, 48 px) |
| radius/sm · radius/md · radius/lg | `--radius-sm` · `--radius-md` · `--radius-lg` | `rounded-sm` · `rounded-md` · `rounded-lg` |
| Elevation/1-4 | `--shadow-e1` … `--shadow-e4` | `shadow-e1` … `shadow-e4` |
| Text/Display … Label | `--text-h1`, `--text-h1--line-height`… | `type-display`, `type-h1` … `type-label` |
| control/…, icon/… | `--control-md`, `--icon-md`… | `h-[var(--control-md)]`, `size-[var(--icon-md)]` |

Colori delle ombre: `--shadow-color-ambient`, `--shadow-color-e1` … `e4`. Pesi: `--weight-regular` … `--weight-black`.
Misure del testo: `--size-14` … `--size-112`.

## Token (fonte: `src/index.css`)

Due livelli, uguali in Figma (collection `Primitives` e `Semantic`) e nel codice.

### Primitivi (nascosti dai selettori in Figma)

| Token | Valore | | Token | Valore |
|---|---|---|---|---|
| white | #ffffff | | blue/50 | #e5f4ff |
| neutral/50 | #f5f5f5 | | blue/600 | #0b8fe8 |
| neutral/100 | #ededed | | blue/700 | #0b6bc2 |
| neutral/200 | #e3e3e3 | | blue/800 | #0a5aa3 |
| neutral/250 | #cdcdcd | | blue/900 | #084a85 |
| neutral/300 | #b6b6b6 | | purple/600 | #7b4dd8 |
| neutral/400 | #8f8f8f | | yellow/400 | #ffcd29 |
| neutral/600 | #6b6b6b | | green/500 | #14ae5c |
| neutral/900 | #1e1e1e | | red/500 | #f24822 |
| | | | yellow/200, purple/200, blue/200, green/200 (post-it) | #ffe066, #cdb4ff, #a8daff, #a8f0c6 |

Anche `radius/4`, `radius/8`, `radius/12` e le spaziature `space/4`…`space/48`. Nel codice: `--color-neutral-50`, ecc. (`@theme`).

### Semantici (alias dei primitivi, quelli che usano i componenti)

| Semantico | Primitivo | Uso | Variabile CSS |
|---|---|---|---|
| bg/canvas | neutral/50 | sfondo della lavagna | --bg-canvas |
| bg/panel | white | pannelli, card, riquadri | --bg-panel |
| bg/raised | neutral/100 | hover, bottone secondario | --bg-raised |
| text/primary | neutral/900 | testo | --text-primary |
| text/secondary | neutral/600 | testo secondario | --text-secondary |
| border/default | neutral/200 | bordi decorativi | --border-default |
| border/strong | neutral/400 | bordi di controlli | --border-strong |
| accent/strong, accent/on-strong | blue/700, white | azione principale, link, titoli colorati | --accent-strong, --accent-on-strong |
| accent/default, accent/text | blue/600, neutral/900 | selezione e focus (non testo); testo su di esso | --accent, --accent-text |
| accent/subtle | blue/50 | voce selezionata nei livelli | --accent-subtle |
| accent/link | blue/700 | link | --accent-link |
| highlight/default, highlight/text | yellow/400, neutral/900 | dettagli | --highlight, --highlight-text |
| status/success, status/danger | green/500, red/500 | solo elementi grafici (stato) | --status-success, --status-danger |
| canvas/dot | neutral/300 | punti della griglia | --canvas-dot |
| sticky/blue, purple, yellow, green | blue/200, purple/200, yellow/200, green/200 | miniature e riquadri pastello | --sticky-blue... |
| radius/sm, radius/md, radius/lg | radius/4, radius/8, radius/12 | riquadri e bottoni (4), pannelli (8), finestre in primo piano (12, per ora non usato) | --radius-sm, --radius-md, --radius-lg |
| space/xs…4xl | space/4…48 | spaziature (4, 8, 12, 16, 20, 24, 32, 48) | --space-xs… |

Nel codice i componenti usano i **ruoli** (`bg-background`, `bg-surface`, `text-foreground`, `bg-primary`...), alias dei
semantici. La griglia a punti è nel `body` (`radial-gradient` ogni 16px); in Figma è un solo vettore di punti.

### Contrasti (calcolati)

- Testo `#1e1e1e`: 15,3 su canvas, 16,7 su pannello. Testo secondario `#6b6b6b`: 4,9 su canvas, 5,3 su pannello.
- **Azione principale: blu `#0b6bc2` con testo bianco** (5,4). Il blu di selezione e focus `#0b8fe8` (`accent/default`) ha
  3,2 sul canvas e 3,4 sul bianco: supera il 3:1 richiesto agli anelli e ai bordi, ma non è un colore da testo. Con testo
  scuro `#1e1e1e` fa 4,9 (pillola dell'etichetta selezionata); col bianco solo 3,4, quindi mai testo bianco su questo blu.
  *Correzione 2026-11-24:* il valore precedente `#0d99ff` faceva 2,8 sul canvas, sotto la soglia per gli anelli.
- Link `#0b6bc2`: 5,4 su pannello, 4,9 su canvas. Viola `#7b4dd8` (solo primitivo, nessun ruolo per ora): 5,4 su pannello.
- Testo scuro sui pastello: 9,2 (viola), 11,2 (blu), 12,7 (verde), 12,8 (giallo).
- Rosso (3,7) e verde (≈4,4) sono solo per elementi grafici di stato, mai per testo.
- Bordi: `border/strong` (3,2 su bianco) per i controlli; `border/default` (1,3) è solo decorativo.
- I punti della griglia (1,9 su canvas) sono decorativi.

## Stati dei controlli (bottoni)

Cinque stati, tutti con token (nessun valore a mano):

| Stato | Primary | Secondary | Outline | Ghost |
|---|---|---|---|---|
| Default | `accent/strong` | `bg/raised` | bordo `border/strong` | testo `text/primary`, nessun fondo |
| Hover | `accent/strong-hover` | `bg/raised-hover` | fondo `bg/raised` | fondo `bg/raised` |
| Focus | come Default + anello | come Default + anello | solo anello | solo anello |
| Pressed | `accent/strong-pressed` | `bg/raised-pressed` | fondo `bg/raised-hover` | fondo `bg/raised-hover` |
| Disabled | fondo `bg/disabled`, testo `text/disabled` | idem | bordo `border/default`, testo `text/disabled` | testo `text/disabled` |

- **Ghost** (2026-11-24) è la variante neutra e senza fondo, per azioni discrete e barre strumenti; ha sostituito la
  vecchia Ghost azzurra (stile link) e la variante provvisoria "Quiet". Stesso nome di `variant="ghost"` in shadcn/ui.
  I link dei Contatti sono Ghost con l'icona freccia a destra; un'eventuale variante *Link* (testo azzurro) si può
  aggiungere se servirà. Padding laterale `space/sm`, `space/md`, `space/lg` (sm, md, lg).
- **Anello di focus (2026-11-24):** tratto di 2 px `accent/default` **staccato di 2 px** dal controllo, così si distingue
  anche dal bottone blu. In Figma è il livello `Anello di focus` dentro ogni variante Focus (raggio `radius/md`); nel
  codice `focus-visible:outline-2 outline-offset-2 outline-ring` (lo spazio resta trasparente). Il bordo dell'Outline
  resta visibile. Il disabled ha contrasto basso per scelta (non è interattivo).
- **Stati non inclusi per ora:** *Loading* (se ci sarà un modulo di contatto) e *Selected/On* (per pulsanti a interruttore,
  per esempio il cambio vista lavagna/lista).
- **Colore delle icone:** variabile `icon/color` (collection `Icon color`) con quattro modalità: Default (testo), On strong
  (su fondo blu), Link (blu, oggi non usata) e Disabled (grigio). Ogni controllo imposta la modalità e le icone al suo
  interno la seguono, anche se vengono sostituite. Nel codice è `currentColor`.
- **Taglie:** sm 32 px (icona 16), md 40 (icona 20), lg 48 (icona 24). Padding laterale `space/md`, `space/lg`, `space/xl`
  (Ghost: `space/sm`, `space/md`, `space/lg`).
- Token degli stati: primitivi `blue/800`, `blue/900`, `neutral/250`; semantici `accent/strong-hover`,
  `accent/strong-pressed`, `bg/raised-hover`, `bg/raised-pressed`, `bg/disabled`, `text/disabled`.

## Ombre e profondità

Quattro livelli a due strati (uno vicino, uno ambientale), colore `neutral/900` con trasparenza. Oggi il sito usa quasi
solo bordi: servono per barra strumenti, pannelli, menu e finestre. Figma: stili di effetto `Elevation/1-4` con colore
legato alle variabili `shadow/ambient`, `shadow/e1`…`e4`. Codice: `shadow-e1` … `shadow-e4`.

| Livello | Strati (y · sfocatura · opacità) | Uso |
|---|---|---|
| Elevation/1 | 1·2·6% + 1·3·8% | riquadri a riposo, card in hover |
| Elevation/2 | 1·2·6% + 4·12·12% | barra strumenti, pannello Livelli |
| Elevation/3 | 2·4·6% + 8·24·16% | menu, tooltip, riquadro trascinato |
| Elevation/4 | 4·8·6% + 16·48·20% | dialog, riquadro a tutto schermo |

Livelli sovrapposti (`--z-*`): canvas 0 · riquadri 10 · riquadro trascinato 20 · pannelli e barra 30 · menu e tooltip 40 ·
dialog 50 · notifiche 60.

## Icone e dimensioni

Icone **Lucide** (`lucide-react`, la libreria usata da shadcn/ui; licenza ISC): linea su griglia 24, estremi arrotondati.
34 icone nella pagina `Icons`; colore e spessore dal tratto (`icon/color` e `icon/stroke-width`).

**Spessore del tratto per taglia (2026-11-24, scelto dal designer).** Con il tratto fisso da 2 px le icone dettagliate (mano,
livelli, LinkedIn, mappa) si impastavano a 16 e 20 px, e in Figma risultavano più pesanti di come lucide-react le disegna
(che scala il tratto con la taglia). Ora lo spessore dipende dalla taglia, con la variabile `icon/stroke-width` (collection
`Icon size`, modalità `sm · 16` = 1,5; `md · 20` = 1,75; `lg · 24` = 2, predefinita; `xl · 32` = 2,5). Ogni controllo
(Button, Icon Button, Layer Item) imposta la modalità della sua taglia e le icone al suo interno la seguono, anche se
vengono sostituite. Nel codice: `<Icon size={16} strokeWidth={1.5} absoluteStrokeWidth />` (e 1,75 a 20, 2 a 24, 2,5 a 32);
le variabili CSS sono `--icon-stroke-sm`, `-md`, `-lg`, `-xl`, e `--icon-stroke-width` (= lg, il predefinito; è il nome che Figma mostra in Dev Mode). Con le classi di shadcn (`size-4`) va passato anche `strokeWidth`.

| Token (collection `Sizing`) | Valore | Uso |
|---|---|---|
| icon/sm, md, lg, xl | 16, 20, 24, 32 | taglie delle icone; si usa quella dell'altezza del controllo |
| control/sm, md, lg | 32, 40, 48 | altezze di bottoni e campi (icona 16, 20, 24); il Button attuale è alto 48 = `lg` |
| stroke/thin | 1 | bordi |
| hit/min | 44 | area di tocco minima consigliata sul mobile |

Icone previste: arrow-right, arrow-up-right, external-link, plus, minus, x, check, menu, search, mail, file-text, copy,
link, layers, frame, maximize, expand, layout-dashboard, zoom-in, zoom-out, map, user, house, hand, mouse-pointer-2, linkedin, chevron-down,
chevron-right, info, grip-vertical, panel-left-close, panel-left-open, list-chevrons-up-down, list-chevrons-down-up (uso di
ciascuna nel riquadro Figma). Le ultime quattro (scelte dall'utente) servono al pannello Livelli: `panel-left-close` chiude
il pannello aperto, `panel-left-open` apre quello chiuso; `list-chevrons-down-up` comprime una sezione espansa,
`list-chevrons-up-down` espande una sezione compressa. Le prime 30 (comprese `expand`, `layout-dashboard`) vengono da `lucide-static` 0.460.0; queste quattro dalla
1.40.0 (nella 0.460.0 le due "list-chevrons" non esistono). Nel codice basta `lucide-react` aggiornato a una versione che le includa.

## Tipografia

Cambiata il 2026-11-24: titoli in **Fraunces** (serif moderno), testi in **Inter**. Il peso dei titoli **scende con la
misura** (proposta A, scelta dall'utente): Black per Display e H1, Bold per H2, SemiBold da H3 in giù. Figma ha solo i pesi
statici di Fraunces (Regular, SemiBold, Bold, Black), quindi la rampa usa questi e il codice usa gli stessi, per avere lo
stesso risultato. Nel browser Fraunces adatta in più l'asse "optical size" (forme più robuste a misure piccole): il sito
sarà leggermente più leggibile del disegno sui titoli piccoli.

Pagina `Foundations` di Figma: riquadro `Foundations · Tipografia` (nodo 17:21). Stili in Figma (`Text/...`), misure
desktop; nel codice le utility `type-display`, `type-h1`… in `src/index.css`:

| Stile | Font | Misura / interlinea / spaziatura | Uso |
|---|---|---|---|
| Display | Fraunces Black 900 | 112 / 100% / -2% | titolo della home |
| H1 | Fraunces Black 900 | 80 / 103% / -2% | titoli di pagina |
| H2 | Fraunces Bold 700 | 56 / 108% / -1,5% | titoli di sezione |
| H3 | Fraunces SemiBold 600 | 40 / 112% / -1% | sottosezioni |
| H4 | Fraunces SemiBold 600 | 28 / 118% / -0,5% | titolo di card |
| H5 | Fraunces SemiBold 600 | 22 / 125% | titolo di card piccola |
| Lead | Inter Regular 400 | 24 / 140% | introduzioni |
| Body | Inter Regular 400 | 20 / 160% | testo corrente |
| Small | Inter Regular 400 | 16 / 150% | didascalie, link |
| Small Medium | Inter Medium 500 | 16 / 150% | bottoni |
| Label | Inter Medium 500, maiuscolo | 14 / 140% / +8% | categorie, anni |

### Token tipografici (Figma: collection `Typography`)

`font/heading` = Fraunces, `font/body` = Inter (famiglie); `weight/regular` 400, `medium` 500, `semibold` 600, `bold` 700,
`black` 900; `size/14`, `16`, `20`, `22`, `24`, `28`, `40`, `56`, `80`, `112`. Gli stili di testo sono legati a famiglia,
peso e misura tramite queste variabili (cambiando un token cambiano tutti gli stili). Interlinea e spaziatura restano
nello stile (in percentuale). Nel codice: `--font-heading`, `--font-sans`, `--text-h1`… e `--text-h1--line-height`….

Le versioni mobile si definiscono con le pagine.

## Stato di sviluppo dei componenti

Ogni riquadro `Componenti · …` di Figma ha in alto un **tag** (componente `Stato sviluppo`, proprietà `Stato`; la legenda è nel riquadro
`Componenti · Stato sviluppo`) e la Description del componente riporta la riga "Stato sviluppo: …". Il tag e questa tabella vanno
**sempre tenuti uguali**.

| Stato | Significato |
|---|---|
| Da sviluppare | Solo disegnato in Figma, nessun codice |
| In verifica | Codice scritto, ma build (`npm run build` in Codespaces) e resa sul web ancora da controllare |
| Sviluppato | Verificato dal designer: build ok e resa uguale a Figma |
| Da aggiornare | Modificato in Figma (o nel design system) **dopo** lo sviluppo: il codice va allineato |

**Regole.** (1) Chi scrive o aggiorna il codice di un componente lo porta a *In verifica*; solo il designer, dopo il controllo,
lo porta a *Sviluppato*. (2) Qualunque modifica a un componente *In verifica* o *Sviluppato* in Figma lo riporta a *Da
aggiornare*, nel tag e qui. (3) Un componente con stato *Da aggiornare* torna a *In verifica* quando il codice è allineato.

| Componente | Figma | Bozza HTML | React (`src/components/ui/`) | Stato | Note |
|---|---|---|---|---|---|
| Button | sì | sì | `button.tsx` | Sviluppato | allineato a Figma il 2026-11-24; build verde e misure verificate sul sito pubblicato (altezze, padding, raggio, font, colori di Default/Hover/Pressed/Disabled, anello di focus, icone 16/20/24 con il loro spessore); pagina `App.tsx` per il confronto |
| Icon Button | sì | sì | `icon-button.tsx` | Sviluppato | nuovo, stesse verifiche del Button; `aria-label` obbligatorio |
| Icone | sì (34) | sì | `lucide-react` | In verifica | build verde; usate nel sito `ArrowRight`, `Expand`, `Plus`, `X`; `LayoutDashboard` e le altre non ancora usate da nessuna pagina |
| Toolbar | sì (con Riordina) | sì | — | Da sviluppare | |
| Layer Item, Layers Panel, Section Header | sì | in parte | — | Da sviluppare | la bozza non ha ancora le sezioni comprimibili |
| Frame Label, Board Frame | sì | sì | — | Da sviluppare | un solo stato governa etichetta e riquadro |
| Project Frame | sì (con Espandi) | sì | — | Da sviluppare | |
| Hero Frame, About Frame, Contact Frame | sì | sì | — | Da sviluppare | |
| Esperienze (riquadro e pagina) | sì (frame) | sì | — | Da sviluppare | non ancora un componente Figma |
| Overlay delle pagine, zoom al clic, griglia adattiva, Riordina | descritti | sì | — | Da sviluppare | comportamenti della lavagna, vedi sopra |

## Mappatura Figma ↔ codice

| Componente Figma | File nel repo | Varianti | Link Figma |
|---|---|---|---|
| Button | `src/components/ui/button.tsx` | Figma (60 varianti): Variant=Primary\|Secondary\|Outline\|Ghost × Size=sm\|md\|lg × State=Default\|Hover\|Focus\|Pressed\|Disabled; proprietà Label, Show left icon / Left icon, Show right icon / Right icon. Codice (allineato il 2026-11-24): `variant` primary (predefinita) \| secondary \| outline \| ghost × `size` sm \| md \| lg; stati via `hover:`, `active:`, `focus-visible:`, `disabled:`; padding 12/16/20 px (Ghost 8/12/16); icone 16/20/24 con il loro spessore. La variante `link` di shadcn è stata tolta (in Figma non c'è) | https://www.figma.com/design/sEAyeY8KRpkKppW9lgUCK7/?node-id=6-50 |
| Icon Button | `src/components/ui/icon-button.tsx` (stesse varianti e taglie del Button, riuso di `controlVariant`) | Figma (60 varianti): Variant × Size × State come il Button, quadrato 32/40/48; proprietà Icon (sostituibile). Serve sempre un'etichetta accessibile (`aria-label`) | nodo "Componenti · Icon Button" |
| Badge | `src/components/ui/badge.tsx` | variant: default, secondary, outline | da aggiungere |
| Card | `src/components/ui/card.tsx` | Header, Title, Description, Content | da aggiungere |
| Project Frame (riquadro progetto) | da creare | Accent=Blue\|Purple\|Yellow\|Green; proprietà Meta, Title, Description. In fondo il bottone **Espandi** (istanza di Button Outline md, icona `expand`): è l'unico modo per aprire il progetto; il clic sul riquadro lo seleziona e porta lo zoom su di lui | https://www.figma.com/design/sEAyeY8KRpkKppW9lgUCK7/?node-id=8-76 |
| Frame Label | da creare | State=Default\|Hover\|Selected\|Dragging. Il nome sta in una pillola con **lo stesso colore dell'anello del riquadro**: Default nessun fondo, testo `text/secondary`; Hover fondo `accent/subtle`, testo `text/primary`; Selected fondo `accent/default`, testo `accent/text` (scuro, 4,9:1: il bianco su quel blu fa solo 3,4:1); Dragging fondo `accent/strong-pressed` (blu notte, 2,6:1 dal Selected: si distingue a colpo d'occhio), testo `accent/on-strong`. Stessa struttura e altezza (32) in tutti gli stati, così il riquadro non si sposta. Il simbolo ✦ separa nome e Meta. Proprietà Nome, Meta (predefinito "Case study") | nodo 45:328 |
| Board Frame | da creare | **Un solo stato governa insieme etichetta e riquadro**: State=Default\|Hover (ombra Elevation/2, pillola `accent/subtle`)\|Selected (anello 2 px `accent/default` e pillola dello stesso colore)\|Dragging (anello 2 px `accent/strong-pressed`, pillola dello stesso colore e Elevation/3). Il colore dell'etichetta coincide sempre con quello dell'anello. Il contenuto è uno **slot** (proprietà `Contenuto`, 2026-11-24): vuoto di regole, accetta qualsiasi elemento; contenuti consigliati Hero Frame, About Frame, Contact Frame e Project Frame (di partenza un Project Frame). Nel codice è `children`. La larghezza si imposta sull'istanza e il contenuto la segue. Le proprietà dell'etichetta sono esposte. La voce selezionata nel Layers Panel (Layer Item Selected) e il Board Frame Selected sono sempre la stessa sezione | nodo 45:428 |
| Hero Frame, About Frame, Contact Frame | da creare | contenuti dei riquadri Home, Chi sono, Contatti (larghezze 720, 252, 420). Il riquadro Chi sono ha il bottone **Espandi** (Button Outline md, icona `expand`), che apre la pagina in overlay (vedi sotto) | nodi 45:352, 45:357, 45:362 |
| Esperienze (riquadro e pagina) | da creare | **Riquadro** (nodo 80:1084, 560 px, proposta C approvata il 2026-11-24): fascia `sticky/blue` con data ("Da marzo 2025") e ruolo (H4), poi azienda, una riga di descrizione, "+ 3 esperienze precedenti" e il bottone Espandi; mostra solo l'esperienza attuale. **Pagina** in overlay (nodo 81:1058, proposta 1 approvata): titolo H2 "Esperienze" con testo introduttivo, poi **linea del tempo** a tre colonne (periodo e luogo · punto e filo · dettaglio); l'esperienza attuale ha il punto `accent/strong` e il dettaglio su fondo `accent/subtle`, le altre punto `border/strong` e fondo bianco; azienda in H3, ruolo, elenco puntato delle attività. Contenuti dal curriculum (bozza da rivedere; niente email né telefono). Per ora sono frame, non ancora componenti | nodi 80:1084, 81:1058 |
| Layer Item | da creare | State=Default\|Hover\|Focus\|Pressed\|Selected; proprietà Label e Icon (sostituibile, di default `frame`). Selected: fondo `accent/subtle`, icona blu (modalità Link di `icon/color`). Focus: anello 2 px `accent/default` staccato di 2 px. Altezza `control/sm` (32) | nodo 8:55 |
| Layers Panel | da creare | Figma (5 varianti): Panel=Open\|Closed, Sezioni=Expanded\|Collapsed, Progetti=Expanded\|Collapsed (il Closed mostra solo l'intestazione con nome e ruolo). Composto da Layer Item e Section Header; il pulsante in alto apre e chiude il pannello, quello accanto a ogni titolo di sezione comprime le sue voci. Home con icona `house`, progetti con `frame`, Chi sono con `user`, Contatti con `mail`; livello Elevation/2; navigazione del canvas (ogni voce porta al riquadro) | nodo 41:408 |
| Section Header | da creare | State=Expanded\|Collapsed; proprietà Label. Titolo + Icon Button Ghost sm: espansa = `list-chevrons-down-up` (comprime), compressa = `list-chevrons-up-down` (espande). Il pulsante in alto del pannello usa `panel-left-close` (aperto) e `panel-left-open` (chiuso) | nodo 41:217 |
| Toolbar | da creare | composta da istanze di Icon Button (zoom − e +) e Button (Adatta, Riordina, Vista lista), tutti nella variante Ghost, taglia md; separatore e valore dello zoom; livello Elevation/2. **Riordina** (icona `layout-dashboard`) compare solo se un riquadro è stato spostato: nel componente è controllato dalla proprietà booleana `Mostra Riordina` (predefinita spenta), nel codice dal fatto che almeno un riquadro non sia nella posizione originale. Nel riquadro Componenti · Toolbar c'è anche un esempio con la proprietà accesa | nodo 8:82 |

Home a canvas: pagina `Home Canvas`, frame `Home · Canvas 1440` (nodo 10:76).

**Comportamenti della lavagna (decisi il 2026-11-24, provati nella bozza `public/bozza/index.html`).**
- **Clic su un riquadro:** lo seleziona e avvicina lo zoom su di lui, con la stessa animazione del pannello Livelli. Il contenuto (case study o pagina Chi sono) si apre **solo** con il bottone Espandi.
- **Pagine in overlay (Chi sono, Esperienze):** ogni riquadro con una pagina ha il suo overlay, collegato dal bottone Espandi; si apre uno alla volta. Il comportamento è identico (dettagli qui sotto).
- **Pagina Chi sono in overlay:** larghezza 90% della viewport (massimo 1600 px), altezza del contenuto, centrata con 48 px sopra e sotto; scorre dentro l'overlay. Sfondo: la lavagna con velo `bg/canvas` al 60% e sfocatura di 16 px. Intestazione di sola X (Icon Button Ghost md, `x`), alta circa 52 px e fissa allo scorrimento; si chiude anche con Esc e con un clic fuori dal pannello. Apertura: il pannello cresce dal riquadro Chi sono (≈0,5 s) e le sezioni entrano dal basso a 70 ms l'una dall'altra; chiusura più rapida (≈0,3 s). Con `prefers-reduced-motion` niente animazioni. Il contenuto della pagina è la proposta D (Metodo, Strumenti, Esperienze, Parliamone), provvisoria.
- **Griglia a punti adattiva:** il passo sullo schermo resta tra 12 e 24 px (a 33% di zoom il passo raddoppia, a 200% si dimezza); i livelli sono multipli, quindi i punti restano allineati.
- **Larghezze dei riquadri:** non tutte uguali, per dare ritmo alla lavagna. Valori usati finora: Home 720, Esperienze 560, Contatti 380–420, Chi sono 270–360, progetti 300–340. La disposizione definitiva (posizioni e larghezze) si decide **a lavoro concluso**; una prova è nella pagina `Archivio` di Figma (panoramica "Lavagna · Larghezze diverse").
- **Riordina:** i riquadri spostati si riportano nella disposizione originale con un'animazione (≈0,55 s); le posizioni non si salvano tra una visita e l'altra.

Organizzazione in Figma: nella pagina `Components` ogni componente ha un riquadro `Componenti · <nome>` (Button, Icon
Button, Toolbar, Layer Item, Layers Panel, Frame Label, Project Frame; il vecchio Toolbar Button è stato sostituito da
Icon Button e Button Ghost) con titolo e varianti, come le Foundations; nella
pagina `Icons` il riquadro `Componenti · Icone` raccoglie le 34 icone. Le proposte scartate stanno nella pagina `Archivio` (Chi sono A, B, C e la base iniziale, la panoramica delle larghezze, le prove di larghezza di Esperienze): non si cancellano finché possono servire. Sulla `Home Canvas` restano solo le cose approvate (Chi sono proposta D, Esperienze riquadro C e pagina 1). I riquadri di verifica con istanze sono stati rimossi.
