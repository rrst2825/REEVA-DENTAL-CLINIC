// TypeScript types for Reeva Dental Clinic OS

export interface Doctor {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty: string;
  experience: string;
  education: string;
  bio: string;
  schedule: string[];
}

export interface DentalService {
  id: string;
  name: string;
  description: string;
  duration: string;
  priceEstimate: string;
  iconName: string;
  benefits: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  treatment: string;
  date: string;
  avatarSeed: string;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
  status: "Confirmed" | "Pending" | "Completed";
  createdAt: string;
}

export interface OSNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "success" | "info" | "warning";
}
