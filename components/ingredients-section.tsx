"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const cakesWithIngredients = [
  {
    id: 1,
    name: "Selva Negra",
    image: "/chocolate-cake-with-cherries.jpg",
    ingredients: [
      { name: "Harina de trigo", quantity: "300g", category: "Base" },
      { name: "Cacao en polvo", quantity: "80g", category: "Base" },
      { name: "Azúcar", quantity: "250g", category: "Base" },
      { name: "Huevos", quantity: "4 unidades", category: "Base" },
      { name: "Mantequilla", quantity: "150g", category: "Base" },
      { name: "Cerezas en almíbar", quantity: "200g", category: "Relleno" },
      { name: "Crema de leche", quantity: "400ml", category: "Relleno" },
      { name: "Kirsch (licor)", quantity: "50ml", category: "Relleno" },
      { name: "Chocolate negro", quantity: "100g", category: "Decoración" },
      { name: "Cerezas frescas", quantity: "12 unidades", category: "Decoración" },
    ],
  },
  {
    id: 2,
    name: "Frutilla",
    image: "/strawberry-cake-with-fresh-strawberries.jpg",
    ingredients: [
      { name: "Harina de trigo", quantity: "280g", category: "Base" },
      { name: "Azúcar", quantity: "200g", category: "Base" },
      { name: "Huevos", quantity: "3 unidades", category: "Base" },
      { name: "Mantequilla", quantity: "120g", category: "Base" },
      { name: "Polvo de hornear", quantity: "2 cdtas", category: "Base" },
      { name: "Frutillas frescas", quantity: "500g", category: "Relleno" },
      { name: "Crema chantilly", quantity: "300ml", category: "Relleno" },
      { name: "Azúcar impalpable", quantity: "100g", category: "Relleno" },
      { name: "Gelatina sin sabor", quantity: "1 sobre", category: "Relleno" },
      { name: "Frutillas para decorar", quantity: "200g", category: "Decoración" },
    ],
  },
  {
    id: 3,
    name: "Cheesecake",
    image: "/creamy-cheesecake-with-berry-topping.jpg",
    ingredients: [
      { name: "Galletas digestivas", quantity: "200g", category: "Base" },
      { name: "Mantequilla derretida", quantity: "80g", category: "Base" },
      { name: "Queso crema", quantity: "600g", category: "Relleno" },
      { name: "Azúcar", quantity: "150g", category: "Relleno" },
      { name: "Huevos", quantity: "3 unidades", category: "Relleno" },
      { name: "Crema de leche", quantity: "200ml", category: "Relleno" },
      { name: "Esencia de vainilla", quantity: "1 cdta", category: "Relleno" },
      { name: "Gelatina sin sabor", quantity: "1 sobre", category: "Relleno" },
      { name: "Frutos rojos", quantity: "150g", category: "Decoración" },
      { name: "Coulis de frutos rojos", quantity: "100ml", category: "Decoración" },
    ],
  },
  {
    id: 4,
    name: "Tres Leches",
    image: "/tres-leches-cake-with-white-cream.jpg",
    ingredients: [
      { name: "Harina de trigo", quantity: "200g", category: "Base" },
      { name: "Azúcar", quantity: "150g", category: "Base" },
      { name: "Huevos", quantity: "5 unidades", category: "Base" },
      { name: "Polvo de hornear", quantity: "1 cdta", category: "Base" },
      { name: "Leche condensada", quantity: "1 lata", category: "Relleno" },
      { name: "Leche evaporada", quantity: "1 lata", category: "Relleno" },
      { name: "Crema de leche", quantity: "200ml", category: "Relleno" },
      { name: "Crema chantilly", quantity: "300ml", category: "Decoración" },
      { name: "Canela en polvo", quantity: "1 cdta", category: "Decoración" },
      { name: "Cerezas", quantity: "10 unidades", category: "Decoración" },
    ],
  },
  {
    id: 5,
    name: "Red Velvet",
    image: "/red-velvet-cake.png",
    ingredients: [
      { name: "Harina de trigo", quantity: "320g", category: "Base" },
      { name: "Azúcar", quantity: "300g", category: "Base" },
      { name: "Cacao en polvo", quantity: "30g", category: "Base" },
      { name: "Colorante rojo", quantity: "2 cdas", category: "Base" },
      { name: "Huevos", quantity: "2 unidades", category: "Base" },
      { name: "Aceite vegetal", quantity: "240ml", category: "Base" },
      { name: "Suero de leche", quantity: "240ml", category: "Base" },
      { name: "Queso crema", quantity: "450g", category: "Frosting" },
      { name: "Mantequilla", quantity: "115g", category: "Frosting" },
      { name: "Azúcar impalpable", quantity: "500g", category: "Frosting" },
    ],
  },
  {
    id: 6,
    name: "Lemon Pie",
    image: "/lemon-pie-with-meringue-topping.jpg",
    ingredients: [
      { name: "Harina de trigo", quantity: "200g", category: "Base" },
      { name: "Mantequilla fría", quantity: "100g", category: "Base" },
      { name: "Azúcar", quantity: "50g", category: "Base" },
      { name: "Huevo", quantity: "1 unidad", category: "Base" },
      { name: "Limones", quantity: "6 unidades", category: "Relleno" },
      { name: "Azúcar", quantity: "200g", category: "Relleno" },
      { name: "Maicena", quantity: "60g", category: "Relleno" },
      { name: "Huevos", quantity: "4 unidades", category: "Relleno" },
      { name: "Claras de huevo", quantity: "4 unidades", category: "Merengue" },
      { name: "Azúcar", quantity: "120g", category: "Merengue" },
    ],
  },
]

export function IngredientsSection() {
  const [selectedCake, setSelectedCake] = useState<(typeof cakesWithIngredients)[0] | null>(null)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Base":
        return "bg-amber-100 text-amber-800"
      case "Relleno":
        return "bg-orange-100 text-orange-800"
      case "Decoración":
        return "bg-rose-100 text-rose-800"
      case "Frosting":
        return "bg-yellow-100 text-yellow-800"
      case "Merengue":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (selectedCake) {
    const groupedIngredients = selectedCake.ingredients.reduce(
      (acc, ingredient) => {
        if (!acc[ingredient.category]) {
          acc[ingredient.category] = []
        }
        acc[ingredient.category].push(ingredient)
        return acc
      },
      {} as Record<string, typeof selectedCake.ingredients>,
    )

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => setSelectedCake(null)} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Button>
          <h2 className="text-2xl font-bold text-foreground">Ingredientes - {selectedCake.name}</h2>
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
              <Badge variant="outline">{selectedCake.ingredients.length} ingredientes</Badge>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {Object.entries(groupedIngredients).map(([category, ingredients]) => (
              <Card key={category}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge className={getCategoryColor(category)}>{category}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {ingredients.map((ingredient, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="font-medium">{ingredient.name}</span>
                        <span className="text-sm text-muted-foreground">{ingredient.quantity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Gestión de Ingredientes</h2>
        <p className="text-muted-foreground">Haz clic en cualquier torta para ver sus ingredientes detallados</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cakesWithIngredients.map((cake) => (
          <Card
            key={cake.id}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => setSelectedCake(cake)}
          >
            <CardContent className="p-4">
              <img
                src={cake.image || "/placeholder.svg"}
                alt={cake.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-amber-700">{cake.name}</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                {[...new Set(cake.ingredients.map((i) => i.category))].map((category) => (
                  <Badge key={category} variant="outline" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
              <Badge variant="secondary" className="text-xs">
                {cake.ingredients.length} ingredientes
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
