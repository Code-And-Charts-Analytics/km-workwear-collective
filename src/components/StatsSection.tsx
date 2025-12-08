import { useEffect, useState, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 10, suffix: '+', label: 'Years of Excellence' },
    { value: 150, suffix: '+', label: 'Corporate Partners' },
    { value: 50, suffix: 'K+', label: 'Uniforms Delivered' },
    { value: 12, suffix: '+', label: 'Countries Served' },
    { value: 98, suffix: '%', label: 'Customer Satisfaction' },
    { value: 24, suffix: '/7', label: 'Support Available' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-card">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%), linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="font-display text-3xl text-primary">KM</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            NUMBERS THAT SPEAK
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card p-6 h-full">
                <div className="font-display text-4xl md:text-5xl text-foreground group-hover:text-primary transition-colors">
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    isVisible={isVisible} 
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-12 h-12 rounded border border-border flex items-center justify-center">
              <span className="text-xs font-bold">ISO</span>
            </div>
            <span className="text-sm">ISO 9001 Certified</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-12 h-12 rounded border border-primary/30 bg-primary/10 flex items-center justify-center">
              <span className="font-display text-lg text-primary">KM</span>
            </div>
            <span className="text-sm">100% Quality Inspected</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// CountUp Component
const CountUp = ({ end, suffix, isVisible }: { end: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return <>{count}{suffix}</>;
};

export default StatsSection;
