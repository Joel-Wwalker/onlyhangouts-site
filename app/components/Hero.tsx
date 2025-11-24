export default function Hero() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
          Social. Modern. Safe.
        </p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Meet someone who makes your day feel unforgettable.
        </h1>
        <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
          OnlyHangouts is a creator-driven marketplace for real-world companionship—think guided hangs,
          city walkthroughs, coffee chats, and local experiences that feel comfortable, safe, and energizing.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#features"
            className="rounded-full bg-[#FF385C] px-5 py-3 text-base font-semibold text-white shadow-lg shadow-[#FF385C]/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#FF385C]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF385C]"
          >
            Get Started
          </a>
          <span className="flex items-center gap-2 text-sm text-white/60">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Safe, verified profiles
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-[#FF385C]/10 p-1 shadow-2xl shadow-black/40">
          <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,56,92,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(255,56,92,0.18),transparent_35%)]" />
            <div className="absolute inset-0 grid grid-rows-6 text-white/10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border-b border-white/5" />
              ))}
            </div>
            <div className="absolute inset-0 grid grid-cols-4 text-white/10">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border-l border-white/5" />
              ))}
            </div>
            <div className="relative flex h-full flex-col justify-between p-6 text-white">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  <span className="h-2 w-2 rounded-full bg-[#FF385C]" />
                  Live now in your city
                </div>
                <h2 className="text-2xl font-semibold leading-snug">
                  Find someone to explore a new café, museum, or park—without the awkward small talk.
                </h2>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center justify-between text-sm text-white/80">
                  <span>Curated companions</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">Safe</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-xs text-white/60">Today</p>
                    <p className="font-semibold">Coffee & chat</p>
                    <p className="text-white/60">30–60 mins</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-xs text-white/60">Weekend</p>
                    <p className="font-semibold">City stroll</p>
                    <p className="text-white/60">Local guide vibes</p>
                  </div>
                </div>
                <button className="w-full rounded-full bg-white text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90">
                  Browse experiences
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -left-6 -bottom-8 hidden h-24 w-24 rotate-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:block" />
        <div className="absolute -right-4 top-6 hidden h-12 w-12 -rotate-6 rounded-xl border border-white/10 bg-[#FF385C]/20 backdrop-blur sm:block" />
      </div>
    </section>
  );
}
