import { Search, Wrench, CheckCircle, Handshake } from "lucide-react";
import { useRef } from "react";
import { ParticleCard } from "@/components/animations/ParticleCard";
import { GlobalSpotlight } from "@/components/animations/GlobalSpotlight";

const steps = [
  {
    icon: Search,
    title: "Inspection",
    description: "Thorough diagnosis of the issue with advanced tools"
  },
  {
    icon: Wrench,
    title: "Repair/Cleaning",
    description: "Expert repair or deep cleaning with quality parts"
  },
  {
    icon: CheckCircle,
    title: "Quality Check",
    description: "Rigorous testing to ensure perfect functionality"
  },
  {
    icon: Handshake,
    title: "Handover",
    description: "Final walkthrough and customer satisfaction confirmation"
  }
];

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <GlobalSpotlight sectionRef={sectionRef} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple, transparent 4-step process to get your appliances running smoothly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ParticleCard
                key={index}
                className="relative animate-fade-in border-glow-card"
                particleCount={10}
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary to-transparent" />
                )}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 shadow-glow transition-transform">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-secondary text-sm font-semibold mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </ParticleCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
