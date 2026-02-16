"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/hero-gallery/photo_1_2026-02-16_16-05-00.jpg",
    "/hero-gallery/photo_2_2026-02-16_16-05-00.jpg",
    "/hero-gallery/photo_3_2026-02-16_16-05-00.jpg",
    "/hero-gallery/photo_4_2026-02-16_16-05-00.jpg",
];

export function HeroGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // We show 2 images at a time on desktop
    const itemsPerPage = 2;
    const totalPages = Math.ceil(images.length / itemsPerPage);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex, isAutoPlaying]);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex >= totalPages) nextIndex = 0;
            if (nextIndex < 0) nextIndex = totalPages - 1;
            return nextIndex;
        });
    };

    const currentImages = images.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section
            className="py-12 bg-white overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full max-w-5xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow-md hover:bg-white text-emerald-800 transition-colors backdrop-blur-sm"
                        onClick={() => paginate(-1)}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow-md hover:bg-white text-emerald-800 transition-colors backdrop-blur-sm"
                        onClick={() => paginate(1)}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Slider Content */}
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="absolute w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
                            >
                                {currentImages.map((src, index) => (
                                    <div key={`${currentIndex}-${index}`} className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg group">
                                        <Image
                                            src={src}
                                            alt={`Gallery image ${currentIndex * itemsPerPage + index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? "bg-emerald-600" : "bg-slate-300 hover:bg-emerald-400"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
