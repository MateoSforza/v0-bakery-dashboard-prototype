"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Gift, Truck, Clock, MapPin, Star } from "lucide-react"

const extraCosts = [
  {
    id: 1,
    name: "Caja Premium",
    description: "Caja elegante con diseño especial de la pastelería",
    price: "$5.000",
    icon: Package,
    category: "Empaque",
    popular: false,
  },
  {
    id: 2,
    name: "Envuelto para Regalo",
    description: "Papel de regalo con moño y tarjeta personalizada",
    price: "$3.500",
    icon: Gift,
    category: "Empaque",
    popular: true,
  },
  {
    id: 3,
    name: "Envío a Domicilio",
    description: "Entrega en la dirección que especifiques",
    price: "$8.000",
    icon: Truck,
    category: "Entrega",
    popular: true,
  },
  {
    id: 4,
    name: "Entrega Express",
    description: "Entrega en menos de 2 horas (sujeto a disponibilidad)",
    price: "$15.000",
    icon: Clock,
    category: "Entrega",
    popular: false,
  },
  {
    id: 5,
    name: "Entrega Programada",
    description: "Programa la entrega para una fecha y hora específica",
    price: "$5.000",
    icon: MapPin,
    category: "Entrega",
    popular: false,
  },
  {
    id: 6,
    name: "Decoración Personalizada",
    description: "Mensaje personalizado escrito en la torta",
    price: "$4.000",
    icon: Star,
    category: "Personalización",
    popular: true,
  },
  {
    id: 7,
    name: "Velas Especiales",
    description: "Set de velas decorativas temáticas",
    price: "$2.500",
    icon: Star,
    category: "Personalización",
    popular: false,
  },
  {
    id: 8,
    name: "Foto Comestible",
    description: "Impresión comestible de una foto en la torta",
    price: "$12.000",
    icon: Star,
    category: "Personalización",
    popular: false,
  },
]

export function ExtraCostsSection() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Empaque":
        return "bg-amber-100 text-amber-800"
      case "Entrega":
        return "bg-orange-100 text-orange-800"
      case "Personalización":
        return "bg-rose-100 text-rose-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const groupedCosts = extraCosts.reduce(
    (acc, cost) => {
      if (!acc[cost.category]) {
        acc[cost.category] = []
      }
      acc[cost.category].push(cost)
      return acc
    },
    {} as Record<string, typeof extraCosts>,
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Costos Extra</h2>
        <p className="text-muted-foreground">Servicios adicionales disponibles para personalizar tu pedido</p>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedCosts).map(([category, costs]) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className={getCategoryColor(category)} variant="secondary">
                {category}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {costs.length} {costs.length === 1 ? "servicio" : "servicios"}
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {costs.map((cost) => {
                const IconComponent = cost.icon
                return (
                  <Card key={cost.id} className="relative hover:shadow-md transition-shadow duration-200">
                    {cost.popular && <Badge className="absolute -top-2 -right-2 bg-rose-500 text-white">Popular</Badge>}
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-100 rounded-lg">
                          <IconComponent className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{cost.name}</CardTitle>
                          <div className="text-2xl font-bold text-amber-600">{cost.price}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm">{cost.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <Card className="bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Información Importante</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-amber-700">
            <li>• Los precios pueden variar según el tamaño de la torta</li>
            <li>• La entrega express está sujeta a disponibilidad y ubicación</li>
            <li>• Los servicios de personalización requieren confirmación previa</li>
            <li>• Consulta por descuentos en la combinación de múltiples servicios</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
