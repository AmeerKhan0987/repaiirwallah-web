import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Location</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Visit Us or We'll Come To You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Serving Vile Parle East and nearby areas with prompt on-site service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="glass rounded-xl p-8 space-y-6 animate-slide-in-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Address</h3>
                <p className="text-muted-foreground">
                  Pakhadi Cottage, Shop No. 6<br />
                  Nehru Road, Navpada<br />
                  Vile Parle East, Mumbai
                </p>
              </div>
            </div>
            
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-lg mb-3">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["Vile Parle East", "Vile Parle West", "Santacruz East", "Santacruz West", "Andheri East", "Bandra West", "Khar West", "Marol", "Kalina", "Lokhandwala", "Navpada", "Kurla"].map((area) => (
                  <span key={area} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-lg mb-3">Working Hours</h3>
              <p className="text-muted-foreground">
                Monday - Sunday<br />
                9:00 AM - 9:00 PM
              </p>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[500px] animate-slide-in-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.364095837436!2d72.8501!3d19.0975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sNehru%20Road%2C%20Navpada%2C%20Vile%20Parle%20East%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RePaiRingWallaH Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
