"use client";

import { useState } from "react";
import { VideoCard } from "@/app/components/ui/VideoCard";
import { VideoLightbox } from "@/app/components/ui/VideoLightbox";
import { Video, Sparkles } from "lucide-react";

const VIDEOS = [
    {
        id: 1,
        title: "Official Delegation and Field Inspection",
        src: "/videos/IMG_1327.MP4",
        thumbnail: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=800",
        duration: "0:24",
        date: "March 2026",
        category: "Projects"
    },
    {
        id: 2,
        title: "Community Engagement and Address",
        src: "/videos/IMG_1328.MP4",
        thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        duration: "1:15",
        date: "March 2026",
        category: "Leadership"
    },
    {
        id: 3,
        title: "Project Milestone Highlight",
        src: "/videos/IMG_1329.MP4",
        thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
        duration: "0:37",
        date: "March 2026",
        category: "Development"
    },
    {
        id: 4,
        title: "Institutional Interaction and Briefing",
        src: "/videos/IMG_1330.MP4",
        thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
        duration: "0:26",
        date: "March 2026",
        category: "Media"
    }
];

export default function VideosPage() {
    const [selectedVideo, setSelectedVideo] = useState<{ src: string, title: string } | null>(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-emerald-950 text-white py-16 px-6 sm:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-800/30">
                        <Video className="w-3 h-3" />
                        Professional Media
                    </span>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                        Videos & Interviews
                    </h1>
                    <div className="h-1.5 w-24 bg-red-600 mb-6 rounded-full shadow-lg shadow-red-900/20"></div>
                    <p className="text-lg text-emerald-100 max-w-2xl font-light leading-relaxed">
                        Explore event highlights, field inspections, and institutional updates featuring Wonder Victor Kutor.
                    </p>
                </div>
            </div>

            {/* Video Grid */}
            <div className="px-6 sm:px-12 py-16 max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-10 text-emerald-900">
                    <Sparkles className="w-5 h-5" />
                    <h2 className="text-xl font-serif font-bold">Featured Highlights</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {VIDEOS.map((video) => (
                        <VideoCard
                            key={video.id}
                            title={video.title}
                            videoSrc={video.src}
                            duration={video.duration}
                            date={video.date}
                            category={video.category}
                            onClick={() => setSelectedVideo({ src: video.src, title: video.title })}
                        />
                    ))}
                </div>
            </div>

            {selectedVideo && (
                <VideoLightbox
                    videoSrc={selectedVideo.src}
                    title={selectedVideo.title}
                    isOpen={!!selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </div>
    );
}
