import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the minimum order quantity for custom uniforms?',
      answer: 'Our minimum order for custom-branded uniforms is 12 pieces per style. This ensures cost-effective production while maintaining our high KM quality standards.',
    },
    {
      question: 'How long does customization take?',
      answer: 'Standard customization orders take 2-3 weeks from design approval. Rush orders can be accommodated for an additional fee. We provide detailed timelines during the consultation.',
    },
    {
      question: 'What branding options are available?',
      answer: 'We offer high-quality embroidery, screen printing, and heat transfer options. Our team will recommend the best method based on your design, fabric, and budget.',
    },
    {
      question: 'Do you offer free shipping?',
      answer: 'Yes! We offer free shipping on orders over $500 within the GCC region. For international orders, we provide competitive shipping rates.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We stand behind our quality. If you\'re not satisfied with your order, contact us within 14 days for returns or exchanges. Custom-branded items may have different terms.',
    },
    {
      question: 'Can I order samples before placing a bulk order?',
      answer: 'Absolutely! We offer sample kits for approved accounts. This allows you to evaluate fabric quality, fit, and colors before committing to a bulk order.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            FAQ
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            COMMON QUESTIONS
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
