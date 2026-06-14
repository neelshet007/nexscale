export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  avatarUrl?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Vikram Malhotra",
    role: "Managing Director",
    company: "Malhotra Capital Advisors",
    review: "NexScale built our algo trading suite from scratch. The system is solid, highly responsive, and handles automated risk management flawlessly. They are true technical experts.",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "Valo Logistics Global",
    review: "The business automation systems NexScale implemented saved our team over 25 hours per week of manual follow-ups and data entry. Their workflow automation feels like magic.",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Aura Premium Goods",
    review: "Our previous agency built a site that loaded slowly and leaked leads. NexScale completely rebuilt it using Next.js. Customer retention campaigns increased repeat orders by 30% in just two months.",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "Aditya Roy",
    role: "Technical Co-founder",
    company: "Finverse Tech",
    review: "It is extremely hard to find partners who understand both high-performance backend systems and modern frontend design. NexScale delivers exactly that. Our go-to partner.",
    rating: 5
  }
];
