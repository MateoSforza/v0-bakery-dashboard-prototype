"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const salesData = [
  { name: "Selva Negra", ventas: 145, ingresos: 435000 },
  { name: "Frutilla", ventas: 132, ingresos: 396000 },
  { name: "Cheesecake", ventas: 98, ingresos: 392000 },
  { name: "Chocolate", ventas: 87, ingresos: 261000 },
  { name: "Vainilla", ventas: 76, ingresos: 228000 },
  { name: "Red Velvet", ventas: 65, ingresos: 260000 },
]

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Tortas Más Vendidas</CardTitle>
        <CardDescription>Ventas del último mes</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            ventas: {
              label: "Unidades Vendidas",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="name"
                className="text-xs"
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis className="text-xs" tick={{ fontSize: 12 }} />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value, name) => [`${value} unidades`, "Ventas"]}
              />
              <Bar dataKey="ventas" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} className="fill-primary" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
