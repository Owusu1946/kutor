import { Gavel, Trophy, Users, Globe, Mic2 } from "lucide-react";

export default function SRCPresidencyPage() {
    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-20 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-emerald-900 rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-emerald-800/20">
                            <Gavel className="w-16 h-16 md:w-20 md:h-20 text-emerald-300" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            SRC Presidency
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Serving as President of the Student Representative Council (SRC) of the Ghana School of Law (GSL) for the 2021/2022 academic year.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6">
                        Mr. Kutor served as President of the Student Representative Council (SRC) of the Ghana School of Law (GSL) for the 2021/2022 academic year.
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto space-y-16">

                {/* Electoral Victory */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                                Electoral Victory
                            </h2>
                            <div className="h-1 w-20 bg-emerald-600/30"></div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Mr. Kutor won on all campuses of the Ghana School of Law ensuring a one-touch victory.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-slate-100 flex items-center justify-center border border-slate-200">
                        <Trophy className="w-16 h-16 text-slate-300 opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </div>
                </div>

                {/* Swearing-in Ceremony */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-slate-100 flex items-center justify-center border border-slate-200 md:order-last">
                        <Users className="w-16 h-16 text-slate-300 opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                                Swearing-in Ceremony
                            </h2>
                            <div className="h-1 w-20 bg-emerald-600/30"></div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Mr. Kutor together with other executives elect were sworn in on 2nd September, 2021 at the main campus, Makola.
                        </p>
                    </div>
                </div>

                {/* Texas Law */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                                Texas Law
                            </h2>
                            <div className="h-1 w-20 bg-emerald-600/30"></div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Mr. Kutor led the student delegation of the GSL to visit Texas Law School.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-slate-100 flex items-center justify-center border border-slate-200">
                        <Globe className="w-16 h-16 text-slate-300 opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </div>
                </div>

                {/* Public Lecture */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-slate-100 flex items-center justify-center border border-slate-200 md:order-last">
                        <Mic2 className="w-16 h-16 text-slate-300 opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                                Public Lecture
                            </h2>
                            <div className="h-1 w-20 bg-emerald-600/30"></div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            The Kumasi Campus of the GSL hosted the Minister of Lands and Natural Resources, Hon. Samuel A. Jinapor, MP for a Public Lecture on Mining in Ghana in December 2021.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
}
