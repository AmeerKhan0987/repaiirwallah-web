import { 
  Wind, 
  Sparkles, 
  Download, 
  Droplets, 
  FileCheck, 
  RefrigeratorIcon,
  WashingMachine,
  MicrowaveIcon,
  AirVent,
  Tv,
  Flame,
  Snowflake,
  Wind as Dryer,
  UtensilsCrossed,
  CookingPot,
  Package
} from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "AC Repair & Service",
    description: "Expert AC repair service for all brands. Fast air conditioning repair near you."
  },
  {
    icon: Sparkles,
    title: "AC Deep Cleaning Service",
    description: "Professional AC cleaning service to improve cooling efficiency and air quality."
  },
  {
    icon: Download,
    title: "AC Installation & Uninstallation",
    description: "Expert AC installation service and safe removal with proper care."
  },
  {
    icon: Droplets,
    title: "AC Gas Refilling",
    description: "Certified gas refilling service for optimal air conditioner performance."
  },
  {
    icon: FileCheck,
    title: "Annual Maintenance Contract (AMC)",
    description: "Comprehensive AMC plans for hassle-free year-round AC service and maintenance."
  },
  {
    icon: RefrigeratorIcon,
    title: "Refrigerator Repair",
    description: "Fast and reliable fridge repair service for all cooling issues and brands."
  },
  {
    icon: Snowflake,
    title: "Freezer Repair",
    description: "Expert freezer repair service for all types of cooling units."
  },
  {
    icon: Package,
    title: "Mini Refrigerator Repair",
    description: "Specialized mini fridge repair service for compact cooling units."
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    description: "Complete washer repair service for all brands and models."
  },
  {
    icon: Dryer,
    title: "Dryer Repair",
    description: "Professional dryer repair service with fast turnaround time."
  },
  {
    icon: MicrowaveIcon,
    title: "Microwave Oven Repair",
    description: "Expert microwave repair service with genuine parts replacement."
  },
  {
    icon: CookingPot,
    title: "Oven Repair",
    description: "Complete oven repair service for all makes and models."
  },
  {
    icon: AirVent,
    title: "Chimney Service & Repair",
    description: "Professional chimney cleaning and repair service in Mumbai for optimal performance."
  },
  {
    icon: UtensilsCrossed,
    title: "Dishwasher Repair",
    description: "Expert dishwasher repair service for all brands and issues."
  },
  {
    icon: Tv,
    title: "TV Repair",
    description: "Screen, sound, and component repair service for all TV brands."
  },
  {
    icon: Flame,
    title: "Geyser Repair",
    description: "Quick water heater and geyser repair service with element replacement."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Complete Home Appliance Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From AC repairs to washing machines, we service all your home appliances with expertise and care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:scale-105 hover:shadow-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
