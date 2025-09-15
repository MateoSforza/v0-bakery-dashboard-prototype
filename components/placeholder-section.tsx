import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PlaceholderSectionProps {
  title: string
  description: string
}

export function PlaceholderSection({ title, description }: PlaceholderSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl">Sección en Desarrollo</CardTitle>
          <CardDescription>Esta funcionalidad estará disponible próximamente</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-lg">{description}</p>
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Próximamente:</strong> Esta sección incluirá todas las herramientas necesarias para gestionar
              eficientemente tu pastelería.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
