"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, MapPin, CalendarDays, Users } from "lucide-react"
import Link from 'next/link';

const cruises = [
  {
    id: 1,
    title: "Genting Dream Getaway",
    image: "/tourdis.png",
    price: 459,
    route: "Singapore • Penang • Sihanouk",
    date: "Thu, 12 Oct • 3 Nights",
    pax: "2 to 6",
    badges: ["WEEKEND", "FAMILY FUN"],
    line: "Genting Dream",
  },
  {
    id: 2,
    title: "Spectrum of the Seas",
    image: "/Genting Dream Getaway.png",
    price: 680,
    route: "Singapore • Phuket • Singapore",
    date: "Mon, 15 Oct • 4 Nights",
    pax: "2 to 8",
    badges: ["LUXURY", "ENTERTAINMENT"],
    line: "Royal Caribbean",
  },
  {
    id: 3,
    title: "Disney Adventure Magic",
    image: "/tourdis.png",
    price: 980,
    route: "Singapore • High Seas • Singapore",
    date: "Wed, 20 Nov • 5 Nights",
    pax: "2 to 6",
    badges: ["KIDS", "DISNEY MAGIC"],
    line: "Disney Adventure",
  },
]

const cruiseLines = [
  "All Cruise Lines",
  "Genting Dream",
  "Royal Caribbean",
  "Disney Adventure",
  "Resorts World Cruises",
]

export default function CruiseListingPage() {
  const [activeLine, setActiveLine] = useState("All Cruise Lines")

  const filteredCruises =
    activeLine === "All Cruise Lines"
      ? cruises
      : cruises.filter((c) => c.line === activeLine)

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={600}
            src="/travel1.jpg"
            alt="Genting Dream Getaway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Genting Dream Getaway</h1>
          <p className="text-lg opacity-90">Singapore • Malaysia</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-4 py-12 mt-15 ">

        {/* Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-8">
          {cruiseLines.map((line) => (
            <button
              key={line}
              onClick={() => setActiveLine(line)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all
                ${activeLine === line
                  ? "bg-primary text-white border-primary shadow"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              {line}
            </button>
          ))}
        </div>

        {/* Filters Row */}
        <div className="flex items-center justify-between gap-3 flex-wrap mb-6">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
              All
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
              Any Month
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-500">{filteredCruises.length} Voyages Found</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 w-full">
          {filteredCruises.map((cruise) => (
            <Link key={cruise.id} href={`/cruises/${cruise.id}`} passHref>
              <div
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row cursor-pointer"
              >
                {/* LEFT IMAGE */}
                <div className="relative w-full sm:w-[600] h-auto sm:h-[300] overflow-hidden">
                  <Image
                    src={cruise.image}
                    alt={cruise.title}
                    fill
                    className="object-cover"
                  />
                  {/* Top Badge */}
                  <span className="absolute top-3 left-3 bg-white/80 px-3 py-1 text-[10px] font-bold text-gray-700 rounded-full">
                    {cruise.line}
                  </span>

                  {/* Bottom badges */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {cruise.badges.map((badge) => (
                      <span
                        key={badge}
                        className="bg-black/40 text-white text-[10px] px-2 py-[3px] rounded-full font-semibold backdrop-blur"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 p-10 flex flex-col justify-between w-full">
                  <div className="flex items-start justify-between gap-4 w-full">
                    <div className="w-full">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">
                            {cruise.date}
                          </p>
                          <h3 className="text-lg font-bold text-gray-900 mb-3">
                            {cruise.title}
                          </h3>
                        </div>

                        {/* Price */}
                        <div className="text-right mr-6">
                          <p className="text-[10px] text-gray-400 font-semibold uppercase">
                            From
                          </p>
                          <p className="text-2xl font-bold text-gray-900">
                            ${cruise.price}
                          </p>
                          <p className="text-[10px] text-gray-400">Per Pax</p>
                        </div>
                      </div>

                      {/* Route */}
                      <div className="flex mt-10 w-full bg-gray-100 py-3 px-5 rounded-2xl items-center gap-2 text-sm text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {cruise.route}
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex justify-between mt-5">
                    {/* Pax */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4 text-gray-400" />
                      {cruise.pax} pax
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-5 py-2 rounded-full transition-all">
                      View Cabins →
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
