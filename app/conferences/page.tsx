import { Mic2, Globe, Building2, ExternalLink } from "lucide-react";

export default function ConferencesPage() {
    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-20 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-emerald-900 rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-emerald-800/20">
                            <Mic2 className="w-16 h-16 md:w-20 md:h-20 text-emerald-300" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Conferences
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Global participation in international conferences and professional training programs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6 italic border-l-4 border-emerald-600/20 pl-6 py-2 bg-slate-50 rounded-r-lg">
                        Mr. Kutor has participated in several major international conferences/training including the Academy of Marketing Science (AMS) Annual Conference in Canada, the Offshore Technology Conference (OTC) in the United States (US) and the Board training program in governance and financial oversight responsibilities in London, United Kingdom (UK).
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto space-y-16">

                {/* AMS Conference */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                                Academy of Marketing Science (AMS)
                            </h2>
                            <div className="h-1 w-20 bg-emerald-600/30 mb-4"></div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full">
                                <Globe className="w-3 h-3" /> Canada
                            </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Participated in the Annual Conference of the Academy of Marketing Science, engaging with global leaders in marketing academia and practice.
                        </p>
                    </div>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-slate-100 flex items-center justify-center border border-slate-200">
                        <Mic2 className="w-16 h-16 text-slate-300 opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </div>
                </div>

                {/* OTC Conference */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-slate-100 flex items-center justify-center border border-slate-200 md:order-last">
                        <Building2 className="w-16 h-16 text-slate-300 opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                                Offshore Technology Conference (OTC)
                            </h2>
                            <div className="h-1 w-20 bg-emerald-600/30 mb-4"></div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full">
                                <Globe className="w-3 h-3" /> United States
                            </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Attended the world's foremost event for offshore resource development, focusing on the latest in energy technology and global policy.
                        </p>
                    </div>
                </div>

                {/* Board Training London */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                                Governance & Financial Oversight
                            </h2>
                            <div className="h-1 w-20 bg-emerald-600/30 mb-4"></div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider rounded-full">
                                <Globe className="w-3 h-3" /> London, UK
                            </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Completed advanced board training program focused on corporate governance and financial oversight responsibilities.
                        </p>
                    </div>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-slate-100 flex items-center justify-center border border-slate-200">
                        <ExternalLink className="w-16 h-16 text-slate-300 opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </div>
                </div>

            </section>
        </div>
    );
}
