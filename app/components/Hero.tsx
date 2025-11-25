const navLinks = ["Book Now", "About"];
const vibeChips = ["Coffee chats", "City strolls", "Gallery hops", "Outdoor chill"];

export default function Hero() {
  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[70vh] bg-[linear-gradient(180deg,#0f0f0f_0%,#1a1a1a_35%,#0f0f0f_100%)]" />
      <div
        className="absolute inset-x-0 top-0 h-[70vh] bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      <div className="relative z-10 w-full bg-[#0d0d0d]">
        <header className="mx-auto flex w-full max-w-6xl flex-nowrap items-center justify-between px-6 py-6 sm:px-10 lg:px-12 min-h-[84px]">
          {/* LEFT CLUSTER */}
          <div
            className="flex flex-1 items-center space-x-8 sm:space-x-10 lg:space-x-12"
            style={{ columnGap: "2.5rem", marginLeft: "1rem" }}
          >
            <div className="flex items-center space-x-4 flex-shrink-0" style={{ columnGap: "1rem" }}>
              <div
                className="flex items-center justify-center rounded-full bg-[#FF385C] text-lg font-bold text-white shadow-lg shadow-[#FF385C]/30"
                style={{ width: "50px", height: "50px" }}
              >
                OH
              </div>
              <span className="text-lg font-semibold text-[#f5f5f5]">OnlyHangouts</span>
              <a href="#" className="text-sm font-semibold text-[#f5f5f5]/85 transition hover:text-[#f5f5f5]">
                About
              </a>
            </div>
            <nav
              className="hidden md:flex items-center space-x-6 sm:space-x-8 lg:space-x-10 text-sm font-semibold text-[#f5f5f5]/90 whitespace-nowrap"
              style={{ columnGap: "2rem" }}
            >
              {navLinks.map((link) => (
                <a key={link} href="#" className="px-1 transition hover:text-[#f5f5f5]">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT CLUSTER */}
        <div
          className="flex items-center whitespace-nowrap space-x-6 sm:space-x-8 lg:space-x-10"
          style={{ columnGap: "1.75rem", marginRight: "1rem" }}
        >
            <a href="#" className="px-2 text-[#f5f5f5]/85 text-sm font-semibold transition hover:text-[#f5f5f5]">
              Help
            </a>
            <a href="#" className="px-2 text-[#f5f5f5]/85 text-sm font-semibold transition hover:text-[#f5f5f5]">
              Log in
            </a>
            <a
              href="#features"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow-md shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Sign up
            </a>
          </div>
        </header>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-10 text-center sm:px-8 lg:px-12">
        <div className="mt-8 w-full overflow-x-auto rounded-[30px] bg-[#f3f5f8] p-3 shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
          <div className="inline-flex min-w-[980px] items-center gap-3">
            <div className="flex min-h-[68px] flex-1 items-center gap-3 rounded-[22px] border border-[#b4c0cc] bg-white px-4 py-3 text-left shadow-inner">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5f6f82] text-white">
                <span className="text-lg">📍</span>
              </div>
              <div className="flex flex-1 items-center gap-3">
                <div className="flex-1 leading-tight">
                  <p className="text-[13px] font-semibold text-[#5f6f82]">City or neighborhood</p>
                  <p className="text-[15px] font-semibold text-[#354152]">Where do you want to hang?</p>
                </div>
                <div className="h-10 w-px bg-[#d6dde5]" />
                <div className="flex flex-col justify-center leading-tight text-left">
                  <p className="text-[13px] font-semibold text-[#5f6f82]">Within</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[15px] font-semibold text-[#354152]">30 minutes</p>
                    <span className="text-[#5f6f82]">▾</span>
                  </div>
                </div>
              </div>
            </div>

            {vibeChips.map((chip) => (
              <button
                key={chip}
                className="flex min-h-[62px] min-w-[130px] items-center justify-center rounded-[20px] bg-white px-5 text-base font-semibold text-[#5f6f82] shadow-sm transition hover:-translate-y-0.5 hover:shadow"
              >
                {chip}
              </button>
            ))}

            <a
              href="#features"
              className="flex min-h-[68px] items-center justify-center rounded-[22px] bg-[#FF385C] px-7 text-base font-semibold text-white shadow-lg shadow-[#FF385C]/30 transition hover:-translate-y-0.5 hover:bg-[#e23350]"
            >
              Search
            </a>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/80">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#FF385C]">
            •
          </span>
          <span>More filters for vibe, accessibility, and pace</span>
        </div>
      </div>
    </section>
  );
}
