export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/HardikJain25-dev" className="hover:text-primary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/hardik-jain-dev/" className="hover:text-primary">
            LinkedIn
          </a>
          <a href="mailto:hardiksurana2505@gmail.com" className="hover:text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
