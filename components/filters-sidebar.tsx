"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FiltersSidebarProps {
  selectedRegion: string
  setSelectedRegion: (value: string) => void
  selectedCountry: string
  setSelectedCountry: (value: string) => void
  selectedCity: string
  setSelectedCity: (value: string) => void
  selectedDurations: string[]
  toggleDuration: (duration: string) => void
  selectedStyles: string[]
  toggleStyle: (style: string) => void
  onResetAll: () => void
}

export default function FiltersSidebar({
  selectedRegion,
  setSelectedRegion,
  selectedCountry,
  setSelectedCountry,
  selectedCity,
  setSelectedCity,
  selectedDurations,
  toggleDuration,
  selectedStyles,
  toggleStyle,
  onResetAll,
}: FiltersSidebarProps) {
  // Collapsible states
  const [isRegionOpen, setIsRegionOpen] = useState(true)
  const [isCountryOpen, setIsCountryOpen] = useState(true)
  const [isCityOpen, setIsCityOpen] = useState(true)
  const [isDurationOpen, setIsDurationOpen] = useState(true)
  const [isTravelStyleOpen, setIsTravelStyleOpen] = useState(true)

  return (
    <aside className="w-full lg:w-[320px] shrink-0 overflow-y-hidden">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="font-bold text-xl text-gray-900">Filters</h3>
          <Button
            variant="link"
            className="text-red-500 hover:text-red-600 text-sm p-0 h-auto font-semibold"
            onClick={onResetAll}
          >
            Reset All
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Region Filter */}
          <div className="space-y-3">
            <button
              onClick={() => setIsRegionOpen(!isRegionOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <Label className="text-base font-semibold text-gray-900 cursor-pointer">Region</Label>
              {isRegionOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {isRegionOpen && (
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full h-11 rounded-lg border-gray-300 text-gray-700">
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Regions">All Regions</SelectItem>
                  <SelectItem value="north-america">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="oceania">Oceania</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="south-america">South America</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>

          <div className="border-t border-gray-200" />

          {/* Country Filter */}
          <div className="space-y-3">
            <button
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <Label className="text-base font-semibold text-gray-900 cursor-pointer">Country</Label>
              {isCountryOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {isCountryOpen && (
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-full h-11 rounded-lg border-gray-300 text-gray-700">
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Countries">All Countries</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>

          <div className="border-t border-gray-200" />

          {/* City Filter */}
          <div className="space-y-3">
            <button
              onClick={() => setIsCityOpen(!isCityOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <Label className="text-base font-semibold text-gray-900 cursor-pointer">City</Label>
              {isCityOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {isCityOpen && (
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full h-11 rounded-lg border-gray-300 text-gray-700">
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Cities">All Cities</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="paris">Paris</SelectItem>
                  <SelectItem value="tokyo">Tokyo</SelectItem>
                  <SelectItem value="bangkok">Bangkok</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>

          <div className="border-t border-gray-200" />

          {/* Duration Filter */}
          <div className="space-y-3">
            <button
              onClick={() => setIsDurationOpen(!isDurationOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <Label className="text-base font-semibold text-gray-900 cursor-pointer">Duration</Label>
              {isDurationOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {isDurationOpen && (
              <div className="space-y-3">
                {["Weekend (1-3 Days)", "Short Trip (4-6 Days)", "Immersive (7-10 Days)", "Long Haul (11+ Days)"].map(
                  (duration) => (
                    <div key={duration} className="flex items-center space-x-3">
                      <Checkbox
                        id={duration}
                        checked={selectedDurations?.includes(duration) || false}
                        onCheckedChange={() => toggleDuration(duration)}
                        className="rounded border-gray-300"
                      />
                      <label
                        htmlFor={duration}
                        className="text-sm text-gray-700 cursor-pointer select-none leading-none"
                      >
                        {duration}
                      </label>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <div className="border-t border-gray-200" />

          {/* Travel Style Filter */}
          <div className="space-y-3">
            <button
              onClick={() => setIsTravelStyleOpen(!isTravelStyleOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <Label className="text-base font-semibold text-gray-900 cursor-pointer">Travel Style</Label>
              {isTravelStyleOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {isTravelStyleOpen && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {["Adventure", "Foodie", "Nature", "Luxury", "Family", "City", "Culture", "Shopping"].map((style) => (
                    <div key={style} className="flex items-center space-x-2">
                      <Checkbox
                        id={style}
                        checked={selectedStyles?.includes(style) || false}
                        onCheckedChange={() => toggleStyle(style)}
                        className="rounded border-gray-300"
                      />
                      <label
                        htmlFor={style}
                        className="text-sm text-gray-700 cursor-pointer select-none leading-none"
                      >
                        {style}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}