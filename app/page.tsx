import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  )
}
