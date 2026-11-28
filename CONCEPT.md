# Concept del portfolio: home come canvas Figma

Scelto il 2026-11-23 tra tre ipotesi (console a comandi, canvas, slider design/specifica). Prototipo di riferimento
delle tre ipotesi: artifact "Tre home per il portfolio".

## Idea
La home è un canvas infinito come quello di Figma: riquadri (frame) con i progetti, il "Chi sono" e i contatti,
un pannello **Livelli** come menu, una barra strumenti con zoom e "Adatta". Chi visita entra nello strumento di lavoro.

## Decisioni
| Tema | Scelta |
|---|---|
| Apertura di un progetto | Zoom sul riquadro che si ingrandisce fino a diventare la pagina del case study, con indirizzo proprio (deep link) |
| Interazione desktop | Riquadri trascinabili, pan e zoom. Al ricaricamento i riquadri tornano al loro posto |
| Mobile | Da decidere per ultimo. Orientamento: canvas con gesti (trascina e pizzica) |
| Stile componenti | Angoli netti (4px), come l'editor di design |
| Colori e font | Cambiati il 2026-11-23 (terza versione): lavagna chiara con griglia a punti, ispirata a FigJam (un solo tema, chiaro). Il 2026-11-24 i titoli sono passati a Fraunces e i testi restano Inter. Vedi DESIGN-SYSTEM.md |
| Apertura di una pagina (Chi sono, Esperienze) | **Overlay**, non zoom: pannello largo il 90% della viewport (massimo 1600 px), altezza del contenuto, sopra la lavagna con velo chiaro e blur. Si apre **solo dal bottone Espandi** del riquadro; un clic sul riquadro lo seleziona e porta lo zoom su di lui (decisioni del 2026-11-24) |
| Intestazione dell'overlay | Solo la X (si chiude anche con Esc e con un clic fuori), alta circa 52 px |
| Animazione dell'overlay | Il pannello cresce dal riquadro (≈0,5 s), le sezioni entrano dal basso a 70 ms l'una dall'altra; la chiusura è più rapida (≈0,3 s). Con "riduci movimento" niente animazioni |
| Griglia a punti | Adattiva: il passo sullo schermo resta tra 12 e 24 px (raddoppia quando si rimpicciolisce) |
| Riordina | Bottone nella barra strumenti, visibile solo se un riquadro è stato spostato; riporta tutto alla disposizione originale |
| Riquadri | Larghezze diverse tra loro (Home 720, Esperienze 560, ecc.); la disposizione definitiva si decide a lavoro concluso |
| Chi sono | **Approvato dal designer il 2026-11-25** (riquadro nella lavagna 480 × 677, nodo Figma 187:5449, e pagina in overlay). Riquadro: etichetta, titolo "Ciao, mi chiamo Emanuele e sono un UX/UI Designer." (nome e ruolo in blu), due paragrafi scritti dal designer con le parole chiave in grassetto (oltre 10 anni, soluzioni semplici, prodotti digitali complessi, incentrate sulle persone, L'AI, prototipi utili alla validazione) e il bottone Espandi. Pagina: introduzione con tre bottoni (LinkedIn, Email, Curriculum) e animazione del cursore "Scorri per conoscermi meglio", percorso (Dalla carta al digitale) con gli studi, skill ("Cosa so fare") e bento (passione per il design, strumenti, basket, tempo libero a schede) |
| Esperienze | Riquadro con la sola esperienza attuale: titolo "Esperienza attuale" e tag "In corso" (scelta del 2026-11-25). Pagina a linea del tempo con le quattro esperienze tutte uguali, 64 px tra una e l'altra, linea continua, bottone Curriculum e animazione d'ingresso. Contenuti dal curriculum |
| Lavori | **Scelta finale del 2026-11-27.** Ogni progetto è un Board Frame a sé (come gli altri riquadri), ma i progetti sono **disposti vicini, come un masonry**, con box di altezze diverse e comunque trascinabili singolarmente. I box hanno un fondo grigio chiaro che stacca dal bianco del riquadro e ognuno ha il suo Espandi. Con più progetti se ne aggiunge uno. (Prima prova, scartata: un unico riquadro "Lavori" con tutti i box dentro) |
| Approccio, Bookshelf | Sono **Board Frame come gli altri**: Approccio ha cinque stati (vuoto e quattro fasi) disposti sulla lavagna senza frame contenitore. Dal 2026-11-27 Approccio c'è anche nella bozza HTML come riquadro della lavagna (960 px, cerchi con macchia animata e fasi a destra) |
| Easter egg | **Dev Mode segreto** (2026-11-27, semplificato il 2026-11-28): si apre scrivendo "dev" sulla lavagna e mostra solo Ispeziona (misure e token). Snake tolto. Il **Prato fiorito** non si apre dal Dev Mode: solo dall'insetto sulla lavagna; alla vittoria partono i **coriandoli pixel** (idea A scelta tra quattro, vedi `prove/festa.html`). Stati disegnati in Figma nella pagina "Easter egg · Stati". Altre idee valutate, non fatte: Ctrl+Z vero, rinomina dei livelli, cursori ospiti dopo un po' di inattività, post-it nascosto fuori dalla lavagna o a zoom 800%, pallone del basket che tira, tema scuro "per scelta", Konami code con post-it "con amore", gioco "Allinea i riquadri" e "Rompi i post-it" |
| Bookshelf | **Nuovo il 2026-11-27.** Riquadro sulla lavagna (560 px), **senza pagina**: elenco tipografico dei libri che il designer ha letto, sul lavoro o per passione. Per ogni libro titolo, autore e collegamento alla scheda del libro. Scelto tra sette proposte (dorsi su mensola, pila di libri, elenco in cinque varianti). Libri e link sono segnaposto |

## Bozza navigabile
`public/bozza/index.html` è una bozza della home a canvas in un solo file (HTML, CSS e JavaScript), con la grafica del design
in Figma: lavagna con griglia a punti, riquadri trascinabili, pan e zoom, pannello Livelli, barra strumenti, zoom sul
progetto che apre il dettaglio, vista lista per il telefono. Dopo la pubblicazione è su `…/portfolio/bozza/`. Serve a
raccogliere pareri; non è ancora il sito in React. Email e curriculum sono segnaposto ("da collegare").
Aggiornata il 2026-11-24 con: pagine **Chi sono** ed **Esperienze** in overlay (bottone Espandi), bottone Espandi anche nei
progetti, zoom al clic sul riquadro, griglia a punti adattiva, bottone Riordina, riquadro Esperienze (posizione provvisoria).
I contenuti di Esperienze vengono dal curriculum: da rivedere prima di pubblicare (aziende, date e attività).
Aggiornata il 2026-11-25 con: bento "Cosa faccio" a incastro (Passione per il design, strumenti, basket, tempo libero a schede) con
una palette sobria (un solo fondo colorato), sezione "Cosa so fare", bottoni LinkedIn, Email e Curriculum in Chi sono e in
Esperienze, animazioni dentro le pagine (cursore, orbite, chip, editor con i livelli, lavagna del basket, tessera a schede,
linea del tempo), zoom nitido (senza `will-change` sul contenitore della lavagna). La pagina **Chi sono è approvata**.
Le altre prove stanno nella cartella `prove/` (fuori da `public/`, quindi non pubblicate): sono esperimenti.
## Da tenere d'occhio
- **Accessibilità:** il canvas deve avere un'alternativa navigabile da tastiera e da screen reader (il pannello Livelli
  fa da indice; ogni riquadro raggiungibile con Tab; riquadri spostabili anche da tastiera).
- **Chi ha poca pazienza (recruiter):** link classici sempre visibili (progetti, chi sono, contatti, CV) e un pulsante
  per la vista lista.
- **Prestazioni e indicizzazione:** i contenuti dei riquadri devono essere testo reale nell'HTML, non immagini.
- **Riduci animazioni:** con la preferenza attiva, niente zoom animato né movimenti (cambio istantaneo).
- Figma non può mostrare le animazioni: si disegnano le schermate e gli stati, il movimento si descrive nelle note.

## Cose ancora aperte (2026-11-25)
- Disposizione e larghezze definitive dei riquadri sulla lavagna (a lavoro concluso). **Scelta del 2026-11-27: disposizione C a zig-zag, rifinita dal designer** nella pagina Figma `Lavagna · Disposizione C` (frame 322:674, 8305 × 1758 px): riquadri veri con larghezze diverse (Intro 784, Chi sono 763, Bookshelf 1059, Contatti 720) e distanze non più uguali, griglia a punti, pannello Livelli e barra strumenti nella prima schermata (tratteggio 1440 × 900), la **nota finale** ("progettato in Figma e costruito in React e Tailwind, con l'aiuto dell'AI… Made with ❤️") libera sulla lavagna e non più dentro i Contatti, l'insetto del Prato fiorito tra Progetti e Chi sono. La bozza HTML segue queste posizioni (la coordinata y della bozza è quella di Figma meno 20, perché l'etichetta sta sopra il riquadro). Le altre prove (schemi A-H in Figma, anteprime `#c` e `#f`) sono state tolte dalla bozza. Nella bozza Chi sono sta ora in basso a sinistra.
- **Mobile e ottimizzazione delle prestazioni: solo a fine lavori** (font ospitati sul sito, mappa e chip più leggere, animazioni in pausa fuori schermo, immagini leggere; misura con Lighthouse sul sito pubblicato).
- **Lavori (case study):** da riprendere. La tessera "AI nel mio flusso" (cursori di io e agent AI, prova `ai.html`) non va in Chi sono: da provare nei lavori come approccio alla progettazione.
- Segnaposto da riempire: libri del Bookshelf (titoli, autori, collegamenti alle schede), città dei viaggi, titoli di giochi e film, immagini delle tessere UX/UI e Graphic design (non usare contenuti di clienti senza conferma), collegamenti di Email e Curriculum.
- Token da proporre: ruolo per il viola degli agent (oggi primitivo `purple/600`). Aggiunti il 2026-11-25: `radius/full`, `bg/inverse`, `text/inverse`.
- Contenuti di Esperienze da rivedere (vengono dal curriculum); React, TypeScript e Tailwind tra le competenze sono un'aggiunta da confermare.
- Portare in React: overlay, zoom al clic, griglia adattiva, Riordina, Tab e le animazioni (finora solo nella bozza HTML).
## Contenuti
Presi dal vecchio sito (emanuelesirtori.it): Opyn Pay Later (2022), Design System (2024), Emporium (2024),
TrainWithMe (2022), Chi sono, approccio in 4 fasi, contatti (LinkedIn, email, CV). Da aggiornare con lavori più recenti
e da verificare se i case study di Opyn ed Emporium si possono mostrare.
