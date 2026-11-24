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
| accent/strong · accent/on-strong | `--accent-strong` · `--accent-on-strong` | `bg-primary` / `text-brand` · `text-primary-foreground` |
| accent/default · accent/link · accent/subtle | `--accent` · `--accent-link` · `--accent-subtle` | `ring-ring` · `text-link` · `bg-subtle` |
| sticky/blue … | `--sticky-blue` … | `bg-sticky-blue` … |
| space/xs … 4xl | `--space-xs` … `--space-4xl` | `p-1` … `p-12` (4, 8, 12, 16, 20, 24, 32, 48 px) |
| radius/sm · radius/base | `--radius-sm` · `--radius` | `rounded-sm` · `rounded-lg` |
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
| neutral/50 | #f5f5f5 | | blue/500 | #0d99ff |
| neutral/100 | #ededed | | blue/700 | #0b6bc2 |
| neutral/200 | #e3e3e3 | | purple/600 | #7b4dd8 |
| neutral/300 | #b6b6b6 | | yellow/400 | #ffcd29 |
| neutral/400 | #8f8f8f | | green/500 | #14ae5c |
| neutral/600 | #6b6b6b | | red/500 | #f24822 |
| neutral/900 | #1e1e1e | | sticky/yellow, purple, blue, green | #ffe066, #cdb4ff, #a8daff, #a8f0c6 |

Anche `radius/4`, `radius/8` e le spaziature `space/4`…`space/48`. Nel codice: `--color-neutral-50`, ecc. (`@theme`).

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
| accent/default, accent/text | blue/500, neutral/900 | selezione e focus (non testo); testo su di esso | --accent, --accent-text |
| accent/subtle | blue/50 | voce selezionata nei livelli | --accent-subtle |
| accent/link | blue/700 | link | --accent-link |
| accent/purple | purple/600 | accento secondario | --accent-purple |
| highlight/default, highlight/text | yellow/400, neutral/900 | dettagli | --highlight, --highlight-text |
| status/success, status/danger | green/500, red/500 | solo elementi grafici (stato) | --status-success, --status-danger |
| canvas/dot | neutral/300 | punti della griglia | --canvas-dot |
| sticky/blue, purple, yellow, green | sticky/... | miniature e riquadri pastello | --sticky-blue... |
| radius/base, radius/sm | radius/8, radius/4 | raggio base e raggio netto (4) | --radius, --radius-sm |
| space/xs…4xl | space/4…48 | spaziature (4, 8, 12, 16, 20, 24, 32, 48) | --space-xs… |

Nel codice i componenti usano i **ruoli** (`bg-background`, `bg-surface`, `text-foreground`, `bg-primary`...), alias dei
semantici. La griglia a punti è nel `body` (`radial-gradient` ogni 16px); in Figma è un solo vettore di punti.

### Contrasti (calcolati)

- Testo `#1e1e1e`: 15,3 su canvas, 16,7 su pannello. Testo secondario `#6b6b6b`: 4,9 su canvas, 5,3 su pannello.
- **Azione principale: blu `#0b6bc2` con testo bianco** (5,4). Il blu `#0d99ff` fa solo 3,0 su bianco: serve solo per
  selezione e focus, e con testo scuro `#1e1e1e` (5,6), mai come testo.
- Link `#0b6bc2`: 5,4 su pannello, 4,9 su canvas. Viola `#7b4dd8`: 5,4 su pannello.
- Testo scuro sui pastello: 9,2 (viola), 11,2 (blu), 12,7 (verde), 12,8 (giallo).
- Rosso (3,7) e verde (≈4,4) sono solo per elementi grafici di stato, mai per testo.
- Bordi: `border/strong` (3,2 su bianco) per i controlli; `border/default` (1,3) è solo decorativo.
- I punti della griglia (1,9 su canvas) sono decorativi.

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

Icone **Lucide** (`lucide-react`, la libreria usata da shadcn/ui; licenza ISC, v0.460.0): linea, tratto 2 su griglia 24.
28 icone nella pagina `Icons`; colore e spessore dal tratto (`text/primary`, `stroke/icon`). In Figma si ridimensionano con
la scala (`rescale`) perché il tratto resti proporzionale, come sul web.

| Token (collection `Sizing`) | Valore | Uso |
|---|---|---|
| icon/sm, md, lg, xl | 16, 20, 24, 32 | taglie delle icone; si usa quella dell'altezza del controllo |
| control/sm, md, lg | 32, 40, 48 | altezze di bottoni e campi (icona 16, 20, 24); il Button attuale è alto 48 = `lg` |
| stroke/thin, stroke/icon | 1, 2 | bordi e tratto delle icone |
| hit/min | 44 | area di tocco minima consigliata sul mobile |

Icone previste: arrow-right, arrow-up-right, external-link, plus, minus, x, check, menu, search, mail, file-text, copy,
link, layers, frame, maximize, zoom-in, zoom-out, map, user, house, hand, mouse-pointer-2, linkedin, chevron-down,
chevron-right, info, grip-vertical (uso di ciascuna nel riquadro Figma).

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

## Mappatura Figma ↔ codice

| Componente Figma | File nel repo | Varianti | Link Figma |
|---|---|---|---|
| Button | `src/components/ui/button.tsx` | Figma: Variant=Primary\|Secondary\|Outline\|Ghost. Codice: default/outline/ghost/link × sm/md/lg, da allineare (manca Secondary) | https://www.figma.com/design/sEAyeY8KRpkKppW9lgUCK7/?node-id=6-50 |
| Badge | `src/components/ui/badge.tsx` | variant: default, secondary, outline | da aggiungere |
| Card | `src/components/ui/card.tsx` | Header, Title, Description, Content | da aggiungere |
| Project Frame (riquadro progetto) | da creare | Accent=Blue\|Purple\|Yellow\|Green; proprietà Meta, Title, Description | https://www.figma.com/design/sEAyeY8KRpkKppW9lgUCK7/?node-id=8-76 |
| Frame Label | da creare | proprietà Nome, Meta | nodo 8:77 |
| Layer Item, Layers Panel | da creare | State=Default\|Selected | nodi 8:55, 8:90 |
| Toolbar, Toolbar Button | da creare | proprietà Label | nodi 8:82, 8:80 |

Home a canvas: pagina `Home Canvas`, frame `Home · Canvas 1440` (nodo 10:76).
