import { useState, useEffect, type ReactElement } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Rocket,
  Code,
  Smile,
  Trophy,
  Clock,
  Briefcase,
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  Globe
} from 'lucide-react';

// Import react-icons for tech stack
import { 
  SiReact, 
  SiNextdotjs, 
  SiWordpress, 
  SiPython, 
  SiDjango, 
  SiFastapi,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb
} from 'react-icons/si';

// Custom SVG Icons
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Import images (Vite resolved)
import profileImg from './assets/profile.png';
import realestateImg from './assets/realestate.png';
import pmSystemImg from './assets/pm_system.png';
import ecommerceImg from './assets/ecommerce.png';

// Client Brand SVG Logos (complete set with all projects)
const LogoIcons: Record<string, () => ReactElement> = {
  WOLTO: () => (
    <svg className="w-8 h-8 text-[#00d2ff] drop-shadow-[0_0_6px_rgba(0,210,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 8l8 8M16 8l-8 8" />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  ALBEN: () => (
    <svg className="w-8 h-8 text-[#3a86ff] drop-shadow-[0_0_6px_rgba(58,134,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20L12 4l9 16" />
      <path d="M7 14h10" />
      <path d="M12 4v16" strokeDasharray="1.5 1.5" />
    </svg>
  ),
  WAKANDA: () => (
    <svg className="w-8 h-8 text-[#dfb841] drop-shadow-[0_0_6px_rgba(223,184,65,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="7" />
      <path d="M12 9v6M9 12h6" strokeLinecap="round" />
      <path d="M10 10l4 4M14 10l-4 4" />
    </svg>
  ),
  BENIAL: () => (
    <svg className="w-8 h-8 text-[#e0bd6f] drop-shadow-[0_0_6px_rgba(224,189,111,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h6.5a4.5 4.5 0 0 1 0 9H6M6 13h7.5a4.5 4.5 0 0 1 0 9H6V4z" />
      <path d="M9 4v18" />
    </svg>
  ),
  XPERTIM: () => (
    <svg className="w-8 h-8 text-[#3878ff] drop-shadow-[0_0_6px_rgba(56,120,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M4 4l16 16M20 4L4 20" />
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  THEWAY: () => (
    <svg className="w-8 h-8 text-[#e3aa3f] drop-shadow-[0_0_6px_rgba(227,170,63,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10l8-6 8 6v10H4z" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  ALBEN_CAPITAL: () => (
    <svg className="w-8 h-8 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L3 21h18L12 3z" />
      <circle cx="12" cy="14" r="3" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  SOGREGA: () => (
    <svg className="w-8 h-8 text-[#f39c12] drop-shadow-[0_0_6px_rgba(243,156,18,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10l9-7 9 7v11H3V10z" />
      <path d="M6 10h12M12 3v18" />
    </svg>
  ),
  PAWYARD: () => (
    <svg className="w-8 h-8 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 14c2.5 0 4.5-2 4.5-4.5S14.5 5 12 5 7.5 7 7.5 9.5 9.5 14 12 14z" />
      <path d="M8 5L5 2M16 5l3-3" />
      <circle cx="10" cy="9" r="1.2" fill="currentColor" />
      <circle cx="14" cy="9" r="1.2" fill="currentColor" />
    </svg>
  ),
  JALDENTAL: () => (
    <svg className="w-8 h-8 text-[#00d2d3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4C7 8 5 11 5 15a7 7 0 0 0 14 0c0-4-2-7-2-11s-2-1-5-1-5-3-5 1z" />
    </svg>
  ),
  KARTA: () => (
    <svg className="w-8 h-8 text-[#ff4757]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
      <path d="M12 6v12M8 10h8" />
    </svg>
  ),
  HEALTH365: () => (
    <svg className="w-8 h-8 text-[#2ed573]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 10.5c0 4.69-7 11.5-7 11.5s-7-6.81-7-11.5a7 7 0 1 1 14 0z" />
      <path d="M12 7v7M9.5 10.5h5" />
    </svg>
  ),
  JOYABLE: () => (
    <svg className="w-8 h-8 text-[#ff6b6b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 2c0 2-2 2-2 4" />
      <circle cx="9" cy="11" r="1.2" fill="currentColor" />
      <circle cx="15" cy="11" r="1.2" fill="currentColor" />
      <path d="M9 15s1.5 2 3 2 3-2 3-2" />
    </svg>
  ),
  SAVALIA: () => (
    <svg className="w-8 h-8 text-[#54a0ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.25" />
    </svg>
  ),
  BIOCELERATOR: () => (
    <svg className="w-8 h-8 text-[#2e86de]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 10.5C4.5 5.5 8.5 3 12 3s7.5 2.5 7.5 7.5S15.5 18 12 18s-7.5-2.5-7.5-7.5z" />
      <path d="M12 3v15M8 7h8M6 11h12M8 15h8" />
    </svg>
  ),
  AYUDA: () => (
    <svg className="w-8 h-8 text-[#1dd1a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C7 6 5 11 5 16a7 7 0 0 0 14 0c0-5-2-10-7-14z" />
      <path d="M12 7v9" />
    </svg>
  ),
  RTGROUP: () => (
    <svg className="w-8 h-8 text-[#2e86de]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 8h6M12 8v8" />
    </svg>
  ),
  RAMI: () => (
    <svg className="w-8 h-8 text-[#10ac84]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="11" r="3.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  INFINITE: () => (
    <svg className="w-8 h-8 text-[#10ac84]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0z" strokeLinejoin="round" />
      <path d="M12 2v20M2 12h20" strokeDasharray="2 2" />
    </svg>
  ),
  RAJ: () => (
    <svg className="w-8 h-8 text-[#f1c40f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 6-8 14-8-14 8-6z" />
      <path d="M4 8h16" />
    </svg>
  ),
  VERTEX: () => (
    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20M2 12h20" />
      <path d="M12 12l7-7M12 12l-7 7" />
    </svg>
  ),
  RAMANAND: () => (
    <svg className="w-8 h-8 text-[#0a3d62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <rect x="9" y="8" width="6" height="8" rx="1" fill="currentColor" fillOpacity="0.25" />
    </svg>
  ),
  MADHURA: () => (
    <svg className="w-8 h-8 text-[#f39c12]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <circle cx="9" cy="12" r="2.5" />
      <circle cx="15" cy="12" r="2.5" />
    </svg>
  ),
  MR: () => (
    <svg className="w-8 h-8 text-[#d35400]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h6l3-6 3 12 3-6h6" />
    </svg>
  ),
  NEWDIRECTIONS: () => (
    <svg className="w-8 h-8 text-[#6c5ce7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  EVRIG: () => (
    <svg className="w-8 h-8 text-[#00b894]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  ORANGEWEB: () => (
    <svg className="w-8 h-8 text-[#fdcb6e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ANAHEIM: () => (
    <svg className="w-8 h-8 text-[#e17055]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 8v12h16V8l-8-6z" />
      <circle cx="12" cy="14" r="3" />
    </svg>
  ),
  ASTRID: () => (
    <svg className="w-8 h-8 text-[#74b9ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20z" />
      <path d="M12 2v20M2 12h20" />
    </svg>
  ),
  TLXPRIME: () => (
    <svg className="w-8 h-8 text-[#fd79a8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  PATIOPIZZA: () => (
    <svg className="w-8 h-8 text-[#e17055]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 0-10 10c0 4.5 3.5 8 8 8 2.5 0 4.8-1.2 6.2-3.1" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
  JACK59: () => (
    <svg className="w-8 h-8 text-[#a29bfe]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  SOAPSOCO: () => (
    <svg className="w-8 h-8 text-[#fd79a8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7v10M7 12h10" />
    </svg>
  ),
  NATURALLOOK: () => (
    <svg className="w-8 h-8 text-[#00b894]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z" />
      <path d="M12 6v12M6 12h12" />
    </svg>
  ),
  SWATI: () => (
    <svg className="w-8 h-8 text-[#fd79a8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  DEEPMEHTA: () => (
    <svg className="w-8 h-8 text-[#74b9ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  HOSTINGER: () => (
    <svg className="w-8 h-8 text-[#6c5ce7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10z" />
      <path d="M12 6v12M6 12h12" />
    </svg>
  ),
  VINNIE: () => (
    <svg className="w-8 h-8 text-[#00b894]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" fillOpacity="0.3" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" fillOpacity="0.3" />
    </svg>
  ),
  RAJESHPOWER: () => (
    <svg className="w-8 h-8 text-[#fdcb6e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
      <path d="M12 6v12M8 10h8" />
    </svg>
  )
};

// Complete list of all project links
const allClientLogos = [
  { name: 'WOLTO', desc: 'INTERNATIONAL', url: 'https://store.woltointernational.com', iconKey: 'WOLTO' },
  { name: 'ALBEN', desc: 'GROUP', url: 'https://albengroup.com/', iconKey: 'ALBEN' },
  { name: 'WAKANDA', desc: 'SAFARI CARE', url: 'https://wakandasafaricare.com.au/', iconKey: 'WAKANDA' },
  { name: 'BENIAL', desc: 'LUXURY BESPOKE', url: 'https://benial.ae/', iconKey: 'BENIAL' },
  { name: 'XPERTIM', desc: 'GLOBAL SYSTEM', url: 'https://xpertim.com/', iconKey: 'XPERTIM' },
  { name: 'THE WAY', desc: 'THE DESTINATION', url: 'https://theway.ae/', iconKey: 'THEWAY' },
  { name: 'ALBEN', desc: 'CAPITAL', url: 'https://albencapital.com/', iconKey: 'ALBEN_CAPITAL' },
  { name: 'SOGREGA', desc: 'CONSTRUCTION', url: 'https://www.sogrega.com/', iconKey: 'SOGREGA' },
  { name: 'PAWYARD', desc: 'ANIMAL CLINIC', url: 'https://pawyard.com/', iconKey: 'PAWYARD' },
  { name: 'JAL DENTAL', desc: 'CRAFTING SMILES', url: 'https://jaldental.com/', iconKey: 'JALDENTAL' },
  { name: 'KARTA', desc: 'MOTORWERKS', url: 'https://kartamotorwerks.com/', iconKey: 'KARTA' },
  { name: '365', desc: 'HEALTH', url: 'https://365health.global/', iconKey: 'HEALTH365' },
  { name: 'JOYABLE', desc: 'FOODS', url: 'https://joyablefoods.com/', iconKey: 'JOYABLE' },
  { name: 'SAVALIA', desc: 'EYE HOSPITAL', url: 'https://savaliaeyehospital.creatofox.in/', iconKey: 'SAVALIA' },
  { name: 'BIOCELERATOR', desc: 'BIOTECHNOLOGY', url: 'https://biocelerator.eu/', iconKey: 'BIOCELERATOR' },
  { name: 'AYUDA', desc: 'ORGANICS', url: 'https://www.ayudaorganics.com/', iconKey: 'AYUDA' },
  { name: 'RT GROUP', desc: 'SINCE 1990', url: 'https://rtgroupindia.com/icartilage/', iconKey: 'RTGROUP' },
  { name: 'RAMI', desc: 'BROTHERS', url: 'https://ramibrothers.com/', iconKey: 'RAMI' },
  { name: 'INFINITE', desc: 'ELEMENTS', url: 'https://infiniteelements.co.in/', iconKey: 'INFINITE' },
  { name: 'RAJ', desc: 'JEWELLERY', url: 'https://rajjewellery.co/', iconKey: 'RAJ' },
  { name: 'VERTEX', desc: 'AIR SYSTEMS', url: 'https://vertexairsystems.com/', iconKey: 'VERTEX' },
  { name: 'RAMANAND', desc: 'POLY', url: 'https://ramanandpoly.com/', iconKey: 'RAMANAND' },
  { name: 'MADHURA', desc: 'COMPRESSORS', url: 'https://madhuracompressors.com/', iconKey: 'MADHURA' },
  { name: 'MR', desc: 'ORGANISATION', url: 'https://mrorganisation.com/', iconKey: 'MR' },
  { name: 'NEW DIRECTIONS', desc: 'AROMATICS', url: 'https://blog.newdirectionsaromatics.xyz/', iconKey: 'NEWDIRECTIONS' },
  { name: 'EVRIG', desc: 'BUSINESS APP', url: 'https://abcapp.biz/evrig/', iconKey: 'EVRIG' },
  { name: 'ORANGE WEB', desc: 'MARKETING', url: 'https://orangewebgroup.com/digital-marketing/', iconKey: 'ORANGEWEB' },
  { name: 'ANAHEIM', desc: 'BRAKE REPAIR', url: 'https://anaheim-brake-repair.test', iconKey: 'ANAHEIM' },
  { name: 'ASTRID', desc: 'WEB TECHNOLOGY', url: 'https://astridwebtechnology', iconKey: 'ASTRID' },
  { name: 'TLX', desc: 'PRIME', url: 'https://tlxprime.com/', iconKey: 'TLXPRIME' },
  { name: 'PATIO', desc: 'AND PIZZA', url: 'https://www.patioandpizza.com/', iconKey: 'PATIOPIZZA' },
  { name: 'JACK59', desc: 'HAIR CARE', url: 'https://www.jack59.ca/', iconKey: 'JACK59' },
  { name: 'SOAP', desc: 'SO CO', url: 'https://soapsoco.com/', iconKey: 'SOAPSOCO' },
  { name: 'NATURAL', desc: 'LOOK', url: 'https://naturallook.com.au/', iconKey: 'NATURALLOOK' },
  { name: 'SWATI', desc: 'PANCHAL', url: 'https://swatipanchal.com/', iconKey: 'SWATI' },
  { name: 'DEEP', desc: 'MEHTA', url: 'https://imdeepmehta.com', iconKey: 'DEEPMEHTA' },
  { name: 'HOSTINGER', desc: 'PROJECT', url: 'https://purple-ostrich-208409.hostingersite.com/', iconKey: 'HOSTINGER' },
  { name: 'VINNIE', desc: 'NUT WORLD', url: 'https://vinnienutworld.com/', iconKey: 'VINNIE' },
  { name: 'RAJESH', desc: 'POWER', url: 'https://rajeshpower.com/', iconKey: 'RAJESHPOWER' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Handle scroll section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get display projects - first 10 or all
  const displayProjects = showAllProjects ? allClientLogos : allClientLogos.slice(0, 10);

  return (
    <div className="min-h-screen bg-[#02020f] text-white overflow-hidden relative selection:bg-brand-purple selection:text-white">
      {/* Background glowing decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />

      {/* STICKY HEADER & NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#02020e]/80 backdrop-blur-md border-b border-[#14142f]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-brand-purple/20">
              NK
            </div>
            <span className="font-sans font-bold text-lg tracking-wider bg-gradient-to-r from-white to-[#b0b0c5] bg-clip-text text-transparent">
              NEEL KHANT
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-text-muted">
            {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`capitalize transition-colors hover:text-white relative py-2 cursor-pointer ${activeSection === item ? 'text-white font-semibold' : ''
                  }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-blue rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* Let's Talk CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90 shadow-md shadow-brand-purple/20 hover:shadow-brand-purple/40 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#050515]/95 border-b border-[#14142f] py-6 px-6 absolute top-20 left-0 w-full flex flex-col space-y-4 animate-fade-in-down">
            {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`capitalize text-left text-lg py-2 ${activeSection === item ? 'text-brand-purple font-semibold' : 'text-text-muted'
                  }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="w-full py-3 mt-2 rounded-xl text-center text-sm font-semibold bg-gradient-to-r from-brand-purple to-brand-blue"
            >
              Let's Talk
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Column 1: Copywriting Headlines */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="inline-flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/20 border border-brand-purple/30 text-purple-300">
              Full-Stack Developer
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            I Build Scalable <br />
            <span className="bg-gradient-to-r from-brand-purple via-[#d866a6] to-brand-blue bg-clip-text text-transparent">
              Web Solutions
            </span>
          </h1>

          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-lg">
Full Stack Developer with 2.5+ years of experience building scalable web applications, eCommerce platforms, and business solutions using React.js, Next.js, Python, FastAPI, Django, Node.js, MongoDB, MySQL, PostgreSQL, WordPress, and Shopify. Experienced in developing end-to-end applications, REST APIs, and AI-powered solutions.          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-brand-purple to-brand-blue hover:scale-105 shadow-lg shadow-brand-purple/30 hover:shadow-brand-purple/50 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>Hire Me</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3.5 rounded-full font-semibold border border-[#14142f] bg-[#050515]/60 hover:bg-[#14142f] hover:border-text-muted transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>View Projects</span>
              <span className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-white" />
                <span className="w-1.5 h-1.5 rounded-sm bg-white" />
                <span className="w-1.5 h-1.5 rounded-sm bg-white" />
                <span className="w-1.5 h-1.5 rounded-sm bg-white" />
              </span>
            </button>
          </div>
        </div>

        {/* Column 2: Orbit Avatar */}
        <div className="lg:col-span-4 flex items-center justify-center relative py-12">
          {/* External Rotating Orbit Ring */}
          <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-dashed border-[#14142f] absolute flex items-center justify-center animate-spin-slow">
            {/* Floating Orbiting Icons - Using react-icons */}
            <div className="absolute top-0 transform -translate-y-1/2 p-2 bg-[#050515] border border-[#14142f] rounded-full shadow-lg animate-spin-reverse flex items-center justify-center">
              <SiReact className="w-6 h-6 text-[#61DAFB]" />
            </div>
            <div className="absolute right-0 transform translate-x-1/2 p-2 bg-[#050515] border border-[#14142f] rounded-full shadow-lg animate-spin-reverse flex items-center justify-center">
              <SiWordpress className="w-6 h-6 text-[#21759b]" />
            </div>
            <div className="absolute bottom-0 transform translate-y-1/2 p-2 bg-[#050515] border border-[#14142f] rounded-full shadow-lg animate-spin-reverse flex items-center justify-center">
              <SiPython className="w-6 h-6 text-[#3776AB]" />
            </div>
            <div className="absolute left-0 transform -translate-x-1/2 p-2 bg-[#050515] border border-[#14142f] rounded-full shadow-lg animate-spin-reverse flex items-center justify-center">
              <SiNextdotjs className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Central Avatar Frame */}
          <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue p-[3px] shadow-xl shadow-brand-purple/20 relative z-10">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#050515] flex items-center justify-center">
              <img
                src={profileImg}
                alt="Neel Khant Avatar"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Column 3: Contact Sidebar Card */}
        <div id="about" className="lg:col-span-3 bg-[#050515] border border-[#14142f] p-6 rounded-2xl flex flex-col space-y-6 shadow-xl relative z-10">
          <h3 className="font-bold text-lg tracking-wide text-white border-b border-[#14142f] pb-3">
            Let's Connect
          </h3>

          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-brand-purple mt-0.5 shrink-0" />
              <div className="break-all">
                <p className="text-xs text-text-muted">Email</p>
                <a href="mailto:neelkhant1803@gmail.com" className="text-sm font-medium hover:text-brand-blue transition-colors">
                  neelkhant1803@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-brand-purple mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-text-muted">Phone</p>
                <a href="tel:+919408252962" className="text-sm font-medium hover:text-brand-blue transition-colors">
                  +91 9408252962
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-brand-purple mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-text-muted">Location</p>
                <p className="text-sm font-medium">India</p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 pt-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-green-400">Available for Freelance</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-[#14142f]">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl border border-[#14142f] bg-[#02020f]/60 hover:bg-[#14142f] text-text-muted hover:text-white hover:scale-110 hover:shadow-md hover:shadow-brand-purple/20 transition-all duration-300"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl border border-[#14142f] bg-[#02020f]/60 hover:bg-[#14142f] text-text-muted hover:text-white hover:scale-110 hover:shadow-md hover:shadow-brand-purple/20 transition-all duration-300"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://portfolio.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl border border-[#14142f] bg-[#02020f]/60 hover:bg-[#14142f] text-text-muted hover:text-white hover:scale-110 hover:shadow-md hover:shadow-brand-purple/20 transition-all duration-300"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#050515] border border-[#14142f] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#14142f]">
          <div className="flex items-center space-x-4 pb-6 md:pb-0 md:px-4">
            <div className="p-3.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shadow-sm shadow-brand-purple/10">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">30+</h4>
              <p className="text-xs text-text-muted">Projects Completed</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-6 md:pt-0 md:px-4">
            <div className="p-3.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue shadow-sm shadow-brand-blue/10">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">5+</h4>
              <p className="text-xs text-text-muted">Custom Plugins</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-6 md:pt-0 md:px-4">
            <div className="p-3.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shadow-sm shadow-brand-purple/10">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">20+</h4>
              <p className="text-xs text-text-muted">Happy Clients</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-6 md:pt-0 md:px-4">
            <div className="p-3.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue shadow-sm shadow-brand-blue/10">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">2.5+</h4>
              <p className="text-xs text-text-muted">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Intro */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            MY SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            What I Can Do for You
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-sm">
            I provide end-to-end digital solutions, including custom web application development, AI-powered solutions, WordPress and Shopify development, API integrations, application maintenance, performance optimization, security enhancements, and ongoing technical support. From concept to deployment, I build scalable and reliable solutions tailored to business needs.
          </p>
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Hourly Basis */}
          <div className="bg-[#050515] border border-[#14142f] p-8 rounded-2xl flex flex-col space-y-6 hover:border-brand-purple/50 hover:shadow-lg hover:shadow-brand-purple/5 transition-all duration-300 group">
            <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-white">Hourly Basis</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Perfect for ongoing work, maintenance, or continuous development.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="text-sm font-semibold text-brand-purple hover:text-brand-purple/80 flex items-center space-x-1 cursor-pointer group"
              >
                <span>Custom Quote</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Project Basis */}
          <div className="bg-[#050515] border border-[#14142f] p-8 rounded-2xl flex flex-col space-y-6 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 group">
            <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-white">Project Basis</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Fixed-price for well-defined projects with clear requirements.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="text-sm font-semibold text-brand-blue hover:text-brand-blue/80 flex items-center space-x-1 cursor-pointer group"
              >
                <span>Custom Quote</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK / CLIENT LOGOS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side Info */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            FEATURED WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Some of My Recent Work
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-sm">
            A collection of websites and web applications I've built for clients across the globe.
          </p>
          <div className="pt-4">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-full font-semibold border border-[#14142f] bg-[#050515]/60 hover:bg-[#14142f] transition-all duration-300 flex items-center space-x-2 text-sm cursor-pointer group"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side Logo Grid - Shows only first 10 or all */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayProjects.map((logo, index) => {
              const IconComponent = LogoIcons[logo.iconKey as keyof typeof LogoIcons];
              return (
                <a
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="bg-[#050515]/40 border border-[#14142f] rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-[#050515] hover:border-brand-purple/25 hover:scale-105 transition-all duration-300 h-24 group"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="text-text-muted group-hover:text-brand-purple transition-colors duration-300 shrink-0 flex items-center justify-center">
                      {IconComponent ? <IconComponent /> : null}
                    </div>
                    <span className="font-extrabold text-xs tracking-wider text-[#d1d1eb] group-hover:text-white transition-colors duration-300 break-words">
                      {logo.name}
                    </span>
                  </div>
                  <span className="text-[8px] font-bold text-text-muted tracking-wider uppercase mt-1.5 group-hover:text-brand-blue transition-colors duration-300">
                    {logo.desc}
                  </span>
                </a>
              );
            })}
          </div>

          {/* View More / Show Less Button */}
          {allClientLogos.length > 10 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-3 rounded-full font-semibold border border-[#14142f] bg-[#050515]/60 hover:bg-[#14142f] transition-all duration-300 flex items-center space-x-2 text-sm cursor-pointer group"
              >
                <span>{showAllProjects ? 'Show Less' : `View More (${allClientLogos.length - 10} more)`}</span>
                <ArrowRight size={16} className={`group-hover:translate-x-1 transition-transform ${showAllProjects ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* MY PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side Header */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            MY PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            My Own Projects
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-sm">
            Products I've built to solve real problems and explore new ideas.
          </p>
          <div className="pt-4">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-full font-semibold border border-[#14142f] bg-[#050515]/60 hover:bg-[#14142f] transition-all duration-300 flex items-center space-x-2 text-sm cursor-pointer group"
            >
              <span>View Details</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side Project Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Real Estate Platform */}
          <div className="bg-[#050515] border border-[#14142f] rounded-2xl overflow-hidden shadow-xl hover:border-brand-purple/40 hover:shadow-brand-purple/5 transition-all duration-300 flex flex-col h-full group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={realestateImg}
                alt="Real Estate Platform Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 p-2 bg-[#02020f]/80 backdrop-blur-sm border border-[#14142f] rounded-xl text-white hover:text-brand-purple cursor-pointer">
                <ExternalLink size={14} />
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-white group-hover:text-brand-purple transition-colors">Real Estate Platform</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  A modern real estate platform built with React.js featuring AI chatbot, price prediction, loan calculator, subscription plans and theme customization.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#14142f]">
                {['React.js', 'AI/ML', 'Tailwind CSS'].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold bg-[#14142f] text-text-muted px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Project Management System */}
          <div className="bg-[#050515] border border-[#14142f] rounded-2xl overflow-hidden shadow-xl hover:border-brand-blue/40 hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col h-full group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={pmSystemImg}
                alt="Project Management System Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 p-2 bg-[#02020f]/80 backdrop-blur-sm border border-[#14142f] rounded-xl text-white hover:text-brand-blue cursor-pointer">
                <ExternalLink size={14} />
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-white group-hover:text-brand-blue transition-colors">Project Management System</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  A full-featured PMS built with Django and React. Includes client hour approvals, milestone tracking, role-based access and real-time dashboards.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#14142f]">
                {['Django', 'React.js', 'PostgreSQL'].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold bg-[#14142f] text-text-muted px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: E-Commerce Platform */}
          <div className="bg-[#050515] border border-[#14142f] rounded-2xl overflow-hidden shadow-xl hover:border-brand-purple/40 hover:shadow-brand-purple/5 transition-all duration-300 flex flex-col h-full group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={ecommerceImg}
                alt="E-Commerce Platform Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 p-2 bg-[#02020f]/80 backdrop-blur-sm border border-[#14142f] rounded-xl text-white hover:text-brand-purple cursor-pointer">
                <ExternalLink size={14} />
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-white group-hover:text-brand-purple transition-colors">E-Commerce Platform</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  A complete e-commerce solution with product management, cart, payments, order tracking and admin analytics built using modern technologies.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#14142f]">
                {['Next.js', 'Stripe', 'MongoDB'].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold bg-[#14142f] text-text-muted px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES WE USE */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-[#14142f]">
        <div className="flex flex-col space-y-2 mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
            TECHNOLOGIES I USE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            My Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {[
            { name: 'React.js', icon: <SiReact className="w-12 h-12 text-[#61DAFB]" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-white" /> },
            { name: 'WordPress', icon: <SiWordpress className="w-12 h-12 text-[#21759b]" /> },
            { name: 'Python', icon: <SiPython className="w-12 h-12 text-[#3776AB]" /> },
            { name: 'Django', icon: <SiDjango className="w-12 h-12 text-[#092e20]" /> },
            { name: 'FastAPI', icon: <SiFastapi className="w-12 h-12 text-[#059669]" /> },
            { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12 text-[#F7DF1E]" /> },
            { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-[#3178C6]" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-[#38BDF8]" /> },
            { name: 'MySQL', icon: <SiMysql className="w-12 h-12 text-[#00758F]" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12 text-[#336791]" /> },
            { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-[#4DB33D]" /> }
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-[#050515] border border-[#14142f] rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 hover:border-brand-purple/30 hover:scale-105 hover:shadow-md hover:shadow-brand-purple/5 transition-all duration-300 group cursor-pointer"
            >
              <div className="p-3.5 rounded-2xl bg-[#02020f]/80 border border-[#14142f] group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="font-bold text-sm text-[#d1d1eb] group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CALL TO ACTION & FORM */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-gradient-to-br from-[#050518] to-[#0a0a2f] border border-[#14142f] rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative overflow-hidden shadow-2xl">
          {/* Neon gradient mesh bg */}
          <div className="absolute top-[-30%] right-[-10%] w-[350px] h-[350px] bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-35%] left-[5%] w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Column: Form / Info */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 relative z-10">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
                LET'S WORK TOGETHER
              </span>
              <h2 className="text-3xl md:text-5xl font-black">
                Have a <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Project</span> in Mind?
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl">
                I'm open to exciting projects and collaborations. Let's build something amazing together!
              </p>
            </div>

            {/* Quick Contact Form */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:neelkhant1803@gmail.com"
                className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90 shadow-md shadow-brand-purple/20 hover:scale-102 transition-all duration-300 flex items-center space-x-2 cursor-pointer text-sm"
              >
                <Mail size={16} />
                <span>Send Email</span>
              </a>

              <a
                href="https://wa.me/919408252962?text=Hi%20Neel%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%20Can%20we%20connect%3F"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl font-bold border border-[#14142f] bg-[#02020f]/60 hover:bg-[#14142f] hover:border-green-500/30 hover:scale-102 transition-all duration-300 flex items-center space-x-2 cursor-pointer text-sm"
              >
                <MessageSquare size={16} className="text-green-500" />
                <span>WhatsApp Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Details Display */}
          <div className="lg:col-span-5 bg-[#050515]/60 border border-[#14142f] rounded-2xl p-6 md:p-8 flex flex-col justify-center space-y-6 relative z-10 backdrop-blur-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-text-muted font-bold tracking-wider uppercase mb-1">Email</p>
                <a href="mailto:neelkhant1803@gmail.com" className="font-bold text-sm md:text-base hover:text-brand-blue transition-colors break-all">
                  neelkhant1803@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-text-muted font-bold tracking-wider uppercase mb-1">Phone</p>
                <a href="tel:+919408252962" className="font-bold text-sm md:text-base hover:text-brand-purple transition-colors">
                  +91 9408252962
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-text-muted font-bold tracking-wider uppercase mb-1">Location</p>
                <p className="font-bold text-sm md:text-base">
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COPYRIGHT & FOOTER BAR */}
      <footer className="border-t border-[#14142f] bg-[#02020c]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-center text-xs text-text-muted space-y-4 md:space-y-0">
          <p>© 2026 Neel Khant. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}