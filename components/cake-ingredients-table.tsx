import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const cakeIngredients = [
  {
    torta: "Selva Negra",
    ingredientes: ["Harina", "Azúcar", "Huevos", "Mantequilla", "Cacao", "Cerezas", "Crema"],
    dificultad: "Alta",
    tiempo: "3h",
  },
  {
    torta: "Frutilla",
    ingredientes: ["Harina", "Azúcar", "Huevos", "Mantequilla", "Frutillas", "Crema"],
    dificultad: "Media",
    tiempo: "2h",
  },
  {
    torta: "Cheesecake",
    ingredientes: ["Queso Crema", "Azúcar", "Huevos", "Galletas", "Mantequilla"],
    dificultad: "Media",
    tiempo: "4h",
  },
  {
    torta: "Chocolate",
    ingredientes: ["Harina", "Azúcar", "Huevos", "Mantequilla", "Cacao", "Chocolate"],
    dificultad: "Baja",
    tiempo: "1.5h",
  },
  {
    torta: "Vainilla",
    ingredientes: ["Harina", "Azúcar", "Huevos", "Mantequilla", "Esencia Vainilla"],
    dificultad: "Baja",
    tiempo: "1h",
  },
  {
    torta: "Red Velvet",
    ingredientes: ["Harina", "Azúcar", "Huevos", "Mantequilla", "Colorante", "Cacao"],
    dificultad: "Alta",
    tiempo: "2.5h",
  },
]

export function CakeIngredientsTable() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Baja":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Media":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "Alta":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Composición de Tortas</CardTitle>
        <CardDescription>Ingredientes y detalles de cada tipo de torta</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Torta</TableHead>
                <TableHead className="font-semibold">Ingredientes</TableHead>
                <TableHead className="font-semibold">Dificultad</TableHead>
                <TableHead className="font-semibold">Tiempo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cakeIngredients.map((cake, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{cake.torta}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {cake.ingredientes.map((ingredient, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getDifficultyColor(cake.dificultad)}>{cake.dificultad}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{cake.tiempo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
