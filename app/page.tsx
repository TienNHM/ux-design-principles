import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Foundations } from "@/components/foundations"
import { Principles } from "@/components/principles"
import { Process } from "@/components/process"
import { DesignThinking } from "@/components/design-thinking"
import { UserResearch } from "@/components/user-research"
import { Prototyping } from "@/components/prototyping"
import { DesignSystems } from "@/components/design-systems"
import { Testing } from "@/components/testing"
import { Exercises } from "@/components/exercises"
import { Resources } from "@/components/resources"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Foundations />
      <Principles />
      <DesignThinking />
      <UserResearch />
      <Process />
      <Prototyping />
      <DesignSystems />
      <Testing />
      <Exercises />
      <Resources />
    </main>
  )
}
