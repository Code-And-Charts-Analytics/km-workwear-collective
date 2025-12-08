import { Truck, Shield, Award, Headphones } from 'lucide-react';

const FeaturesBreak = () => {
  const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $500' },
    { icon: Shield, title: 'Quality Guarantee', desc: '100% satisfaction' },
    { icon: Award, title: 'KM Certified', desc: 'Premium materials' },
    { icon: Headphones, title: '24/7 Support', desc: 'Always here to help' },
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0
                            group-hover:bg-primary transition-colors">
                <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{feature.title}</p>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBreak;
