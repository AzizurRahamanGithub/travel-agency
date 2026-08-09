import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function FooterAll() {
  return (
    <footer className="overflow-hidden relative bg-cover  bg-no-repeat" style={{ backgroundImage: 'url("/fotter.png")' }}>
      {/* Wave shape divider handled via global styling or container margin */}
      <div className="pt-40 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Newsletter Box - The distinctive navy/teal box */}
          <div className="bg-[#092941] rounded-[2.5rem] p-10 mb-20 border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl text-slate-200 font-bold ">Get travel deals and weekend ideas</h3>
              <p className="text-blue-200/50 text-sm">
                Subscribe to get a <span className="text-primary font-bold">10% discount</span> for your first trip!
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3 bg-white/5 p-2 rounded-2xl border border-white/10">
              <Input
                placeholder="Enter your email"
                className="bg-transparent border-none text-white placeholder:text-blue-200/30 h-12 rounded-xl focus-visible:ring-0"
              />
              <Button className="bg-primary hover:bg-primary/90 h-12 rounded-xl px-6 font-bold text-white shadow-lg shadow-primary/20 gap-2 uppercase text-[11px] tracking-widest">
                Subscribe <Send className="size-3.5 fill-white" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4 space-y-8">
              <Link href="/" className="flex items-center gap-3">
                <Image width={200} height={100}
                  src="/logo.png"
                  alt="Description of my image"
                />
              </Link>
              <p className="text-blue-100/70  text-sm max-w-xs">
                Your next escape starts here. Curated experiences for the modern traveler.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="size-9 rounded-full border border-white/10 flex items-center justify-center bg-slate-300/2 text-primary hover:bg-white/5 transition-all hover:border-primary group"
                  >
                    <Icon className="size-4 group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h4 className="font-bold text-sm text-slate-300  tracking-widest">Company</h4>
              <ul className="space-y-4 text-xs font-bold text-blue-100/50 uppercase tracking-widest">
                {["About Us", "Destinations", "Cruises", "Careers", "Privacy Policy", "Terms of Service"].map(
                  (link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-primary transition-colors">
                        {link}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h4 className="font-bold text-sm text-slate-300  tracking-widest">Contact</h4>
              <ul className="space-y-5 text-xs text-blue-100/60">
                <li className="flex gap-4">
                  <MapPin className="size-4 text-primary shrink-0" />
                  <span >2 Gambas Crescent, #07-24 Nordcom Two, Singapore 757044</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="size-4 text-primary shrink-0" />
                  <span>+65 6778 0498</span>
                </li>
                <li className="flex gap-4">
                  <Mail className="size-4 text-primary shrink-0" />
                  <span>business@longvacationtravel.com</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-widest">From Instagram</h4>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden bg-white/5 group relative">
                    <Image
                      src={`/insta-${i}.jpg?query=travel-photography-${i}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      alt="Instagram"
                      width={150}
                      height={150}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className=" border-t border-white/5 ">
      <div className="container mx-auto text-blue-200/40 flex flex-row justify-between items-center py-5">
        <p>© 2026 Long Vacation SG Pte. Ltd. All rights reserved.</p>
        <p>Operating Hours: Mon - Fri, 10am - 7pm</p>
      </div>
        
      </div>
    </footer>
  )
}
