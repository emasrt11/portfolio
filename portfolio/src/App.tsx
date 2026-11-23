import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Pagina provvisoria: serve solo a verificare che componenti e token funzionino.
export default function App() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-4xl font-semibold">Portfolio</h1>
      <div className="flex flex-wrap gap-3">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Progetto di esempio</CardTitle>
          <CardDescription>Card di progetto provvisoria</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Badge>UX</Badge>
          <Badge variant="outline">Case study</Badge>
        </CardContent>
      </Card>
    </main>
  );
}
