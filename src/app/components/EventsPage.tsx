interface EventsPageProps {
  onNavigate: (page: string) => void;
}

const events = [
  {
    id: 1,
    title: "The Beaumont Wedding",
    date: "June 21st, 2025",
    location: "Château de Beaumont, Loire Valley, France",
    img: "https://images.unsplash.com/photo-1646345533510-5d23b6b730d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    alt: "Château de Beaumont Loire Valley",
    align: "left" as const,
  },
  {
    id: 2,
    title: "Sophia's 30th Celebration",
    date: "May 17th, 2025",
    location: "The Skyline Rooftop, Paris, France",
    img: "https://images.unsplash.com/photo-1564420179789-ede909db4882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    alt: "Paris rooftop city view",
    align: "right" as const,
  },
  {
    id: 3,
    title: "Excellence Awards Gala",
    date: "November 22nd, 2025",
    location: "Palais des Lumières, Paris, France",
    img: "https://images.unsplash.com/photo-1675247488725-22d1b78e75db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    alt: "Elegant gala hall with chandeliers",
    align: "left" as const,
  },
  {
    id: 4,
    title: "AGENTOS Product Launch",
    date: "October 8th, 2025",
    location: "The Regency Hotel, London, England",
    img: "https://rcs-campaign-media.s3.eu-west-3.amazonaws.com/Infynova/Infobip+France+20y.png",
    alt: "Product launch presentation stage",
    align: "right" as const,
  },
  {
    id: 5,
    title: "Nova Sound Festival",
    date: "August 22–24th, 2025",
    location: "Emerald Fields, Brussels, Belgium",
    img: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    alt: "Outdoor summer festival celebration",
    align: "left" as const,
  },
];

export function EventsPage({ onNavigate }: EventsPageProps) {
  return (
    <div className="bg-[#F9F5EF] min-h-screen">

      {/* ── PAGE TITLE ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 pt-28 pb-16">
        <h1
          className="text-[#1A1410]"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            letterSpacing: '0.06em',
          }}
        >
          PAST EVENTS
        </h1>
        <div className="mt-6 border-t border-[#1A1410]/15" />
      </section>

      {/* ── EVENT LIST ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 pb-20 space-y-0">
        {events.map((event, idx) => (
          <div
            key={event.id}
            className={`
              flex flex-col md:flex-row gap-0 border-b border-[#1A1410]/15
              ${event.align === "right" ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 overflow-hidden aspect-[4/3] md:aspect-[3/2]">
              <img
                src={event.img}
                alt={event.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text */}
            <div
              className={`
                w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 md:py-16
                ${event.align === "right" ? "items-start md:items-end text-left md:text-right" : "items-start"}
              `}
            >
              <span
                className="text-[#1A1410]/40 mb-3 tracking-widest"
                style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.7rem' }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h2
                className="text-[#1A1410] mb-4"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  lineHeight: 1.2,
                }}
              >
                {event.title}
              </h2>
              <p
                className="text-[#1A1410]/60 mb-1"
                style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.85rem' }}
              >
                {event.date}
              </p>
              <p
                className="text-[#1A1410]/50"
                style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.02em' }}
              >
                {event.location}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A1410] py-20 px-8 md:px-16 text-center">
        <p
          className="text-[#F9F5EF]/80 max-w-lg mx-auto mb-10 leading-relaxed"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          }}
        >
          Every unforgettable event begins with a vision. Share yours with us,
          and let's create an experience that shines long after the last guest
          leaves.
        </p>
        <button
          onClick={() => onNavigate("contact")}
          className="border border-[#F9F5EF]/60 text-[#F9F5EF] text-xs tracking-[0.18em] px-8 py-3.5 hover:bg-[#F9F5EF] hover:text-[#1A1410] transition-colors"
        >
          CONTACT US
        </button>
      </section>

    </div>
  );
}
