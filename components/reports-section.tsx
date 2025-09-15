"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SalesChart } from "@/components/sales-chart"
import { IngredientsChart } from "@/components/ingredients-chart"
import { CakeIngredientsTable } from "@/components/cake-ingredients-table"

export function ReportsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">Reportes de Ventas</h2>
        <div className="text-sm text-muted-foreground">Datos actualizados en tiempo real</div>
      </div>

      {/* Métrica destacada */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader className="pb-3">
          <CardDescription className="text-muted-foreground">Total de Ventas</CardDescription>
          <CardTitle className="text-4xl font-bold text-primary">$2,847,500</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            <span className="text-green-600 font-medium">+12.5%</span> respecto al mes anterior
          </p>
        </CardContent>
      </Card>

      {/* Gráficas principales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <IngredientsChart />
      </div>

      {/* Tabla de ingredientes por torta */}
      <CakeIngredientsTable />
    </div>
  )
}
