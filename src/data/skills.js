import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiPython,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGit,
  SiLinux,
  SiDocker,
  SiPostman,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

// Brand colors keep icons recognizable in both themes.
export const skillGroups = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', Icon: SiExpress, color: '#ffffff' },
      { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'REST APIs', Icon: TbApi, color: '#22d3ee' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'SQLite', Icon: SiSqlite, color: '#003B57' },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    ],
  },
];
