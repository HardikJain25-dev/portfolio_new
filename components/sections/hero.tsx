import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="about" className="relative">
      {/* subtle cyber grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_23px,theme(colors.border)_24px),linear-gradient(to_bottom,transparent_0,transparent_23px,theme(colors.border)_24px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
              Freelance Developer crafting high-performance, future‑ready
              experiences.
            </h1>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I design and build accessible, pixel‑perfect interfaces powered by
              robust engineering. From product MVPs to complex web apps, I
              deliver work that ships fast and scales.
            </p>
            <div className="flex items-center gap-3">
              <Button
                className="bg-primary text-primary-foreground hover:opacity-90"
                asChild
              >
                <a href="#work">View projects</a>
              </Button>
              <Button
                variant="outline"
                className="border-primary/40 hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>

          <div className="space-y-4 md:pl-6">
            <div className="rounded-xl border bg-card/60 p-5">
              <p className="text-sm text-muted-foreground">Services</p>
              <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <li className="rounded-md border p-3 bg-background/60">
                  Web, Apps, Automations
                </li>
                <li className="rounded-md border p-3 bg-background/60">
                  Design Systems
                </li>
                <li className="rounded-md border p-3 bg-background/60">
                  Full-Stack Eng
                </li>
                <li className="rounded-md border p-3 bg-background/60">
                  Performance
                </li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card/60 p-5">
              <p className="text-sm text-muted-foreground">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "Node",
                  "Vercel",
                  "React Native",
                  "JavaScript",
                  "Python",
                  "AI-ML",
                  "AWS",
                  "Docker",
                  "Firebase",
                  "Supabase",
                  "n8n",
                  "Pandas",
                  "PostgreSQL",
                  "SQLite",
                  "Liquid",
                  "Django",
                  "Flask",
                  "AngularJs",
                  "Fast API",
                  "MongoDB",
                  "ExpressJs",
                  "NodeJs",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-primary/30 px-2 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
