import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    'Work Shirts',
    'Work Pants',
    'Outerwear',
    'Safety Wear',
    'Medical Uniforms',
  ];

  const industryLinks = [
    'Healthcare',
    'Hospitality',
    'Construction',
    'Automotive',
    'Retail',
  ];

  const companyLinks = [
    'About Us',
    'Our Quality',
    'Customization',
    'FAQ',
    'Contact',
  ];

  const supportLinks = [
    'Get a Quote',
    'Size Guide',
    'Bulk Orders',
    'Custom Branding',
    'WhatsApp',
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                <span className="font-display text-2xl text-primary-foreground">KM</span>
              </div>
              <span className="font-display text-2xl tracking-widest text-foreground">KINZAMAX</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Premium corporate uniforms engineered for performance. From India to Saudi Arabia, 
              serving you with quality since 1977.
            </p>
            <a href="tel:+966573128127" className="text-primary font-semibold hover:underline">
              Call: +966 57 312 8127
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center 
                           hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Industries</h4>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link}>
                  <a href="#industries" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Visit Us</p>
              <p className="text-muted-foreground text-sm">Jeddah, Kingdom of Saudi Arabia</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Call Us</p>
              <p className="text-muted-foreground text-sm">Sales: +966 57 312 8127</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Email Us</p>
              <p className="text-muted-foreground text-sm">info@kinzamax.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Business Hours</p>
              <p className="text-muted-foreground text-sm">Sat-Thu: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 KINZAMAX. All rights reserved. The KM logo is a registered trademark.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
