import { Palette, Upload, MapPin, Package, Check } from 'lucide-react';

const CustomizationSection = () => {
  const steps = [
    { num: '01', title: 'Choose Your Style', desc: 'Select from our premium workwear collection', icon: Palette },
    { num: '02', title: 'Upload Your Logo', desc: 'Send us your brand assets for KM customization', icon: Upload },
    { num: '03', title: 'Select Placement', desc: 'Choose embroidery or print locations', icon: MapPin },
    { num: '04', title: 'Receive & Wear', desc: 'Get your custom KM uniforms delivered', icon: Package },
  ];

  const features = [
    'High-quality embroidery',
    'Screen printing available',
    'Heat transfer options',
    'Minimum order: 12 pieces',
    'Fast turnaround time',
    'Free design consultation',
  ];

  return (
    <section id="customization" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Custom Branding
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              YOUR LOGO,
              <br />
              <span className="text-gradient-gold">OUR CRAFT</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Transform your team with custom-branded KM workwear. Professional embroidery and 
              printing services that make your brand stand out.
            </p>

            {/* Process Steps */}
            <div className="space-y-6 mb-10">
              {steps.map((step, index) => (
                <div 
                  key={step.num}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center 
                                shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <span className="font-display text-xl text-primary">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#quote" className="btn-primary inline-flex items-center gap-2">
              Start Customizing
            </a>
          </div>

          {/* Right Content - Features Card */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-primary/20 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-primary/10 rounded-full" />
            
            <div className="glass-card p-8 lg:p-12 relative">
              {/* Stats */}
              <div className="flex items-center gap-8 mb-8 pb-8 border-b border-border">
                <div className="text-center">
                  <span className="font-display text-5xl text-gradient-gold">10K+</span>
                  <p className="text-sm text-muted-foreground mt-1">Custom Orders Yearly</p>
                </div>
                <div className="w-px h-16 bg-border" />
                <div className="text-center">
                  <span className="font-display text-5xl text-gradient-gold">48hr</span>
                  <p className="text-sm text-muted-foreground mt-1">Design Approval</p>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* KM Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg pulse-glow">
                <span className="font-display text-xl text-primary-foreground">KM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;
