import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Pagina provvisoria: verifica token e componenti nella nuova direzione (editor scuro).
export default function App() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-5xl font-bold">
        Curioso, empatico, <span className="text-brand">appassionato.</span>
      </h1>
      <div className="flex flex-wrap gap-3">
        <Button>Vai ai progetti</Button>
        <Button variant="outline">Curriculum</Button>
        <Button variant="ghost">Scrivimi</Button>
      </div>
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
