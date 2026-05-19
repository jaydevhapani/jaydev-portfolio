export const personalInfo = {
  name: 'Jaydev Hapani',
  roles: [
    'Senior React Native Developer',
    'Mobile Team Lead',
    'Cross-Platform Expert',
    'AI-Powered Developer',
  ],
  email: 'hapanijaydev04@gmail.com',
  phone: '+91 81282 46008',
  location: 'Ahmedabad, India',
  linkedin: 'https://linkedin.com/in/hapani-jaydev-33a34b20a',
  github: 'https://github.com/jaydevhapani',
  resumeUrl: '/resume.pdf',
  summary:
    'Results-driven React Native Developer and Mobile Team Lead with 5+ years of experience building, scaling, and leading cross-platform mobile applications for Android and iOS. Expert in React Native architecture, performance optimisation, CI/CD, and end-to-end app lifecycle management. Proficient in leveraging AI tools to accelerate development, improve code quality, and deliver smarter solutions.',
  languages: ['English', 'Hindi', 'Gujarati'],
  education: {
    degree: 'Bachelor of Science (B.Sc.) – Computer Science',
    institution: 'IIMT, Delhi',
    year: '2021',
  },
}

export const stats = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Projects Delivered', value: 19, suffix: '+' },
  { label: 'Companies', value: 4, suffix: '' },
  { label: 'Awards Won', value: 3, suffix: '' },
]

export interface Experience {
  id: number
  role: string
  company: string
  location: string
  period: string
  current: boolean
  color: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Mobile Team Lead',
    company: 'Webs Optimization Pvt. Ltd.',
    location: 'Ahmedabad',
    period: 'Apr 2024 – May 2026',
    current: true,
    color: '#7c3aed',
    points: [
      'Technical Lead for Callyzer Pro — a live B2B call management & analytics Android app used by paying business clients.',
      'Author Functional Specification Documents (FSDs) for all features; run kickoff meetings to align QA and developers.',
      'Conduct daily code reviews — enforce quality standards, remove redundant code, and provide written feedback.',
      'Manage Git branching strategy: validate feature branches and merge QA-signed-off code into the development branch.',
      'Own Firebase project (Crashlytics, Analytics, Remote Config, FCM) — monitor ANRs and crashes; drive fixes post-release.',
      'Manage Google Play Console end-to-end: Beta and Production deployments, version documentation, release notes.',
      'Engage with CEO on product roadmap; translate business goals into actionable delivery plans.',
      'Conduct technical interviews, mentor junior developers, and train React Native interns.',
      'Collaborate with sales team to triage client issues — classify as usage, config, or technical bugs within SLAs.',
      'Architect scalable mobile solutions and maintain CI/CD pipelines to reduce release cycles.',
    ],
  },
  {
    id: 2,
    role: 'Senior Mobile Developer',
    company: 'Seven SquareTech Pvt. Ltd.',
    location: 'Ahmedabad',
    period: 'Jan 2023 – Mar 2024',
    current: false,
    color: '#06b6d4',
    points: [
      'Developed and optimised high-performance React Native applications; led key modules and mentored junior developers.',
      'Implemented advanced state management and deep REST API / Firebase integrations across multiple production releases.',
      'Consistently improved app stability and performance — awarded Star Performance Award.',
    ],
  },
  {
    id: 3,
    role: 'Junior Mobile Developer',
    company: 'ManekTech Pvt. Ltd.',
    location: 'Ahmedabad',
    period: 'Dec 2021 – Dec 2022',
    current: false,
    color: '#f59e0b',
    points: [
      'Built and maintained React Native apps; integrated REST APIs and Firebase services.',
      'Delivered client projects under tight deadlines — received Client Appreciation & Outstanding Performance Award.',
    ],
  },
  {
    id: 4,
    role: 'Junior Mobile Developer',
    company: 'iFlair Pvt. Ltd.',
    location: 'Ahmedabad',
    period: 'Dec 2020 – Dec 2021',
    current: false,
    color: '#10b981',
    points: [
      'Began professional career as a React Native Developer — built strong fundamentals in mobile architecture, debugging, and deployment.',
      'Contributed to Android & iOS application releases from development through to store submission.',
    ],
  },
]

export interface Skill {
  name: string
  level: number
}

export const skillCategories: Record<string, Skill[]> = {
  Mobile: [
    { name: 'React Native', level: 98 },
    { name: 'Android', level: 90 },
    { name: 'iOS', level: 85 },
    { name: 'Play Store', level: 95 },
    { name: 'App Store', level: 88 },
    { name: 'In-App Purchases', level: 88 },
  ],
  Languages: [
    { name: 'JavaScript (ES6+)', level: 96 },
    { name: 'TypeScript', level: 90 },
  ],
  'State & Data': [
    { name: 'Redux', level: 92 },
    { name: 'Context API', level: 90 },
    { name: 'TanStack Query', level: 85 },
    { name: 'SQLite', level: 80 },
    { name: 'Realm DB', level: 78 },
    { name: 'WatermelonDB', level: 75 },
  ],
  'Backend & Cloud': [
    { name: 'REST APIs', level: 92 },
    { name: 'Firebase (Full Suite)', level: 90 },
    { name: 'Google Play Billing', level: 85 },
    { name: 'RevenueCat', level: 82 },
    { name: 'OneSignal', level: 80 },
  ],
  'AI Tools': [
    { name: 'Claude (Anthropic)', level: 92 },
    { name: 'GitHub Copilot', level: 88 },
    { name: 'ChatGPT', level: 87 },
    { name: 'Gemini', level: 80 },
    { name: 'DeepSeek', level: 78 },
  ],
  DevOps: [
    { name: 'Git & GitHub', level: 92 },
    { name: 'CI/CD Pipelines', level: 85 },
    { name: 'Performance Optimisation', level: 90 },
    { name: 'Crash & ANR Debugging', level: 88 },
    { name: 'Firebase Crashlytics', level: 90 },
  ],
  Leadership: [
    { name: 'Technical Architecture', level: 90 },
    { name: 'FSD Authoring', level: 88 },
    { name: 'Code Review', level: 95 },
    { name: 'Sprint Planning', level: 85 },
    { name: 'Team Mentorship', level: 90 },
  ],
}

export interface Project {
  id: number
  name: string
  country: string
  domain: string
  role: string
  roleType: 'lead' | 'developer'
  tech: string[]
  description: string
  color: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Callyzer Pro',
    country: 'India',
    domain: 'Call Utility / B2B',
    role: 'Lead App Developer',
    roleType: 'lead',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Play Billing'],
    description:
      'B2B call management & analytics platform for businesses to monitor, manage and analyse phone call activity of their sales teams. Features call logs, duration tracking, analytics, and subscription management.',
    color: '#7c3aed',
  },
  {
    id: 2,
    name: 'Eyes on Score',
    country: '—',
    domain: 'Sports',
    role: 'Lead App Developer',
    roleType: 'lead',
    tech: ['React Native'],
    description:
      'Sports archive application for browsing and tracking historical sports data, scores, and match records. Built for sports enthusiasts to access comprehensive archived sports content.',
    color: '#06b6d4',
  },
  {
    id: 3,
    name: 'You Spin',
    country: 'Africa',
    domain: 'Music',
    role: 'Lead App Developer',
    roleType: 'lead',
    tech: ['React Native', 'Firebase', 'OneSignal', 'RevenueCat'],
    description:
      'Music application for listening, downloading, and subscribing to music content. Integrated RevenueCat for subscription management and OneSignal for push notifications.',
    color: '#f59e0b',
  },
  {
    id: 4,
    name: 'Anime',
    country: 'China',
    domain: 'Video Streaming',
    role: 'Lead App Developer',
    roleType: 'lead',
    tech: ['React Native', 'Firebase', 'Redux'],
    description:
      'Anime-watching application with user subscriptions, content downloads, and language customisation options.',
    color: '#ef4444',
  },
  {
    id: 5,
    name: 'Foodies',
    country: 'UK',
    domain: 'Food Delivery',
    role: 'Lead App Developer',
    roleType: 'lead',
    tech: ['React Native', 'Firebase', 'Redux', 'Google Maps'],
    description:
      'Food delivery application with user-friendly ordering features, real-time tracking via Google Maps, and Firebase integration.',
    color: '#10b981',
  },
  {
    id: 6,
    name: '2Link',
    country: '—',
    domain: 'Dating / Social',
    role: 'Lead App Developer',
    roleType: 'lead',
    tech: ['React Native'],
    description:
      'Dating application connecting users based on interests and preferences. Features profile creation, smart matching, and in-app messaging for meaningful connections.',
    color: '#ec4899',
  },
  {
    id: 7,
    name: 'Bluebird',
    country: '—',
    domain: 'Social Media',
    role: 'Lead App Developer',
    roleType: 'lead',
    tech: ['React Native', 'AI Content Moderation'],
    description:
      'Twitter-like social media platform with advanced AI-powered content moderation that automatically detects and blocks sexual content, hate speech, and policy-violating posts.',
    color: '#3b82f6',
  },
  {
    id: 8,
    name: 'Good Talk',
    country: 'Africa',
    domain: 'Media / Motivation',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Firebase', 'Redux', 'RevenueCat'],
    description:
      'Motivational video application with features like liking, sharing, commenting, and Instagram reel sharing. Integrated RevenueCat for subscriptions.',
    color: '#8b5cf6',
  },
  {
    id: 9,
    name: 'Healthcare App',
    country: 'USA',
    domain: 'Medical',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Firebase'],
    description:
      'Health monitoring application for checking family health, storing medical data, tablet schedules, and full-body scanning.',
    color: '#06b6d4',
  },
  {
    id: 10,
    name: 'Mingora',
    country: 'In House',
    domain: 'Hotel Management',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Firebase', 'Redux', 'Stripe'],
    description:
      'Hotel booking application for tables, rooms, and food orders. Features online payments, order tracking on Google Maps, chat functionality, and Stripe integration.',
    color: '#f59e0b',
  },
  {
    id: 11,
    name: 'Expo Transporter',
    country: 'USA',
    domain: 'Logistics',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native Expo'],
    description:
      'Ship transporter application monitoring containers, temperature, and shipment details. Operated in offline mode with in-app purchase functionality.',
    color: '#10b981',
  },
  {
    id: 12,
    name: 'PriceMice',
    country: 'USA',
    domain: 'E-Commerce',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Stripe'],
    description:
      'Consumer buying platform empowering individuals with purchasing power, addressing the need for affordable products and services.',
    color: '#7c3aed',
  },
  {
    id: 13,
    name: 'GBS User App',
    country: 'India',
    domain: 'Enterprise Communication',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Firebase', 'Redux'],
    description:
      'Intranet enterprise communication app with chat rooms, messaging, audio/video sharing, role-defined channels, and Firebase push notifications.',
    color: '#ef4444',
  },
  {
    id: 14,
    name: 'Ecompendium',
    country: 'Australia',
    domain: 'Hotel Management',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Firebase', 'Redux'],
    description:
      'Two companion applications (Guest & Staff) for hotel management domain, covering guest services and staff operations.',
    color: '#06b6d4',
  },
  {
    id: 15,
    name: 'Book My Temple',
    country: 'India',
    domain: 'Booking',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Firebase', 'Redux'],
    description:
      'Booking application focused on temples, functions, and prayer sheets with online reservation features.',
    color: '#f59e0b',
  },
  {
    id: 16,
    name: 'Woocommers Shopping',
    country: 'Dubai',
    domain: 'E-Commerce',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Firebase', 'Redux', 'In-App Purchases'],
    description:
      'Online homemade shopping application with buy, favourites, search, and filter functionality. Integrated in-app purchases.',
    color: '#ec4899',
  },
  {
    id: 17,
    name: 'Swadha',
    country: 'India',
    domain: 'Finance',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Redux', 'Push Notifications', 'In-App Purchases'],
    description:
      'Finance loan application enabling users to apply for loans, access customer support, calculate EMI, and manage loan-related functionalities.',
    color: '#10b981',
  },
  {
    id: 18,
    name: 'EPIC',
    country: 'South Africa',
    domain: 'E-Commerce / Beverage',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Redux', 'Push Notifications', 'In-App Purchases'],
    description:
      'Beverage shopping application for buying drinks with item selection, favourites, and online/in-store purchase options via sockets.',
    color: '#3b82f6',
  },
  {
    id: 19,
    name: 'Shesha',
    country: 'South Africa',
    domain: 'HR / Enterprise',
    role: 'Developer',
    roleType: 'developer',
    tech: ['React Native', 'Redux', 'Push Notifications'],
    description:
      'HR development application for employees and employers covering login, document uploads, leave applications, and salary details.',
    color: '#8b5cf6',
  },
]

export const achievements = [
  {
    title: 'Star Performance Award',
    company: 'Seven SquareTech Pvt. Ltd.',
    year: '2023',
    description:
      'Awarded for consistently delivering high-quality applications and significantly improving app stability and performance across multiple production releases.',
    color: '#f59e0b',
    icon: 'star',
  },
  {
    title: 'Client Appreciation & Outstanding Performance Award',
    company: 'ManekTech Pvt. Ltd.',
    year: '2022',
    description:
      'Received for delivering client projects under tight deadlines with exceptional quality, technical excellence, and client satisfaction.',
    color: '#7c3aed',
    icon: 'trophy',
  },
  {
    title: 'Android Knowledge Certification',
    company: 'Google',
    year: '2021',
    description:
      'Certified by Google for Android development knowledge, demonstrating expertise in Android architecture, best practices, and modern development patterns.',
    color: '#06b6d4',
    icon: 'certificate',
  },
]
