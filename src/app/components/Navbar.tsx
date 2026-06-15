import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { label: "ABOUT US", page: "about" },
  { label: "SERVICES", page: "services" },
  { label: "GLIMPSE", page: "glimpse" },
  { label: "CONTACT", page: "contact" },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F5EF]/95 backdrop-blur-sm border-b border-[#1A1410]/10">
        <div className="max-w-[1400px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => { onNavigate("home"); setMobileOpen(false); }}
            className="font-['Cormorant_Garamond'] text-[#1A1410] tracking-wide hover:opacity-70 transition-opacity"
            style={{ fontSize: '1.15rem', fontWeight: 400, letterSpacing: '0.04em' }}
          >
            Infynova Events
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-xs tracking-[0.18em] transition-opacity ${
                  currentPage === link.page
                    ? "text-[#1A1410] opacity-100"
                    : "text-[#1A1410] opacity-50 hover:opacity-80"
                }`}
                style={{ fontFamily: 'Jost', fontWeight: 400 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-xs tracking-[0.18em] text-[#1A1410]"
            style={{ fontFamily: 'Jost', fontWeight: 400 }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F5EF] flex flex-col items-center justify-center gap-10 pt-[72px]">
          {[{ label: "HOME", page: "home" }, ...navLinks].map((link) => (
            <button
              key={link.page}
              onClick={() => { onNavigate(link.page); setMobileOpen(false); }}
              className={`text-sm tracking-[0.2em] transition-opacity ${
                currentPage === link.page ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
              style={{ fontFamily: 'Jost', fontWeight: 400, color: '#1A1410' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
