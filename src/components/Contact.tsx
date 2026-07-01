import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink } from "lucide-react";

export default function Contact() {
  const address = "13–14 Tulsi Plaza, Near Sarvottam Restaurant, S Zone Road, Udhana, Surat, Gujarat – 394210";
  const phone = "+91 97142 56006";

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden px-4 md:px-8 border-t border-white/5">
      {/* Background glow atmospheric bubble */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-sky-400 font-mono tracking-widest uppercase mb-3"
          >
            Location Hub
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Connect With Our Clinic
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Contact Information dossier (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Primary Details Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-2xl text-left"
            >
              <h3 className="text-xl font-extrabold text-white mb-6">Contact Channels</h3>
              
              <div className="space-y-6">
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white/50 font-mono uppercase tracking-wider mb-1">Clinic Address</h4>
                    <p className="text-xs text-white/90 leading-relaxed font-semibold">
                      {address}
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white/50 font-mono uppercase tracking-wider mb-1">Direct Calling</h4>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-base font-mono font-bold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white/50 font-mono uppercase tracking-wider mb-1">Electronic Support</h4>
                    <a
                      href="mailto:reevadentalclinic@gmail.com"
                      className="text-xs text-white/95 hover:text-sky-400 transition-colors font-semibold"
                    >
                      reevadentalclinic@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Shift hours details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/20 backdrop-blur-sm border border-white/5 flex flex-col justify-start text-left shadow-lg"
            >
              <div className="flex items-center gap-2 mb-4 text-sky-400">
                <Clock size={16} />
                <h4 className="text-xs font-bold font-mono tracking-widest uppercase">Clinic Timing Matrix</h4>
              </div>
              <div className="space-y-2 text-xs font-medium text-slate-400">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>Monday - Saturday Morning:</span>
                  <span className="font-mono text-white">09:00 AM - 01:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>Monday - Saturday Evening:</span>
                  <span className="font-mono text-white">04:00 PM - 09:00 PM</span>
                </div>
                <div className="flex justify-between text-rose-400">
                  <span>Sunday Routine:</span>
                  <span>Emergency On-Call Only</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: High-contrast Directions Card with ZERO embeds or previews (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-[2rem] border border-white/10 bg-slate-900 p-8 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2 text-sky-400">
                <MapPin size={20} />
                <h3 className="font-extrabold text-white text-lg">Location & Landmark Guide</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Reeva Dental Care is located in the bustling commercial zone of <strong className="text-white font-semibold">Udhana, Surat</strong>. Our modern facility is easily accessible from all primary transit points in the city.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-sky-400 font-mono text-xs font-bold mt-0.5">01</div>
                  <div>
                    <h4 className="text-xs font-extrabold text-white mb-0.5">Primary Landmark</h4>
                    <p className="text-xs text-slate-400">Conveniently situated right at <strong className="text-slate-300">Tulsi Plaza</strong>, near the well-known Sarvottam Restaurant on S Zone Road.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-emerald-400 font-mono text-xs font-bold mt-0.5">02</div>
                  <div>
                    <h4 className="text-xs font-extrabold text-white mb-0.5">Parking Availability</h4>
                    <p className="text-xs text-slate-400">Dedicated basement parking space is available for patient cars and two-wheelers inside Tulsi Plaza.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map Action Link - clean text-only standard hyperlink */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs relative z-10">
              <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                <ShieldCheck size={14} className="text-emerald-400" />
                Verified Surat Coordinates
              </span>
              <a
                href="https://maps.app.goo.gl/FkGjPr6A8Kj1kYWe9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-sky-400 hover:text-sky-300 transition-colors text-sm hover:underline"
              >
                Open driving directions in Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
