import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Clock, Send, Globe, Plane, Briefcase,
  MapPin,
  Gift,
  GraduationCap,
  Phone,
  Mail,
} from "lucide-react"

export default function ContactPage() {


  const departments = [
    {
      title: "Inbound Tours",
      phone: "+65 6776 0491",
      email: "inbound@longvacationtravel.com",
      icon: Globe,
    },
    {
      title: "Outbound Tours",
      phone: "+65 6776 0492",
      email: "outbound@longvacationtravel.com",
      icon: Plane,
    },
    {
      title: "General Enquiry",
      phone: "+65 6776 0496",
      email: "enquiry@longvacationtravel.com",
      icon: MapPin,
    },
    {
      title: "Partnerships",
      phone: "+65 6776 0493",
      email: "partners@longvacationtravel.com",
      icon: Gift,
    },
    {
      title: "Corporate MICE",
      phone: "+65 6776 0494",
      email: "mice@longvacationtravel.com",
      icon: Briefcase,
    },
    {
      title: "Educational",
      phone: "+65 6776 0495",
      email: "edu@longvacationtravel.com",
      icon: GraduationCap,
    },
  ];



  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Map Hero */}
      <section className="">
        <div className="relative h-[40vh] min-h-[350px]">
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <img
              src="/background.png"
              alt="Office Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          <div className="container mx-auto relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">Get in Touch</h1>
            <p className="text-lg text-white/90 max-w-xl drop-shadow-sm">
              We'd love to hear from you. Drop us a message or visit our HQ.
            </p>
          </div>

        </div>
        <img
          src="/map.png"
          alt="Office Map"
          className="w-full h-full object-cover"
        />


      </section>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 md:p-12 md:max-h-[660px] h-auto rounded-[2.5rem] shadow-xl border-gray-100">
            <form className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Send us a Message</h2>
                <p className="text-muted-foreground">We usually reply within 2-4 hours.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" className="h-12 placeholder:text-gray-400 rounded-[10px] bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 placeholder:text-gray-400 rounded-[10px] bg-gray-50" />
                </div>
              </div>

              <div className="space-y-2 w-full">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger className="py-6 rounded-[10px] w-full bg-gray-50">
                    <SelectValue placeholder="What is this about?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Enquiry</SelectItem>
                    <SelectItem value="booking">Existing Booking</SelectItem>
                    <SelectItem value="corporate">Corporate MICE</SelectItem>
                    <SelectItem value="partner">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] placeholder:text-gray-400 rounded-[10px] bg-gray-50 pt-4" />
              </div>

              <Button className="h-14 rounded-[10px] bg-primary px-12 text-base font-bold gap-2">
                <Send className="size-4" />Send Message
              </Button>
            </form>
          </Card>

          {/* Directory */}
          <aside className="space-y-8">
            <Card className="w-full  max-w-sm rounded-2xl border border-gray-100 shadow-sm p-6">
              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-900 mb-6">
                Department Directory
              </h3>

              {/* List */}
              <div className="space-y-5">
                {departments.map((dept, idx) => (
                  <div key={idx} className="flex gap-3">
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <dept.icon className="w-4 h-4 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {dept.title}
                      </p>

                      {/* Phone */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <span>{dept.phone}</span>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        <span>{dept.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="w-full  max-w-sm rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Clock className="size-5 text-accent" />
                Operating Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm py-2 border-b">
                  <span className="text-muted-foreground">Mon - Friday</span>
                  <span className="font-bold">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-bold">10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-muted-foreground">Sunday & PH</span>
                  <span className="font-bold text-red-500 uppercase text-xs tracking-widest">Closed</span>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
