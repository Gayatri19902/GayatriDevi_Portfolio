import { Injectable } from '@angular/core';

export interface Skill {
  category: string;
  icon: string;
  items: { name: string; level: number }[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  teamSize: number;
  achievements: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  readonly personal = {
    name: 'Gayatri Devi Putta',
    title: 'Angular & Frontend Developer',
    tagline: 'Building scalable, high-performance web applications',
    summary: 'Angular Developer with 2.9+ years of experience building scalable and high-performance web applications using Angular, TypeScript, HTML5, and SCSS. Experienced in translating Figma designs into reusable Angular components and developing modular UI architectures.',
    email: 'gayatridevi.putta@gmail.com',
    phone: '+91 9949581512',
    location: 'Hyderabad, India',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    availableForWork: true,
    yearsExperience: '2.9+',
    projectsCompleted: '10+',
    componentsBuilt: '30+',
    figmaConverted: '40+'
  };

  readonly skills: Skill[] = [
    {
      category: 'Frontend',
      icon: '🖥️',
      items: [
        { name: 'Angular 8–17+', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'SCSS / Sass', level: 90 },
        { name: 'JavaScript ES6+', level: 88 },
      ]
    },
    {
      category: 'Angular Core',
      icon: '⚡',
      items: [
        { name: 'RxJS / Observables', level: 88 },
        { name: 'NgRx State Mgmt', level: 80 },
        { name: 'Reactive Forms', level: 92 },
        { name: 'Lazy Loading', level: 90 },
        { name: 'Angular Signals', level: 75 },
      ]
    },
    {
      category: 'UI Frameworks',
      icon: '🎨',
      items: [
        { name: 'Bootstrap', level: 88 },
        { name: 'Nebular UI', level: 85 },
        { name: 'Figma (D2C)', level: 88 },
        { name: 'Responsive Design', level: 95 },
      ]
    },
    {
      category: 'API & Tools',
      icon: '🔧',
      items: [
        { name: 'REST API / HttpClient', level: 90 },
        { name: 'Postman / Swagger', level: 85 },
        { name: 'Git / GitHub / Bitbucket', level: 85 },
        { name: 'Jasmine / Karma', level: 75 },
      ]
    },
    {
      category: 'Performance',
      icon: '🚀',
      items: [
        { name: 'Angular SSR', level: 78 },
        { name: 'Lighthouse / Web Vitals', level: 82 },
        { name: 'Page Speed Optimization', level: 85 },
        { name: 'Core Web Vitals', level: 80 },
      ]
    },
    {
      category: 'Architecture',
      icon: '🏗️',
      items: [
        { name: 'MVVM Pattern', level: 88 },
        { name: 'Modular Architecture', level: 90 },
        { name: 'Component-Based Design', level: 95 },
        { name: 'Agile / Scrum', level: 85 },
      ]
    }
  ];

  readonly experiences: Experience[] = [
    {
      company: 'Girnar NewTel Solutions Pvt Ltd',
      role: 'Angular Developer',
      location: 'Hyderabad',
      period: 'Oct 2024 – Mar 2026',
      current: true,
      highlights: [
        'Developed 30+ dynamic and responsive UI screens/components using Angular 11+, TypeScript, HTML5, and SCSS supporting 3 enterprise-scale web applications.',
        'Converted 40+ Figma designs into pixel-perfect reusable Angular components reducing UI rework by ~25%.',
        'Created 20+ shared modules and services improving code maintainability and reusability.',
        'Integrated REST APIs using Angular HttpClient with proper error handling, loaders, and retry logic.',
        'Collaborated with backend, QA, and product teams in Agile/Scrum sprints delivering features and supporting production releases.'
      ]
    },
    {
      company: 'Synycs Group',
      role: 'Front End Developer',
      location: 'Hyderabad',
      period: 'Oct 2022 – Sep 2024',
      current: false,
      highlights: [
        'Developed and maintained Angular applications across versions 8–14 on cloud-based platforms for FSM and SFA systems.',
        'Migrated legacy Angular 8 modules to Angular 12 improving maintainability and performance.',
        'Implemented dynamic forms and complex UI workflows using Reactive Forms and RxJS.',
        'Built reusable UI components using Nebular and Bootstrap frameworks.',
        'Improved platform usage resulting in 20% increase in daily active users and 25% improvement in page load performance.'
      ]
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'OnthegO FSM & SFA Platform',
      description: 'Enterprise cloud platform supporting task management, assignment, live tracking, and prioritization workflows for field service teams. Led full UI development for the SFA module from design to production launch.',
      tech: ['Angular 8–12', 'Bootstrap', 'Figma', 'RxJS', 'NgRx', 'REST APIs'],
      teamSize: 6,
      achievements: [
        'Led UI development for the SFA module from design to launch, implementing role-based UI',
        'Integrated 15+ REST APIs for field service automation workflows',
        'Improved operational efficiency through real-time data insights and workflow automation',
        'Helped businesses reduce operational costs through an intuitive and scalable UI'
      ],
      featured: true,
      color: '#64dcb4',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Guthries IMS — Inventory Management System',
      description: 'Full-featured inventory management system with modular architecture, complex purchase order workflows, stock adjustments, and supplier management built for enterprise scale.',
      tech: ['Angular 8–12', 'Nebular', 'Reactive Forms', 'Lazy Loading', 'RxJS'],
      teamSize: 6,
      achievements: [
        'Developed modular architecture using lazy-loaded Angular modules improving scalability',
        'Built complex reactive form workflows for purchase orders, stock adjustments, and supplier management',
        'Increased user engagement by 20% (DAU) through improved UI workflows',
        'Optimized page load speed by 25% through Angular performance best practices'
      ],
      featured: true,
      color: '#a78bfa',
      githubUrl: 'https://github.com'
    },
    {
      title: 'DA-Fleet Management & Insurance',
      description: 'Customer-facing portal for an Australia-based vehicle insurance company managing commercial fleet policies. Features real-time fleet dashboards and Angular SSR for superior SEO performance.',
      tech: ['Angular 15', 'Nebular', 'JWT Auth', 'REST APIs', 'Angular SSR', 'RxJS'],
      teamSize: 4,
      achievements: [
        'Developed customer-facing portal using Angular SSR to improve SEO performance',
        'Implemented real-time fleet dashboards using RxJS streams for live vehicle data',
        'Streamlined insurance processes for commercial vehicle fleets',
        'Enhanced operational efficiency through real-time monitoring dashboards'
      ],
      featured: true,
      color: '#f472b6',
      githubUrl: 'https://github.com'
    }
  ];

  readonly education: Education[] = [
    {
      degree: 'MCA — Master of Computer Applications',
      institution: 'Andhra University',
      location: 'Visakhapatnam',
      period: '2024 – 2026',
      cgpa: '9.2',
      icon: '🎓'
    },
    {
      degree: 'BSc — Computer Science',
      institution: 'Chaitanya Degree College',
      location: 'Vizianagaram',
      period: '2019 – 2022',
      cgpa: '8.95',
      icon: '🎓'
    }
  ];

  readonly certifications = [
    {
      title: 'Front-End Web Developer',
      issuer: 'Grow Tech Jobs with Dr. Reddy\'s',
      icon: '🏆',
      color: '#fbbf24'
    }
  ];
}
