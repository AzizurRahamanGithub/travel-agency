"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarIcon, MapPin, Compass, Search } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-travel.jpg?height=1080&width=1920&query=luxury-travel-beach-resort"
          alt="Luxury travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 px-4 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
          Discover the World
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Explore new places, cultures, and experiences at your own pace. Your dream vacation is just a click away.
        </p>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="flex flex-col items-start px-4 border-r border-gray-100 last:border-0">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                Location
              </label>
              <div className="flex items-center gap-2 w-full text-foreground">
                <MapPin className="size-4 text-primary shrink-0" />
                <Input
                  variant="ghost"
                  placeholder="Where are you going?"
                  className="p-0 border-0 h-auto focus-visible:ring-0 text-sm font-medium"
                />
              </div>
            </div>

            <div className="flex flex-col items-start px-4 border-r border-gray-100 last:border-0">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Date</label>
              <div className="flex items-center gap-2 w-full text-foreground">
                <CalendarIcon className="size-4 text-primary shrink-0" />
                <span className="text-sm font-medium">Select dates</span>
              </div>
            </div>

            <div className="flex flex-col items-start px-4 border-r border-gray-100 last:border-0">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Type</label>
              <div className="flex items-center gap-2 w-full text-foreground">
                <Compass className="size-4 text-primary shrink-0" />
                <span className="text-sm font-medium">Adventure</span>
              </div>
            </div>

            <Button className="h-14 rounded-xl text-base font-bold gap-2">
              <Search className="size-5" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
