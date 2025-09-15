"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const menuItems = [
  { id: "inicio", label: "Inicio", icon: "🏠" },
  { id: "reportes", label: "Reportes", icon: "📊" },
  { id: "tortas", label: "Tortas", icon: "🍰" },
  { id: "ingredientes", label: "Ingredientes", icon: "🥚" },
  { id: "costos", label: "Costos Extra", icon: "➕" },
]

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🧁</div>
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">CamilasBakery</h2>
            <p className="text-sm text-muted-foreground">Panel de Control</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            className={cn(
              "w-full justify-start text-left h-12",
              activeSection === item.id
                ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            )}
            onClick={() => onSectionChange(item.id)}
          >
            <span className="text-lg mr-3">{item.icon}</span>
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground text-center">© 2024 CamilasBakery</div>
      </div>
    </div>
  )
}
