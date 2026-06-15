interface HomePageProps {
  onNavigate: (page: string) => void;
}

const tiles = [
  {
    label: "SERVICES",
    page: "services",
    img: "https://images.unsplash.com/photo-1675247488725-22d1b78e75db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Elegant event table setting with chandeliers",
  },
  {
    label: "GLIMPSE",
    page: "glimpse",
    img: "https://images.unsplash.com/photo-1646345533510-5d23b6b730d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Château de Beaumont Loire Valley",
  },
  {
    label: "CONTACT",
    page: "contact",
    img: "https://images.unsplash.com/photo-1564420179789-ede909db4882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Paris city view",
  },
  {
    label: "OPTIONS",
    page: "services",
    img: "https://images.unsplash.com/photo-1764255510960-deee566a91f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "People dining at elegant event",
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-[#F9F5EF]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1660673507748-6b66c15cb96d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
          alt="Elegant garden estate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* soft dark veil at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/60 via-[#1A1410]/10 to-transparent" />

        <div className="relative px-8 md:px-16 pb-16 md:pb-24">
          <h1
            className="text-[#F9F5EF] leading-none mb-6"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              letterSpacing: '-0.01em',
            }}
          >
            Infinite STORIES
          </h1>
          <p
            className="text-[#F9F5EF]/80 max-w-md leading-relaxed"
            style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.95rem' }}
          >
            With love and gratitude, we invite you to share in the joy of
            our brightful events.
          </p>
        </div>
      </section>

      {/* ── TAGLINE ── */}
      <section className="bg-[#F9F5EF] py-16 px-8 md:px-16 border-b border-[#1A1410]/10">
        <p
          className="text-[#1A1410] max-w-2xl leading-relaxed"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontStyle: 'italic' }}
        >
          Enjoy every second, minutes and hours of your journey through
          tailored packages and services
        </p>
      </section>

      {/* ── TILE GRID ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {tiles.map((tile) => (
          <button
            key={tile.label}
            onClick={() => onNavigate(tile.page)}
            className="relative group overflow-hidden aspect-square md:aspect-auto md:h-[42vw] max-md:h-[80vw] focus:outline-none"
          >
            <img
              src={tile.img}
              alt={tile.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#1A1410]/30 group-hover:bg-[#1A1410]/45 transition-colors duration-300" />
            <span
              className="absolute inset-0 flex items-center justify-center text-[#F9F5EF] tracking-[0.25em]"
              style={{ fontFamily: 'Jost', fontWeight: 400, fontSize: '0.8rem' }}
            >
              {tile.label}
            </span>
          </button>
        ))}
      </section>

    </div>
  );
}
