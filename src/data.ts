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
    { name: 'Java', level: 78 },
    { name: 'Kotlin', level: 72 },
    { name: 'Swift', level: 68 },
    { name: 'C', level: 65 },
    { name: 'C++', level: 62 },
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

export interface ProjectCategory {
  name: string
  count: number
  color: string
  description: string
}

export const projectCategories: ProjectCategory[] = [
  {
    name: 'E-Commerce & Retail',
    count: 3,
    color: '#7c3aed',
    description: 'Shopping platforms with cart, payments, and in-app purchases.',
  },
  {
    name: 'Media & Entertainment',
    count: 4,
    color: '#ef4444',
    description: 'Video streaming, music, and content apps with subscriptions.',
  },
  {
    name: 'Hospitality & Food',
    count: 3,
    color: '#f59e0b',
    description: 'Hotel management and food delivery with real-time tracking.',
  },
  {
    name: 'Social & Communication',
    count: 3,
    color: '#3b82f6',
    description: 'Social, dating, and enterprise communication platforms.',
  },
  {
    name: 'Enterprise & B2B',
    count: 2,
    color: '#06b6d4',
    description: 'Call management analytics and HR enterprise tooling.',
  },
  {
    name: 'Healthcare',
    count: 1,
    color: '#10b981',
    description: 'Health monitoring and medical data management.',
  },
  {
    name: 'FinTech',
    count: 1,
    color: '#8b5cf6',
    description: 'Loan applications and finance calculation tools.',
  },
  {
    name: 'Logistics',
    count: 1,
    color: '#ec4899',
    description: 'Shipment tracking and offline-capable transport apps.',
  },
  {
    name: 'Booking & Reservations',
    count: 1,
    color: '#f97316',
    description: 'Online reservation platforms for services and events.',
  },
]

export const projectMeta = {
  total: 19,
  leadRole: 7,
  developerRole: 12,
  countries: ['India', 'UK', 'USA', 'Australia', 'Africa', 'Dubai', 'China', 'South Africa'],
}

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
