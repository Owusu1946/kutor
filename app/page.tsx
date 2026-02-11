import { Hero } from "@/app/components/sections/Hero";

export default function Home() {
  return (
    <div className="space-y-12 pb-20">
      <Hero />

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
