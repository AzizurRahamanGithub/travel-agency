"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function InteractiveQuote() {
  const [quantity, setQuantity] = useState(1)
  const basePrice = 450

  return (
    <section className="bg-white/30 border-y border-black/5 py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Inquiry</span>
          <h2 className="text-4xl font-serif mt-2">Ask us anything.</h2>
          <p className="mt-4 text-black/60 max-w-md">
            Are you a company or brand seeking creative services? Let&apos;s connect and define your next chapter.
          </p>
          <button className="mt-8 bg-[#2D472C] text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity">
            Get in touch
          </button>
        </div>

        <div className="pt-12 border-t border-black/10">
          <h3 className="text-xl font-medium mb-8 italic">
            Ready to experience our services? Let&apos;s start planning.
          </h3>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="space-y-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">First Name</label>
                  <input className="w-full bg-transparent border-b border-black/20 py-2 focus:border-black outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Last Name</label>
                  <input className="w-full bg-transparent border-b border-black/20 py-2 focus:border-black outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Email Address</label>
                <input className="w-full bg-transparent border-b border-black/20 py-2 focus:border-black outline-none transition-colors" />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Quantity</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 0)}
                    className="w-full bg-transparent border-b border-black/20 py-2 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                    Strategy Level
                  </label>
                  <Select defaultValue="base">
                    <SelectTrigger className="w-full bg-transparent border-0 border-b border-black/20 rounded-none px-0 py-2 h-auto focus:ring-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="base">Foundational (CPF-1)</SelectItem>
                      <SelectItem value="mid">Expansive (CPF-2)</SelectItem>
                      <SelectItem value="full">Total Reset (CPF-3)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-8 flex flex-col justify-between">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Project Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-black/20 py-2 focus:border-black outline-none transition-colors resize-none"
                />
              </div>

              {/* Estimate Box - Image 4 Style */}
              <div className="border border-[#2D472C] p-8 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#FF8B60]">Estimated Quote*</h4>
                  <p className="text-sm text-black/40 mt-1">Based on current parameters</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-black/40 uppercase">Total Estimate</span>
                  <div className="text-4xl font-serif">${(basePrice * quantity).toLocaleString()}</div>
                </div>
              </div>

              <button className="w-full bg-[#2D472C] text-white py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:opacity-90 transition-opacity">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
