"use client";

import { Menu } from "lucide-react";
import { BRAND_DETAILS } from "@/app/lib/navigation";
import { cn } from "@/app/lib/utils";

interface MobileHeaderProps {
    onMenuClick: () => void;
    className?: string;
}

export function MobileHeader({ onMenuClick, className }: MobileHeaderProps) {
    return (
        <header className={cn("flex items-center justify-between px-4 py-3 bg-emerald-950 text-white border-b border-emerald-900 lg:hidden sticky top-0 z-50", className)}>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emerald-950 font-serif font-bold text-sm">
                    {BRAND_DETAILS.initials}
                </div>
                <span className="font-serif font-semibold text-sm tracking-wide">
                    {BRAND_DETAILS.name}
                </span>
            </div>

            <button
                onClick={onMenuClick}
                className="p-2 -mr-2 text-emerald-300 hover:text-white transition-colors"
                aria-label="Open menu"
            >
                <Menu className="w-6 h-6" />
            </button>
        </header>
    );
}
