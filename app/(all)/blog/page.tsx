"use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, User, Link } from "lucide-react"
import { Suspense } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="flex flex-col pt-20">
      <Suspense fallback={null}>
        {/* Blog Hero - Match Image 11 */}
        <section className="  relative py-24 h-[40vh] min-h-[350px]  border-b border-gray-100 bg-black">
          <div className="absolute h-[40vh] min-h-[350px] inset-0 z-0 opacity-100 overflow-hidden grayscale pointer-events-none ">
            <img src="/background.png" alt="" className="w-full h-full object-cover " />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary text-slate-100">Stories from the Road</h1>
            <p className="text-gray-700 max-w-xl mx-auto text-sm">
              Travel tips, hidden gems, and local guides for your next adventure.
            </p>

            <div className="w-full mt-20  bg-white rounded-2xl shadow-sm border border-gray-200 px-6 py-6 space-y-6">
              {/* ✅ Search Bar */}
              <div className="relative items-center flex">
                <Search className="left-3 absolute w-5 h-5 text-gray-400 " />
                <Input
                  placeholder="Search articles by title, author, or keyword..."
                  className="pl-12 h-14 text-sm text-gray-700 placeholder:text-gray-400"
                />
              </div>

 {/* ✅ Category Pills */}
<div className="flex flex-wrap justify-center w-full h-full">
  <Tabs defaultValue="all" className="w-full">
    <TabsList className="bg-transparent p-0 gap-3 flex flex-wrap justify-center">
      {["all", "guides", "inspiration", "tips", "food"].map((tab) => (
        <TabsTrigger
          key={tab}
          value={tab}
          className="
            px-4 py-2 rounded-full text-sm font-medium 
            bg-gray-100 text-gray-700 
            data-[state=active]:bg-sky-500 data-[state=active]:text-white
            transition-all
          "
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </TabsTrigger>
      ))}
    </TabsList>
  </Tabs>
</div>


              {/* ✅ Filters Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-10 sm:pt-2 border-t border-gray-100">
                {/* Left Filters */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <p className="text-sm font-semibold text-gray-600">FILTER BY:</p>

                  {/* Country Select */}
                  <Select>
                    <SelectTrigger className="w-[180px] h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-700">
                      <SelectValue placeholder="All Countries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Countries</SelectItem>
                      <SelectItem value="malaysia">Malaysia</SelectItem>
                      <SelectItem value="singapore">Singapore</SelectItem>
                      <SelectItem value="china">China</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* City Select */}
                  <Select>
                    <SelectTrigger className="w-[180px] h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-400">
                      <SelectValue placeholder="All Cities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cities</SelectItem>
                      <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                      <SelectItem value="subang-jaya">Subang Jaya</SelectItem>
                      <SelectItem value="dhaka">Dhaka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Right Sort */}
                <div className="flex items-center gap-3 justify-between md:justify-end">
                  <p className="text-sm font-semibold text-gray-400 tracking-widest">
                    SORT:
                  </p>

                  <Select>
                    <SelectTrigger className="w-[180px] h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-700 font-medium">
                      <SelectValue placeholder="Newest First" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>



          </div>
        </section>

        {/* Featured Article - Match Image 11 */}
        <section className="container px-6 lg:px-12 mt-30 mx-auto py-16">
          <div className="bg-white rounded-[2.5rem] w-full  border border-gray-100 overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col lg:flex-row h-[400]">
            <div className=" w-[40%] lg:aspect-auto relative">
              <Image width={100} height={100} 
                src="/blog1.png"
                alt="Featured"
                className=" w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <Badge className="bg-secondary text-white font-bold px-3 py-1">FEATURED</Badge>
              </div>
            </div>
            <div className=" p-8 md:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Inspiration • March 15, 2024
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
                  Discover the Hidden Gems
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  Benefits of traveling alone, from the freedom to discover new places with new friends. Why solo travel
                  is the new luxury.
                </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="size-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary">Mike Chan</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Travel Editor</p>
                  </div>
                </div>
                <Button variant="link" className="text-primary font-bold gap-2 group p-0">
                  Read More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid - Match Image 11 */}
        <section className="container mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, ].map((i) => (
            <a key={i} href={`/blog/${i}`} className="block">
            <div key={i} className="group flex flex-col space-y-4 shadow-lg rounded-b-md">
              <div className="relative aspect-[4/3] rounded-t-md overflow-hidden">
                <img
                  src={`/blog${i}.png?query=blog${i}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  alt=""
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-secondary font-bold text-[10px] backdrop-blur-sm border-0">
                    Guides
                  </Badge>
                </div>
              </div>
              <div className="space-y-3 px-4 pb-3  ">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Feb 28, 2024 • 5 min read
                </span>
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                  Must-See Landmarks That You Should Visit
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  Iconic landmarks that make Europe one of the world's most popular travel destinations.
                </p>
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    By Victoria Wilson
                  </span>
                  <Button size="icon" variant="ghost" className="rounded-full size-8 bg-primary/10 text-primary">
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
            </a>
          ))}
        </section>
      </Suspense>
    </main>
  )
}
