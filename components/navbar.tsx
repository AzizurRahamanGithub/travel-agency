"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${isScrolled ? "bg-[#E5D9D6]/80 backdrop-blur-md shadow-sm" : ""}`}
    >
      <div className="flex items-center gap-1 font-bold text-lg tracking-tighter">
        <div className="w-6 h-6 bg-black flex items-center justify-center text-white text-[10px]">C</div>
        <span>CASA PORTUFORNIA</span>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Work
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Journal
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Connect
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-2 text-[10px] font-bold">0</span>
          </div>
          <button className="hidden md:block text-sm font-bold border-b border-black pb-0.5">
            BOOK AN APPOINTMENT
          </button>
          <button className="p-1">
            <div className="w-6 h-0.5 bg-black mb-1.5" />
            <div className="w-6 h-0.5 bg-black" />
          </button>
        </div>
      </div>
    </nav>
  )
}
