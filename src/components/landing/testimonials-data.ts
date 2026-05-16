export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  org: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Cody Dynamics reduced our prior-auth turnaround dramatically while keeping our team in the loop.",
    author: "Jordan Lee",
    role: "VP Revenue Cycle",
    org: "Regional Health Network",
  },
  {
    quote:
      "The automation layer plugs into our EHR without forcing another fragile swivel-chair workflow.",
    author: "Samira Patel",
    role: "Director of Operations",
    org: "Multi-specialty Clinic Group",
  },
  {
    quote:
      "We finally have analytics our CFO and clinical leaders both trust.",
    author: "Chris Nguyen",
    role: "Chief Financial Officer",
    org: "Academic Medical Center",
  },
];
