import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Vile Parle East, Vile Parle West, Santacruz East, Andheri East, Navpada, and Kurla. We also cover nearby areas in Mumbai. Call us to check if we service your location."
  },
  {
    question: "How quickly can you respond to service calls?",
    answer: "We typically respond within 24-48 hours for standard service requests. For emergency AC repairs during summer, we prioritize and aim for same-day service whenever possible."
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Yes, we provide warranty on both parts and labor. The warranty period depends on the type of repair and parts used. We'll inform you about the warranty terms before starting the work."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI, Google Pay, PhonePe, Paytm, and bank transfers. Payment is typically collected after the service is completed to your satisfaction."
  },
  {
    question: "Do I need to be present during the service?",
    answer: "Yes, it's recommended that someone is present during the service. Our technician will need access to the appliance and may need to discuss findings or get approvals for additional work."
  },
  {
    question: "What brands of AC do you service?",
    answer: "We service all major AC brands including LG, Samsung, Voltas, Daikin, Hitachi, Blue Star, Carrier, Godrej, Whirlpool, and more. Our technicians are trained to handle all types and models."
  },
  {
    question: "How often should I service my AC?",
    answer: "We recommend servicing your AC at least twice a year - before and after summer. Regular maintenance ensures optimal performance, better cooling, lower electricity bills, and extends the life of your AC."
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer: "Yes, we offer comprehensive AMC plans that include regular servicing, priority response, discounted repairs, and free inspections. It's the most cost-effective way to maintain your appliances."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our AC repair and appliance services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
