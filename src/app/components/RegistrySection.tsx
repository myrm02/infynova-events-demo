export function RegistrySection() {
  return (
    <section className="bg-[#EDE8DF] py-16 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 max-w-xl">
          <h3 className="font-['Cormorant_Garamond'] text-[#1A1410] mb-4" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
            REGISTRY
          </h3>
          <p className="text-[#1A1410]/70 text-sm leading-relaxed" style={{ fontFamily: 'Jost', fontWeight: 300 }}>
            Your presence is the most cherished gift. Should you wish to contribute,
            we've created a honeymoon registry to help us embark on a memorable
            adventure to the Infinite trip.
          </p>
        </div>
        <div className="shrink-0">
          <button className="border border-[#1A1410] text-[#1A1410] text-xs tracking-[0.18em] px-8 py-3.5 hover:bg-[#1A1410] hover:text-[#F9F5EF] transition-colors">
            GO TO REGISTRY
          </button>
        </div>
      </div>
    </section>
  );
}
