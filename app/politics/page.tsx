import Image from "next/image";

export default function PoliticsPage() {
    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-20 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Political Career
                    </h1>
                    <div className="h-1.5 w-24 bg-red-600 mb-6"></div>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Service and leadership within the National Democratic Congress (NDC).
                    </p>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6">
                        In 2014, Mr. Kutor was elected as the Constituency Deputy Secretary of the NDC in the Anlo Constituency, having served as a branch organizer for the Torieme branch in the Anlo Constituency.
                    </p>
                    <p className="leading-relaxed">
                        In 2022, Mr. Kutor was elected a memner of the National Executive Committee of the National Democratic Congress (NDC) for a four-year tenure.
                    </p>
                </div>
            </section>

            {/* Gallery Sections */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-16">

                {/* Gallery 1: National Executives 2022 */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                            National Executives (2022)
                        </h2>
                        <div className="h-1 w-20 bg-emerald-600/30"></div>
                    </div>
                    <p className="text-slate-600 italic">
                        Full list of elected National Executives of the NDC in 2022.
                    </p>
                    <div className="relative aspect-[16/9] w-full max-w-5xl rounded-xl overflow-hidden shadow-lg border border-slate-100">
                        <Image
                            src="/politics/list/photo_2026-02-13_14-59-11.jpg"
                            alt="Full list of elected National Executives of the NDC in 2022"
                            fill
                            className="object-contain bg-slate-100" // object-contain for document/list types usually better
                            sizes="(max-width: 1024px) 100vw, 80vw"
                        />
                    </div>
                </div>

                {/* Gallery 2: Press Briefing 2026 */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                            NDC Reorganization Press Briefing (2026)
                        </h2>
                        <div className="h-1 w-20 bg-emerald-600/30"></div>
                    </div>
                    <p className="text-slate-600 italic">
                        Pictures from the Press Briefing of the NDC reorganization exercise for 2026
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "photo_2026-02-13_14-59-15.jpg",
                            "photo_2026-02-13_14-59-16 (2).jpg",
                            "photo_2026-02-13_14-59-16.jpg"
                        ].map((img, idx) => (
                            <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-slate-100">
                                <Image
                                    src={`/politics/press/${img}`}
                                    alt={`Press Briefing 2026 - Image ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery 3: NEC Meeting 2026 */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                            Volta Regional Executive Committee Meeting (2026)
                        </h2>
                        <div className="h-1 w-20 bg-emerald-600/30"></div>
                    </div>
                    <p className="text-slate-600 italic">
                        Mr. Kutor and Comrade Mustapha Gbande in HO for the Volta Regional Executive Committee meeting on Friday 6th February, 2026
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl">
                        {[
                            "photo_2026-02-13_14-59-17.jpg",
                            "photo_2026-02-13_14-59-18.jpg"
                        ].map((img, idx) => (
                            <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-slate-100">
                                <Image
                                    src={`/politics/nec-meeting/${img}`}
                                    alt={`NEC Meeting 2026 - Image ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
}
