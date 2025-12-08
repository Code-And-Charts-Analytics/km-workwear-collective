import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "KINZAMAX transformed our company image. The quality of KM workwear is exceptional, and our team takes pride in wearing their uniforms every day. Best pricing in the market!",
      author: "Abdullah Al-Rashid",
      role: "Operations Director",
      company: "Al-Faisal Industries",
      rating: 5,
    },
    {
      quote: "From order to delivery, the KM team was professional and efficient. The custom embroidery looks fantastic, and the durability is unmatched. Their free consultation really helped us decide.",
      author: "Priya Sharma",
      role: "HR Manager",
      company: "Gulf Logistics Group",
      rating: 5,
    },
    {
      quote: "We've tried many uniform suppliers, but KINZAMAX stands above the rest. The KM quality guarantee is real, and their customer service is outstanding. Highly recommend!",
      author: "Rizky Pratama",
      role: "Facility Manager",
      company: "Jeddah Healthcare Center",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-card">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 p-3 rounded-full 
                       bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 p-3 rounded-full 
                       bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Testimonial Card */}
            <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
              {/* Large Quote Mark */}
              <div className="absolute top-4 left-8 font-display text-9xl text-primary/10 leading-none">"</div>
              
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 relative z-10">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-display text-lg text-primary">
                    {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{testimonials[activeIndex].author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center ml-4">
                  <span className="font-display text-sm text-primary">KM</span>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 h-2 bg-primary rounded-full' 
                      : 'w-2 h-2 bg-muted rounded-full hover:bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
