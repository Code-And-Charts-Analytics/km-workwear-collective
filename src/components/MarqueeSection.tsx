const MarqueeSection = () => {
  const items = [
    'PREMIUM QUALITY',
    'CUSTOM BRANDING',
    'BULK ORDERS',
    'FAST DELIVERY',
    '100% SATISFACTION',
    'KM CERTIFIED',
    'DURABLE FABRICS',
    'PROFESSIONAL FIT',
  ];

  return (
    <section className="py-6 bg-primary overflow-hidden">
      <div className="relative">
        <div className="flex marquee">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-8 mx-8 shrink-0">
              <span className="font-display text-xl md:text-2xl text-primary-foreground tracking-wider whitespace-nowrap">
                {item}
              </span>
              <div className="w-2 h-2 rounded-full bg-primary-foreground/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
