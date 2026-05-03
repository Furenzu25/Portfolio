/**
 * Centralized portfolio data - Single source of truth for all personal information
 */

export const personalInfo = {
  name: 'Jan Florenz R. Tenebroso',
  shortName: 'Jan Florenz',
  initials: 'JT',
  title: 'Software Engineer',
  location: 'Las Arenas, Mandug, Davao City, Davao del Sur',
  email: 'janflorenztenebroso311@gmail.com',
  phone: '+63967 290 6859',
};

export const socialLinks = {
  github: 'https://github.com/Furenzu25',
  linkedin: '#',
  twitter: '#',
};

export const summary = {
  short: 'Full Stack Software Engineer with an emphasis on practical application and a detail-oriented approach.',
  full: `Full Stack Software Engineer with an emphasis on practical application and a detail-oriented approach. Familiar with software development and engineering processes. Good at optimizing workflows, system automation, and user-centered solutions in compliance with business goals.

Collaborative contributor in web development projects and team settings, with a focus on adopting modern technologies that improve efficiency and innovation. Balances technical execution with a strategic mindset to produce high-impact results.`,
  paragraphs: [
    "I'm a Full Stack Software Engineer with an emphasis on practical application and a detail-oriented approach. Familiar with software development and engineering processes, I specialize in creating efficient, user-centered solutions.",
    "My experience spans web development using PHP Laravel with Filament, Java Spring Boot applications, modern frameworks like NestJS and Next.js, and machine learning with Python and TensorFlow. I focus on optimizing workflows, system automation, and delivering solutions that align with business goals.",
    "As a collaborative contributor in web development projects and a strong team player, I embrace modern technologies that aid in efficiency and innovation. I balance technical execution with a strategic mindset to produce high-impact results.",
  ],
};

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Ateneo de Davao University',
  period: '2022 - 2026',
  highlights: [
    'Software Engineering',
    'Machine Learning',
    'Networks and Communication',
    'Data Structures and Algorithm',
  ],
  honors: [
    "Dean's Lister (1st Year 2nd Sem, 2nd Year 1st Sem)",
    "President's Lister (2nd Year 2nd Sem)",
  ],
};

export const skillCategories = [
  {
    category: 'Programming Languages',
    color: 'from-blue-500 to-cyan-500',
    skills: ['C++', 'Java', 'PHP', 'Python', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    color: 'from-purple-500 to-pink-500',
    skills: ['Laravel', 'Filament', 'Spring Boot', 'NestJS', 'Next.js', 'Tailwind CSS', 'TensorFlow'],
  },
  {
    category: 'Databases',
    color: 'from-green-500 to-emerald-500',
    skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Database Management'],
  },
  {
    category: 'DevOps & Systems',
    color: 'from-orange-500 to-red-500',
    skills: ['Docker', 'Ubuntu Linux', 'Kali Linux', 'Git/GitHub', 'Vercel', 'Cloudflare'],
  },
  {
    category: 'Machine Learning',
    color: 'from-indigo-500 to-purple-500',
    skills: ['CNN', 'Transfer Learning', 'Image Classification', 'TensorFlow', 'Model Optimization'],
  },
  {
    category: 'Soft Skills',
    color: 'from-yellow-500 to-orange-500',
    skills: ['Team Collaboration', 'Project Management', 'Software Engineering', 'UI/UX Design', 'Communication'],
  },
];

export const heroStats = {
  projectsCompleted: '6+',
  yearsExperience: '0+',
  technologiesUsed: '20+',
};

export const projectExperience = [
  {
    title: 'Rosel Trading Website',
    tech: 'ReactJS, NestJS, TypeScript, Production Deployment',
    period: '2025 - Present',
    highlights: [
      'Built and deployed roseltrading.trade as a full-stack business website for a family-owned company',
      'Implemented the frontend with ReactJS and the backend APIs with NestJS',
      'Delivered a production-ready deployment with stable hosting and live domain access',
    ],
  },
  {
    title: 'Web Application Development',
    tech: 'PHP, Laravel, MaryUI, MySQL',
    period: 'Jan 2024 - Dec 2024',
    highlights: [
      'Full stack developer for company web application',
      'Automated core business processes (inventory updates, loan tracking, financial reporting)',
      'Implemented login for admin and users with installment plan purchasing',
      'Built responsive and accessible UI with MaryUI, Tailwind CSS, and DaisyUI',
    ],
  },
  {
    title: 'Portfolio & Web Apps',
    tech: 'NestJS, Next.js, Vercel, Cloudflare',
    period: 'Nov 2024 - Apr 2025',
    highlights: [
      'Built modern web applications using Next.js and NestJS',
      'Deployed applications using Vercel and Cloudflare',
      'Implemented full-stack solutions with TypeScript',
    ],
  },
  {
    title: 'Image Classification Model',
    tech: 'Python, TensorFlow, CNN',
    period: 'Jan 2025 - Dec 2025',
    highlights: [
      'Developed model for classifying objects, animals, and vehicles',
      'Used Convolutional Neural Networks and transfer learning',
      'Trained on CIFAR10 dataset',
    ],
  },
  {
    title: 'Minecraft Java Server Deployment',
    tech: 'Ubuntu Linux, Shell Scripting, VPS',
    period: 'Jun 2024 - Dec 2024',
    highlights: [
      'Deployed Minecraft Java Edition server on cloud VPS',
      'Configured firewall rules, port forwarding, and domain setup',
      'Intermediate expertise in shell scripting and SSH commands',
    ],
  },
  {
    title: 'Point of Sale System',
    tech: 'Java Spring Boot, Java GUI, MySQL, PostgreSQL',
    period: 'Jan 2024 - Dec 2024',
    highlights: [
      'Implemented Java GUI POS system with MySQL backend',
      'Applied sorting algorithm optimization for item retrieval',
      'Developed PostgreSQL-based POS project using Spring Boot',
    ],
  },
  {
    title: 'Static Website',
    tech: 'HTML, Pure CSS',
    period: 'Jan 2024 - May 2024',
    highlights: [
      'Built responsive static websites with pure HTML and CSS',
      'Focused on clean, semantic markup and modern CSS practices',
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  live?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Rosel Trading - Arawan Loan',
    description:
      'A day-to-day loan management system for Arawan customers. Built for Rosel Trading to streamline their lending operations with real-time tracking, customer management, and automated financial reporting.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    image: '/Screenshot 2026-04-29 071707.png',
    live: 'https://www.roseltrading.trade',
    featured: true,
  },
  {
    id: 2,
    title: 'Rosel Trading - Loan Creation Flow',
    description:
      'Loan origination modal focused on fast daily loan setup, repayment computation, and customer signature capture for day-to-day business operations.',
    tags: ['Next.js', 'Supabase', 'Loan Workflow', 'UX', 'Tailwind CSS'],
    image: '/opera_SNCY8UBMa2.png',
    live: 'https://www.roseltrading.trade',
    featured: true,
  },
  {
    id: 3,
    title: 'COA Submission Hub',
    description:
      'Submission hub for Ateneo de Davao with Google sign-in scoped to institutional accounts (@addu.edu.ph). Clean, centered auth UX with clear guidance for staff and students.',
    tags: ['Google OAuth', 'TypeScript', 'Web App', 'ADDU'],
    image: '/coa-submission-hub-login.png',
    featured: true,
  },
];

export const languages = ['English', 'Tagalog', 'Bisaya'];

export const allSkillsFlat = skillCategories.flatMap((cat) => cat.skills);
