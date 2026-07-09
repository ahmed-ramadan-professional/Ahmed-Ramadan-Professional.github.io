export const profile = {
  name: 'Ahmed Ramadan',
  firstName: 'Ahmed',
  lastName: 'Ramadan',
  fullName: 'Ahmed Ramadan Abdelmonem',
  title: 'Frontend & Full Stack Developer',
  // Rotating phrases for the hero typing effect
  roles: [
    'React Frontend Developer',
    'MERN Stack Developer',
    'Next.js & Tailwind',
    'Full Stack Engineer',
  ],
  location: 'Alexandria, Egypt',
  email: 'ahmed.ramadan.professional@gmail.com',
  bio: `Experienced full stack developer with 2+ years of experience specializing in modern web applications using MERN, Laravel, and Next.js. Proficient in building scalable systems, developing responsive user interfaces, and deploying production-ready solutions. Skilled in optimizing performance and improving user experience. Seeking to leverage technical expertise to build efficient, reliable, and high-quality web applications.`,
  shortBio: `Full stack developer specializing in MERN, Laravel and Next.js.`,
  socials: {
    github: 'https://github.com/ahmed-ramadan-professional/',
    linkedin: 'https://www.linkedin.com/in/ahmed-ramadan-professional/',
  },
  // Formspree form id (from VITE_FORMSPREE_ID). While empty, the contact form
  // falls back to opening the visitor's mail client.
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || '',
};

// Every value maps 1:1 to concrete, named items visible on the page:
//   Years            -> CV states "2+ years of experience"
//   Live Sites       -> 3 real domains (Anchor Elite, Rentopia, Speed E-Service)
//   Companies        -> 4 roles in the Experience section (3 freelance + military)
//   Projects         -> 6 projects listed in the Projects section
export const stats = [
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Live Production Sites', value: 3, suffix: '' },
  { label: 'Companies', value: 4, suffix: '' },
  { label: 'Projects', value: 6, suffix: '' },
];
