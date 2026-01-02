import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    title: 'Fixlet',
    description: 'An AI-powered code reviewer that analyzes submitted code and provides actionable suggestions, best practices, and quality improvements to help developers write cleaner, more maintainable software.',
    stack: ['React', 'NodeJS', 'Gemini API SDK', 'Express'],
    links: {
      github: 'https://github.com/aria-labs/daily-docket',
      live: 'https://daily-docket.vercel.app',
    },
    status: 'shipped',
  },
  {
    title: 'Textro',
    description: 'A sleek chatting application built for seamless and secure conversations with your friends.',
    stack: ['React', 'Socket.IO', 'Tailwind CSS', 'NodeJS', 'Express', 'MongoDB','cloudinary', 'JWT'],
    links: {
      github: 'https://github.com/Scoutersq/realtime-chat-app',
      live: 'https://realtime-chat-app-c69ue.sevalla.app/login',
    },
    status: 'shipped',
  },
  {
    title: 'Campus Connect',
    description: 'CampusConnect is an ambitious platform designed to unify students across every college in India. It bridges the gaps left by scattered tools like WhatsApp, LinkedIn, and traditional campus ERPs, bringing networking, academic resources, and campus life together on a single, secured digital platform..',
    stack: ['React', 'Vite', 'Chart.js', 'Tailwind'],
    links: {
      github: 'https://github.com/Scoutersq/campus-connect',
      live: 'https://campus-connect-a8od.vercel.app/',
    },
    status: 'in-progress',
  },
  {
    title: 'K72.ca Clone',
    description: 'K72.ca Website Clone is a pixel-perfect, fully responsive remake of the acclaimed K72.ca agency website. Built to showcase advanced front-end skills, this project faithfully reproduces the original site  design, smooth animations, and cross-browser compatibility using modern web technologies.',
    stack: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
    links: {
      github: 'https://github.com/Scoutersq/k72-clone',
      live: 'https://k72-clone.vercel.app/',
    },
    status: 'shipped',
  },
]
