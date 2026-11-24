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
| Colori e font | Cambiati il 2026-11-23 (terza versione): lavagna chiara con griglia a punti, ispirata a FigJam (un solo tema, chiaro), titoli in Anek Bangla. Vedi DESIGN-SYSTEM.md |

## Bozza navigabile
`public/bozza/index.html` è una bozza della home a canvas in un solo file (HTML, CSS e JavaScript), con la grafica del design
in Figma: lavagna con griglia a punti, riquadri trascinabili, pan e zoom, pannello Livelli, barra strumenti, zoom sul
progetto che apre il dettaglio, vista lista per il telefono. Dopo la pubblicazione è su `…/portfolio/bozza/`. Serve a
raccogliere pareri; non è ancora il sito in React. Email e curriculum sono segnaposto ("da collegare").

## Da tenere d'occhio
- **Accessibilità:** il canvas deve avere un'alternativa navigabile da tastiera e da screen reader (il pannello Livelli
  fa da indice; ogni riquadro raggiungibile con Tab; riquadri spostabili anche da tastiera).
- **Chi ha poca pazienza (recruiter):** link classici sempre visibili (progetti, chi sono, contatti, CV) e un pulsante
  per la vista lista.
- **Prestazioni e indicizzazione:** i contenuti dei riquadri devono essere testo reale nell'HTML, non immagini.
- **Riduci animazioni:** con la preferenza attiva, niente zoom animato né movimenti (cambio istantaneo).
- Figma non può mostrare le animazioni: si disegnano le schermate e gli stati, il movimento si descrive nelle note.

## Contenuti
Presi dal vecchio sito (emanuelesirtori.it): Opyn Pay Later (2022), Design System (2024), Emporium (2024),
TrainWithMe (2022), Chi sono, approccio in 4 fasi, contatti (LinkedIn, email, CV). Da aggiornare con lavori più recenti
e da verificare se i case study di Opyn ed Emporium si possono mostrare.
