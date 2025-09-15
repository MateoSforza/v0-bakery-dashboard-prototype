"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

const ingredientsData = [
  { name: "Harina", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Azúcar", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Huevos", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Mantequilla", value: 15, color: "hsl(var(--chart-4))" },
  { name: "Otros", value: 5, color: "hsl(var(--chart-5))" },
]

export function IngredientsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Ingredientes Más Usados</CardTitle>
        <CardDescription>Distribución por porcentaje de uso</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            harina: { label: "Harina", color: "hsl(var(--chart-1))" },
            azucar: { label: "Azúcar", color: "hsl(var(--chart-2))" },
            huevos: { label: "Huevos", color: "hsl(var(--chart-3))" },
            mantequilla: { label: "Mantequilla", color: "hsl(var(--chart-4))" },
            otros: { label: "Otros", color: "hsl(var(--chart-5))" },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ingredientsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {ingredientsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, "Uso"]}
                labelStyle={{ color: "hsl(var(--foreground))" }}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: "12px" }}
                formatter={(value) => <span style={{ color: "hsl(var(--foreground))" }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
