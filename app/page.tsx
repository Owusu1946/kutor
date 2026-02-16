import { Hero } from "@/app/components/sections/Hero";
import { HeroGallery } from "@/app/components/sections/HeroGallery";

export default function Home() {
  return (
    <div className="space-y-12 pb-20">
      <Hero />
      <HeroGallery />

      {/* Dummy content blocks to force scroll */}
      <section className="px-6 sm:px-12 max-w-5xl mx-auto space-y-8">
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
