"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-slate-50 overflow-hidden px-4">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            {/* Radial Gradient overlay for softness */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-slate-100/50 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <p className="text-emerald-900/60 uppercase tracking-[0.2em] text-sm font-semibold">
                        Welcome to
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif text-emerald-950 leading-tight">
                        Wonder Victor Kutor, <span className="italic text-emerald-800">Esq.</span>
                    </h1>
                    <div className="w-24 h-1 bg-emerald-900/10 mx-auto rounded-full my-8" />
                </motion.div>

                <div className="mt-8 h-20 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {!isExpanded ? (
                            <motion.button
                                key="primary-button"
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.2 } }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsExpanded(true)}
                                className="group relative px-10 py-4 bg-emerald-950 text-white rounded-full text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl hover:bg-emerald-900 transition-all cursor-pointer overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                The Immigration Formulae
                            </motion.button>
                        ) : (
                            <motion.div
                                key="secondary-buttons"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                            >
                                <motion.a
                                    href="/files/Table of Contents - The Immigration Formulae.pdf"
                                    download="Table of Contents - The Immigration Formulae.pdf"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                                    className="px-8 py-3 bg-white text-emerald-950 border border-emerald-900/10 rounded-full text-sm font-semibold hover:bg-emerald-50 hover:border-emerald-900/20 shadow-lg hover:shadow-xl transition-all"
                                >
                                    Table of Content
                                </motion.a>
                                <motion.a
                                    href="/files/FOREWORDS - THE IMMIGRATION FORMULAE.pdf"
                                    download="FOREWORDS - THE IMMIGRATION FORMULAE.pdf"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                                    className="px-8 py-3 bg-emerald-950 text-white rounded-full text-sm font-semibold hover:bg-emerald-900 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                                >
                                    Forward
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
