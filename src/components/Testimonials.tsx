import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Vile Parle East",
    rating: 5,
    text: "Excellent service! My AC was not cooling properly, and they fixed it within 2 hours. Very professional and affordable."
  },
  {
    name: "Priya Sharma",
    location: "Navpada",
    rating: 5,
    text: "Best AC repair service in the area. Technician was punctual, polite, and did a thorough job. Highly recommended!"
  },
  {
    name: "Amit Patel",
    location: "Santacruz East",
    rating: 5,
    text: "Called them for washing machine repair. Quick response and fixed the issue same day. Great work!"
  },
  {
    name: "Neha Desai",
    location: "Vile Parle",
    rating: 5,
    text: "Transparent pricing and quality work. They serviced my refrigerator and it's working like new. Thank you!"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,217,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Vile Parle East.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
