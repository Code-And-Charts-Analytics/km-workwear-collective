import { ArrowRight } from 'lucide-react';
import workShirtsImg from '@/assets/work-shirts-hero.jpg';
import workPantsImg from '@/assets/work-pants-hero.jpg';
import teamUniformsImg from '@/assets/team-uniforms-hero.jpg';

const CategorySection = () => {
  const categories = [
    {
      title: 'WORK SHIRTS',
      count: '50+',
      description: 'Professional button-ups & polos with KM embroidery',
      image: workShirtsImg,
    },
    {
      title: 'WORK PANTS',
      count: '35+',
      description: 'Durable cargo & dress pants for every industry',
      image: workPantsImg,
    },
    {
      title: 'TEAM UNIFORMS',
      count: 'Custom',
      description: 'Complete outfit solutions for your workforce',
      image: teamUniformsImg,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Shop by Category
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            BUILT FOR WORKERS
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From front office to factory floor, KINZAMAX delivers professional workwear 
            that performs as hard as you do.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className="premium-card group relative h-[450px] md:h-[500px] cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="bg-primary/20 backdrop-blur-sm text-primary text-sm font-semibold px-4 py-2 rounded-full border border-primary/30">
                    {category.count} Styles
                  </span>
                  <div className="w-12 h-12 rounded bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                    <span className="font-display text-lg text-primary">KM</span>
                  </div>
                </div>

                {/* Bottom */}
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <a 
                    href="#catalog"
                    className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                  >
                    Shop Now
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-2" />
                  </a>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-colors z-30 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
