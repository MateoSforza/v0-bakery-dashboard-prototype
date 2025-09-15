"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const cakes = [
  {
    id: 1,
    name: "Selva Negra",
    image: "/chocolate-cake-with-cherries.jpg",
    description: "Deliciosa torta de chocolate con cerezas",
    measurements: {
      "Pequeña (6 personas)": "20cm diámetro, 8cm altura",
      "Mediana (10 personas)": "25cm diámetro, 10cm altura",
      "Grande (15 personas)": "30cm diámetro, 12cm altura",
      "Extra Grande (20 personas)": "35cm diámetro, 15cm altura",
    },
  },
  {
    id: 2,
    name: "Frutilla",
    image: "/strawberry-cake-with-fresh-strawberries.jpg",
    description: "Torta suave con crema y frutillas frescas",
    measurements: {
      "Pequeña (6 personas)": "20cm diámetro, 8cm altura",
      "Mediana (10 personas)": "25cm diámetro, 10cm altura",
      "Grande (15 personas)": "30cm diámetro, 12cm altura",
      "Extra Grande (20 personas)": "35cm diámetro, 15cm altura",
    },
  },
  {
    id: 3,
    name: "Cheesecake",
    image: "/creamy-cheesecake-with-berry-topping.jpg",
    description: "Cremoso cheesecake con base de galletas",
    measurements: {
      "Pequeña (6 personas)": "18cm diámetro, 6cm altura",
      "Mediana (10 personas)": "23cm diámetro, 8cm altura",
      "Grande (15 personas)": "28cm diámetro, 10cm altura",
      "Extra Grande (20 personas)": "33cm diámetro, 12cm altura",
    },
  },
  {
    id: 4,
    name: "Tres Leches",
    image: "/tres-leches-cake-with-white-cream.jpg",
    description: "Esponjosa torta bañada en tres leches",
    measurements: {
      "Pequeña (6 personas)": "20cm x 15cm, 8cm altura",
      "Mediana (10 personas)": "25cm x 20cm, 10cm altura",
      "Grande (15 personas)": "30cm x 25cm, 12cm altura",
      "Extra Grande (20 personas)": "35cm x 30cm, 15cm altura",
    },
  },
  {
    id: 5,
    name: "Red Velvet",
    image: "/red-velvet-cake.png",
    description: "Torta roja aterciopelada con frosting de queso crema",
    measurements: {
      "Pequeña (6 personas)": "20cm diámetro, 8cm altura",
      "Mediana (10 personas)": "25cm diámetro, 10cm altura",
      "Grande (15 personas)": "30cm diámetro, 12cm altura",
      "Extra Grande (20 personas)": "35cm diámetro, 15cm altura",
    },
  },
  {
    id: 6,
    name: "Lemon Pie",
    image: "/lemon-pie-with-meringue-topping.jpg",
    description: "Tarta de limón con merengue dorado",
    measurements: {
      "Pequeña (6 personas)": "20cm diámetro, 5cm altura",
      "Mediana (10 personas)": "25cm diámetro, 6cm altura",
      "Grande (15 personas)": "30cm diámetro, 7cm altura",
      "Extra Grande (20 personas)": "35cm diámetro, 8cm altura",
    },
  },
]

export function CakesSection() {
  const [selectedCake, setSelectedCake] = useState<(typeof cakes)[0] | null>(null)

  if (selectedCake) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => setSelectedCake(null)} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Button>
          <h2 className="text-2xl font-bold text-foreground">Medidas - {selectedCake.name}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">Información de la Torta</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={selectedCake.image || "/placeholder.svg"}
                alt={selectedCake.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{selectedCake.name}</h3>
              <p className="text-muted-foreground">{selectedCake.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">Medidas Disponibles</CardTitle>
              <CardDescription>Dimensiones según cantidad de personas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(selectedCake.measurements).map(([size, dimensions]) => (
                  <div key={size} className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                    <div>
                      <Badge variant="secondary" className="mb-1">
                        {size}
                      </Badge>
                      <p className="text-sm font-medium">{dimensions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Gestión de Tortas</h2>
        <p className="text-muted-foreground">Haz clic en cualquier torta para ver sus medidas disponibles</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cakes.map((cake) => (
          <Card
            key={cake.id}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => setSelectedCake(cake)}
          >
            <CardContent className="p-4">
              <img
                src={cake.image || "/placeholder.svg"}
                alt={cake.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-amber-700">{cake.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cake.description}</p>
              <Badge variant="outline" className="text-xs">
                {Object.keys(cake.measurements).length} tamaños disponibles
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
