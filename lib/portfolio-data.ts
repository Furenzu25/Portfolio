/**
 * Centralized portfolio data - Single source of truth for all personal information
 * Edit this file to update your portfolio content across all components
 */

// Personal Information
export const personalInfo = {
  name: 'Jan Florenz R. Tenebroso',
  shortName: 'Jan Florenz',
  initials: 'JT',
  title: 'Full Stack Developer | Game Developer',
  location: 'Las Arenas, Mandug, Davao City',
  email: 'janflorenztenebroso311@gmail.com',
  phone: '0967-290-6859',
};

// Social Links
export const socialLinks = {
  github: 'https://github.com/janflorenztenebroso', // Update with your actual GitHub
  linkedin: '#', // Update with your actual LinkedIn
  twitter: '#', // Update with your actual Twitter/X
};

// Summary/Bio
export const summary = {
  short: 'Full Stack Developer and Process Design Engineer with an emphasis on practical application and a detail-oriented approach.',
  full: `Full Stack Developer and Process Design Engineer with an emphasis on practical application and a detail-oriented approach. Familiar with software development and engineering processes. Good at optimizing workflows, system automation, and user-centered solutions in compliance with business goals.

Experienced leader of web development projects and team player across teams for the adoption of modern technologies that will aid in efficiency and innovation. Balances technical execution with a strategic mindset to produce high-impact results.`,
  paragraphs: [
    "I'm a Full Stack Developer and Process Design Engineer with an emphasis on practical application and a detail-oriented approach. Familiar with software development and engineering processes, I specialize in creating efficient, user-centered solutions.",
    "My experience spans web development using PHP Laravel, Java applications, and machine learning with Python. I focus on optimizing workflows, system automation, and delivering solutions that align with business goals.",
    "As an experienced leader in web development projects and a strong team player, I embrace modern technologies that aid in efficiency and innovation. I balance technical execution with a strategic mindset to produce high-impact results.",
  ],
};

// Education
export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Ateneo de Davao University',
  period: 'Sep 2019 - Sep 2023',
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

// Skills organized by category
export const skillCategories = [
  {
    category: 'Programming Languages',
    color: 'from-blue-500 to-cyan-500',
    skills: ['C++', 'Java', 'PHP', 'Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Frameworks & Libraries',
    color: 'from-purple-500 to-pink-500',
    skills: ['Laravel', 'MaryUI', 'Livewire', 'Tailwind CSS', 'DaisyUI', 'TensorFlow'],
  },
  {
    category: 'Databases',
    color: 'from-green-500 to-emerald-500',
    skills: ['MySQL', 'PostgreSQL', 'Database Management', 'SQL'],
  },
  {
    category: 'DevOps & Systems',
    color: 'from-orange-500 to-red-500',
    skills: ['Ubuntu Linux', 'Kali Linux', 'Shell Scripting', 'SSH', 'Server Deployment', 'Git/GitHub'],
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

// Hero stats - realistic numbers based on CV
export const heroStats = {
  projectsCompleted: '10+',
  yearsExperience: '3+',
  technologiesUsed: '15+',
};

// Project Experience from CV (for reference - user will add projects manually)
// This is kept for reference but the projects section will be empty for manual entry
export const projectExperience = [
  {
    title: 'E-Commerce Web Application',
    tech: 'PHP Laravel, MaryUI, MySQL, Livewire',
    period: 'Jan 2024 - Dec 2024',
    highlights: [
      'Full stack developer for company e-commerce application',
      'Automated core business processes (inventory updates, loan tracking, financial reporting)',
      'Implemented login for admin and users with installment plan purchasing',
      'Built responsive and accessible UI with MaryUI, Tailwind CSS, and DaisyUI',
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
    tech: 'Java, Java GUI, MySQL, PostgreSQL',
    period: 'Jan 2023 - Dec 2023',
    highlights: [
      'Implemented Java GUI POS system with MySQL backend',
      'Applied sorting algorithm optimization for item retrieval',
      'Developed PostgreSQL-based POS project',
    ],
  },
  {
    title: 'Image Classification Model',
    tech: 'Python, TensorFlow, CNN',
    period: 'Jan 2025 - May 2025',
    highlights: [
      'Developed model for classifying objects, animals, and vehicles',
      'Used Convolutional Neural Networks and transfer learning',
      'Trained on CIFAR10 dataset',
    ],
  },
];

// Empty projects array for user to fill manually
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  live?: string;
  github?: string;
}

export const projects: Project[] = [];

// Languages
export const languages = ['English', 'Tagalog', 'Bisaya'];
