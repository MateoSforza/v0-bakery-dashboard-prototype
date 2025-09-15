import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function WelcomeSection() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-12 text-center">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-amber-900 mb-4 text-balance">Bienvenido a CamilasBakery</h1>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto text-pretty">
            Tu sistema de gestión integral para crear las tortas más deliciosas y administrar tu negocio de repostería
            con facilidad
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="bg-amber-200 text-amber-800 px-4 py-2 text-sm">
              🍰 Gestión de Tortas
            </Badge>
            <Badge variant="secondary" className="bg-orange-200 text-orange-800 px-4 py-2 text-sm">
              📊 Reportes Detallados
            </Badge>
            <Badge variant="secondary" className="bg-yellow-200 text-yellow-800 px-4 py-2 text-sm">
              🥚 Control de Ingredientes
            </Badge>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 text-6xl opacity-20">🎂</div>
        <div className="absolute bottom-4 left-4 text-4xl opacity-20">🧁</div>
        <div className="absolute top-1/2 left-8 text-3xl opacity-20">🍓</div>
        <div className="absolute top-1/4 right-12 text-3xl opacity-20">🍒</div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-amber-200 bg-gradient-to-br from-white to-amber-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">🍰</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-1">6</h3>
            <p className="text-amber-700">Tipos de Tortas</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-gradient-to-br from-white to-orange-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="text-2xl font-bold text-orange-900 mb-1">$2,450</h3>
            <p className="text-orange-700">Ventas del Mes</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-gradient-to-br from-white to-yellow-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="text-2xl font-bold text-yellow-900 mb-1">4.9</h3>
            <p className="text-yellow-700">Calificación Promedio</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-amber-200">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">📊</div>
              <span className="text-amber-800 font-medium">Ver Reportes</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">🍰</div>
              <span className="text-orange-800 font-medium">Gestionar Tortas</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">🥚</div>
              <span className="text-yellow-800 font-medium">Ver Ingredientes</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">➕</div>
              <span className="text-red-800 font-medium">Costos Extra</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Welcome Message */}
      <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">¡Comienza a gestionar tu pastelería!</h2>
          <p className="text-amber-700 text-pretty max-w-3xl mx-auto">
            Utiliza el menú lateral para navegar entre las diferentes secciones. En <strong>Reportes</strong>{" "}
            encontrarás análisis detallados de ventas, en <strong>Tortas</strong> podrás ver el catálogo completo con
            medidas, en <strong>Ingredientes</strong> revisarás la composición de cada torta, y en{" "}
            <strong>Costos Extra</strong> gestionarás servicios adicionales.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
