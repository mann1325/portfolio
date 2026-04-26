import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs,
  SiGit, SiFigma, SiVite, SiRedux, SiPython,
} from 'react-icons/si';

export const personalInfo = {
  name: 'Mann Shah',
  title: 'Full-Stack Developer',
  bio: `I'm a passionate Full-Stack Developer who loves turning ideas into beautiful, functional digital experiences.
        I'm eager to learn, grow, and build solutions that blend great UX with clean architecture.`,
  location: 'India',
  email: 'Mannnshah2007@gmail.com',
  github: 'https://github.com/mann1325',
  linkedin: 'https://www.linkedin.com/in/mann-shah-61472a317/',
  twitter: 'https://twitter.com/',
  avatar: null, // will use initials avatar
  roles: [
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Enthusiast',
    'Lifelong Learner',
  ],
};

export const skills = [
  {
    category: 'Frontend',
    icon: SiReact,
    color: '#61DAFB',
    items: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 92 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 90 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 80 },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
      { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 88 },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 78 },
    ],
  },
  {
    category: 'Design & Tools',
    icon: SiFigma,
    color: '#F24E1E',
    items: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF', level: 82 },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 75 },
      { name: 'Redux', icon: SiRedux, color: '#764ABC', level: 80 },
      { name: 'Vite', icon: SiVite, color: '#646CFF', level: 85 },
    ],
  },
  {
    category: 'Backend & DevOps',
    icon: SiNodedotjs,
    color: '#339933',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 78 },
      { name: 'Python', icon: SiPython, color: '#3776AB', level: 72 },
      { name: 'Git', icon: SiGit, color: '#F05032', level: 88 },
    ],
  },
];

export const timeline = [
  {
    year: '2024 – Present',
    type: 'education',
    title: 'Learning Full-Stack Development',
    company: 'Self-Taught',
    description: 'Diving deep into the modern web stack — React, Node.js, databases, and deployment. Building projects to solidify skills and grow as a developer.',
  },
  {
    year: '2023 – 2024',
    type: 'education',
    title: 'Web Development Fundamentals',
    company: 'Online Courses & Practice',
    description: 'Started the journey with HTML, CSS, and JavaScript. Completed multiple courses and built beginner projects to understand the basics.',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Nova AI',
    subtitle: 'AI-Powered Writing Assistant Platform',
    description: 'A full-stack SaaS platform with 12+ AI-powered writing tools including Grammar Checker, Plagiarism Detector, Paraphrasing Tool, Text Summarizer and more. Integrated LLaMA 3.3 alongside a custom NLP engine with JWT auth and rate limiting.',
    image: null,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'LLaMA 3.3', 'NLP', 'JWT'],
    github: 'https://github.com/mann1325',
    demo: 'https://nova-ai-writing-assistant-platform.vercel.app/',
    period: 'Dec 2025 – Apr 2026',
  },
  {
    id: 2,
    title: 'Online Quiz Application',
    subtitle: 'Interactive Web App',
    description: 'A fast and interactive online quiz application with real-time questions, scoring, and a clean, user-friendly interface for learning and assessment.',
    image: null,
    tags: ['ReactJS', 'TailwindCSS', 'Quiz-API'],
    github: 'https://github.com/mann1325',
    demo: 'https://example.com/',
    color: '#3b82f6',
  },
  {
    id: 3,
    title: 'Banking Management System',
    subtitle: 'Python Application',
    description: 'A full-stack banking management system built with Python and Django. Features secure user authentication, account management, transaction history, and real-time notifications.',
    image: null,
    tags: ['Python', 'Django', 'MySQL', 'Authentication'],
    github: 'https://github.com/mann1325',
    demo: 'https://example.com/',
    color: '#f59e0b',
  },
];

export const faqs = [
  {
    q: 'What technologies do you specialize in?',
    a: 'I specialize in the modern JavaScript ecosystem — React, Next.js, TypeScript, and Node.js. I also have strong experience with UI/UX tooling like Tailwind CSS, Framer Motion, and Figma.',
  },
  {
    q: 'Are you available for freelance projects?',
    a: 'Yes! I take on select freelance projects that align with my skills and schedule. Feel free to reach out via the contact form and let\'s discuss your project.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timeline varies by complexity. A landing page typically takes 1–2 weeks, a full web app 4–12 weeks. I provide detailed estimates after an initial discovery call.',
  },
  {
    q: 'Do you work with startups or established companies?',
    a: 'Both! I enjoy working with early-stage startups to validate ideas quickly as well as established companies looking to modernize their tech stack.',
  },
  {
    q: 'What is your development process?',
    a: 'Discovery → Design → Development → Testing → Launch. I keep clients involved throughout with regular demos and communication in your preferred channel.',
  },
  {
    q: 'Can you optimize an existing project?',
    a: 'Absolutely. Performance audits, code refactoring, accessibility improvements, and migrating legacy code to modern stacks are all part of my services.',
  },
];
