import { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    const whatsappMessage = `Hi! I need service for:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918104609070?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Redirecting to WhatsApp...");
    
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.08),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Book Your Service Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form below or reach us directly via phone, email, or WhatsApp.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 animate-slide-in-left">
            <div className="glass rounded-xl p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Service Needed *"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Additional Details (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full gradient-accent shadow-glow gap-2">
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:8104609070" className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call Us</div>
                    <div className="font-semibold">8104609070</div>
                  </div>
                </a>
                
                <a href="mailto:repairingwallah57@gmail.com" className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="font-semibold">repairingwallah57@gmail.com</div>
                  </div>
                </a>
                
                <a href="https://wa.me/918104609070" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                    <div className="font-semibold">Quick Response</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a href="tel:8104609070">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Call for Emergency Service
                  </Button>
                </a>
                <a href="https://wa.me/918104609070" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2 gradient-accent">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
