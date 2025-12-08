import { useState } from 'react';
import { ArrowRight, ChefHat, Heart, HardHat, ShoppingBag, Wrench, Package } from 'lucide-react';

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    { name: 'Hospitality', desc: 'Chef & hotel uniforms', fullDesc: 'Premium KM quality uniforms built for hospitality professionals.', icon: ChefHat },
    { name: 'Healthcare', desc: 'Medical scrubs & coats', fullDesc: 'Comfortable, functional medical wear designed for long shifts.', icon: Heart },
    { name: 'Construction', desc: 'Safety wear & hi-vis', fullDesc: 'High-visibility and protective workwear for construction sites.', icon: HardHat },
    { name: 'Retail', desc: 'Corporate & sales attire', fullDesc: 'Professional uniforms that represent your brand perfectly.', icon: ShoppingBag },
    { name: 'Automotive', desc: 'Mechanic coveralls', fullDesc: 'Durable, oil-resistant workwear for automotive professionals.', icon: Wrench },
    { name: 'Logistics', desc: 'Warehouse workwear', fullDesc: 'Practical, comfortable uniforms for warehouse operations.', icon: Package },
  ];

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/30 via-background to-charcoal-light/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Who We Serve
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
              INDUSTRIES WE SERVE
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md mt-6 lg:mt-0">
            One brand, every industry. KM workwear delivers tailored solutions designed for your unique professional demands.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              onMouseEnter={() => setActiveIndustry(index)}
              className={`premium-card p-8 cursor-pointer transition-all duration-500 ${
                activeIndustry === index ? 'border-primary/50 shadow-[var(--shadow-gold)]' : ''
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                activeIndustry === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                <industry.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {industry.desc}
              </p>
              
              {/* Expanded Content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                activeIndustry === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                  {industry.fullDesc}
                </p>
              </div>

              {/* KM Badge */}
              <div className="mt-6 flex items-center justify-between">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                  <span className="font-display text-sm text-primary">KM</span>
                </div>
                <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                  activeIndustry === index ? 'text-primary translate-x-0 opacity-100' : 'text-muted-foreground -translate-x-2 opacity-0'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="glass-card p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="text-muted-foreground uppercase tracking-wider text-sm mb-2">
                TRUSTED BY 100+ BUSINESSES
              </p>
              <p className="text-foreground">
                From small teams to enterprise corporations across the GCC, KM workwear delivers excellence in every stitch.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="font-display text-4xl text-primary">6+</span>
                <p className="text-sm text-muted-foreground">Industries</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-display text-4xl text-primary">45+</span>
                <p className="text-sm text-muted-foreground">Years</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-display text-4xl text-primary">100+</span>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#quote" className="btn-primary">
                Get Your Quote
              </a>
              <a href="#catalog" className="btn-outline">
                View Catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
