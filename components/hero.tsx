"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden flex">
      {/* Vertical Image Strips - Image 1 Style */}
      <div className="w-1/4 h-full relative border-r border-black/10 overflow-hidden hidden md:block">
        <div className="absolute inset-0 vertical-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[60vh] relative w-full">
              <Image
                src={`/ceholder-svg-height-800-width-400-text-art-.jpg?height=800&width=400&text=Art+${i}`}
                alt="Art piece"
                fill
                className="object-cover grayscale brightness-90"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[1, 2, 3, 4].map((i) => (
            <div key={`dup-${i}`} className="h-[60vh] relative w-full">
              <Image
                src={`/ceholder-svg-height-800-width-400-text-art-.jpg?height=800&width=400&text=Art+${i}`}
                alt="Art piece"
                fill
                className="object-cover grayscale brightness-90"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 h-full relative">
        <Image src="/placeholder.svg?height=1200&width=800&text=CASA" alt="Main Hero" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <h1 className="font-serif text-[12vw] leading-[0.85] text-white/90 text-center uppercase tracking-tighter drop-shadow-2xl">
            CASA
            <br />
            PORTU
            <br />
            FORNIA
          </h1>
        </div>
        <div className="absolute bottom-10 right-10">
          <div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center text-white text-[10px] font-bold tracking-widest text-center leading-tight">
            MENU
            <br />
            SCROLL
          </div>
        </div>
      </div>

      <div className="w-1/4 h-full relative border-l border-black/10 hidden lg:block">
        <Image
          src="/placeholder.svg?height=1200&width=400&text=Lifestyle"
          alt="Side Hero"
          fill
          className="object-cover brightness-75"
        />
      </div>

      {/* Marquee Divider */}
      <div className="absolute bottom-0 w-full bg-[#E5D9D6] border-y border-black/20 py-2 overflow-hidden z-20">
        <div className="whitespace-nowrap flex gap-10 animate-marquee text-[10px] font-bold tracking-widest uppercase items-center">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="flex gap-10 items-center">
                STORYTELLING <span className="text-black/30">+++</span>
                RESORT WORK <span className="text-black/30">+++</span>
                COACHING <span className="text-black/30">+++</span>
                BRAND STRATEGY
              </span>
            ))}
        </div>
      </div>
    </section>
  )
}
