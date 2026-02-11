"use client";

import { Play } from "lucide-react";

interface VideoCardProps {
    title: string;
    thumbnail: string;
    duration: string;
    date: string;
    category?: string;
}

export function VideoCard({ title, thumbnail, duration, date, category }: VideoCardProps) {
    return (
        <div className="group relative cursor-pointer block">
            {/* Thumbnail Container */}
            <div className="relative aspect-video bg-zinc-100 rounded-xl overflow-hidden mb-3 border border-zinc-200/50 shadow-sm group-hover:shadow-md transition-all">
                {/* Image Placeholder - In real app use Next/Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${thumbnail})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-5 h-5 text-emerald-900 ml-1 fill-emerald-900" />
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium rounded-md">
                    {duration}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                    <span>{date}</span>
                    {category && (
                        <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                            {category}
                        </span>
                    )}
                </div>
                <h3 className="font-medium text-emerald-950 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {title}
                </h3>
            </div>
        </div>
    );
}
