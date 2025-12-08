import { Layers, Droplets, Flame, Wind, Leaf, Zap } from 'lucide-react';

const QualitySection = () => {
  const features = [
    { icon: Layers, title: 'Triple-Stitched Seams', desc: 'Built to last through daily wear' },
    { icon: Droplets, title: 'Stain Resistant', desc: 'Easy-clean fabric technology' },
    { icon: Flame, title: 'Fire Retardant Options', desc: 'FR-rated for safety compliance' },
    { icon: Wind, title: 'Breathable Fabrics', desc: 'All-day comfort guaranteed' },
    { icon: Leaf, title: 'Eco-Friendly Materials', desc: 'Sustainable manufacturing' },
    { icon: Zap, title: 'Anti-Static', desc: 'Safe for sensitive environments' },
  ];

  return (
    <section id="quality" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden relative">
              {/* Texture/Pattern Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                    <span className="font-display text-5xl text-primary">KM</span>
                  </div>
                  <p className="text-muted-foreground">Premium Quality Assured</p>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <p className="font-display text-3xl">100%</p>
              <p className="text-sm opacity-80">Quality Tested</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Built to Last
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              UNCOMPROMISING
              <br />
              <span className="text-gradient-gold">QUALITY</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Every KM garment undergoes rigorous quality testing. From fabric selection to final 
              inspection, we ensure your workwear performs flawlessly.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center 
                                shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
