"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, Zap, Car, Building2, Train, Hotel } from "lucide-react"
export default function TourDetailPage() {
    const [expandedDay, setExpandedDay] = useState<number | null>(0)
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

    const toggleDay = (index: number) => {
        setExpandedDay((prev) => (prev === index ? null : index))
    }


    const toggleFAQ = (index: number) => {
        setExpandedFAQ(expandedFAQ === index ? null : index)
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
{/* Hero Section */}
            <section className="relative h-[40vh] min-h-[350px] flex items-end">
                <div className="absolute inset-0 z-0">
                    <Image
                        width={1920}
                        height={600}
                        src="/background.png"
                        alt="Chongqing Cyberpunk Weekend Escape"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                </div>
                
                <div className="container relative z-10 mx-auto px-6 pb-12 w-full h=full text-white">
                    {/* Early Bird Badge */}
                    <div className="inline-block mb-6">
                        <span className="bg-cyan-400 text-black text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                            ⚡ Early-Bird Promo
                        </span>
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl  font-bold text-wrap lg:text-nowrap mb-8 max-w-4xl">
                        Chongqing Cyberpunk Weekend Escape
                    </h1>
                    
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
                        <div>
                            <div className="text-gray-300 text-xs uppercase tracking-wider mb-2">Duration</div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <span className="text-lg font-medium">3 Nights</span>
                            </div>
                        </div>
                        
                        <div>
                            <div className="text-gray-300 text-xs uppercase tracking-wider mb-2">Location</div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-lg font-medium">Chongqing</span>
                            </div>
                        </div>
                        
                        <div>
                            <div className="text-gray-300 text-xs uppercase tracking-wider mb-2">Style</div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-lg font-medium">Adventure</span>
                            </div>
                        </div>
                        
                        <div>
                            <div className="text-gray-300 text-xs uppercase tracking-wider mb-2">Min Pax</div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="text-lg font-medium">2 To Go</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Main Content */}
            <div className="container mx-auto px-4 lg:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Itinerary */}
                    <div className="lg:col-span-2 space-y-6">

                        <h2 className="text-2xl font-bold text-gray-900">Itinerary</h2>

                        {/* DAY 1 */}
                        <div className="relative">
                            {/* Day Badge Outside */}
                            <span className="absolute -left-15 bg-primary text-white text-[10px] font-bold px-3 py-[5px] rounded-full z-10 shadow">
                                DAY 1
                            </span>
                            <span className="absolute -left-9 w-0.5 bg-gray-200 h-full"></span>

                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                {/* Header */}
                                <button
                                    onClick={() => toggleDay(0)}
                                    className="w-full flex items-center justify-between px-7 py-6 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="text-left space-y-1">
                                        <h3 className="text-base font-bold text-gray-900">
                                            Arrival & Cyberpunk Orientation
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Land in the 8D city and witness the futuristic skyline.
                                        </p>
                                    </div>

                                    {/* ✅ Rotate instead of swap */}
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedDay === 0 ? "rotate-180" : "rotate-0"
                                            }`}
                                    />
                                </button>

                                {/* ✅ Animated Body (Always Mounted) */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedDay === 0 ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div
                                        className={`px-7 pb-8 border-t border-gray-100 transition-all duration-500 ${expandedDay === 0 ? "translate-y-0" : "-translate-y-2"
                                            }`}
                                    >
                                        {/* Timeline Wrapper */}
                                        <div className="relative mt-8">
                                            {/* Timeline Line */}
                                            <div className="absolute left-[92px] top-0 bottom-0 w-[1px] bg-gray-100"></div>

                                            {/* ITEM 1 */}
                                            <div className="flex gap-6 mb-10 relative">
                                                <div className="w-[70px] text-right text-xs font-semibold text-gray-600 mt-1">
                                                    9:00 AM
                                                </div>

                                                <div className="relative w-[35px] flex justify-center">
                                                    <span className="w-[10px] h-[10px] absolute -left-[4.68px] rounded-full bg-gray-200 mt-2 z-10"></span>
                                                </div>

                                                <div className="flex-1 space-y-3">
                                                    <div className="flex gap-3 items-start">
                                                        <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                                                            <Car className="size-3.5 text-gray-400" />
                                                        </div>

                                                        <div>
                                                            <h4 className="text-sm font-bold text-gray-900">
                                                                Neon Skyline Airport Transfer
                                                            </h4>
                                                            <p className="text-xs text-gray-500">
                                                                Private MPV pickup. Catch your first glimpse of the 'Mountain City'.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="relative w-[170px] h-[110px] rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <Image src="/tourdis.png" alt="transfer" fill className="object-cover" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ITEM 2 */}
                                            <div className="flex gap-6 mb-10 relative">
                                                <div className="w-[70px] text-right text-xs font-semibold text-gray-600 mt-1">
                                                    11:00 AM
                                                </div>

                                                <div className="relative w-[35px] flex justify-center">
                                                    <span className="w-[10px] h-[10px] absolute -left-[4.68px] rounded-full bg-gray-200 mt-2 z-10"></span>
                                                </div>

                                                <div className="flex-1 space-y-2">
                                                    <div className="flex gap-3 items-start">
                                                        <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                                                            <Building2 className="size-3.5 text-gray-400" />
                                                        </div>

                                                        <div>
                                                            <h4 className="text-sm font-bold text-gray-900">
                                                                Hotel Check-in
                                                            </h4>
                                                            <p className="text-xs text-gray-500">
                                                                Cyberpunk Riverside Hotel with panoramic Yangtze views.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ITEM 3 */}
                                            <div className="flex gap-6 mb-10 relative">
                                                <div className="w-[70px] text-right text-xs font-semibold text-gray-600 mt-1">
                                                    2:00 PM
                                                </div>

                                                <div className="relative w-[35px] flex justify-center">
                                                    <span className="w-[10px] h-[10px] absolute -left-[4.68px] rounded-full bg-gray-200 mt-2 z-10"></span>
                                                </div>

                                                <div className="flex-1 space-y-3">
                                                    <div className="flex gap-3 items-start">
                                                        <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                                                            <Train className="size-3.5 text-gray-400" />
                                                        </div>

                                                        <div>
                                                            <h4 className="text-sm font-bold text-gray-900">
                                                                Monorail Cliff Ride
                                                            </h4>
                                                            <p className="text-xs text-gray-500">
                                                                Experience the famous Liziba Station where the train passes through a building.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="relative w-[170px] h-[110px] rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <Image src="/tourdis.png" alt="monorail" fill className="object-cover" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ITEM 4 */}
                                            <div className="flex gap-6 relative">
                                                <div className="w-[70px] text-right text-xs font-semibold text-gray-600 mt-4">
                                                    7:00 PM
                                                </div>

                                                <div className="relative w-[35px] flex justify-center">
                                                    <span className="w-[10px] h-[10px] absolute -left-[4.68px] rounded-full bg-red-500 mt-2 z-10"></span>
                                                </div>

                                                <div className="flex-1">
                                                    <div className="bg-[#EAF2FF] border border-[#C9DFFF] rounded-xl px-5 py-4 flex items-center justify-between">
                                                        <div className="flex justify-center items-center gap-3">
                                                            <div className="relative w-20 h-15 rounded-[10px] overflow-hidden">
                                                                <Image src="/tourdis.png" alt="night walk" fill className="object-cover" />
                                                            </div>

                                                            <div>
                                                                <span className="inline-block bg-primary text-white text-[10px] font-bold px-2 py-[2px] rounded-md mb-1">
                                                                    CUSTOMIZABLE
                                                                </span>
                                                                <h4 className="text-sm font-bold text-gray-900">
                                                                    Jiefangbei Night Walk
                                                                </h4>
                                                                <p className="text-xs text-gray-500">
                                                                    The beating heart of Chongqing.
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm">
                                                            <Zap className="w-4 h-4 text-primary" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* DAY 2 */}
                        <div className="relative">
                            {/* Day Badge Outside */}
                            <span className="absolute -left-15 bg-primary text-white text-[10px] font-bold px-3 py-[5px] rounded-full z-10 shadow">
                                DAY 2
                            </span>
                            <span className="absolute -left-9 w-0.5 bg-gray-200 h-full"></span>

                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                {/* Header */}
                                <button
                                    onClick={() => toggleDay(1)}
                                    className="w-full flex items-center justify-between px-7 py-6 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="text-left space-y-1">
                                        <h3 className="text-base font-bold text-gray-900">
                                            Arrival & Cyberpunk Orientation
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Land in the 8D city and witness the futuristic skyline.
                                        </p>
                                    </div>

                                    {/* ✅ Rotate instead of swap */}
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedDay === 1 ? "rotate-180" : "rotate-0"
                                            }`}
                                    />
                                </button>

                                {/* ✅ Animated Body (Always Mounted) */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedDay === 1 ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div
                                        className={`px-7 pb-8 border-t border-gray-100 transition-all duration-500 ${expandedDay === 1 ? "translate-y-0" : "-translate-y-2"
                                            }`}
                                    >
                                        {/* Timeline Wrapper */}
                                        <div className="relative mt-8">
                                            {/* Timeline Line */}
                                            <div className="absolute left-[92px] top-0 bottom-0 w-[1px] bg-gray-100"></div>

                                            {/* ITEM 1 */}
                                            <div className="flex gap-6 mb-10 relative">
                                                <div className="w-[70px] text-right text-xs font-semibold text-gray-600 mt-1">
                                                    9:00 AM
                                                </div>

                                                <div className="relative w-[35px] flex justify-center">
                                                    <span className="w-[10px] h-[10px] absolute -left-[4.68px] rounded-full bg-gray-200 mt-2 z-10"></span>
                                                </div>

                                                <div className="flex-1 space-y-3">
                                                    <div className="flex gap-3 items-start">
                                                        <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                                                            <Car className="size-3.5 text-gray-400" />
                                                        </div>

                                                        <div>
                                                            <h4 className="text-sm font-bold text-gray-900">
                                                                Neon Skyline Airport Transfer
                                                            </h4>
                                                            <p className="text-xs text-gray-500">
                                                                Private MPV pickup. Catch your first glimpse of the 'Mountain City'.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="relative w-[170px] h-[110px] rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <Image src="/tourdis.png" alt="transfer" fill className="object-cover" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ITEM 2 */}
                                            <div className="flex gap-6 mb-10 relative">
                                                <div className="w-[70px] text-right text-xs font-semibold text-gray-600 mt-1">
                                                    11:00 AM
                                                </div>

                                                <div className="relative w-[35px] flex justify-center">
                                                    <span className="w-[10px] h-[10px] absolute -left-[4.68px] rounded-full bg-gray-200 mt-2 z-10"></span>
                                                </div>

                                                <div className="flex-1 space-y-2">
                                                    <div className="flex gap-3 items-start">
                                                        <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                                                            <Building2 className="size-3.5 text-gray-400" />
                                                        </div>

                                                        <div>
                                                            <h4 className="text-sm font-bold text-gray-900">
                                                                Hotel Check-in
                                                            </h4>
                                                            <p className="text-xs text-gray-500">
                                                                Cyberpunk Riverside Hotel with panoramic Yangtze views.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ITEM 3 */}
                                            <div className="flex gap-6 mb-10 relative">
                                                <div className="w-[70px] text-right text-xs font-semibold text-gray-600 mt-1">
                                                    2:00 PM
                                                </div>

                                                <div className="relative w-[35px] flex justify-center">
                                                    <span className="w-[10px] h-[10px] absolute -left-[4.68px] rounded-full bg-gray-200 mt-2 z-10"></span>
                                                </div>

                                                <div className="flex-1 space-y-3">
                                                    <div className="flex gap-3 items-start">
                                                        <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                                                            <Train className="size-3.5 text-gray-400" />
                                                        </div>

                                                        <div>
                                                            <h4 className="text-sm font-bold text-gray-900">
                                                                Monorail Cliff Ride
                                                            </h4>
                                                            <p className="text-xs text-gray-500">
                                                                Experience the famous Liziba Station where the train passes through a building.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="relative w-[170px] h-[110px] rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <Image src="/tourdis.png" alt="monorail" fill className="object-cover" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ITEM 4 */}
                                            <div className="flex gap-6 relative">
                                                <div className="w-[70px] text-right text-xs font-semibold text-gray-600 mt-4">
                                                    7:00 PM
                                                </div>

                                                <div className="relative w-[35px] flex justify-center">
                                                    <span className="w-[10px] h-[10px] absolute -left-[4.68px] rounded-full bg-red-500 mt-2 z-10"></span>
                                                </div>

                                                <div className="flex-1">
                                                    <div className="bg-[#EAF2FF] border border-[#C9DFFF] rounded-xl px-5 py-4 flex items-center justify-between">
                                                        <div className="flex justify-center items-center gap-3">
                                                            <div className="relative w-20 h-15 rounded-[10px] overflow-hidden">
                                                                <Image src="/tourdis.png" alt="night walk" fill className="object-cover" />
                                                            </div>

                                                            <div>
                                                                <span className="inline-block bg-primary text-white text-[10px] font-bold px-2 py-[2px] rounded-md mb-1">
                                                                    CUSTOMIZABLE
                                                                </span>
                                                                <h4 className="text-sm font-bold text-gray-900">
                                                                    Jiefangbei Night Walk
                                                                </h4>
                                                                <p className="text-xs text-gray-500">
                                                                    The beating heart of Chongqing.
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm">
                                                            <Zap className="w-4 h-4 text-primary" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* DAY 3 */}
                        <div className="relative">
                            {/* Day Badge Outside */}
                            <span className="absolute -left-15 bg-primary text-white text-[10px] font-bold px-3 py-[5px] rounded-full z-10 shadow">
                                DAY 3
                            </span>
                            <span className="absolute -left-9 w-0.5 bg-gray-200 h-full">
                            </span>

                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleDay(2)}
                                    className="w-full flex items-center justify-between px-7 py-6 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="text-left space-y-1">
                                        <h3 className="text-base font-bold text-gray-900">
                                            Old Town + Neon Nights
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Ancient culture meets futuristic finish.
                                        </p>
                                    </div>

                                    {expandedDay === 2 ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Booking Card */}
                    <div className=" flex flex-col gap-4">
                        <div className="bg-white rounded-sm shadow-lg border border-gray-200  top-6 overflow-hidden">
                            {/* Price Header */}
                            <div className=" text-white p-6 text-center">
                                <p className="text-xs font-semibold uppercase tracking-wide text-black mb-2 opacity-90">TOTAl PRICE</p>
                                <p className="text-4xl text-primary font-bold">$880</p>
                                <p className="text-[10px] text-black opacity-90 mt-1">per person (NET)</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-3 mb-3 space-y-3 ">
                                <button className="w-full bg-primary  hover:bg-cyan-600 text-white h-12 text-sm font-semibold rounded-[10] transition-colors">
                                    Book This Escape
                                </button>

                                <button className="w-full h-12 text-cyan-500 border-2 border-cyan-50 text-sm hover:border-cyan-500 bg-cyan-50 rounded-[10] font-semibold transition-colors flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Enquire More
                                </button>

                                <button className="w-full h-12 text-sm border-2 border-gray-300 hover:bg-gray-50 rounded-[10] font-semibold transition-colors flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Brochure
                                </button>
                            </div>

                            <hr />

                            {/* Disclaimers */}
                            <div className="p-6  space-y-3 text-xs text-gray-600">
                                <div className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>By booking, you acknowledge that you have read and accepted our Remarks and Terms & Conditions.</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Have specific requirements or questions? Please enquire with us before booking.</p>
                                </div>
                            </div>


                        </div>


                        <div className="bg-white rounded-sm shadow-lg border border-gray-200  top-6 overflow-hidden">
                            {/* Package Details */}
                            <div className="border-t border-gray-200 p-6 space-y-4">
                                <h3 className="font-bold text-gray-900">Package Details</h3>

                                {/* Inclusions */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h4 className="font-semibold text-sm text-gray-900">INCLUSIONS</h4>
                                    </div>
                                    <ul className="space-y-2 ml-7 text-sm text-gray-700">
                                        <li>• 3 Nights 4-Star Accommodation</li>
                                        <li>• Daily Hotel Breakfast</li>
                                        <li>• Private AC Vehicle for all transfers</li>
                                        <li>• Professional English/Mandarin Guide</li>
                                        <li>• All Entrance Fees as per itinerary</li>
                                        <li>• Guide & Driver Tipping</li>
                                    </ul>
                                </div>

                                {/* Exclusions */}
                                <div className="pt-4 border-t">
                                    <div className="flex items-center gap-2 mb-3">
                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h4 className="font-semibold text-sm text-gray-900">EXCLUSIONS</h4>
                                    </div>
                                    <ul className="space-y-2 ml-7 text-sm text-gray-700">
                                        <li>• International Air Tickets & Taxes</li>
                                        <li>• Visa Application Fees (if applicable)</li>
                                        <li>• Personal Travel Insurance</li>
                                        <li>• Personal Expenses (Laundry, Mini Bar)</li>
                                        <li>• Optional Tours & Add-ons</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* FQL part */}
                        <div className="rounded-sm overflow-hidden">
                            <div className="p-6 space-y-4">
                                <h3 className="text-lg font-bold text-gray-900">Frequently Asked Questions</h3>

                                <div className="space-y-3">

                                    {/* FAQ Item 1 */}
                                    <div
                                        className="border rounded-[10px] bg-gray-100 overflow-hidden transition-all"
                                        onClick={() => toggleFAQ(0)}
                                    >
                                        {/* Question Row */}
                                        <div className="flex items-center justify-between p-3 cursor-pointer">
                                            <div className="flex items-center gap-2">
                                                {/* left circle icon */}
                                                <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">
                                                    Do I need a Visa?
                                                </span>
                                            </div>

                                            {/* Arrow */}
                                            <svg
                                                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expandedFAQ === 0 ? "rotate-180" : "rotate-0"
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                        {/* Answer */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === 0 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="border-t border-gray-200 px-3 py-3 text-sm text-gray-700">
                                                You'll need a visa to enter the country for this trip, depending on your nationality.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ Item 2 */}
                                    <div
                                        className="border rounded-[10px] bg-gray-100 overflow-hidden transition-all"
                                        onClick={() => toggleFAQ(1)}
                                    >
                                        {/* Question Row */}
                                        <div className="flex items-center justify-between p-3 cursor-pointer">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">
                                                    Is Travel Insurance included?
                                                </span>
                                            </div>

                                            <svg
                                                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expandedFAQ === 1 ? "rotate-180" : "rotate-0"
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                        {/* Answer */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === 1 ? "max-h-[250px] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="border-t border-gray-200 px-3 py-3 text-sm text-gray-700">
                                                No, travel insurance is not included in the package. It is highly recommended to purchase your own travel
                                                insurance for the duration of your trip.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ Item 3 */}
                                    <div
                                        className="border rounded-[10px] bg-gray-100 overflow-hidden transition-all"
                                        onClick={() => toggleFAQ(2)}
                                    >
                                        {/* Question Row */}
                                        <div className="flex items-center justify-between p-3 cursor-pointer">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">
                                                    Can I extend my stay?
                                                </span>
                                            </div>

                                            <svg
                                                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expandedFAQ === 2 ? "rotate-180" : "rotate-0"
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                        {/* Answer */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === 2 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="border-t border-gray-200 px-3 py-3 text-sm text-gray-700">
                                                Yes, it is possible to extend your stay. You will need to coordinate with our team for additional
                                                accommodation arrangements.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>





                        {/* Important remarks */}
                        <div className="bg-white rounded-sm shadow-lg border border-gray-200  top-6 overflow-hidden">
                            {/* Package Details */}
                            <div className="border-t border-gray-200 p-6 space-y-4">
                                <h3 className="font-bold text-xs  text-gray-500 uppercase">Important Remarks</h3>

                                {/* Inclusions */}
                                <div>
                                    <ul className="  text-[10px] text-gray-500">
                                        <li className="mb-[11px]">Minimum 10 adults for tour leader to be assigned.</li>
                                        <li className="mb-[11px]">Tour confirmation will be finalized no later than two weeks before the departure date.</li>
                                        <li className="mb-[11px]">Group tours are conducted in Mandarin, unless otherwise stated.</li>
                                        <li className="mb-[11px]">Travellers must ensure that names provided are exactly as they appear on their passport barcode.</li>
                                        <li className="mb-[11px]">Travellers must ensure that their passports are valid for minimum 6 months from return date.</li>
                                        <li className="mb-[11px]">All airport/tour taxes and fuel surcharges are subject to changes until air tickets are issued.</li>
                                        <li className="mb-[11px]">Tour fares do not include visa charges. Travellers must ensure they hold a valid tourist visa to enter the countries on their tour.</li>
                                        <li className="mb-[11px]">Tour fares do not include gratuities for tour leader/manager, overseas local guide(s), and driver.</li>
                                        <li className="mb-[11px]">An administrative fee may be charged for special requests or additional services.</li>
                                        <li className="mb-[11px]">Amendments/Cancelations(s) may incur amendment, cancellation, and administrative fees.</li>
                                        <li className="mb-[11px]">Flight seating arrangement for the group seats are coordinated and assigned by airline and no changes are allowed.</li>
                                        <li className="mb-[11px]">Sequence of itinerary may be subject to change due to circumstances beyond the Company’s control.</li>
                                        <li className="mb-[11px]">All flight timings are subject to changes.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* Terms */}
                        <h3 className="font-bold text-xl mt-2">Terms & Conditions</h3>
                        <div className="bg-white rounded-sm shadow-lg border border-gray-200 p-6 space-y-2">
                            {/* Payment Section */}
                            <div className="">
                                <p className="text-sm text-gray-500 text-[10px]"> <span className="font-semibold text-xs text-gray-900 mr-2">Payment:</span >
                                    A deposit of S$500 per person is required upon booking. Full payment must be made 30 days prior to departure.</p>
                            </div>

                            {/* Cancellation Policy Section */}
                            <div className="space-y-2">
                                <h3 className="font-semibold text-gray-500">Cancellation Policy:</h3>
                                <ul className="list-disc ml-5 space-y-1 text-[10px] text-gray-500 ">
                                    <li> 30 days: $100 admin fee</li>
                                    <li>15–29 days: 50% of tour fare</li>
                                    <li>0–14 days: 100% of tour fare</li>
                                </ul>
                            </div>

                            {/* Child Policy Section */}
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500 text-[10px] "> <span className="font-semibold text-gray-900 text-xs mr-2">Child Policy:</span>
                                    Child with bed is 90% of adult fare. Child without bed is 70% of adult fare.</p>
                            </div>

                            {/* Liability Section */}
                            <div className="space-y-2 mt-8">
                                <p className="text-sm text-gray-500 text-[10px] "> <span className="font-semibold text-gray-900 text-xs mr-2">Liability:</span>
                                    Long Vacation acts only as an agent for the transportation companies, hotels, and other principals and shall not be liable for any injury, damage, loss, accident, or delay.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Other Trips Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 lg:px-12">
                    <h2 className="text-3xl font-bold text-center mb-12">Other trips you may like</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <Link key={item} href={`/destinations/${item}`} className="block">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="relative h-48">
                                        <Image src="/tourdis.png" alt="Tour" fill className="object-cover" />
                                        <span className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                                            15% OFF
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-xs text-gray-500 mb-2">2 Days 3 Nights • Singapore</p>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Disney Adventure Magic</h3>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-cyan-500">$$880</span>
                                            </div>
                                            <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-600 transition-colors">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
