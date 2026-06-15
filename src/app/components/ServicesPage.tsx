interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    title: "Weddings",
    desc: "From intimate ceremonies to grand celebrations, we craft weddings that are a true reflection of your story — beautiful, personal, and unforgettable.",
    img: "https://images.unsplash.com/photo-1705591929278-8f4a5cd76484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Galas & Corporate",
    desc: "Award ceremonies, product launches, and corporate dinners elevated through meticulous design, seamless logistics, and signature hospitality.",
    img: "https://images.unsplash.com/photo-1675247488725-22d1b78e75db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Private Celebrations",
    desc: "Birthdays, anniversaries, and milestone gatherings transformed into extraordinary moments, tailored to your vision and style.",
    img: "https://images.unsplash.com/photo-1764255510960-deee566a91f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Festivals & Outdoor",
    desc: "Large-scale festivals and open-air events curated with creativity and precision — from concept to the final note.",
    img: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="bg-[#F9F5EF] min-h-screen">
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
          SERVICES
        </h1>
        <div className="mt-6 border-t border-[#1A1410]/15" />
      </section>

      <section className="max-w-[1400px] mx-auto px-8 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-[#1A1410]/15">
          {services.map((s) => (
            <div key={s.title} className="border-b border-r border-[#1A1410]/15 group">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3
                  className="text-[#1A1410] mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.6rem' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[#1A1410]/65 leading-relaxed"
                  style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.9rem' }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1410] py-20 px-8 text-center">
        <p
          className="text-[#F9F5EF]/70 max-w-md mx-auto mb-10 italic"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.3rem' }}
        >
          Ready to begin your story?
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
