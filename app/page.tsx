import Link from "next/link";
import { BOOK_DETAILS } from "@/app/lib/navigation";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12 pb-20">
      {/* Book Hero Section */}
      <section className="relative bg-emerald-950 text-white py-16 px-6 sm:px-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/30 text-red-200 text-xs font-bold uppercase tracking-widest">
              <Star className="w-3 h-3 fill-current text-red-500" />
              Latest Release
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {BOOK_DETAILS.title}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100/80 font-serif italic">
              {BOOK_DETAILS.subtitle}
            </p>

            <p className="text-emerald-200/70 leading-relaxed max-w-lg">
              A comprehensive guide to understanding the complexities of immigration law,
              packaging your application for success, and strategic approaches to legal challenges.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={BOOK_DETAILS.links.view}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white font-semibold rounded hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
              >
                Get Your Copy
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={BOOK_DETAILS.links.launch}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-semibold rounded border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Launch Details
              </Link>
            </div>
          </div>

          {/* Book Cover Placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 aspect-[2/3] bg-emerald-900 rounded shadow-2xl border border-white/10 flex flex-col items-center justify-center p-8 text-center group transform transition-transform hover:-translate-y-2 duration-500">
              <div className="absolute inset-x-4 top-0 h-[1px] bg-white/20"></div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">{BOOK_DETAILS.title}</h3>
              <div className="w-12 h-[2px] bg-red-600 my-4"></div>
              <p className="text-xs text-emerald-400 uppercase tracking-widest">Wonder Kutor, Esq.</p>

              {/* Simulated spine effect */}
              <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile / Content Section (To enable scrolling) */}
      <section className="px-6 sm:px-12 max-w-5xl mx-auto space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-4">About Wonder Victor Kutor</h2>
          <div className="h-1 w-20 bg-red-600 mb-6"></div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Wonder Victor Kutor is a distinguished legal practitioner, author, and public speaker with a proven track record of service and leadership.
            His work spans across legal advocacy, political strategy, and youth empowerment.
          </p>
          <p className="text-slate-600 leading-relaxed">
            As the author of "The Immigration Formulae", he brings clarity to the complex world of immigration rules, helping individuals and families navigate their legal journeys with confidence.
          </p>
        </div>

        {/* Dummy content blocks to force scroll */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-700 rounded-full mb-4 flex items-center justify-center font-bold">
                {i}
              </div>
              <h3 className="font-bold text-emerald-950 mb-2 group-hover:text-red-700 transition-colors">Service Area {i}</h3>
              <p className="text-sm text-slate-500">Brief description of the service area demonstrating the layout structure.</p>
            </div>
          ))}
        </div>

        <div className="h-64 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400">
          Additional Content Block for Scrolling
        </div>
      </section>
    </div>
  );
}
