import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="bg-[#f7f7f8] text-[#292929]">
      <Hero />
      <Features />
      <footer className="border-t border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-black/70 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>OnlyHangouts — Meet someone who makes your day feel unforgettable.</span>
          <span className="text-black/60">Safe, modern companionship marketplace.</span>
        </div>
      </footer>
    </main>
  );
}
