import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Sparkles, Utensils, Clock, Gift, Theater, Gem , Users  } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const packages = [
  {
    title: "CHONGQING CYBERPUNK",
    location: "China • Chongqing",
    duration: "3nights",
    tags: [
      { label: "Adventure", color: "bg-[#00bcd4] text-white" },
      { label: "Foodie", color: "bg-[#ff6b6b] text-white" }
    ],
    description: "Experience the 8D Magic City with stunning night views, legendary hotpot, and futuristic architecture.",
    price: 880,
    oldPrice: null,
    perPax: "NET / PAX",
    image: "/travel.jpg",
    badge: "Special Offer",
  },
  {
    title: "CHANGSHA FOOD TRAIL",
    location: "China • Changsha",
    duration: "4nights",
    tags: [
      { label: "Foodie", color: "bg-[#ff6b6b] text-white" },
      { label: "Culture", color: "bg-[#00bcd4] text-white" }
    ],
    description: "The ultimate eat-venture through Michelin hidden gems with a private local foodie guide.",
    price: 750,
    oldPrice: 950,
    perPax: "NET / PAX",
    image: "/travel.jpg",
    badge: "Special Offer",
  },
  {
    title: "BALI & DESARU LUXE",
    location: "Indonesia • Bali",
    duration: "3nights",
    tags: [
      { label: "Luxury", color: "bg-[#9b59b6] text-white" },
      { label: "Family", color: "bg-[#00bcd4] text-white" }
    ],
    description: "Sun, sand & private villas. The perfect weekend villa escape with dedicated nanny service.",
    price: 450,
    oldPrice: null,
    perPax: "NET / PAX",
    image: "/travel.jpg",
    badge: "Special Offer",
  },
]

export function HomepageListings() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold tracking-tight text-gray-900 max-w-5xl mx-auto leading-[1.15]">
            Feeling burnt out? A SHIOK holiday might be just what you need.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            We curated these short, sweet, and fuss-free trips just for you. Maximum shiok, minimum planning.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/2.3] overflow-hidden">
                <Image width={100} height={100}
                  src={pkg.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={pkg.title}
                />
                {/* Badge */}
                <div className="absolute top-5 right-5">
                  <Badge className="bg-[#00bcd4] text-white border-0 py-2 px-4 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
                    <Gift />
                    {pkg.badge}
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-7 space-y-4">
                {/* Location */}
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#00bcd4] uppercase tracking-wider">
                  <MapPin className="size-4" />
                  {pkg.location}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-gray-900 leading-tight">
                  {pkg.title}
                </h3>

                {/* Tags */}
             <div className="flex flex-wrap gap-2">
  {pkg.tags.map((tag, idx) => (
    <Badge
      key={idx}
      className={`${tag.color} border-0 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wide flex items-center gap-1.5`}
    >
      {/* Conditional Rendering for Icons */}
      {tag.label === "Foodie" && <Utensils className="text-white" />}
      {tag.label === "Adventure" && <Sparkles className="text-white" />}
      {tag.label === "Culture" && <Theater className="text-white" />}
      {tag.label === "Luxury" && <Gem className="text-white" />}
      {tag.label === "Family" && <Users className="text-white" />}
      {tag.label}
    </Badge>
  ))}
  <Badge className="bg-gray-50 border-  text-gray-600  px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wide flex items-center gap-1.5">
    <Clock className="size-3 " />
    {pkg.duration}
  </Badge>
</div>   

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price & CTA */}
                <div className="pt-4 flex items-end justify-between border-t border-gray-100">
                  <div>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                      STARTING FROM
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-900">${pkg.price}</span>
                      {pkg.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">${pkg.oldPrice}</span>
                      )}
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                      {pkg.perPax}
                    </span>
                  </div>
                  <Button
                    className="bg-transparent border-2 border-primary text-priborder-primary hover:bg-priborder-primary hover:bg-primary hover:text-white rounded-full px-4 h-11 font-semibold text-xs uppercase tracking-wider transition-all duration-300"
                    asChild
                  >
                    <Link href="/destinations">View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center pt-8">
          <Button style={{paddingRight:"20px", paddingLeft:"20px"}} className="bg-primary hover:bg-[#00acc1] text-white py-6 rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2">
            View More Packages
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}