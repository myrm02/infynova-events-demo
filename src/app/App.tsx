import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { RegistrySection } from "./components/RegistrySection";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { EventsPage } from "./components/EventsPage";
import { ContactPage } from "./components/ContactPage";
import { ServicesPage } from "./components/ServicesPage";

const PAGES_WITH_REGISTRY = ["home", "glimpse", "contact", "services"];

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":     return <HomePage onNavigate={handleNavigate} />;
      case "about":    return <AboutPage onNavigate={handleNavigate} />;
      case "glimpse":  return <EventsPage onNavigate={handleNavigate} />;
      case "contact":  return <ContactPage />;
      case "services": return <ServicesPage onNavigate={handleNavigate} />;
      default:         return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F5EF]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      {PAGES_WITH_REGISTRY.includes(currentPage) && <RegistrySection />}
      <Footer />
    </div>
  );
}
