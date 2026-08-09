import { Badge } from "@/components/ui/badge"
import { HomepageHero } from "@/components/sections/homepage-hero"
import { HomepageListings } from "@/components/sections/homepage-listings"
import { Button } from "@/components/ui/button"
import { MapPin, ShieldCheck, Headphones, ArrowRight, Calendar, Bed, Wallet, MessageCircle, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const featuredPost = {
  title: "The Ultimate Foodie Guide to Osaka",
  description: "Where to find the best Takoyaki, Okonomiyaki, and fluffy cheesecakes in Japan's kitchen. Don't miss the Kuromon Market!",
  date: "DEC 12, 2026",
  image: "/background.png",
}

const sidebarPosts = [
  {
    title: "Discover the Hidden Gems",
    description: "Benefits of traveling alone, from the freedom to discover new places with new friends. Why solo travel is the new luxury.",
    date: "MARCH 15, 2026",
    image: "/travel.jpg",
  },
  {
    title: "Must-See Landmarks",
    description: "Iconic landmarks that make Europe one of the world's most popular travel destinations. From the Eiffel Tower to the Colosseum.",
    date: "FEB 28, 2026",
    image: "travel1.jpg",
  },
  {
    title: "Traveling on a Budget",
    description: "Practical advice for travelers who want to see the world without breaking the bank. Tips on cheap flights and hostels.",
    date: "JAN 10, 2026",
    image: "/travel.jpg",
  },
]



const features = [
  {
    icon: Bed,
    title: "No 'Catfish' Hotels",
    subtitle: "WE SLEEP-TEST EVERYTHING.",
    description: "We personally check water pressure, bed shiok-ness, and WiFi speed. If the hotel is CMI (Cannot Make It), it's not on our list.",
  },
  {
    icon: Wallet,
    title: "Confirm Plus Chop Pricing",
    subtitle: "NETT PRICE. NO SHOCKS.",
    description: "What you see is what you pay. No hidden 'service charge', no forced shopping stops, and definitely no rude surprises.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Concierge",
    subtitle: "ON THE BALL SUPPORT.",
    description: "Lost? Hungry? Need a doctor? Text our local SG team. We reply faster than your BTO queue number.",
  },
]


const cruises = [
  {
    title: "Genting Dream Getaway",
    badge: "Genting Dream",
    badgeColor: "bg-[#00bcd4]",
    date: "Fri, 12 Oct",
    nights: "3 Nights",
    route: "Singapore • Penang • Singapore",
    price: 459,
    image: "/tour.png",
  },
  {
    title: "Spectrum of the Seas",
    badge: "Royal Caribbean",
    badgeColor: "bg-[#ff6b35]",
    date: "Mon, 15 Oct",
    nights: "4 Nights",
    route: "Singapore • Phuket • Singapore",
    price: 680,
    image: "/tour.png",
  },
  {
    title: "Disney Adventure Magic",
    badge: "Disney Adventure",
    badgeColor: "bg-[#ff4757]",
    date: "Wed, 20 Nov",
    nights: "5 Nights",
    route: "Singapore • High Seas • Singapore",
    price: 980,
    image: "/tour.png",
  },
]


export default function Home() {
  return (
    <main className="flex flex-col">
      <HomepageHero />
      <HomepageListings />


      <div className="py-32 mt-26 text-white overflow-hidden relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/herosection.png")' }} >
        {/* Cruises Section - Redesigned to match Image 2/5 precisely */}
        <section className=" mt-10 text-white overflow-hidden relative "  >
          <div className="">

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              {/* Header */}
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight max-w-5xl mx-auto leading-[1.15]">
                  Or maybe... swap the road for the Sea?
                </h2>
                <p className="text-[#a8d5ba] max-w-2xl mx-auto text-base leading-relaxed">
                  If land travel feels too hectic, unpack once and wake up to a new horizon every morning. All-inclusive luxury on the waves.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {cruises.map((cruise, i) => (
                  <div
                    key={i}
                    className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0a3d3d] to-[#0d4d4d] shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Image Section */}
                    <div className="relative aspect-[4/2] overflow-hidden">
                      <Image width={100} height={100}
                        src={cruise.image}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt={cruise.title}
                      />
                      {/* Badge */}
                      <div className="absolute top-5 left-5">
                        <Badge className={`${cruise.badgeColor} text-white border-0 py-2 px-4 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-2`}>
                          {cruise.badge === "Genting Dream" && (
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                            </svg>
                          )}
                          {cruise.badge === "Royal Caribbean" && (
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
                            </svg>
                          )}
                          {cruise.badge === "Disney Adventure" && (
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )}
                          {cruise.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      {/* Date & Duration */}
                      <div className="flex items-center gap-4 text-sm text-white/80">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4" />
                          {cruise.date}
                        </div>
                        <div className="flex justify-center items-center gap-1.5">
                          <span className="text-white/70 w-1.5 h-1.5 bg-white/70 rounded-full" ></span>
                          <span>{cruise.nights}</span>
                        </div>

                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#A3E635] leading-tight">
                        {cruise.title}
                      </h3>

                      {/* Route */}
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <MapPin className="size-4 text-white/50" />
                        {cruise.route}
                      </div>

                      {/* Divider */}
                      <div className="border-t border-white/10 pt-4 mt-4"></div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-white/50 uppercase tracking-wider block mb-1">
                            From
                          </span>
                          <span className="text-3xl font-bold text-white">
                            ${cruise.price}
                          </span>
                        </div>
                        <Button
                          size="icon"
                          className="bg-primary hover:bg-[#00acc1] rounded-full h-12 w-12 shadow-lg transition-all duration-300 group-hover:scale-110"
                          asChild
                        >
                          <Link href="/cruise-details">
                            <ArrowRight className="size-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="flex justify-center pt-8">
                <Button className="bg-primary hover:bg-[#00acc1] text-white h-12 px-10 rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105">
                  View All Voyages
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            </div>
          </div>

        </section>

        {/* Why Us Section - Image 2 Style */}
        <section className="py-20 mt-26   text-white relative overflow-hidden">

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight max-w-4xl mx-auto leading-[1.15]">
                Why Long Vacation?
              </h2>
              <p className="text-[#a8d5ba] max-w-3xl mx-auto text-base leading-relaxed">
                Not your grandmother's tour agency. We travel like you do—fuss-free, honest, and high quality.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-bl from-transparent/80 to-[#0d4d4d]/80 backdrop-blur-sm rounded-3xl p-8 space-y-5 hover:bg-gradient-to-br hover:from-[#0a3d3d] hover:to-[#0d4d4d] transition-all duration-300 border border-white/5"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                    <feature.icon className="size-8 text-[#0d4d4d]" strokeWidth={2.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {feature.title}
                  </h3>

                  {/* Subtitle with checkmark */}
                  <div className="flex items-center gap-2 text-[#A3E635] text-xs font-bold uppercase tracking-wider">
                    <CheckCircle className="size-4" />
                    {feature.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Inspiration - Image 2 Style */}
        <section className="py-20 mt-26  text-white">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight">
                Travel Inspiration
              </h2>
              <p className="text-white/60 text-base">
                Guides and stories from our team.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="flex justify-between items-center gap-5 w-full h-[470] ">
                {/* Featured Post - Left Side */}
                <div className="relative flex-1 h-full">
                  <div className="group relative rounded-3xl overflow-hidden cursor-pointer h-full">
                    <img
                      width={100}
                      height={100}
                      src={featuredPost.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={featuredPost.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                      {/* Date Badge */}
                      <Badge className="bg-[#00bcd4] text-white border-0 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 w-fit">
                        <Calendar className="size-3.5" />
                        {featuredPost.date}
                      </Badge>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        {featuredPost.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                        {featuredPost.description}
                      </p>

                      {/* Read Article Button */}
                      <Button className="bg-[#00bcd4] hover:bg-[#00acc1] text-white rounded-full px-6 h-11 font-semibold text-sm flex items-center gap-2 transition-all duration-300">
                        Read Article
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Sidebar Posts - Right Side */}
                <div className="flex-1 h-full flex flex-col justify-between">
                  {sidebarPosts.map((post, i) => (
                    <div
                      key={i}
                      className="group flex gap-5 items-start justify-between bg-[#084159] rounded-3xl  cursor-pointer hover:from-[#0a3d3d] hover:to-[#0d4d4d] transition-all duration-300 border border-white/5"
                    >
                      {/* Image */}
                      <div className="w-36 h-full rounded-l-2xl overflow-hidden shrink-0">
                        <Image
                          width={100}
                          height={100}
                          src={post.image}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          alt={post.title}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2 pt-5">
                        {/* Date Badge */}
                        <Badge className="bg-[#a8d5ba] text-[#0d4d4d] border-0 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit">
                          <Calendar className="size-3" />
                          {post.date}
                        </Badge>

                        {/* Title */}
                        <h4 className="text-lg font-bold text-white group-hover:text-[#a8d5ba] transition-colors leading-tight">
                          {post.title}
                        </h4>

                        {/* Description */}
                        <p className="text-white/60 text-xs leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </section>
      </div>

    </main>
  )
}
