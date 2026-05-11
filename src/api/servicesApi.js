// Mock API for Services
// In production, replace with actual API calls

const services = [
  {
    id: 1,
    name: "Corporate Website Design & Development",
    description:
      "Professional corporate websites with modern design and responsive layouts. Perfect for businesses looking to establish a strong online presence.",
    price: 5000,
    image: "/img/IMG-20251107-WA0009.jpg",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Content Management System",
      "Contact Forms",
      "Social Media Integration",
    ],
    duration: "4-6 weeks",
    category: "Web Development",
  },
  {
    id: 2,
    name: "E-commerce Development",
    description:
      "Full-featured online stores with shopping cart, payment integration, and inventory management. Built for scalability and performance.",
    price: 8000,
    image: "/img/IMG-20251107-WA0007.jpg",
    features: [
      "Shopping Cart",
      "Payment Gateway Integration",
      "Product Management",
      "Order Tracking",
      "Admin Dashboard",
    ],
    duration: "6-8 weeks",
    category: "E-commerce",
  },
  {
    id: 3,
    name: "Custom Web Applications (SaaS)",
    description:
      "Scalable Software as a Service applications tailored to your business needs. Cloud-based solutions with user management and analytics.",
    price: 12000,
    image: "/img/IMG-20251107-WA0005.jpg",
    features: [
      "User Authentication",
      "Subscription Management",
      "API Integration",
      "Analytics Dashboard",
      "Multi-tenant Architecture",
    ],
    duration: "8-12 weeks",
    category: "SaaS",
  },
  {
    id: 4,
    name: "Backend Development & APIs",
    description:
      "Robust backend systems and RESTful APIs. Secure, scalable, and optimized for performance with database design and server management.",
    price: 6000,
    image: "/img/IMG-20251107-WA0008.jpg",
    features: [
      "RESTful API",
      "Database Design",
      "Authentication & Authorization",
      "Server Configuration",
      "API Documentation",
    ],
    duration: "4-6 weeks",
    category: "Backend",
  },
  {
    id: 5,
    name: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces designed with user experience in mind. Wireframes, prototypes, and design systems included.",
    price: 3000,
    image: "/img/IMG-20251107-WA0006.jpg",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design System",
      "User Testing",
    ],
    duration: "3-4 weeks",
    category: "Design",
  },
  {
    id: 6,
    name: "Maintenance & Support Contracts",
    description:
      "Ongoing maintenance, updates, and technical support for your website or application. Regular backups, security updates, and 24/7 support.",
    price: 500,
    image: "/img/IMG-20251107-WA0010.jpg",
    features: [
      "Monthly Updates",
      "Security Patches",
      "Backup & Recovery",
      "24/7 Support",
      "Performance Monitoring",
    ],
    duration: "Monthly",
    category: "Support",
  },
  {
    id: 7,
    name: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. Modern UI/UX with seamless performance and app store optimization.",
    price: 10000,
    image: "/img/IMG-20251107-WA0009.jpg",
    features: [
      "iOS & Android",
      "Cross-platform Support",
      "Push Notifications",
      "App Store Optimization",
      "Regular Updates",
    ],
    duration: "8-10 weeks",
    category: "Mobile",
  },
];

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchServices = async () => {
  await delay(500); // Simulate network delay
  return services;
};

export const fetchServiceById = async (id) => {
  await delay(300);
  const service = services.find((s) => s.id === parseInt(id));
  if (!service) {
    throw new Error("Service not found");
  }
  return service;
};

export default services;
