import { ArrowRight, Expand, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const variants = ["primary", "secondary", "outline", "ghost"] as const;
const sizes = ["sm", "md", "lg"] as const;

// Pagina provvisoria di verifica: confronta questi bottoni con le tavole "Componenti · Button" e
// "Componenti · Icon Button" di Figma (varianti, taglie, stato Disabled). Hover, Pressed e Focus si provano con mouse e Tab.
export default function App() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="type-h2">
        Curioso, empatico, <span className="text-brand">appassionato.</span>
      </h1>

      <section className="space-y-4">
        <h2 className="type-h5">Button</h2>
        {variants.map((variant) => (
          <div key={variant} className="flex flex-wrap items-center gap-3">
            <span className="type-label w-24 text-muted-foreground">{variant}</span>
            {sizes.map((size) => (
              <Button key={size} variant={variant} size={size}>
                {size}
              </Button>
            ))}
            <Button variant={variant}>
              Con icona <ArrowRight />
            </Button>
            <Button variant={variant} disabled>
              Disabled
            </Button>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="type-h5">Icon Button</h2>
        {variants.map((variant) => (
          <div key={variant} className="flex flex-wrap items-center gap-3">
            <span className="type-label w-24 text-muted-foreground">{variant}</span>
            {sizes.map((size) => (
              <IconButton key={size} variant={variant} size={size} aria-label={`Aggiungi, taglia ${size}`}>
                <Plus />
              </IconButton>
            ))}
            <IconButton variant={variant} aria-label="Espandi">
              <Expand />
            </IconButton>
            <IconButton variant={variant} aria-label="Chiudi">
              <X />
            </IconButton>
            <IconButton variant={variant} aria-label="Disabilitato" disabled>
              <Plus />
            </IconButton>
          </div>
        ))}
      </section>

      <Card className="bg-surface">
        <CardHeader>
          <CardTitle>Opyn Pay Later</CardTitle>
          <CardDescription>BNPL pensato per le aziende</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Badge>UX/UI</Badge>
          <Badge variant="outline">2022</Badge>
        </CardContent>
      </Card>
    </main>
  );
}
