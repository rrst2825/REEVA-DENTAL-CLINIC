import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bell, 
  X, 
  Sparkles, 
  CalendarCheck, 
  FileText, 
  Info, 
  ArrowRight,
  ShieldCheck,
  Smartphone
} from "lucide-react";

// Components
import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";
import OSWindow from "./components/OSWindow";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Doctors from "./components/Doctors";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// OS Window Contents
import CostEstimator from "./components/CostEstimator";
import DoctorDossier from "./components/DoctorDossier";
import AppointmentPass from "./components/AppointmentPass";

// Types
import { Doctor, DentalService, Appointment, OSNotification } from "./types";

export default function App() {
  // Booking status state
  const [activeAppointment, setActiveAppointment] = useState<Appointment | null>(null);
  
  // OS Windows triggers
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const [isPassOpen, setIsPassOpen] = useState(false);

  // System Notification Toast queue
  const [notifications, setNotifications] = useState<OSNotification[]>([
    {
      id: "init",
      title: "Welcome to Reeva Dental Care",
      message: "Reeva OS loaded successfully. Book a first consultation to save up to ₹500.",
      time: "Just now",
      type: "info"
    }
  ]);

  // Handle new incoming notifications
  const pushNotification = (title: string, message: string, type: "success" | "info" | "warning" = "info") => {
    const newNotif: OSNotification = {
      id: "notif-" + Date.now(),
      title,
      message,
      time: "Just now",
      type
    };
    setNotifications(prev => [newNotif, ...prev]);
    
    // Automatically dismiss toast after 6 seconds
    setTimeout(() => {
      dismissNotification(newNotif.id);
    }, 6000);
  };

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Triggered when service card is selected
  const handleServiceSelect = (service: DentalService) => {
    setSelectedService(service);
    setIsCalculatorOpen(true);
  };

  // Triggered when doctor dossier is selected
  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsDossierOpen(true);
  };

  // Callback on successful appointment booking
  const handleBookingSuccess = (appointment: Appointment) => {
    setActiveAppointment(appointment);
    setIsBookingOpen(false);
    
    // Trigger desktop notification
    pushNotification(
      "Slot Confirmed!",
      `Seat reserved for ${appointment.name} on ${appointment.preferredDate} (${appointment.preferredTime}).`,
      "success"
    );

    // Auto open digital pass
    setTimeout(() => {
      setIsPassOpen(true);
    }, 500);
  };

  // Booking shortcut from calculators/dossiers
  const handleBookDirect = (treatmentName?: string) => {
    setIsCalculatorOpen(false);
    setIsDossierOpen(false);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-sky-500 selection:text-white font-sans antialiased pb-20">
      
      {/* 1. Global macOS-style top Menu Bar */}
      <MenuBar />

      {/* 2. Slide-In System Notification Center (Upper Right) */}
      <div className="fixed top-12 right-4 z-50 max-w-sm w-full space-y-2 pointer-events-none">
        <AnimatePresence>
          {notifications.map((notif) => (
            <motion.div
              key={notif.id}
              initial={{ x: 100, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 100, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="pointer-events-auto w-full p-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl flex items-start gap-3 text-left relative overflow-hidden group"
            >
              {/* Colored status line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${
                notif.type === "success" ? "bg-emerald-500" : "bg-sky-500"
              }`} />

              <div className={`p-2 rounded-xl flex-shrink-0 ${
                notif.type === "success" ? "bg-emerald-500/10 text-emerald-400" : "bg-sky-500/10 text-sky-400"
              }`}>
                {notif.type === "success" ? <CalendarCheck size={16} /> : <Bell size={16} />}
              </div>

              <div className="flex-1 space-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white/90">{notif.title}</span>
                  <span className="text-[9px] text-white/40 font-mono">{notif.time}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">{notif.message}</p>
              </div>

              <button
                onClick={() => dismissNotification(notif.id)}
                className="text-white/20 hover:text-white transition-colors cursor-pointer"
                title="Dismiss"
              >
                <X size={12} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 3. Floating Quick Pass Badge if an appointment exists */}
      <AnimatePresence>
        {activeAppointment && !isPassOpen && (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="fixed bottom-24 left-4 z-40"
          >
            <button
              onClick={() => setIsPassOpen(true)}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-500/15 backdrop-blur-md border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition-all duration-200 cursor-pointer shadow-xl active:scale-95 text-xs font-bold"
            >
              <Smartphone size={15} />
              <span>Active Appointment Pass ({activeAppointment.id})</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Core Immersive Landing Content */}
      <main className="w-full relative">
        {/* Hero Section */}
        <Hero 
          onBookClick={() => setIsBookingOpen(true)} 
          onCalculatorClick={() => {
            setSelectedService(null);
            setIsCalculatorOpen(true);
          }} 
        />

        {/* About Clinic Section */}
        <About />

        {/* Services Showcase Grid */}
        <Services onServiceSelect={handleServiceSelect} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Meet Our Doctors Profile Cards */}
        <Doctors onDoctorSelect={handleDoctorSelect} />

        {/* Patient Reviews Carousel */}
        <Reviews />

        {/* Gallery Section */}
        <Gallery />

        {/* Explicit Booking Form Anchor */}
        <section id="booking" className="py-24 bg-slate-950 relative overflow-hidden px-4 md:px-8 border-t border-white/5 flex items-center justify-center">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Context Left (7 cols) */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-xs font-semibold text-sky-400 font-mono tracking-widest uppercase mb-3 block">Digital Queue</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Instant Online Clinic Booking
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                Skip the lines. Fill out the floating diagnostic ticket, choose your desired clinical practitioner, select a preferred date, and secure your session within 90 seconds. 
              </p>
              
              {/* Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Real-time availability checking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-sky-400" />
                  <span>First-visit cost waiver matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={14} className="text-indigo-400" />
                  <span>Generates Apple Wallet digital pass</span>
                </div>
                <div className="flex items-center gap-2">
                  <Info size={14} className="text-amber-400" />
                  <span>SMS/Email receipt confirmation</span>
                </div>
              </div>
            </div>

            {/* Floating Form Right (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <BookingForm onBookingSuccess={handleBookingSuccess} />
            </div>
          </div>
        </section>

        {/* Contact Coordinates & Google Map */}
        <Contact />
      </main>

      {/* 5. Elegant Dark Footer */}
      <Footer />

      {/* 6. Dynamic Bottom OS Dock */}
      <Dock />

      {/* ========================================================= */}
      {/* 7. Draggable OS APPLICATION WINDOWS                       */}
      {/* ========================================================= */}

      {/* WINDOW A: Booking Hub */}
      <OSWindow
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="App: Booking Portal"
        widthClass="max-w-md"
      >
        <div className="space-y-4">
          <p className="text-xs text-slate-400 leading-relaxed text-center font-medium">
            Complete the form below to secure your seat. You will instantly receive a custom Wallet Pass upon success.
          </p>
          <BookingForm onBookingSuccess={handleBookingSuccess} />
        </div>
      </OSWindow>

      {/* WINDOW B: Service Cost Estimator */}
      <OSWindow
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        title="App: Reeva OS Cost Estimator"
        widthClass="max-w-3xl"
      >
        <CostEstimator 
          initialService={selectedService} 
          onBookDirect={handleBookDirect} 
        />
      </OSWindow>

      {/* WINDOW C: Doctor Dossier */}
      <OSWindow
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        title="App: Medical Doctor Profile"
        widthClass="max-w-2xl"
      >
        {selectedDoctor && (
          <DoctorDossier 
            doctor={selectedDoctor} 
            onBookDirect={handleBookDirect} 
          />
        )}
      </OSWindow>

      {/* WINDOW D: Apple Wallet Pass */}
      <OSWindow
        isOpen={isPassOpen}
        onClose={() => setIsPassOpen(false)}
        title="App: Digital Clinic Pass"
        widthClass="max-w-sm"
      >
        {activeAppointment && (
          <AppointmentPass appointment={activeAppointment} />
        )}
      </OSWindow>

    </div>
  );
}
