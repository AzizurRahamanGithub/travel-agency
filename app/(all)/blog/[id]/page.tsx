import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Share2, ArrowRight, CalendarDays, Clock, User } from "lucide-react";

type BlogDetailsProps = {
    params: {
        id: string;
    };
};

export default function BlogDetailsPage({ params }: BlogDetailsProps) {

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

                <div className="container max-w-5xl flex justify-center flex-col items-center relative z-10 mx-auto px-6 pb-12 w-full h=full text-white">

<div className="">
     {/* ✅ Top Meta Row */}
                    <div className="flex items-center gap-4 text-sm text-white/80 mb-6">
                        {/* Category Pill */}
                        <span className="bg-primary px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase text-white">
                            Inspiration
                        </span>

                        {/* Date */}
                        <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4 text-white/70" />
                            <span>March 15, 2026</span>
                        </div>

                        {/* Reading Time */}
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-white/70" />
                            <span>4 min read</span>
                        </div>
                    </div>

                    {/* ✅ Title */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-10">
                        Discover the Hidden Gems
                    </h1>

                    {/* ✅ Author Row */}
                    <div className="flex items-center gap-4">
                        {/* Avatar Icon */}
                        <div className="w-12 h-12 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
                            <User className="w-6 h-6 text-white/80" />
                        </div>

                        {/* Author Info */}
                        <div>
                            <p className="font-semibold text-white">Mike Chen</p>
                            <p className="text-xs uppercase tracking-widest text-white/60">
                                Travel Editor
                            </p>
                        </div>
                    </div>
</div>
                   
                </div>
            </section>

            <section className="w-full bg-white">
                <div className="container mx-auto px-6 lg:px-12 py-14 max-w-5xl">

                    {/* ✅ Title */}
                    <h2 className="text-2xl font-bold text-secondary mb-3">
                        1. Choosing the Right Destination
                    </h2>

                    {/* ✅ Intro */}
                    <p className="text-sm text-gray-500 leading-relaxed max-w-4xl mb-6">
                        Consider what you need right now. Do you need rest? Adventure? Culture? Be honest with yourself about your energy levels.
                    </p>

                    {/* ✅ Main Blog Image */}
                    <div className="rounded-xl overflow-hidden border border-gray-200">
                        <Image
                            src={"/blog1.png"}
                            alt="Blog Cover"
                            width={1200}
                            height={650}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* ✅ Caption */}
                    <p className="text-xs text-gray-400 mt-4 mb-10">
                        More content coming soon for this article. Stay tuned for updates!
                    </p>

                    {/* ✅ Tag + Share Row */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6 mb-10">
                        {/* Tags */}
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="font-medium">Tags:</span>
                            <Badge variant="outline" className="rounded-full text-[10px] px-3 py-1">
                                Inspiration
                            </Badge>
                        </div>

                        {/* Share */}
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="font-medium">Share:</span>
                            <Share2 className="w-4 h-4 text-gray-400 hover:text-primary cursor-pointer" />
                            <Twitter className="w-4 h-4 text-gray-400 hover:text-primary cursor-pointer" />
                            <Facebook className="w-4 h-4 text-gray-400 hover:text-primary cursor-pointer" />
                            <Linkedin className="w-4 h-4 text-gray-400 hover:text-primary cursor-pointer" />
                        </div>
                    </div>

                    {/* ✅ Author Card (exact screenshot style) */}
                    <div className="rounded-2xl px-7 py-6 flex gap-5 items-center shadow-lg mb-16"
                        style={{
                            background: "linear-gradient(90deg, #071B2E 0%, #0B2D3D 100%)"
                        }}
                    >
                        {/* Avatar */}
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                            <Image
                                src="/avatar.png"
                                alt="Author"
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex-1 text-white">
                            <p className="font-bold text-sm mb-1">Written by Mike Chen</p>
                            <p className="text-xs text-white/70 leading-relaxed max-w-xl">
                                Travel Editor at Long Vacation. Obsessed with finding the perfect bowl of ramen and maximizing weekend layovers. When not writing, I'm probably lost in a fish market somewhere.
                            </p>

                            <Link
                                href="/blog"
                                className="inline-block mt-3 text-xs text-primary font-semibold"
                            >
                                View All Posts
                            </Link>
                        </div>
                    </div>

                    {/* ✅ You might also like */}
                    <h3 className="text-sm font-bold text-secondary mb-4">You might also like</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2].map((i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition cursor-pointer"
                            >
                                <div className="w-20 h-16 rounded-lg overflow-hidden relative">
                                    <Image
                                        src={"/blog1.png"}
                                        alt="Related"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <Badge className="text-[10px] bg-primary/10 text-primary font-bold">
                                        Guides
                                    </Badge>
                                    <h4 className="text-sm font-bold text-secondary mt-1 line-clamp-2">
                                        Plan the Perfect Vacation
                                    </h4>
                                    <p className="text-[10px] text-gray-400 mt-1">
                                        Feb 28, 2024 • 5 min read
                                    </p>
                                </div>

                                <ArrowRight className="w-4 h-4 text-gray-400" />
                            </div>
                        ))}
                    </div>

                </div>

            </section>


        </div>

    );
}