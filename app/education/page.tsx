import { GraduationCap } from "lucide-react";

export default function EducationPage() {
    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-20 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-emerald-900 rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-emerald-800/20">
                            <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-emerald-300" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Education
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Academic background and professional qualifications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6">
                        Mr. Kutor holds a Master of Science in Management from the University of Florida and a Master of Arts in Public Affairs from the University of Ghana. He earned his Bachelor of Laws (LLB) from the University of London and holds a Bachelor of Arts (First Class Honours) in Sociology from the University of Ghana. He obtained his Qualifying Certificate in Law from the Ghana School of Law.
                    </p>
                    <p className="leading-relaxed">
                        Mr. Kutor was called to the Ghana Bar on 5th May, 2023.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto space-y-6">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                        Academic Journey
                    </h2>
                    <div className="h-1 w-20 bg-emerald-600/30"></div>
                </div>
                <p className="text-slate-600 italic">
                    Images from various graduations and academic events.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Placeholder 1 */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-slate-100 bg-slate-200 flex items-center justify-center">
                        <div className="text-center text-slate-400">
                            <GraduationCap className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="font-medium">Graduation Photo 1</p>
                        </div>
                    </div>
                    {/* Placeholder 2 */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-slate-100 bg-slate-200 flex items-center justify-center">
                        <div className="text-center text-slate-400">
                            <GraduationCap className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="font-medium">Graduation Photo 2</p>
                        </div>
                    </div>
                    {/* Placeholder 3 */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-slate-100 bg-slate-200 flex items-center justify-center">
                        <div className="text-center text-slate-400">
                            <GraduationCap className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="font-medium">Call to the Bar 1</p>
                        </div>
                    </div>
                    {/* Placeholder 4 */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-slate-100 bg-slate-200 flex items-center justify-center">
                        <div className="text-center text-slate-400">
                            <GraduationCap className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="font-medium">Call to the Bar 2</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
