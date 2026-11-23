# Design system del portfolio

Base: **shadcn/ui** (stile `new-york`) + Tailwind v4. I componenti sono in `src/components/ui/`.
Regola: **stesso nome e stesse varianti in Figma e nel codice**.

## Token (fonte: `src/index.css`)

| Token | Uso | Valore provvisorio |
|---|---|---|
| background / foreground | sfondo e testo | #ffffff / #171717 |
| muted / muted-foreground | superfici e testo secondario | #f5f5f5 / #737373 |
| border | bordi | #e5e5e5 |
| primary / primary-foreground | azione principale | #171717 / #fafafa |
| accent / accent-foreground | hover | #f5f5f5 / #171717 |
| ring | focus | #a3a3a3 |
| radius | raggio base | 0.5rem |

Font provvisorio: Inter. Palette, font e scala tipografica si decidono con la direzione visiva.

## Mappatura Figma ↔ codice

| Componente Figma | File nel repo | Varianti | Link Figma |
|---|---|---|---|
| Button | `src/components/ui/button.tsx` | variant: default, outline, ghost, link · size: sm, md, lg | da aggiungere |
| Badge | `src/components/ui/badge.tsx` | variant: default, secondary, outline | da aggiungere |
| Card | `src/components/ui/card.tsx` | Header, Title, Description, Content | da aggiungere |

Aggiungere qui ogni nuovo componente (anche quelli del sito: navbar, footer, card di progetto, form di contatto).
