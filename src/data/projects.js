// `featured` projects render as large cards; others as compact cards.
// `media` (optional) is a video shown on hover / in the card.
export const projects = [
  {
    title: 'Anchor Elite Marine Services',
    subtitle: 'Corporate Website',
    slug: 'anchor-elite',
    category: 'Frontend',
    featured: true,
    description:
      'Responsive, production-ready corporate website built with React. Reusable component system, clean UI aligned with brand, optimized performance and cross-browser compatibility.',
    tech: ['React', 'JavaScript', 'Responsive UI'],
    live: 'https://anchorelitemarineservices.com',
    repo: '',
  },
  {
    title: 'Rentopia',
    subtitle: 'Booking & Workflow System',
    slug: 'rentopia',
    category: 'Full Stack',
    featured: true,
    description:
      'MERN-based internal system to manage bookings and business workflows. Designed the architecture, handled production deployment, and iterated on usability and performance.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    live: 'https://heneishrentopia.tech',
    repo: '',
  },
  {
    title: 'Speed E-Service',
    subtitle: 'Business Operations Platform',
    slug: 'speed-e-service',
    category: 'Full Stack',
    featured: true,
    description:
      'Enhanced and maintained a Laravel platform for business operations — improved performance, usability and database efficiency, and shipped an advanced permission-management simplification layer on top of the existing system without touching core logic.',
    tech: ['Laravel', 'PHP', 'MySQL'],
    live: 'https://speedeservice.com',
    repo: 'https://github.com/ahmed-ramadan-professional/advanced-permission-management-simplification-layer',
  },
  {
    title: 'Direct Scanner Access for Web Apps',
    subtitle: 'Browser ↔ Hardware Bridge',
    slug: 'direct-scanner',
    category: 'Systems',
    featured: false,
    description:
      'Multi-layered system enabling real-time document scanning straight from the browser — a Laravel web app, a custom Chrome extension, and a Python CLI built on TWAIN drivers to bridge web tech and physical scanner hardware.',
    tech: ['Laravel', 'Chrome Extension', 'Python', 'TWAIN'],
    media: '/scanner-demo.mp4',
    live: '',
    repo: 'https://github.com/ahmed-ramadan-professional/direct-scanner-access-for-web-applications',
  },
  {
    title: 'Secure Word & PDF Generator',
    subtitle: 'Automated Document System',
    slug: 'secure-word-pdf',
    category: 'Systems',
    featured: false,
    description:
      'Automated Microsoft Word document generation and distribution in Laravel — structured reports from user data converted into secure, tamper-proof PDFs for standardized organizational use.',
    tech: ['Laravel', 'PHP', 'PDF'],
    live: '',
    repo: 'https://github.com/ahmed-ramadan-professional/secure-automated-microsoft-word-document-generation-and-pdf-processing-system',
  },
  {
    title: 'Smart Community',
    subtitle: 'Graduation Project',
    slug: 'smart-community',
    category: 'Full Stack',
    featured: false,
    description:
      'Led a team to build an integrated system: centralized server, website, mobile app and embedded devices — attendance tracking, location services, gate access, announcements, task management and real-time messaging. Owned the full lifecycle from architecture to deployment.',
    tech: ['Web', 'Mobile', 'IoT', 'Real-time'],
    live: '',
    repo: 'https://github.com/ahmed-ramadan-professional/smart-community-for-enhanced-efficiency-and-collaboration',
  },
];

export const utilities = [
  {
    title: 'VS Code Right-Click Context Menu Utility',
    description:
      'Add or remove an "Open with VS Code" entry in the Windows File Explorer right-click menu — open any folder in VS Code with one click.',
    repo: 'https://github.com/ahmed-ramadan-professional/vs-code-right-click-context-menu-utility',
  },
  {
    title: 'Windows 11 Context Menu Switcher',
    description:
      'Switch between the classic Windows 10 context menu and the new Windows 11 context menu instantly.',
    repo: 'https://github.com/ahmed-ramadan-professional/windows-11-context-menu-switcher-utility',
  },
];
