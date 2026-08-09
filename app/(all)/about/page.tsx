import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, Users, Globe, Award, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutPage() {

  const team = [
    { name: "Sarah L.", role: "Founder", desc: "Knows every hidden cafe in Seoul.", img: "/aboutp.png" },
    { name: "David T.", role: "Operations Lead", desc: "Can solve any crisis in 5 mins.", img: "/aboutp2.png" },
    { name: "Jessica W.", role: "MICE Specialist", desc: "Organized events for Fortune 500s.", img: "/aboutp.png" },
    { name: "Kenji S.", role: "Product Curator", desc: "Eats 6 meals a day for research.", img: "/aboutp2.png" },
  ];

  const services = [
    {
      title: "Inbound & Outbound",
      desc: "Whether you're visiting Singapore or jetting off to Japan, our network of local partners ensures VIP treatment everywhere.",
      icon: Globe,
    },
    {
      title: "Corporate MICE",
      desc: "Meetings, incentives, conferences, exhibitions. We handle the logistics, tech, and gala dinners with military precision.",
      icon: Users,
    },
    {
      title: "Tailor-Made Leisure",
      desc: "Honeymoons, family reunions, or solo soul-searching. We craft itineraries that fit your personality, not a template.",
      icon: Heart,
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/background.png"
            alt="About us hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 px-4 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            We started this  <br /> <span className="text-accent">boring we hate holidays.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Travel shouldn't be about waking up at 5am for a bus for 4 hours. We are the anti-tour agency for the modern
            traveler.
          </p>
        </div>
      </section>

      {/* Difference Section */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Long Vacation Difference</h2>
          <p className="text-muted-foreground">Why 50,000+ travelers chose us over the big guys.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-cyan-400 bg-cyan-200/30 space-y-6 rounded-3xl">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">👋</span> The 'Old School' Way
            </h3>
            <ul className="space-y-4">
              {[
                "Wake up at 5am for 'mandatory' breakfast.",
                "Forced shopping stops at 'Gem Factories'.",
                "Generic buffet food that tastes like cardboard.",
                "Guide reading from a script.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground/70">
                  <XCircle className="size-5 text-red-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 border-primary bg-[#0A192F] text-white space-y-6 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">🚀</span> The Long Vacation Way
            </h3>
            <ul className="space-y-4">
              {[
                "Sleep in. It's a holiday, not boot camp.",
                "Zero shopping traps. 100% Culture.",
                "Michelin Bib Gourmand & Local Hidden Gems.",
                "Guides who are actually cool locals.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-blue-100/80">
                  <CheckCircle2 className="size-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="w-full bg-[#F6FAFF] py-16">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            {/* License Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-xs font-medium text-gray-600">
              <span className="w-2 h-2 bg-gray-600 rounded-full" />
              STB License TA02057
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-secondary">
              Licensed, Regulated, <br />
              and <span className="text-primary">Obsessive</span> about Safety.
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-lg">
              Founded in 2016, we are a Singapore Tourism Board licensed specialist.
              Whether it’s a corporate MICE event for 500 pax or a private family honeymoon,
              we handle the logistics so you can handle the fun.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-14 mt-10 max-w-md">
              <div>
                <p className="text-2xl font-bold text-secondary">50k+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Happy Travelers
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-secondary">8+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-secondary">24/7</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Support Team
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-secondary">4.9</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Google Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT Collage */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Second Image (Overlapping Left) */}
            <div className="  rounded-2xl overflow-hidden">
              <Image
                src="/about.png"
                alt="Side"
                width={290}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-secondary">Meet the Fixers</h2>
            <p className="text-xs text-gray-400 mt-2">
              Real humans. No chatbots. We reply faster than your ex.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-[10px] p-6 shadow-sm text-center hover:shadow-md transition"
              >
                <div className="w-14 h-14 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={person.img}
                    alt={person.name}
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-sm font-bold text-secondary">{person.name}</h4>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">
                  {person.role}
                </p>

                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  {person.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F6FAFF] py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-xl font-bold text-secondary">What We Do Best</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-left hover:shadow-md transition"
              >
                <service.icon className="w-6 h-6 text-primary mb-5" />
                <h3 className="font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
