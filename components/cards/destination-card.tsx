import Link from "next/link"
import type { Destination } from "@/lib/types"

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.id}`} className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
      <img
        src={destination.image || "/placeholder.svg"}
        alt={destination.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{destination.country}</p>
        <h3 className="text-2xl font-bold">{destination.name}</h3>
        <p className="text-sm mt-2 font-medium bg-white/20 backdrop-blur-md inline-block px-3 py-1 rounded-full">
          {destination.tourCount} Tours
        </p>
      </div>
    </Link>
  )
}
