import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, MapPin, ArrowRight } from "lucide-react"
import type { Tour } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"

interface TourCardProps {
  tour: Tour
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Link href={`/destinations/${tour.id}`}>  {/* ✅ Fixed: Use backticks for template literal */}
      <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        {/* Image Section */}
        <div className="relative">
          <Image
            width={400}
            height={300}
            src={tour.image || "/placeholder.svg"}
            alt={tour.title}
            className="w-full h-64 object-cover"
          />
          {tour.specialOffer && (
            <span className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 text-xs font-semibold rounded-full">
              {tour.specialOffer}
            </span>
          )}
        </div>

        {/* Tour Info Section */}
        <div className="p-6 space-y-4">
          {/* Location, Title */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{tour.destination}, {tour.country}</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-secondary group-hover:text-primary line-clamp-2">
            {tour.title}
          </h3>

          {/* Features Tags */}
          <div className="flex gap-2 overflow-x-hidden flex-wrap">
            {tour.features.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 text-xs font-semibold text-gray-700 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 line-clamp-3 mt-8">{tour.description}</p>

          {/* Tour Details */}
          <ul className="space-y-2 text-sm text-gray-600 bg-slate-100 p-3 rounded-sm mt-8">
            {tour?.details?.map((detail, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-primary">✔</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex gap-2 overflow-x-hidden pb-9 border-b">
            {tour.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-3 py-1 text-xs font-semibold text-gray-700 opacity-50 italic rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Pricing and View Button */}
          <div className="flex justify-between items-end mt-6">
            <div>
              <p className="text-xs font-bold text-gray-500">Starting From</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary">${tour.price}</span>
                {tour.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">${tour.oldPrice}</span>
                )}
              </div>
              <span className="text-xs text-gray-600 font-semibold opacity-60">NET / PAX</span>
            </div>
            <button className="bg-primary text-white text-xs rounded-full px-6 py-2 hover:bg-primary/90 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}