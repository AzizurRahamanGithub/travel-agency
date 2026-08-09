"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, Zap, Car, Building2, Train, Hotel, Utensils, Star, Wifi, MapPin } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function TourDetailPage() {

    const itinerary = [
        {
            day: "DAY 1",
            title: "Singapore",
            depart: "17:00",
            description:
                "Embarkation, Buffet lunch opens at 12pm. Welcome party on pool deck.",
        },
        {
            day: "DAY 2",
            title: "Penang (George Town)",
            depart: "09:00",
            description:
                "Enjoy onboard entertainment, dining experiences, and relaxation.",
        },
        ,
        {
            day: "DAY 3",
            title: "High Seas",
            depart: "19:00",
            description:
                "Enjoy onboard entertainment, dining experiences, and relaxation.",
        },
    ];
    const rooms = [
        {
            id: "interior",
            title: "Interior Stateroom",
            price: 459,
            description:
                "Cozy and budget-friendly. Perfect if you plan to spend most of your time exploring the ship.",
            features: [
                "Two twin beds (convertible)",
                "24h Room Service",
                "Private Bathroom",
                "Interactive TV",
            ],
            size: "13-15 SQM",
        },
        {
            id: "oceanview",
            title: "Oceanview Balcony",
            price: 780,
            description:
                "Enjoy fresh sea breeze and private balcony views for a relaxing cruise experience.",
            features: [
                "Private Balcony",
                "Ocean View",
                "Premium Bedding",
                "Mini Refrigerator",
            ],
            size: "18-22 SQM",
        },
        {
            id: "suite",
            title: "Palace Suite",
            price: 1888,
            description:
                "Luxury suite experience with exclusive perks and maximum comfort onboard.",
            features: [
                "Luxury Amenities",
                "Butler Service",
                "Large Living Space",
                "VIP Priority Boarding",
            ],
            size: "35-45 SQM",
        },
    ];


    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        width={1920}
                        height={600}
                        src="/travel1.jpg"
                        alt="Genting Dream Getaway"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                </div>
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Genting Dream Getaway</h1>
                    <p className="text-lg opacity-90">Singapore • Malaysia</p>
                </div>
            </section>


            {/* Main Content */}
            <div className="container mx-auto px-4 lg:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Itinerary */}
                    <div className="lg:col-span-2 space-y-6">

                        <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                            {/* Header */}
                            <div className="flex items-center gap-2 mb-6">
                                <Sparkles className="w-5 h-5 text-gray-600" />
                                <h2 className="text-lg font-bold text-gray-900">Select Your Stateroom</h2>
                            </div>

                            {/* Tabs */}
                            <Tabs defaultValue="interior" className="w-full">
                                {/* Top Card Selector */}
                                <TabsList className="grid sm:grid-cols-2 grid-cols-1  md:grid-cols-3 gap-4 bg-transparent p-0 h-auto">
                                    {rooms.map((room) => (
                                        <TabsTrigger
                                            key={room.id}
                                            value={room.id}
                                            className="
                rounded-[10px] border border-gray-200 bg-white px-5 py-4 text-left flex flex-col items-start gap-1
                hover:border-gray-300 transition-all
                data-[state=active]:border-gray-900
                data-[state=active]:shadow-sm
              "
                                        >
                                            <p className="text-sm font-medium text-gray-600">{room.title}</p>
                                            <p className="text-base font-bold text-gray-900">${room.price}</p>
                                            <span className="text-xs text-gray-400">per pax</span>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {/* Content Panel */}
                                {rooms.map((room) => (
                                    <TabsContent key={room.id} value={room.id}>
                                        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 px-10 py-8">
                                            <div className="flex justify-end items-start w-full">
                                                {/* LEFT DETAILS */}
                                                <div className="max-w-lg">
                                                    <h3 className="text-base font-bold text-gray-900 mb-2 ">
                                                        {room.title}
                                                    </h3>

                                                    <p className="text-xs text-gray-500 text-center mb-6">
                                                        {room.description}
                                                    </p>

                                                    {/* Features Grid */}
                                                    <div className="grid pb-5 border-b grid-cols-2 gap-y-3 gap-x-10 text-xs text-gray-700 font-medium mb-6">
                                                        {room.features.map((feature, i) => (
                                                            <div key={i} className="flex items-center gap-2">
                                                                <span className="w-3 h-3 rounded-full border border-primary flex items-center justify-center">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                                </span>
                                                                {feature}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="flex w-full justify-between">
                                                        {/* Divider */}
                                                        <div className=" border-gray-200  flex justify-between text-[11px] text-gray-500">
                                                            <span>SIZE: {room.size}</span>
                                                        </div>
                                                        {/* RIGHT PRICE */}
                                                        <div className="text-primary font-bold text-lg ">
                                                            ${room.price}
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>


                        <div className="mt-15">
                            <h2 className="text-2xl font-bold text-gray-900 mb-5">Voyage Itinerary</h2>

                            <Accordion type="single" collapsible className="w-full space-y-6">
                                {itinerary.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`day-${index}`}
                                        className="relative border-none"
                                    >
                                        {/* Timeline Vertical Line */}
                                        <span className="absolute -left-9 top-0 w-0.5 bg-gray-200 h-full" />

                                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                            {/* ✅ Custom Trigger */}
                                            <AccordionTrigger
                                                className="px-7 py-6 hover:bg-gray-50 transition-colors flex items-center justify-between w-full group"
                                            >
                                                <div className="flex justify-between w-full items-center">
                                                    <div className="flex gap-5 items-center">
                                                        {/* Day Badge */}
                                                        <span className="bg-primary text-white text-[10px] font-bold px-3 py-[5px] rounded-full shadow">
                                                            {item.day}
                                                        </span>

                                                        {/* Title */}
                                                        <h3 className="text-base font-bold text-gray-900">
                                                            {item.title}
                                                        </h3>
                                                    </div>

                                                    {/* Depart Time */}
                                                    <p className="text-xs text-gray-500 pr-3">
                                                        Depart: {item.depart}
                                                    </p>
                                                </div>

                                            </AccordionTrigger>

                                            {/* ✅ Content */}
                                            <AccordionContent className="px-7 pb-8 border-t border-gray-100">
                                                <div className="relative mt-8 text-sm text-gray-500 ml-18">
                                                    <p>{item.description}</p>
                                                </div>
                                            </AccordionContent>
                                        </div>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>



                    </div>

                    {/* Right Column - Booking Card */}
                    <div className=" flex flex-col gap-4">
                        <div className="bg-white rounded-sm shadow-lg border border-gray-200  top-6 overflow-hidden">
                            {/* Price Header */}
                            <div className=" text-white p-6 text-center">
                                <p className="text-xs font-semibold uppercase tracking-wide text-black mb-2 opacity-90">TOTAl PRICE</p>
                                <p className="text-4xl text-primary font-bold">$880</p>
                                <p className="text-[10px] text-black opacity-90 mt-1">per person (before port taxes)</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-3 mb-3 space-y-3 ">
                                <button className="w-full bg-primary  hover:bg-cyan-600 text-white h-12 text-sm font-semibold rounded-[10] transition-colors">
                                    Book This Cabin
                                </button>


                                <button className="w-full h-12 text-sm border-2 border-gray-300 hover:bg-gray-50 rounded-[10] font-semibold transition-colors flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Request Quote
                                </button>
                            </div>

                            <hr />

                            {/* Disclaimers */}
                            <div className="p-6  space-y-3 text-xs text-gray-600">
                                <div className="flex items-start gap-2">
                                    <Utensils className="size-4 text-primary" />
                                    <p>All meals included (Buffet & Dining Room)</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Star className="size-4 text-primary" />
                                    <p>World-class entertainment shows</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Wifi className=" text-gray-400 size-4" />
                                    <p className="line-through text-gray-400" >Wi-Fi Package (Add on)</p>
                                </div>
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
