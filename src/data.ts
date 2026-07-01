import { Doctor, DentalService, Review } from "./types";
import { IMAGES } from "./images";

export const SERVICES: DentalService[] = [
  {
    id: "checkup",
    name: "Dental Checkup",
    description: "Comprehensive dental examinations using high-resolution intraoral cameras and ultra-low radiation digital X-rays.",
    duration: "30-45 mins",
    priceEstimate: "₹500 - ₹1,000",
    iconName: "Stethoscope",
    benefits: ["Early decay detection", "Oral cancer screening", "Digital gum analysis"]
  },
  {
    id: "cleaning",
    name: "Teeth Cleaning",
    description: "Premium ultrasonic scaling and specialized air-polishing to remove plaque, calculus, and stubborn stains gently.",
    duration: "45-60 mins",
    priceEstimate: "₹1,200 - ₹2,500",
    iconName: "Sparkles",
    benefits: ["Fresher breath", "Removes tea/coffee stains", "Prevents periodontal disease"]
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    description: "Virtually painless single-visit endodontic treatment utilizing advanced rotary systems and electronic apex locators.",
    duration: "60-90 mins",
    priceEstimate: "₹4,500 - ₹8,000",
    iconName: "ShieldAlert",
    benefits: ["Saves your natural tooth", "Relieves acute tooth pain", "Prevents spread of infection"]
  },
  {
    id: "implants",
    name: "Dental Implants",
    description: "World-class titanium implants with custom CAD/CAM designed porcelain crowns to restore missing teeth permanently.",
    duration: "2-3 visits",
    priceEstimate: "₹25,000 - ₹45,000",
    iconName: "Layers",
    benefits: ["Looks and feels natural", "Preserves jawbone structure", "Lifetime durability"]
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    description: "Laser-activated clinical teeth whitening that safely brightens your smile by up to 8 shades in just one hour.",
    duration: "60 mins",
    priceEstimate: "₹5,000 - ₹12,000",
    iconName: "Smile",
    benefits: ["Instant aesthetic results", "Safe on tooth enamel", "Long-lasting brightness"]
  },
  {
    id: "smile-makeover",
    name: "Smile Makeover",
    description: "Custom aesthetic design combining porcelain veneers, bonding, and recontouring for a breathtaking Hollywood smile.",
    duration: "2-3 visits",
    priceEstimate: "Individualized",
    iconName: "HeartPulse",
    benefits: ["Corrects chipped or spaced teeth", "Harmonizes facial alignment", "Boosts personal confidence"]
  },
  {
    id: "braces",
    name: "Braces & Aligners",
    description: "State-of-the-art clear aligners and modern ceramic braces to straighten teeth discreetly and comfortably.",
    duration: "12-24 months",
    priceEstimate: "₹40,000 - ₹1,50,000",
    iconName: "Activity",
    benefits: ["Virtually invisible aligners", "Corrects bite issues", "Easier oral hygiene maintenance"]
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    description: "Artistic dental restorations, composite bonding, and gum contouring tailored to perfect your unique facial aesthetics.",
    duration: "45-90 mins",
    priceEstimate: "₹2,000 - ₹8,000",
    iconName: "Palette",
    benefits: ["Natural looking composites", "Symmetrical gum-lines", "Minimally invasive procedures"]
  },
  {
    id: "kids",
    name: "Kids Dentistry",
    description: "Fun, warm, and highly gentle pediatric care, including protective dental sealants, fluoride therapy, and custom space maintainers.",
    duration: "30-45 mins",
    priceEstimate: "₹800 - ₹2,000",
    iconName: "Baby",
    benefits: ["Fear-free positive experience", "Prevents childhood cavities", "Monitors jaw growth trends"]
  },
  {
    id: "extraction",
    name: "Tooth Extraction",
    description: "Gentle, non-traumatic surgical and simple extractions, including modern flapless wisdom tooth surgeries.",
    duration: "30-60 mins",
    priceEstimate: "₹1,500 - ₹5,000",
    iconName: "Scissors",
    benefits: ["Prevents crowding", "Stops wisdom tooth decay", "Immediate pain relief"]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Dentists",
    description: "Led by highly trained specialists with decades of combined expertise in complex restorative and cosmetic surgeries.",
    icon: "Award"
  },
  {
    title: "Modern Equipment",
    description: "Fully integrated with state-of-the-art German chairs, low-dosage intraoral 3D scanners, and advanced laser systems.",
    icon: "Cpu"
  },
  {
    title: "Gentle Treatment",
    description: "Focused on stress-free care using micromotor rotary handpieces and comforting distraction techniques.",
    icon: "Heart"
  },
  {
    title: "Affordable Pricing",
    description: "Premium, top-tier treatments priced transparently with flexible payment plans and zero hidden charges.",
    icon: "IndianRupee"
  },
  {
    title: "Sterilized Instruments",
    description: "Strict multi-stage Class-B autoclaving protocols and sealed single-use clinical pouches for absolute patient safety.",
    icon: "ShieldCheck"
  },
  {
    title: "Friendly Staff",
    description: "A highly hospitable clinical team trained to manage patient anxiety and deliver premium personalized care.",
    icon: "Users"
  },
  {
    title: "Fast Appointment",
    description: "Smart visual booking engine with real-time updates and minimal waiting times inside our VIP lounge.",
    icon: "Clock"
  },
  {
    title: "Personalized Care",
    description: "Customized diagnostic pathways mapped to your exact functional, cosmetic, and budget preferences.",
    icon: "HeartHandshake"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "mukul-patel",
    name: "Dr. Mukul Patel",
    role: "Senior Consultant Dentist & Implantologist",
    image: IMAGES.doctorMukul,
    specialty: "Dental Implants & Laser Dentistry",
    experience: "15+ Years",
    education: "B.D.S., M.D.S. (Oral & Maxillofacial Implantology)",
    bio: "Dr. Mukul Patel is a pioneer in digital guided implant surgery in Surat. He specializes in immediate loading implants, laser tooth extractions, and complex full-mouth rehabilitation treatments with a focus on structural longevity.",
    schedule: ["Mon - Sat: 9:00 AM - 1:00 PM", "Mon - Sat: 4:00 PM - 8:00 PM"]
  },
  {
    id: "nakul-patel",
    name: "Dr. Nakul Patel",
    role: "Co-Founder & Chief Cosmetic Surgeon",
    image: IMAGES.doctorNakul,
    specialty: "Cosmetic Dentistry & Endodontics",
    experience: "12+ Years",
    education: "B.D.S., M.D.S. (Conservative Dentistry & Endodontics)",
    bio: "Dr. Nakul Patel is renowned for his micro-aesthetic dentistry and painless root canal treatments. His passion lies in transforming smiles through high-definition ceramic veneers, bonding, and digital smile design protocols.",
    schedule: ["Mon - Sat: 10:00 AM - 2:00 PM", "Mon - Sat: 5:00 PM - 9:00 PM"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    name: "Aarav Shah",
    rating: 5,
    text: "Excellent quality treatment and caring staff. Dr. Mukul explained the implant procedure step-by-step and completed it absolutely painlessly.",
    treatment: "Dental Implant",
    date: "June 15, 2026",
    avatarSeed: "aarav"
  },
  {
    id: "rev2",
    name: "Priyal Mehta",
    rating: 5,
    text: "Very skilled doctors with affordable pricing. My smile makeover with ceramic veneers completely changed my self-confidence. Highly recommended!",
    treatment: "Smile Makeover",
    date: "May 28, 2026",
    avatarSeed: "priyal"
  },
  {
    id: "rev3",
    name: "Rajesh Varma",
    rating: 5,
    text: "Friendly atmosphere and modern clinic. It feels like entering an Apple Store! The equipment is futuristic and hygiene is top-notch.",
    treatment: "Root Canal Treatment",
    date: "June 22, 2026",
    avatarSeed: "rajesh"
  },
  {
    id: "rev4",
    name: "Meera Desai",
    rating: 5,
    text: "The best dentist experience for kids! My son was laughing during his cavity sealing. Outstanding team, thank you so much!",
    treatment: "Kids Dentistry",
    date: "June 10, 2026",
    avatarSeed: "meera"
  },
  {
    id: "rev5",
    name: "Aniket Patel",
    rating: 5,
    text: "I was extremely anxious about wisdom tooth extraction, but the doctors were so gentle and fast. Did not feel a single pinch of pain.",
    treatment: "Tooth Extraction",
    date: "June 05, 2026",
    avatarSeed: "aniket"
  }
];

export const GALLERY = [
  { id: "g1", title: "Premium Reception", category: "Reception", image: IMAGES.reception },
  { id: "g2", title: "Modern Treatment Chair", category: "Dental Chair", image: IMAGES.treatmentRoom },
  { id: "g3", title: "Advanced Equipment Room", category: "Equipment", image: IMAGES.equipment },
  { id: "g4", title: "Aesthetic Doctor Cabin", category: "Doctors at Work", image: IMAGES.doctorsAtWork },
  { id: "g5", title: "Happy Client Smiles", category: "Happy Patients", image: IMAGES.happyPatients },
  { id: "g6", title: "Precision Surgery Suite", category: "Treatment Room", image: IMAGES.treatmentRoom }
];

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Experienced Dental Team",
    description: "Highly skilled clinicians delivering gold-standard care since 2011.",
    icon: "UsersRound"
  },
  {
    title: "Comfortable Environment",
    description: "Soothing architectural acoustics, ergonomic seats, and calming aromatherapy.",
    icon: "BedDouble"
  },
  {
    title: "Advanced Dental Technology",
    description: "3D intraoral scanners, computerized treatment planning, and micro-lasers.",
    icon: "Sparkles"
  },
  {
    title: "Patient-Centered Care",
    description: "We place your physiological comfort, concerns, and timeline above everything else.",
    icon: "Heart"
  },
  {
    title: "Hygiene & Safety First",
    description: "Class-B vacuum steam autoclaves matching strict international medical protocols.",
    icon: "Activity"
  }
];
