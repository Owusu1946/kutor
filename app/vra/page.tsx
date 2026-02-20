import Image from "next/image";

export default function VRAPage() {
    const swearingInImages = [
        "photo_1_2026-02-13_14-21-35.jpg",
        "photo_2_2026-02-13_14-21-35.jpg",
        "photo_3_2026-02-13_14-21-35.jpg",
        "photo_4_2026-02-13_14-21-35.jpg",
        "photo_5_2026-02-13_14-21-35.jpg",
        "photo_6_2026-02-13_14-21-35.jpg",
        "photo_7_2026-02-13_14-21-35.jpg",
        "photo_8_2026-02-13_14-21-35.jpg",
        "photo_9_2026-02-13_14-21-35.jpg",
    ];

    const visitationImages = [
        "photo_1_2026-02-13_14-23-07.jpg",
        "photo_2_2026-02-13_14-23-07.jpg",
        "photo_3_2026-02-13_14-23-07.jpg",
        "photo_4_2026-02-13_14-23-07.jpg",
    ];

    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-16 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-emerald-800/20">
                            <Image
                                src="/yea/VRA_Logo.png"
                                alt="VRA Logo"
                                width={128}
                                height={128}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Volta River Authority (VRA)
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Leading with vision and integrity at the Volta River Authority.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6">
                        Mr. Kutor was appointed as a non-executive member of the Board of the
                        Volta River Authority (VRA) in June 2025 by the President of the
                        Republic of Ghana in consultation with the Council of State.
                    </p>
                    <p className="leading-relaxed mb-6">
                        The Board was inaugarated by the Honourable Minister of Energy and
                        Green Transition, Hon. Dr. John Abdulai Jinapor on 23rd June, 2025.
                    </p>
                    <p className="leading-relaxed">
                        In July 2025, the VRA Board appointed him as the Governance Champion
                        for the Authority. He was also subsequently appointed by the board as
                        the Board Chairman of the VRA International
                        Schools Ltd., a subsidiary of VRA.
                    </p>
                </div>
            </section>

            {/* Swearing-in Gallery */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-8">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-3">
                        Swearing-in Ceremony
                    </h2>
                    <div className="h-1 w-20 bg-emerald-600/30 mb-8"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {swearingInImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={`/vra/swearing-in/${img}`}
                                alt={`Swearing-in ceremony photo ${idx + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Visitation Gallery */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-8">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-3">
                        Site Visitation (2025)
                    </h2>
                    <div className="h-1 w-20 bg-emerald-600/30 mb-8"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {visitationImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-[16/9] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={`/vra/visitation/${img}`}
                                alt={`Site visitation photo ${idx + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
