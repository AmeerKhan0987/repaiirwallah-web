import { Shield, Clock, Award, Users } from "lucide-react";
import { useRef } from "react";
import { ParticleCard } from "@/components/animations/ParticleCard";
import { GlobalSpotlight } from "@/components/animations/GlobalSpotlight";

const features = [
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden charges. Clear pricing before we start the work."
  },
  {
    icon: Users,
    title: "Trained Technicians",
    description: "Certified professionals with years of hands-on experience."
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "24-48 hour response time for all service requests."
  },
  {
    icon: Award,
    title: "100% Satisfaction",
    description: "Quality work guaranteed with customer satisfaction promise."
  }
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.05),transparent_50%)]" />
      <GlobalSpotlight sectionRef={sectionRef} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg">
              At <span className="font-semibold text-foreground">RePaiRingWallaH</span>, we bring over a decade of experience in AC repair 
              and home appliance servicing to Vile Parle East and surrounding areas. Our mission is to provide fast, 
              reliable, and affordable solutions for all your home appliance needs.
            </p>
            <p className="text-muted-foreground">
              We understand the importance of a comfortable home environment, especially in Mumbai's climate. 
              That's why we're committed to delivering prompt, professional service with a smile. Our team of 
              certified technicians uses modern tools and genuine parts to ensure long-lasting repairs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ParticleCard
                  key={index}
                  className="glass rounded-xl p-6 transition-all duration-300 border-glow-card"
                  particleCount={6}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </ParticleCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
