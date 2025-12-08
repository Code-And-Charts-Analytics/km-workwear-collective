import { Layers, Droplets, Flame } from 'lucide-react';

const BreakSection = () => {
  const features = [
    { icon: Layers, label: 'Triple-Stitched' },
    { icon: Droplets, label: 'Stain Resistant' },
    { icon: Flame, label: 'Fire Retardant' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-light via-card to-charcoal-light" />
      
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 0, transparent 50%)',
        backgroundSize: '10px 10px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            ENGINEERED FOR EXTREMES.
            <br />
            <span className="text-gradient-gold">TESTED IN THE GCC.</span>
          </h2>

          {/* Feature Icons */}
          <div className="flex items-center justify-center gap-8 md:gap-16 mt-10">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center
                              group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakSection;
