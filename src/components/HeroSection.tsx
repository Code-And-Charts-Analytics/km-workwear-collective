import { ArrowRight, Award, Users, Headphones, ShieldCheck } from 'lucide-react';
import heroWorkersBg from '@/assets/hero-workers-bg.jpg';

const HeroSection = () => {
  const stats = [
    { value: '47+', label: 'Years Heritage', icon: Award },
    { value: '100+', label: 'Orders in Jeddah', icon: Users },
    { value: 'FREE', label: 'Consultation', icon: Headphones },
    { value: '100%', label: 'Quality Guaranteed', icon: ShieldCheck },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Workers */}
      <div className="absolute inset-0">
        <img 
          src={heroWorkersBg} 
          alt="Professional workers in KINZAMAX uniforms" 
          className="w-full h-full object-cover object-bottom"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 animate-fade-in-up">
            <span className="text-xs sm:text-sm text-muted-foreground">Family Business Since 1977</span>
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm text-primary font-medium hidden sm:inline">Based in Jeddah, KSA</span>
          </div>

          {/* Small Title */}
          <p className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            PROFESSIONAL
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            WORKWEAR
            <br />
            <span className="text-gradient-gold">REDEFINED</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Premium corporate uniforms engineered for performance, designed for distinction. 
            Every stitch tells your brand story with the iconic KM quality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            <a href="#catalog" className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center">
              View Catalog
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#quote" className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center">
              Get Custom Quote
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8 animate-fade-in-up px-2" style={{ animationDelay: '0.5s' }}>
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="glass-card p-4 sm:p-6 text-center group cursor-default"
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2 sm:mb-3 transition-transform group-hover:scale-110" />
                <div className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle hidden sm:block">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
