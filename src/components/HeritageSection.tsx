const HeritageSection = () => {
  const timeline = [
    { year: '1977', title: 'Founded in India', desc: 'Started as a family clothing manufacturing business with a focus on quality craftsmanship.' },
    { year: '2015', title: 'Moved to KSA', desc: 'Brought our expertise to Jeddah, Saudi Arabia, starting with personal connections and determination.' },
    { year: 'Today', title: '100+ Orders in Jeddah', desc: 'Leading the market in efficiency and pricing with our own manufacturing facility.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              FROM INDIA TO
              <br />
              <span className="text-gradient-gold">SAUDI ARABIA</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                Our journey began in India in 1977 as a family clothing manufacturing business. 
                With decades of experience in the textile industry, we built a reputation for 
                quality craftsmanship passed down through generations.
              </p>
              <p>
                In 2015, we brought our expertise to Jeddah, Saudi Arabia, starting without a 
                store—just our skills, relationships, and determination. We began scoring deals 
                through personal connections and word-of-mouth recommendations.
              </p>
              <p>
                After establishing ourselves, we set up our own manufacturing facility right here 
                in Jeddah. Since then, we have fulfilled 100+ orders in Jeddah alone—both small 
                niche projects and large corporate contracts.
              </p>
              <p className="text-foreground font-medium">
                Today, we lead the market in efficiency and pricing. No one can match our rates 
                because we combine Indian manufacturing heritage with Saudi Arabian market understanding.
              </p>
            </div>

            {/* Consultation CTA */}
            <div className="mt-10 p-6 bg-card rounded-lg border border-border">
              <h3 className="font-display text-2xl text-foreground mb-2">FREE CONSULTATION</h3>
              <p className="text-muted-foreground mb-6">
                Book a face-to-face or online meeting with our designer to discuss exactly what 
                you want at the best market price. The bigger the order, the better the price!
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+966573128127" className="btn-primary">
                  Call Now
                </a>
                <a href="#quote" className="btn-outline">
                  Online Meeting
                </a>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="relative">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative pl-8 border-l-2 border-border">
                  {/* Dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                  
                  <div className="glass-card p-6">
                    <span className="font-display text-3xl text-primary">{item.year}</span>
                    <h4 className="font-display text-xl text-foreground mt-2 mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Family Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <p className="font-display text-xl">Family</p>
              <p className="text-sm opacity-80">Owned Since 1977</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
