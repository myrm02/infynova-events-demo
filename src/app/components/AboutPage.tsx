interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="bg-[#F9F5EF] min-h-screen">

      {/* ── HERO IMAGE ── */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1564844336080-c1a2a9b149a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
          alt="Two people hiking in the Pacific Northwest mountains"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1A1410]/25" />
      </section>

      {/* ── STORY ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-24 py-20 md:py-28">
        <div className="max-w-2xl mx-auto md:mx-0 md:ml-auto">
          <h1
            className="text-[#1A1410] mb-10"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              lineHeight: 1.15,
            }}
          >
            Where The Wild Things Wed
          </h1>

          <div
            className="text-[#1A1410]/75 space-y-6 leading-relaxed"
            style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.95rem' }}
          >
            <p>
              We met at an art walk in Seattle, literally bumping into each other.
              We started hiking together, a lot. We both love the PNW, the
              mountains, the coast, everything. We'd be out on trails, just
              hanging out, talking around a fire. It clicked. We were on the same
              wavelength. One time, we were hiking and I complained about my boots
              and Jenny just stopped and started tying my laces for me. That's when
              I knew. It wasn't some grand gesture. It was just...us.
            </p>
            <p>
              We've built a life together. It's chill, it's real. We love low-key
              adventures, but also appreciate good wine with friends. From those
              first hikes to figuring out life together under countless starry
              skies, we've always found our best moments in the wild.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVIDER LINE ── */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-24">
        <div className="border-t border-[#1A1410]/15" />
      </div>

      {/* ── CLOSING + CTA ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-24 py-20 md:py-28">
        <div className="max-w-2xl mx-auto md:mx-0 md:ml-auto">
          <p
            className="text-[#1A1410]/75 mb-3 leading-relaxed"
            style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.95rem' }}
          >
            It feels right to celebrate surrounded by the people who get us.
            We're stoked to start this next chapter with you.
          </p>
          <p
            className="text-[#1A1410] mb-14"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.1rem',
            }}
          >
            Onward and upward to the next adventure!
          </p>

          <button
            onClick={() => onNavigate("contact")}
            className="border border-[#1A1410] text-[#1A1410] text-xs tracking-[0.18em] px-8 py-3.5 hover:bg-[#1A1410] hover:text-[#F9F5EF] transition-colors"
          >
            CONTACT US
          </button>
        </div>
      </section>

    </div>
  );
}
