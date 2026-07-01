import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Linkedin, Heart, ShieldAlert, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const treatmentsList = [
    { name: "Dental Checkup", href: "#services" },
    { name: "Teeth Cleaning", href: "#services" },
    { name: "Root Canal Treatment", href: "#services" },
    { name: "Dental Implants", href: "#services" },
    { name: "Teeth Whitening", href: "#services" },
    { name: "Smile Makeover", href: "#services" },
  ];

  const quickLinks = [
    { name: "Home Desktop", href: "#hero" },
    { name: "About Reeva", href: "#about" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Patient reviews", href: "#reviews" },
    { name: "Clinic Gallery", href: "#gallery" },
    { name: "Booking Portal", href: "#booking" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-24 text-left text-white overflow-hidden">
      {/* Visual background decor element */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-sky-950/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Clinic Brand Bio (Spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sky-400 font-extrabold text-xl"></span>
              <span className="font-extrabold text-base tracking-wide uppercase">Reeva Dental Care</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              Creating healthy smiles with modern dental care. Experience premium surgical dental procedures utilizing digital laser diagnostics and high-hospitality patient standards in Surat, Gujarat.
            </p>
            {/* Social Icons with Glassmorphic circles */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-sky-500 hover:border-sky-500 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-90"
                    title={social.name}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Treatments Links (Spans 2.5 cols) */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="text-xs font-bold text-white/40 font-mono uppercase tracking-wider mb-4">Specialized Treatments</h4>
            <ul className="space-y-2 text-xs">
              {treatmentsList.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (Spans 2.5 cols) */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="text-xs font-bold text-white/40 font-mono uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Shortcuts & Timings (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-bold text-white/40 font-mono uppercase tracking-wider mb-4">Clinical Timing</h4>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="text-left">
                <span className="block font-bold text-white">Monday – Saturday</span>
                <span className="font-mono text-[11px] text-sky-400">9:00 AM – 1:00 PM</span>
                <span className="block font-mono text-[11px] text-sky-400">4:00 PM – 9:00 PM</span>
              </div>
              <div className="text-left">
                <span className="block font-bold text-white">Emergency Hotline</span>
                <span className="font-mono text-emerald-400 font-semibold">+91 97142 56006</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separator Border */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span>© {currentYear} Reeva Dental Clinic Surat.</span>
            <span className="hidden sm:inline">|</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart size={11} className="text-rose-500 fill-rose-500" />
            <span>inspired by Apple OS</span>
          </div>

          {/* Back to top micro button */}
          <button
            onClick={handleScrollToTop}
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all cursor-pointer active:scale-90"
            title="Scroll to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
