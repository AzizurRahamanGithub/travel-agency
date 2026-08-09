"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2, ChevronRight, User, CreditCard, PlaneTakeoff, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { Card } from "@/components/ui/card"

const bookingFormSchema = z.object({
  tourId: z.string().min(1, "Please select a tour"),
  date: z.date({
    required_error: "A booking date is required",
  }),
  guests: z.string().min(1, "Number of guests is required"),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  specialRequests: z.string().optional(),
})

type BookingFormValues = z.infer<typeof bookingFormSchema>

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      tourId: "1",
      guests: "1",
    },
  })

  async function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("[v0] Booking submitted:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
    toast({
      title: "Booking Confirmed!",
      description: "We've sent a confirmation email to " + data.email,
    })
  }

  const nextStep = async () => {
    const fieldsToValidate = step === 1 ? ["tourId", "date", "guests"] : ["fullName", "email", "phone"]
    const isValid = await form.trigger(fieldsToValidate as any)
    if (isValid) setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  if (isSuccess) {
    return (
      <div className="container max-w-2xl px-4 py-24 flex flex-col items-center justify-center text-center space-y-8">
        <div className="size-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 animate-in zoom-in duration-500">
          <CheckCircle2 className="size-12" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Booking Confirmed!</h1>
          <p className="text-xl text-muted-foreground">
            Thank you for choosing Long Vacation. Your adventure starts soon!
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-xl h-12 px-8 bg-transparent" asChild>
            <a href="/">Back to Home</a>
          </Button>
          <Button className="rounded-xl h-12 px-8">View My Bookings</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl px-4 py-12 md:py-20">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Complete Your Booking</h1>
        <p className="text-muted-foreground">Secure your spot for an unforgettable experience.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center w-full max-w-md relative">
          {[
            { n: 1, label: "Details", icon: PlaneTakeoff },
            { n: 2, label: "Info", icon: User },
            { n: 3, label: "Payment", icon: CreditCard },
          ].map((s, i) => (
            <div key={s.n} className="flex-1 flex flex-col items-center relative z-10">
              <div
                className={cn(
                  "size-10 rounded-full flex items-center justify-center transition-colors border-2",
                  step >= s.n ? "bg-primary border-primary text-white" : "bg-white border-gray-200 text-gray-400",
                )}
              >
                <s.icon className="size-5" />
              </div>
              <span
                className={cn(
                  "text-xs font-bold mt-2 uppercase tracking-widest",
                  step >= s.n ? "text-primary" : "text-gray-400",
                )}
              >
                {s.label}
              </span>
              {i < 2 && (
                <div
                  className={cn(
                    "absolute top-5 left-1/2 w-full h-0.5 -z-10",
                    step > s.n ? "bg-primary" : "bg-gray-100",
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="p-8 md:p-12 rounded-3xl shadow-xl border-gray-100">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="tourId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Tour</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl">
                              <SelectValue placeholder="Select a tour package" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Chongqing Cyberpunk Escape</SelectItem>
                            <SelectItem value="2">Bali & Desaru Luxe Retreat</SelectItem>
                            <SelectItem value="3">Changsha Foodie Trail</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Guests</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl">
                              <SelectValue placeholder="How many guests?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                              <SelectItem key={n} value={n.toString()}>
                                {n} {n === 1 ? "Guest" : "Guests"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full h-12 rounded-xl px-4 text-left font-normal bg-transparent",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+65 1234 5678" className="h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 space-y-4">
                  <h3 className="font-bold text-lg">Order Summary</h3>
                  <div className="flex justify-between py-2 border-b border-primary/10">
                    <span className="text-muted-foreground">Package</span>
                    <span className="font-bold">Chongqing Cyberpunk Escape</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-primary/10">
                    <span className="text-muted-foreground">Guests</span>
                    <span className="font-bold">{form.getValues("guests")} Adults</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-xl font-bold text-primary">$880</span>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requests (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Dietary requirements, accessibility, etc."
                          className="h-12 rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-gray-50 p-4 rounded-xl text-xs text-muted-foreground text-center">
                  By clicking "Confirm Booking", you agree to our Terms of Service and Privacy Policy.
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 rounded-xl flex-1 bg-transparent"
                  onClick={prevStep}
                >
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button type="button" className="h-12 rounded-xl flex-1 group" onClick={nextStep}>
                  Continue <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              ) : (
                <Button type="submit" className="h-12 rounded-xl flex-1" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" /> Processing...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </Card>
    </div>
  )
}
