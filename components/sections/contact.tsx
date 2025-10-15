import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="rounded-2xl border bg-card/60 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">
          Let’s build something exceptional
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Tell me about your project, timeline, and goals. I typically respond
          within 24 hours.
         </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            className="bg-primary text-primary-foreground hover:opacity-90"
            asChild
          >
            <a href="mailto:hardiksurana2505@gmail.com">Email me</a>
          </Button>
          <Button
            variant="outline"
            className="border-primary/40 hover:bg-primary/10 bg-transparent"
            asChild
          >
            <a href="https://www.linkedin.com/in/hardik-jain-dev/">
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
