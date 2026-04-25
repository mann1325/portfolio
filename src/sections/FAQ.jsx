import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from '@/components/animate-ui/components/base/accordion';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import { fadeUp, viewportOpts } from '../utils/animations';

const ITEMS = [
  {
    q: 'Who are you and what do you do?',
    a: "I'm Mann Shah, a passionate Full-Stack Developer. I love building web applications from the ground up — handling everything from UI design to backend logic and database management.",
  },
  {
    q: 'What technologies do you work with?',
    a: 'I work with React, JavaScript, HTML, CSS, Tailwind CSS, Node.js, Python, and Git. I am constantly learning and adding new tools to my stack.',
  },
  {
    q: 'Do you have any professional experience?',
    a: "I'm just starting my journey as a developer. While I don't have formal work experience yet, I've been building real projects to sharpen my skills and grow my portfolio.",
  },
  {
    q: 'Are you open to internships or entry-level roles?',
    a: "Absolutely! I'm actively looking for internship opportunities and entry-level positions where I can contribute, learn from experienced developers, and grow professionally.",
  },
  {
    q: 'Can you build a full-stack application?',
    a: 'Yes! I can build end-to-end web applications — designing the frontend with React and Tailwind, building REST APIs with Node.js or Python/Django, and connecting them to databases like MySQL or MongoDB.',
  },
  {
    q: 'How can I contact you?',
    a: "You can reach me through the contact form on this site, or directly at Mannnshah2007@gmail.com. I'm also on GitHub (github.com/mann1325) and LinkedIn — links are in the footer.",
  },
];

const FAQ = () => (
  <SectionWrapper id="faq" className="relative">
    <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
    <SectionTitle
      label="Have Questions?"
      title="Technical Insights"
      subtitle="Common questions about me, my work, and what I'm looking for."
    />

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      className="max-w-3xl mx-auto"
    >
      <div
        className="glass rounded-2xl px-6 py-2"
        style={{ border: '1px solid var(--glass-border)' }}
      >
        <Accordion className="w-full">
          {ITEMS.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger
                className="text-slate-200 hover:text-white font-medium text-base py-5"
                showArrow
              >
                <span className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: 'var(--accent)22', color: 'var(--accent)' }}
                  >
                    {index + 1}
                  </span>
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionPanel className="pl-9 text-slate-400 text-sm leading-relaxed pb-5">
                {item.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  </SectionWrapper>
);

export default FAQ;
