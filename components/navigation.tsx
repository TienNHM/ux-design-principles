"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const mainItems = [
    { href: "#foundations", label: "Nền tảng" },
    { href: "#principles", label: "Nguyên tắc" },
    { href: "#design-thinking", label: "Design Thinking" },
  ]

  const advancedItems = [
    { href: "#user-research", label: "User Research" },
    { href: "#process", label: "Quy trình UX" },
    { href: "#prototyping", label: "Prototyping" },
    { href: "#design-systems", label: "Design Systems" },
    { href: "#testing", label: "Testing" },
  ]

  const extraItems = [
    { href: "#exercises", label: "Bài tập" },
    { href: "#resources", label: "Tài nguyên" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">UI/UX Design Guide</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary flex items-center gap-1"
                >
                  Nâng cao <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {advancedItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <a href={item.href}>{item.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary flex items-center gap-1"
                >
                  Khác <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {extraItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <a href={item.href}>{item.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border max-h-96 overflow-y-auto">
              {[...mainItems, ...advancedItems, ...extraItems].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
