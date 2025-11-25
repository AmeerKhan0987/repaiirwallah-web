import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAc from "@/assets/hero-ac.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,217,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-orange-500 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-normal sm:tracking-wide md:tracking-wider px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full glass whitespace-nowrap">
                ❄️ Professional AC & Appliance Service
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">
                Professional AC Repair & Service in
              </span>{" "}
              <span className="text-orange-500">
                Vile Parle East
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Looking for reliable AC repair in Vile Parle East? RePaiRingWallaH offers expert AC service, AC gas refilling, AC installation, and home appliance repair across Mumbai. We serve Vile Parle, Santacruz, Andheri, Bandra, and nearby areas with fast 24-48 hour service. Our certified technicians provide transparent pricing and 100% customer satisfaction. Call 8104609070 for same-day AC repair service near you.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="gradient-accent shadow-glow hover:scale-105 transition-transform"
                onClick={scrollToBooking}
              >
                Book Service Now
              </Button>
              <a href="tel:8104609070">
                <Button size="lg" variant="outline" className="gap-2 hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                  Call: 8104609070
                </Button>
              </a>
              <a href="https://wa.me/918104609070" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24-48hr</div>
                <div className="text-sm text-muted-foreground">Fast Service</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroAc} 
              alt="Professional AC Repair and Service in Vile Parle East Mumbai - Expert AC Technician Installing Air Conditioner" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
