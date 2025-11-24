const features = [
  {
    title: "Meet",
    description: "Browse verified companions who match your vibe—locals, creators, and friendly guides ready to hang.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#FF385C]" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="8" cy="8" r="4" />
        <circle cx="16" cy="16" r="4" />
        <path d="M12 12c1.6-1.6 1.6-4.4 0-6" />
      </svg>
    ),
  },
  {
    title: "Book",
    description: "Pick a time and place that works for you. Clear expectations, transparent pricing, and fast confirmations.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#FF385C]" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 4v4M16 4v4M4 10h16" />
      </svg>
    ),
  },
  {
    title: "Enjoy",
    description: "Relax into memorable experiences—coffee catchups, gallery walks, or park hangs that feel easy and safe.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#FF385C]" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M4 12c4 1.5 12 1.5 16 0" />
        <path d="M8 10c0-2 1.5-4 4-4s4 2 4 4" />
        <path d="M9 15c.5 1.2 1.8 2 3 2s2.5-.8 3-2" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">How it works</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple steps to unforgettable hangs</h2>
        </div>
        <p className="max-w-xl text-sm text-white/70">
          Designed for shy newcomers and curious locals alike—OnlyHangouts keeps every interaction intentional,
          comfortable, and transparent.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
          >
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#FF385C]/10 blur-2xl transition group-hover:scale-110" />
            <div className="relative flex flex-col gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#FF385C]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
