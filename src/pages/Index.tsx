import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import CategorySection from '@/components/CategorySection';
import CatalogSection from '@/components/CatalogSection';
import FeaturesBreak from '@/components/FeaturesBreak';
import IndustriesSection from '@/components/IndustriesSection';
import CustomizationSection from '@/components/CustomizationSection';
import BreakSection from '@/components/BreakSection';
import StatsSection from '@/components/StatsSection';
import QualitySection from '@/components/QualitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import HeritageSection from '@/components/HeritageSection';
import FAQSection from '@/components/FAQSection';
import QuoteFormSection from '@/components/QuoteFormSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <CategorySection />
      <FeaturesBreak />
      <CatalogSection />
      <IndustriesSection />
      <CustomizationSection />
      <BreakSection />
      <StatsSection />
      <QualitySection />
      <TestimonialsSection />
      <CTASection />
      <HeritageSection />
      <FAQSection />
      <QuoteFormSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
