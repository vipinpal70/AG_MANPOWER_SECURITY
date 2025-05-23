import { ReactNode } from "react";
import { Book, RefreshCw, Users, Lock, Building, PhoneCall } from "lucide-react";

// About Section Data
export const clientsServed = [
  "Multinational Companies",
  "Manufacturing Units",
  "Institutes",
  "Industrial Houses",
  "Hotels, Showrooms",
  "Hospitals",
  "Hostels"
];

export const registrationDetails = [
  { title: "PAN NO.", number: "BOWPS4925M" },
  { title: "GST NO.", number: "07BOWPS4925M2ZV" },
  { title: "ESIC NO.", number: "11001262810001018" }
];

export const manpowerList = [
  "Facility Manager",
  "Manager Housekeeping",
  "Supervisors",
  "Office Boys",
  "Pantry Boys",
  "Housekeeping Boys",
  "Lady Housekeepers",
  "Security Guards",
  "Security Supervisors",
  "Gunmen",
  "Electricians",
  "Receptionists"
];

// Services Section Data
interface ServiceItem {
  title: string;
  description: string;
  gradientClass: string;
  icon: ReactNode;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    title: "Security Services",
    description: "Our security personnel ensure the protection of your premises with round-the-clock vigilance and quick response protocols.",
    gradientClass: "bg-gradient-to-r from-primary to-primary dark:from-primary dark:to-primary-dark",
    icon: <Lock className="h-20 w-20 text-white" />,
    features: [
      "24/7 surveillance and monitoring",
      "Access control and visitor management",
      "Fire fighting trained personnel",
      "Police and emergency liaison"
    ]
  },
  {
    title: "Office Cleaning & Housekeeping",
    description: "Maintain a clean and professional environment with our comprehensive cleaning services for offices and facilities.",
    gradientClass: "bg-gradient-to-r from-secondary to-secondary dark:from-secondary dark:to-secondary-dark",
    icon: <Building className="h-20 w-20 text-white" />,
    features: [
      "Daily floor and surface cleaning",
      "Glass and partition cleaning",
      "Waste management and disposal",
      "Air freshening and sanitization"
    ]
  },
  {
    title: "SIRC & Emergency Services",
    description: "Our Security Incident Reporting Centre (SIRC) provides comprehensive emergency response and coordination.",
    gradientClass: "bg-gradient-to-r from-accent to-accent dark:from-accent dark:to-accent-dark",
    icon: <PhoneCall className="h-20 w-20 text-white" />,
    features: [
      "Fire operating system",
      "Medical facility coordination",
      "Camera control operating system",
      "Emergency response team"
    ]
  }
];

// Quality Section Data
export const pdcaSteps = [
  {
    title: "PLAN",
    description: "Establish objectives and processes necessary to deliver results in accordance with specifications."
  },
  {
    title: "DO",
    description: "Implement the processes with trained personnel and proper equipment."
  },
  {
    title: "CHECK",
    description: "Monitor and evaluate processes and results against objectives and specifications."
  },
  {
    title: "ACT",
    description: "Apply actions for necessary improvement, modifying the process before next implementation."
  }
];

// Training Section Data
interface TrainingProgram {
  title: string;
  description: string;
  icon: ReactNode;
  bgColor: string;
}

export const trainingPrograms: TrainingProgram[] = [
  {
    title: "Basic Training",
    description: "Comprehensive training program for new entrants covering all aspects of security and facility management protocols.",
    icon: <Book className="h-6 w-6" />,
    bgColor: "bg-primary dark:bg-primary-dark"
  },
  {
    title: "Refresher Training",
    description: "Regular training sessions for personnel already in service to update skills and adapt to new techniques and requirements.",
    icon: <RefreshCw className="h-6 w-6" />,
    bgColor: "bg-secondary dark:bg-secondary-dark"
  },
  {
    title: "Recruitment Process",
    description: "We recruit through various resources of media and direct recruitment for ex-servicemen from armed forces centers, ensuring high-quality personnel.",
    icon: <Users className="h-6 w-6" />,
    bgColor: "bg-accent dark:bg-accent-dark"
  }
];

export const dosList = [
  "Maintain personal hygiene with clean uniforms",
  "Be polite and courteous to clients and guests",
  "Report emergencies and issues immediately",
  "Use appropriate safety equipment"
];

export const dontsList = [
  "Misbehave with clients or guests",
  "Use impolite language or inappropriate gestures",
  "Touch naked wires or loose connections",
  "Form group gatherings or cause disturbances"
];

// Contact Section Data
export const contactInfo = {
  address: "Rz-44/271, Hans Park, West Sagarpur, New Delhi-110046",
  phone: "+91 7678400486, +91 9871489437",
  email: "aggroupsanjeev@gmail.com"
};

export const termsAndConditions = [
  "The contract duration is one calendar year from the date of signing.",
  "Renewals are done with mutual consent with a 10% increase after every 11 months.",
  "One month prior notice required for any disputes from either party.",
  "Payment is made on a monthly basis with the billing date on the first day of each month."
];
