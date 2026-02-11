"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { NAV_ITEMS, BRAND_DETAILS, BOOK_DETAILS } from "@/app/lib/navigation";
import { BookOpen } from "lucide-react";

export function Sidebar({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <aside className={cn("flex flex-col h-full bg-emerald-950 text-white w-72 flex-shrink-0 border-r border-emerald-900", className)}>
            {/* Brand Block */}
            <div className="p-6 border-b border-emerald-900">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-900 font-serif font-bold text-lg border-2 border-emerald-800">
                        {BRAND_DETAILS.initials}
                    </div>
                    <div>
                        <h1 className="font-serif text-lg leading-tight font-semibold tracking-wide text-white">
                            {BRAND_DETAILS.name}
                        </h1>
                    </div>
                </div>
                <p className="text-xs text-emerald-200/70 uppercase tracking-wider font-medium ml-1">
                    {BRAND_DETAILS.tagline}
                </p>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 custom-scrollbar">
                {/* Featured Book Card */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-5 text-white shadow-lg border border-emerald-800/50 group">
                    <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all duration-500"></div>

                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white mb-3 shadow-sm uppercase tracking-widest">
                            <BookOpen className="w-3 h-3" />
                            Featured
                        </span>
                        <h3 className="font-serif text-xl font-bold leading-tight mb-1 group-hover:text-emerald-100 transition-colors text-white">
                            {BOOK_DETAILS.title}
                        </h3>
                        <p className="text-sm text-emerald-200/80 mb-4 font-light italic">
                            {BOOK_DETAILS.subtitle}
                        </p>

                        {/* Placeholder for Book Cover */}
                        <div className="mb-4 w-full h-32 bg-emerald-900/50 rounded-md border border-emerald-800/50 flex items-center justify-center text-emerald-400/30 text-xs">
                            Book Cover
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <Link
                                href={BOOK_DETAILS.links.view}
                                className="px-3 py-2 bg-white text-emerald-950 text-xs font-bold rounded text-center hover:bg-emerald-50 transition-colors shadow-sm"
                            >
                                View Book
                            </Link>
                            <Link
                                href={BOOK_DETAILS.links.launch}
                                className="px-3 py-2 bg-emerald-900/50 text-white text-xs font-bold rounded text-center hover:bg-emerald-900 transition-colors backdrop-blur-sm border border-emerald-800"
                            >
                                Launch Info
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-1">
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                                    isActive
                                        ? "bg-emerald-900 text-white shadow-inner"
                                        : "text-emerald-200/70 hover:text-white hover:bg-emerald-900/40"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-red-600 rounded-r-full" />
                                )}
                                <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-red-500" : "text-emerald-400 group-hover:text-emerald-200")} />
                                <span className="tracking-wide">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Footer / Contact Trigger */}
            <div className="p-4 border-t border-emerald-900">
                <button className="w-full py-2 px-4 rounded border border-emerald-800 text-emerald-300 text-xs uppercase tracking-widest hover:bg-emerald-900 hover:text-white transition-colors">
                    Contact Office
                </button>
            </div>
        </aside>
    );
}
