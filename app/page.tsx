"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ReportsSection } from "@/components/reports-section"
import { WelcomeSection } from "@/components/welcome-section"
import { CakesSection } from "@/components/cakes-section"
import { IngredientsSection } from "@/components/ingredients-section"
import { ExtraCostsSection } from "@/components/extra-costs-section"

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("reportes")

  const renderContent = () => {
    switch (activeSection) {
      case "reportes":
        return <ReportsSection />
      case "inicio":
        return <WelcomeSection />
      case "tortas":
        return <CakesSection />
      case "ingredientes":
        return <IngredientsSection />
      case "costos":
        return <ExtraCostsSection />
      default:
        return <ReportsSection />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
