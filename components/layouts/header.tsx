"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown, Menu} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from 'next/image';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Cruises", href: "/cruises" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-2">
        <Link href="/" className="flex items-center gap-3">
          <Image width={180} height={100}
            src="/logo.png" 
            alt="Description of my image" 
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10 xl:gap-15">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-[14px] font-medium transition-all  tracking-widest",
                pathname === item.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-slate-700 hover:text-primary",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="rounded-full border border-gray-100 px-4 h-9 gap-2 font-bold text-[11px] uppercase tracking-widest text-secondary"
          >
            <Globe className="size-3.5" />
            EN
            <ChevronDown className="size-3 text-gray-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full border border-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-bold uppercase tracking-widest",
                pathname === item.href ? "text-primary" : "text-gray-400",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
