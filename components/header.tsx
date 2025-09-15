export function Header() {
  return (
    <header className="bg-card border-b border-border px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">CamilasBakery Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
