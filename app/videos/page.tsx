import { VideoCard } from "@/app/components/ui/VideoCard";
import { Video } from "lucide-react";

// Dummy Data
const VIDEOS = [
    {
        id: 1,
        title: "Keynote Address: The Future of Immigration Law in Ghana",
        thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
        duration: "45:20",
        date: "Oct 12, 2025",
        category: "Conferences"
    },
    {
        id: 2,
        title: "Understanding Visa Categories: A Guide for Students",
        thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
        duration: "12:15",
        date: "Sep 28, 2025",
        category: "Education"
    },
    {
        id: 3,
        title: "Interview on TV3: Discussing New Policy Changes",
        thumbnail: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=800",
        duration: "28:00",
        date: "Aug 15, 2025",
        category: "Media"
    },
    {
        id: 4,
        title: "Book Launch Highlights: 'The Immigration Formulae'",
        thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
        duration: "05:45",
        date: "Jul 10, 2025",
        category: "Events"
    },
    {
        id: 5,
        title: "Community Outreach: Legal Aid Clinic",
        thumbnail: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
        duration: "15:30",
        date: "Jun 05, 2025",
        category: "VRA"
    },
    {
        id: 6,
        title: "Youth Empowerment Summit 2025",
        thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        duration: "52:10",
        date: "May 20, 2025",
        category: "YEA"
    }
];

export default function VideosPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-200 py-12 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
                        <Video className="w-3 h-3" />
                        Media Gallery
                    </span>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
                        Videos & Interviews
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl font-light">
                        Explore a curated collection of talks, interviews, and event highlights featuring Wonder Victor Kutor, Esq.
                    </p>
                </div>
            </div>

            {/* Video Grid */}
            <div className="px-6 sm:px-12 py-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VIDEOS.map((video) => (
                        <VideoCard
                            key={video.id}
                            title={video.title}
                            thumbnail={video.thumbnail}
                            duration={video.duration}
                            date={video.date}
                            category={video.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
