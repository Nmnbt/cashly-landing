import { createFileRoute } from "@tanstack/react-router"
import { Navigation, Hero, Features, HowItWorks, Loyalty, CTA, Footer } from "@/components/landing"
import "@/components/landing/landing.css"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div className="min-h-full bg-dark text-white overflow-auto">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Loyalty />
      <CTA />
      <Footer />
    </div>
  )
}
