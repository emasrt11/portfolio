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
| Chi sono | Introduzione "Ciao, mi chiamo Emanuele e sono un UX/UI Designer." (nome e ruolo in blu), un principio ("Parto dalle persone, non dagli schermi…"), poi nella pagina: Come lavoro (Capire, Disegnare, Costruire), strumenti del design e dello sviluppo, formazione, contatti. Deve trasmettere competenze di design **e** di sviluppo (proposta D, scelta il 2026-11-24, provvisoria) |
| Esperienze | Riquadro con la sola esperienza attuale (proposta C: fascia blu) e pagina a linea del tempo (proposta 1) con le altre. Contenuti dal curriculum |

## Bozza navigabile
`public/bozza/index.html` è una bozza della home a canvas in un solo file (HTML, CSS e JavaScript), con la grafica del design
in Figma: lavagna con griglia a punti, riquadri trascinabili, pan e zoom, pannello Livelli, barra strumenti, zoom sul
progetto che apre il dettaglio, vista lista per il telefono. Dopo la pubblicazione è su `…/portfolio/bozza/`. Serve a
raccogliere pareri; non è ancora il sito in React. Email e curriculum sono segnaposto ("da collegare").
Aggiornata il 2026-11-24 con: pagine **Chi sono** ed **Esperienze** in overlay (bottone Espandi), bottone Espandi anche nei
progetti, zoom al clic sul riquadro, griglia a punti adattiva, bottone Riordina, riquadro Esperienze (posizione provvisoria).
I contenuti di Esperienze vengono dal curriculum: da rivedere prima di pubblicare (aziende, date e attività).

## Da tenere d'occhio
- **Accessibilità:** il canvas deve avere un'alternativa navigabile da tastiera e da screen reader (il pannello Livelli
  fa da indice; ogni riquadro raggiungibile con Tab; riquadri spostabili anche da tastiera).
- **Chi ha poca pazienza (recruiter):** link classici sempre visibili (progetti, chi sono, contatti, CV) e un pulsante
  per la vista lista.
- **Prestazioni e indicizzazione:** i contenuti dei riquadri devono essere testo reale nell'HTML, non immagini.
- **Riduci animazioni:** con la preferenza attiva, niente zoom animato né movimenti (cambio istantaneo).
- Figma non può mostrare le animazioni: si disegnano le schermate e gli stati, il movimento si descrive nelle note.

## Cose ancora aperte (2026-11-24)
- Disposizione e larghezze definitive dei riquadri sulla lavagna (a lavoro concluso).
- Pagina Chi sono: togliere la sezione "Esperienze" ora che ha il suo riquadro, e allinearne l'intestazione in Figma (solo X).
- Contenuti di Esperienze e di Chi sono da rivedere; React, TypeScript e Tailwind tra le competenze sono un'aggiunta da confermare.
- Portare in React: overlay, zoom al clic, griglia adattiva e Riordina (finora solo nella bozza HTML).
- Mobile per ultimo.

## Contenuti
Presi dal vecchio sito (emanuelesirtori.it): Opyn Pay Later (2022), Design System (2024), Emporium (2024),
TrainWithMe (2022), Chi sono, approccio in 4 fasi, contatti (LinkedIn, email, CV). Da aggiornare con lavori più recenti
e da verificare se i case study di Opyn ed Emporium si possono mostrare.
