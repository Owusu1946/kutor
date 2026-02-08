"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Awesome! We'll keep you posted.");
        setEmail("");
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Oops! Please try again later.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center text-gray-900">
      {/* Decorative Red Accent */}
      <div className="absolute top-10 right-10 h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>

      <div className="max-w-md w-full space-y-8">
        {/* Branding */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Wonder Kutor
          </h1>
          <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Status Message */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-gray-500 font-light tracking-wide">
            Something amazing is in the works.
          </p>
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-200 bg-green-50 text-green-700 text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Under Construction
          </div>
        </div>

        {/* Notify / CTA Section */}
        <div className="pt-8">
          <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest font-medium">
            Get notified when we launch
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-200 shadow-sm shadow-green-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Joining..." : "Notify Me"}
              </button>
            </div>

            {status === "success" && (
              <p className="text-sm text-green-600 font-medium animate-in fade-in slide-in-from-top-1">
                {message}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 font-medium animate-in fade-in slide-in-from-top-1">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer / Copyright */}
      <div className="absolute bottom-6 text-xs text-gray-400 font-medium tracking-wider">
        &copy; {new Date().getFullYear()} WONDER KUTOR. ALL RIGHTS RESERVED.
      </div>
    </main>
  );
}
