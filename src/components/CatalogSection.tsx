import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import culinaryImg from '@/assets/catalog-culinary.jpg';
import healthcareImg from '@/assets/catalog-healthcare.jpg';
import manufacturingImg from '@/assets/catalog-manufacturing.jpg';
import securityImg from '@/assets/catalog-security.jpg';
import logisticsImg from '@/assets/catalog-logistics.jpg';
import executiveImg from '@/assets/catalog-executive.jpg';
import hospitalityImg from '@/assets/catalog-hospitality.jpg';
import retailImg from '@/assets/catalog-retail.jpg';
import workshirtsImg from '@/assets/catalog-workshirts.jpg';
import cargopantsImg from '@/assets/catalog-cargopants.jpg';
import safetyvestImg from '@/assets/catalog-safetyvest.jpg';
import workjacketImg from '@/assets/catalog-workjacket.jpg';

const CatalogSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const catalogItems = [
    { category: 'Culinary', title: 'Chef Uniforms', desc: 'Professional kitchen attire with heat-resistant fabrics', colors: 'White, Black, Grey', sizes: 'XS-5XL', image: culinaryImg },
    { category: 'Healthcare', title: 'Medical Scrubs', desc: 'Comfortable and functional medical wear', colors: 'Grey, Navy, Ceil Blue, Wine', sizes: 'XS-4XL', image: healthcareImg },
    { category: 'Manufacturing', title: 'Industrial Coveralls', desc: 'Full protection workwear for heavy industries', colors: 'Navy, Khaki, Orange, Grey', sizes: 'S-5XL', image: manufacturingImg },
    { category: 'Security', title: 'Security Uniforms', desc: 'Professional security officer attire', colors: 'Black, Navy, Grey', sizes: 'S-4XL', image: securityImg },
    { category: 'Logistics', title: 'Warehouse Wear', desc: 'Practical workwear for warehouse operations', colors: 'Hi-Vis Yellow, Hi-Vis Orange, Navy', sizes: 'S-5XL', image: logisticsImg },
    { category: 'Executive', title: 'Corporate Suits', desc: 'Premium business attire for executives', colors: 'Navy, Charcoal, Black', sizes: '36-56', image: executiveImg },
    { category: 'Hospitality', title: 'Housekeeping Uniforms', desc: 'Elegant uniforms for hospitality staff', colors: 'Burgundy, Black, Navy, Brown', sizes: 'XS-3XL', image: hospitalityImg },
    { category: 'Retail', title: 'Retail Staff Wear', desc: 'Brand-ready uniforms for retail teams', colors: 'Any Custom Color', sizes: 'XS-4XL', image: retailImg },
    { category: 'General', title: 'Work Shirts', desc: 'Durable everyday work shirts', colors: 'Navy, White, Blue, Grey', sizes: 'S-4XL', image: workshirtsImg },
    { category: 'General', title: 'Cargo Pants', desc: 'Multi-pocket cargo work pants', colors: 'Khaki, Navy, Black, Grey', sizes: '28-44', image: cargopantsImg },
    { category: 'Safety', title: 'Safety Vests', desc: 'High-visibility safety vests', colors: 'Hi-Vis Orange, Hi-Vis Yellow, Hi-Vis Green', sizes: 'S-5XL', image: safetyvestImg },
    { category: 'Outerwear', title: 'Work Jackets', desc: 'Durable industrial jackets', colors: 'Navy, Black, Grey, Khaki', sizes: 'S-4XL', image: workjacketImg },
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(catalogItems.length / itemsPerPage);
  const currentItems = catalogItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="catalog" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Full Collection
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            OUR CATALOG
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete range of professional workwear. All items available in multiple colors and sizes. 
            Contact us for custom pricing—bigger orders mean better rates!
          </p>
        </div>

        {/* Catalog Book */}
        <div className="relative max-w-6xl mx-auto">
          {/* Book Frame */}
          <div className="bg-card rounded-lg border border-border shadow-[var(--shadow-card)] overflow-hidden">
            {/* Book Spine Effect */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />
            
            {/* Pages */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
              {currentItems.map((item, index) => (
                <div 
                  key={`${item.title}-${index}`}
                  className="premium-card p-6 cursor-pointer group"
                >
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 rounded bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="font-display text-sm text-primary">KM</span>
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="h-40 bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.desc}
                  </p>

                  {/* Details */}
                  <div className="space-y-1 text-xs text-muted-foreground mb-4">
                    <p><span className="text-foreground">Colors:</span> {item.colors}</p>
                    <p><span className="text-foreground">Sizes:</span> {item.sizes}</p>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3 text-sm font-semibold text-primary border border-primary/30 rounded-lg 
                                   hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Request Pricing
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 p-6 border-t border-border">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 
                         disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentPage ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 
                         disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Custom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-card rounded-lg border border-border">
            <p className="text-muted-foreground">
              Looking for something specific? We offer custom uniform solutions tailored to your exact specifications.
            </p>
            <a href="#quote" className="btn-primary whitespace-nowrap">
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
