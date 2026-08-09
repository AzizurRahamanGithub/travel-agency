import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Star, Clock, MapPin, CheckCircle2, Info, ChevronRight, Share2, Heart, Download } from "lucide-react"
import Link from "next/link"

// Mock data for a single tour
const tour = {
  id: "1",
  title: "Chongqing Cyberpunk Weekend Escape",
  destination: "Chongqing",
  country: "China",
  duration: "3 Nights",
  price: 880,
  oldPrice: 1200,
  image: "/tour-1.jpg?height=800&width=1200&query=chongqing-cityscape",
  type: "Adventure",
  rating: 4.9,
  reviews: 128,
  description:
    "Experience the futuristic vibes of the world's most multi-dimensional city. From the high-tech lights of Jiefangbei to the ancient alleys of Hongyadong, this tour blends the cutting-edge with the historic.",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Cyberpunk Orientation",
      content:
        "Arrive at Jiangbei Airport where your private transfer awaits. Evening walk through the neon-lit streets of Jiefangbei.",
    },
    {
      day: 2,
      title: "Skyline Adventures",
      content:
        "Visit the famous 'train through a building' at Liziba. Later, explore the Raffles City observation deck for panoramic views.",
    },
    {
      day: 3,
      title: "Old Town & Neon Nights",
      content:
        "Wander through Ciqikou ancient town. In the evening, witness the stunning lights of Hongyadong stilt houses reflecting on the river.",
    },
  ],
  includes: ["Luxury Hotel (4-star)", "Private Airport Transfer", "All Entry Fees", "Professional English Guide"],
  excludes: ["International Flights", "Personal Expenses", "Travel Insurance"],
}

export default function TourDetailsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 h-full flex flex-col justify-end pb-12 px-4 lg:px-8 text-white">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-primary hover:bg-primary border-0">Cyberpunk Weekend</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-4xl">{tour.title}</h1>
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-primary shrink-0" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-primary shrink-0" />
              <span>{tour.destination}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-5 text-yellow-400 fill-yellow-400 shrink-0" />
              <span>
                {tour.rating} ({tour.reviews} Reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-12">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Itinerary</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {tour.itinerary.map((item) => (
                  <AccordionItem
                    key={item.day}
                    value={`day-${item.day}`}
                    className="border border-gray-100 rounded-2xl px-6 bg-white overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                          {item.day}
                        </div>
                        <span className="text-lg font-bold">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed pl-14">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-green-500" />
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {tour.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <ChevronRight className="size-4 text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Info className="size-5 text-red-500" />
                  What's Excluded
                </h3>
                <ul className="space-y-3">
                  {tour.excludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <ChevronRight className="size-4 text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <h3 className="text-xl font-bold mb-4">Important Remarks</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Visa required for most nationalities. Health insurance with COVID coverage is mandatory. Itinerary is
                subject to local traffic and weather conditions. Please arrive at the meeting point 15 minutes before
                the scheduled time.
              </p>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-1/3">
            <Card className="sticky top-32 p-8 rounded-3xl shadow-xl border-gray-100 overflow-hidden">
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Total Price</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-primary">${tour.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${tour.oldPrice}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">per person (starting from)</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full h-14 rounded-xl text-base font-bold" asChild>
                    <Link href="/booking">Book This Escape</Link>
                  </Button>
                  <Button variant="outline" className="w-full h-14 rounded-xl text-base font-bold bg-transparent">
                    Enquire Now
                  </Button>
                </div>

                <Button variant="ghost" className="w-full gap-2 text-primary font-bold hover:bg-primary/5">
                  <Download className="size-4" />
                  Download Brochure
                </Button>

                <div className="pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="size-5 text-green-500 shrink-0" />
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="size-5 text-green-500 shrink-0" />
                    <span>Free cancellation until 48h before</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Share2 className="size-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-50 hover:text-red-500">
                    <Heart className="size-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
