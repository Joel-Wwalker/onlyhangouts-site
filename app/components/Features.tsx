const reviews = [
  {
    name: "Jordan",
    city: "Austin",
    text: "Felt like exploring with a friend—zero awkwardness, just easy conversation and great coffee spots.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priya",
    city: "New York",
    text: "We walked museums, grabbed bites, and I got insider tips I’d never find on a blog.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luis",
    city: "San Francisco",
    text: "Booked a weekend city stroll—super communicative, safe, and genuinely fun.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#f7f7f8] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">What people are saying</p>
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#292929]">Real hangs. Real stories.</h2>
          </div>
          <p className="max-w-xl text-sm text-[#4b4b4b]">
            Safe, memorable experiences curated by hosts who know their city—and care about your comfort.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="h-40 w-full bg-cover bg-center transition group-hover:scale-105"
                style={{ backgroundImage: `url(${review.image})` }}
              />
              <div className="space-y-3 px-5 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base font-semibold text-[#292929]">{review.name}</p>
                    <p className="text-sm text-[#6b6b6b]">{review.city}</p>
                  </div>
                  <span className="rounded-full bg-[#FF385C]/10 px-3 py-1 text-xs font-semibold text-[#FF385C]">
                    Verified
                  </span>
                </div>
                <p className="text-sm text-[#4b4b4b] leading-relaxed">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
