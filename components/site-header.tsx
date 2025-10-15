"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight text-lg">
          <span className="text-primary">{"</>"}</span> Hardik Jain
        </Link>

        <nav className={cn("gap-6 items-center text-sm hidden md:flex")}>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#work" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
          <Button asChild variant="default" className="bg-primary text-primary-foreground hover:opacity-90">
            <a href="#contact" aria-label="Hire me">
              Hire me
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 border hover:bg-secondary/50"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i-lucide-menu w-5 h-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            <a href="#about" className="hover:text-primary">
              About
            </a>
            <a href="#work" className="hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
            <a href="#contact" className="inline-flex items-center text-primary">
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
