"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { MapPin, Calendar, Search, CheckCircle2, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const tabs = ["Tours", "Hotels", "Tickets", "Rental", "Activities"]

export function HomepageHero() {
  const [activeTab, setActiveTab] = useState("Tours")
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()

  const formatDate = (date: Date | undefined) => {
    if (!date) return "02 January 2025"
    const day = String(date.getDate()).padStart(2, '0')
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  return (
    <section className="relative pt-20">
      {/* Background Hero */}
      <div className="relative h-[85vh] min-h-[900px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/hero.png"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Travel Hero"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="container relative z-10 px-6 text-center text-white space-y-10 mb-20">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-[11px] font-bold uppercase tracking-[0.2em]">
            <img
              src="/earth.png"
              className="w-5 h-5"
              alt="Earth Icon"
            />
            The Best Booking System
          </div>

          <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tight max-w-5xl mx-auto leading-[1.05]">
            Find The Best Flight For The Amazing Places
          </h1>

          <div className="flex flex-wrap justify-center gap-10 text-[13px] font-bold uppercase tracking-wider text-white/90">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-primary" />
              Cheap Price Flights
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-primary" />
              Transparent Booking Process
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-primary" />
              Exceptional Customer Support
            </div>
          </div>

          <Button className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-widest shadow-2xl shadow-primary/20">
            Discover Now
          </Button>
        </div>
      </div>

      {/* Multi-Tab Search Box */}
      <div className="container relative z-20 mx-auto -mt-25 px-4 lg:px-6">
        <div className="bg-white rounded-[15px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[1300] mx-auto">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-2 border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-7 py-3 text-[13px] font-semibold rounded-full transition-all",
                  activeTab === tab
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

         {/* Search Form */}
<div className="p-5">
  <div className="flex flex-wrap justify-between items-center rounded-[10px] border px-4 py-3">
    
    {/* Where to? */}
    <div className="w-full sm:w-auto">
      <label className="text-[11px] text-gray-500 font-medium mb-1 flex items-center gap-2">
        <MapPin className="size-3.5 text-primary" />
        Where to?
      </label>
      <Select>
        <SelectTrigger className="h-11 border-0 shadow-none px-0 text-sm font-medium text-gray-700 focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="Select destination" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="paris">Paris, France</SelectItem>
          <SelectItem value="london">London, UK</SelectItem>
          <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
          <SelectItem value="newyork">New York, USA</SelectItem>
          <SelectItem value="dubai">Dubai, UAE</SelectItem>
          <SelectItem value="bali">Bali, Indonesia</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="border-r-2 rounded-2xl h-[60px] w-1 hidden sm:block"></div>

    {/* City */}
    <div className="w-full sm:w-auto mt-4 sm:mt-0">
      <label className="text-[11px] text-gray-500 font-medium mb-1 flex items-center gap-2">
        <MapPin className="size-3.5 text-primary" />
        City
      </label>
      <Select>
        <SelectTrigger className="h-11 border-0 shadow-none px-0 text-sm font-medium text-gray-700 focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="Select city" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="paris">Paris</SelectItem>
          <SelectItem value="london">London</SelectItem>
          <SelectItem value="tokyo">Tokyo</SelectItem>
          <SelectItem value="newyork">New York</SelectItem>
          <SelectItem value="dubai">Dubai</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="border-r-2 rounded-2xl h-[60px] w-1 hidden sm:block"></div>

    {/* Check In */}
    <div className="w-full sm:w-auto mt-4 sm:mt-0">
      <label className="text-[11px] text-gray-500 font-medium mb-1 flex items-center gap-2">
        <Calendar className="size-3.5 text-primary" />
        Check In
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full h-11 px-0 justify-start font-medium text-sm text-gray-700 hover:text-gray-900 hover:bg-transparent border-0 shadow-none"
            )}
          >
            <span>{formatDate(checkInDate)}</span>
            <ChevronDown className="ml-auto size-4 text-gray-400" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            mode="single"
            selected={checkInDate}
            onSelect={setCheckInDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>

    <div className="border-r-2 rounded-2xl h-[60px] w-1 hidden sm:block"></div>

    {/* Check Out */}
    <div className="w-full sm:w-auto mt-4 sm:mt-0">
      <label className="text-[11px] text-gray-500 font-medium mb-1 flex items-center gap-2">
        <Calendar className="size-3.5 text-primary" />
        Check Out
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full h-11 px-0 justify-start font-medium text-sm text-gray-700 hover:text-gray-900 hover:bg-transparent border-0 shadow-none"
            )}
          >
            <span>{formatDate(checkOutDate)}</span>
            <ChevronDown className="ml-auto size-4 text-gray-400" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            mode="single"
            selected={checkOutDate}
            onSelect={setCheckOutDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>

    <div className="border-r-2 rounded-2xl h-[60px] w-1 hidden sm:block"></div>

    {/* Trip Type */}
    <div className="w-full sm:w-auto mt-4 sm:mt-0">
      <label className="text-[11px] text-gray-500 font-medium mb-1 flex items-center gap-2">
        <MapPin className="size-3.5 text-primary" />
        Trip Type
      </label>
      <Select>
        <SelectTrigger className="h-11 border-0 shadow-none px-0 text-sm font-medium text-gray-700 focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="Select trip type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="oneway">One Way</SelectItem>
          <SelectItem value="roundtrip">Round Trip</SelectItem>
          <SelectItem value="multicity">Multi City</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* Search Button */}
    <div className="w-full sm:w-auto mt-4 sm:mt-0">
      <Button
        size="lg"
        className="h-11 w-full px-10 bg-primary hover:bg-[#007ac1] rounded-full text-sm font-semibold shadow-lg text-white"
      >
        <Search className="size-4 mr-2" />
        Search
      </Button>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}