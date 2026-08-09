"use client"

import { Suspense, useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { TourCard } from "@/components/cards/tour-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal, Loader2 } from "lucide-react"
import type { Tour } from "@/lib/types"
import Image from "next/image"
import Pagination from "@/components/pagination";
import FiltersSidebar from "@/components/filters-sidebar"

export const allTours = [
  {
    id: "1",
    title: "Chongqing Cyberpunk Escape",
    destination: "Chongqing",
    country: "China",
    duration: "3 Nights",
    details: [
      "Private MPV Airport Transfer",
      "5-Star Sky Hotel",
      "VIP No-Queue Hotspot Access",
      "Guided Night City Tour"
    ],
    price: 880,
    oldPrice: 1200,
    image: "/tourdis.png",
    type: "Adventure",
    rating: 4.9,
    reviews: 128,
    features: ["Private Guide", "Luxury Hotel", "VIP Transport"],
    tags: ["Cyberpunk", "City", "Nightlife"],
    description: "Experience the futuristic vibes of the world's most multi-dimensional city.",
    specialOffer: "Winter Discount",
  },
  {
    id: "2",
    title: "Bali & Desaru Luxe Retreat",
    destination: "Bali",
    country: "Indonesia",
    duration: "5 Nights",
    details: [
      "Private Villa with Pool Access",
      "Gourmet Dining Experience",
      "Luxury Spa and Wellness Package",
      "Exclusive Yoga Sessions"
    ],
    price: 450,
    image: "/tourdis.png",
    type: "Luxury",
    rating: 4.8,
    reviews: 95,
    features: ["Spa Access", "Private Pool", "Gourmet Dining"],
    tags: ["Relax", "Beach", "Wellness"],
    description: "Unwind in the most exclusive villas with top-tier service.",
  },
  {
    id: "3",
    title: "Changsha Foodie Trail",
    destination: "Changsha",
    country: "China",
    duration: "2 Nights",
    details: [
      "Local Chef-led Street Food Tour",
      "Authentic Market Tour",
      "Cooking Class with a Local Expert",
      "Food Tasting at Hidden Gems"
    ],
    price: 750,
    oldPrice: 890,
    image: "/tourdis.png",
    type: "Food",
    rating: 4.7,
    reviews: 210,
    features: ["Local Chef", "Market Tour", "Cooking Class"],
    tags: ["Cuisine", "StreetFood", "Local"],
    description: "A spicy adventure through the vibrant food streets of Changsha.",
    specialOffer: "Winter Discount",
  },
  {
    id: "4",
    title: "Bangkok Shopping Spree",
    destination: "Bangkok",
    country: "Thailand",
    duration: "4 Nights",
    details: [
      "Private Shopping Guide",
      "Hotel Transfers to Malls",
      "Welcome Dinner at a Local Thai Restaurant",
      "Exclusive Deals in High-End Malls"
    ],
    price: 380,
    image: "/tourdis.png",
    type: "Family",
    rating: 4.5,
    reviews: 156,
    features: ["Shopping Guide", "Hotel Transfer", "Welcome Dinner"],
    tags: ["Shopping", "City", "Culture"],
    description: "Discover the best markets and luxury malls in Bangkok.",
  },
  {
    id: "5",
    title: "Kyoto Zen Retreat",
    destination: "Kyoto",
    country: "Japan",
    duration: "6 Nights",
    details: [
      "Temple Tour with Expert Guide",
      "Tea Ceremony Experience",
      "Traditional Kaiseki Dinner",
      "Zen Garden Meditation Sessions"
    ],
    price: 1850,
    oldPrice: 2200,
    image: "/tourdis.png",
    type: "Culture",
    rating: 4.9,
    reviews: 84,
    features: ["Temple Tour", "Tea Ceremony", "Kaiseki Dinner"],
    tags: ["History", "Zen", "Gardens"],
    description: "A peaceful journey through the ancient temples and gardens of Kyoto.",
    specialOffer: "Special Discount",
  },
  {
    id: "6",
    title: "Hokkaido Snow Safari",
    destination: "Hokkaido",
    country: "Japan",
    duration: "5 Nights",
    details: [
      "Ski Pass for Premium Resorts",
      "Onsen Access with Scenic Views",
      "Winter Gear Package Included",
      "Private Snowmobile Safari"
    ],
    price: 2450,
    image: "/tourdis.png",
    type: "Adventure",
    rating: 4.8,
    reviews: 62,
    features: ["Ski Pass", "Onsen Access", "Winter Gear"],
    tags: ["Skiing", "Snow", "Nature"],
    description: "The ultimate winter wonderland experience in northern Japan.",
    specialOffer: "Winter Discount",
  }
]




function DestinationsContent() {
  // ✅ Initialize all state variables
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [selectedDurations, setSelectedDurations] = useState<string[]>([])
  const [selectedRegion, setSelectedRegion] = useState<string>("All Regions")
  const [selectedCountry, setSelectedCountry] = useState<string>("All Countries")
  const [selectedCity, setSelectedCity] = useState<string>("All Cities")
  
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [tourData, setTourData] = useState<any[]>([])

  // Memoized filtered tours based on search query, selected styles, and selected durations
  const filteredTours = useMemo(() => {
    return allTours.filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.destination.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStyle = selectedStyles.length === 0 || selectedStyles.includes(tour.type)
      const matchesDuration =
        selectedDurations.length === 0 || selectedDurations.some((duration) => tour.duration.includes(duration))

      return matchesSearch && matchesStyle && matchesDuration
    })
  }, [searchQuery, selectedStyles, selectedDurations])

  // Toggle the selected style
  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    )
  }

    // ✅ Reset all filters
  const handleResetAll = () => {
    setSearchQuery("")
    setSelectedStyles([])
    setSelectedDurations([])
    setSelectedRegion("All Regions")
    setSelectedCountry("All Countries")
    setSelectedCity("All Cities")
  }
  

  // Toggle the selected duration
  const toggleDuration = (duration: string) => {
    setSelectedDurations((prev) =>
      prev.includes(duration) ? prev.filter((d) => d !== duration) : [...prev, duration]
    )
  }

  const fetchTours = async (page: number) => {
    const response = await fetch(`/api/tours?page=${page}`);
    const data = await response.json();
    setTourData(data.data); // Assuming your backend response contains a "data" field
    setTotalPages(data.totalPages); // Set the total number of pages from the backend
  };

  useEffect(() => {
    fetchTours(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }


  return (
    <div className="container mx-auto px-6 lg:px-12 py-20">
      <div className="flex flex-col lg:flex-row gap-12">
{/* Sidebar Filters */}
  {/* ✅ Use the new FiltersSidebar component */}
        <FiltersSidebar
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedDurations={selectedDurations}
          toggleDuration={toggleDuration}
          selectedStyles={selectedStyles}
          toggleStyle={toggleStyle}
          onResetAll={handleResetAll}
        />


        {/* Main Content */}
        <main className="flex-1 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-xl font-bold">
              Showing <span className="text-primary">{filteredTours.length}</span> packages
            </h2>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium shrink-0">
                <SlidersHorizontal className="size-4" />
                Sort:
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px] rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
            {filteredTours.length === 0 && (
              <div className="col-span-full py-20 text-center space-y-4">
                <div className="size-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                  <Search className="size-10" />
                </div>
                <h3 className="text-xl font-bold">No packages found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                <Button variant="outline" className="rounded-xl bg-transparent" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}

            
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </main>
      </div>
    </div>
  )
}

export default function DestinationsPage() {

    const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [tourData, setTourData] = useState<any[]>([]);

  const fetchTours = async (page: number) => {
    const response = await fetch(`/api/tours?page=${page}`);
    const data = await response.json();
    setTourData(data.data); // Assuming your backend response contains a "data" field
    setTotalPages(data.totalPages); // Set the total number of pages from the backend
  };

  useEffect(() => {
    fetchTours(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image width={100} height={100}
            src="/background.png"
            alt="Destinations hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the World</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore new places, cultures, and experiences at your own pace.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-9 flex items-center justify-center">
            <Loader2 className="size-8 animate-spin text-primary" />
          </div>
        }
      >
        <DestinationsContent />
        
        
      </Suspense>
      
    </div>
  )
}
