# Portfolio

Sito personale: Vite + React + TypeScript + Tailwind v4 + shadcn/ui.
Design system e mappatura Figma ↔ codice: vedi [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).

## Comandi (da Codespaces o da un PC con Node 22)

```
npm install      # installa le dipendenze
npm run dev      # anteprima locale con aggiornamento automatico
npm run build    # controllo tipi + build in dist/
```

## Pubblicazione

Ogni push su `main` esegue `.github/workflows/deploy.yml` e pubblica su GitHub Pages.
Va attivato una volta: repo → Settings → Pages → Source: **GitHub Actions**.

## Aggiungere componenti shadcn

```
npx shadcn@latest add dialog
```
