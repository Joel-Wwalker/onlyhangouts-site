import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#FF385C]/20 blur-3xl" />
          <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#FF385C]/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-5 pb-16 pt-20 sm:px-8 lg:px-12">
          <Hero />
          <Features />
        </div>
      </div>
      <footer className="border-t border-white/10 bg-black/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>OnlyHangouts — Meet someone who makes your day feel unforgettable.</span>
          <span className="text-white/50">Made for safe, modern companionship.</span>
        </div>
      </footer>
    </main>
  );
}
