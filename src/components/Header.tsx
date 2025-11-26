import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import GooeyNav from "@/components/GooeyNav";
import logo from "@/assets/logo.avif";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavigation = (href: string) => {
    const id = href.replace('#', '');
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center shadow-md">
              <img src={logo} alt="RePaiRingWallaH Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">RePaiRingWallaH</h1>
              <p className="text-xs text-muted-foreground">Expert AC & Appliance Service</p>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              onNavigate={handleNavigation}
            />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a href="tel:8104609070">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/918104609070" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 gradient-accent">
                <Mail className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass rounded-lg animate-fade-in">
            <nav className="flex flex-col gap-4 px-4">
              <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-secondary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-secondary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="text-left text-foreground hover:text-secondary transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-secondary transition-colors">
                Contact
              </button>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex justify-center pb-2">
                  <ThemeToggle />
                </div>
                <a href="tel:8104609070">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/918104609070" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full gap-2 gradient-accent">
                    <Mail className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
