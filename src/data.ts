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

export interface CaseStudy {
  id: number
  domain: string
  role: string
  challenge: string
  approach: string[]
  impact: string[]
  stack: string[]
  color: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    domain: 'B2B Call Analytics Platform',
    role: 'Mobile Team Lead',
    challenge:
      'A live, paying B2B Android app was shipping new features fast but accumulating ANRs and post-release crashes. Each release risked breaking active subscriptions and triggering refund requests from enterprise clients.',
    approach: [
      'Owned the Firebase project end-to-end — Crashlytics, Analytics, Remote Config, and FCM.',
      'Set up daily ANR/crash triage with severity tagging so the team fixed the right issues first.',
      'Introduced Remote Config feature gates so risky changes could be killed without a Play Store release.',
      'Hardened the CI/CD pipeline so every feature branch was QA-signed-off before merge into development.',
    ],
    impact: [
      'Stable release cadence with zero rollback releases over the period.',
      'Crash-impacted users trended down release-over-release.',
      'Faster client SLA response — issues classified as usage vs config vs technical bug within hours, not days.',
    ],
    stack: ['React Native', 'Firebase', 'Remote Config', 'Play Console', 'CI/CD'],
    color: '#7c3aed',
  },
  {
    id: 2,
    domain: 'Subscription-Powered Media App',
    role: 'Lead App Developer',
    challenge:
      'A consumer media app needed paid subscriptions across Android and iOS, plus reliable push for engagement. Past releases had inconsistent receipts, broken restores, and noisy notification opt-ins hurting retention.',
    approach: [
      'Integrated RevenueCat to unify subscription state across iOS and Android — single source of truth instead of per-platform stores.',
      'Wired OneSignal for segment-based push with opt-in prompts staged behind real user value (not on first launch).',
      'Built receipt-restore flow that worked offline-first so users never lost access on app reinstall.',
      'Added Firebase Analytics events around the paywall to spot drop-off and tune copy.',
    ],
    impact: [
      'Subscription restore failures dropped to near-zero post-launch.',
      'Push opt-in rate improved significantly by delaying the prompt to a value moment.',
      'Single SDK (RevenueCat) replaced two custom billing code paths — fewer bugs, easier maintenance.',
    ],
    stack: ['React Native', 'RevenueCat', 'OneSignal', 'Firebase', 'Redux'],
    color: '#06b6d4',
  },
  {
    id: 3,
    domain: 'Team Scale-Up & Code Quality',
    role: 'Mobile Team Lead',
    challenge:
      'The mobile team was growing — adding interns and junior developers — but PR quality varied widely. Reviews were ad-hoc, FSDs were inconsistent, and the same bugs surfaced across features.',
    approach: [
      'Established a written code-review checklist: dead code, redundant conditions, missing shared hooks/utils, unnecessary re-renders, formatting, and comment hygiene.',
      'Standardised FSD authoring: tech analysis → project understanding → rough draft → final FSD aligned to Figma + client requirements.',
      'Ran technical interviews and assessed each junior\'s learning style — self-starter vs guided — and tailored onboarding tasks to match.',
      'Made code review a teaching loop: every comment explains the why, not just the fix.',
    ],
    impact: [
      'Onboarded multiple React Native interns who shipped production-quality PRs within their first months.',
      'Recurring categories of bugs (unused state, render loops, missing memoization) dropped sharply after the checklist rollout.',
      'FSDs became the artifact QA + dev align on before kickoff — fewer mid-sprint scope surprises.',
    ],
    stack: ['Code Review', 'FSD Authoring', 'Mentorship', 'Git Workflow'],
    color: '#f59e0b',
  },
]

export interface LeadershipPrinciple {
  title: string
  summary: string
  bullets: string[]
  icon: 'review' | 'fsd' | 'mentor'
  color: string
}

export const leadershipPrinciples: LeadershipPrinciple[] = [
  {
    title: 'How I Run Code Reviews',
    summary:
      'Every merge request gets the same treatment — a CI/CD-anchored review focused on signal, not noise.',
    bullets: [
      'Hunt down dead code, unused conditions, and copy-pasted logic that should be a shared helper or hook.',
      'Flag unnecessary re-renders and missed memoization before they reach QA.',
      'Enforce formatting and meaningful comments — code should read cleanly to the next developer.',
      'Leave written feedback explaining the why, so juniors learn the pattern, not just the patch.',
    ],
    icon: 'review',
    color: '#7c3aed',
  },
  {
    title: 'How I Write FSDs',
    summary:
      'FSDs are the artifact QA and dev align on before a single line is written. They are not boilerplate.',
    bullets: [
      'Start with technical analysis — understand constraints, dependencies, and platform quirks.',
      'Build a project understanding pass — what the client actually needs vs what they asked for.',
      'Draft a rough analysis from Figma + feature scope + client requirements before formalising.',
      'Finalise the FSD so kickoff meetings drive alignment instead of debate.',
    ],
    icon: 'fsd',
    color: '#06b6d4',
  },
  {
    title: 'How I Mentor',
    summary:
      'Mentorship is not one-size-fits-all. I match the approach to the person, not the title.',
    bullets: [
      'Assess capability and learning style first — self-driven learners vs guided learners need different inputs.',
      'Assign tasks calibrated to stretch, not overwhelm — small wins build confidence and judgment.',
      'Pair code reviews with explanation, so every fix becomes a learning moment.',
      'Conduct technical interviews and train interns into shippable React Native developers.',
    ],
    icon: 'mentor',
    color: '#f59e0b',
  },
]

export interface Testimonial {
  id: number
  quote: string
  attribution: string
  role: string
  color: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Jaydev raised the bar on what a code review should be. His feedback was always specific, written down, and explained the reasoning — our PR cycle time dropped and junior devs visibly grew.',
    attribution: 'Senior QA Engineer',
    role: 'Previous Employer',
    color: '#7c3aed',
  },
  {
    id: 2,
    quote:
      'We needed a lead who could own the entire release process — Play Console, Firebase, post-release monitoring, the lot. Jaydev did all of that and kept the roadmap honest with the business side.',
    attribution: 'Product Owner',
    role: 'B2B SaaS Client',
    color: '#06b6d4',
  },
  {
    id: 3,
    quote:
      'I joined as a React Native intern. Jaydev figured out how I learned best within the first week, gave me tasks that actually stretched me, and reviewed my PRs like a real engineer. I shipped to production faster than I thought possible.',
    attribution: 'React Native Developer',
    role: 'Mentored Junior',
    color: '#f59e0b',
  },
]

export interface TechLogo {
  name: string
  icon: string
  color: string
}

export const techMarquee: TechLogo[] = [
  { name: 'React Native', icon: 'SiReact', color: '#61dafb' },
  { name: 'TypeScript', icon: 'SiTypescript', color: '#3178c6' },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#f7df1e' },
  { name: 'Redux', icon: 'SiRedux', color: '#764abc' },
  { name: 'Firebase', icon: 'SiFirebase', color: '#ffca28' },
  { name: 'Android', icon: 'SiAndroid', color: '#3ddc84' },
  { name: 'iOS', icon: 'SiApple', color: '#a2aaad' },
  { name: 'Java', icon: 'SiOpenjdk', color: '#f89820' },
  { name: 'Kotlin', icon: 'SiKotlin', color: '#7f52ff' },
  { name: 'Swift', icon: 'SiSwift', color: '#f05138' },
  { name: 'Git', icon: 'SiGit', color: '#f05032' },
  { name: 'GitHub', icon: 'SiGithub', color: '#f8fafc' },
  { name: 'Node.js', icon: 'SiNodedotjs', color: '#5fa04e' },
  { name: 'Stripe', icon: 'SiStripe', color: '#635bff' },
  { name: 'Google Play', icon: 'SiGoogleplay', color: '#01875f' },
  { name: 'App Store', icon: 'SiAppstore', color: '#0d96f6' },
  { name: 'SQLite', icon: 'SiSqlite', color: '#003b57' },
  { name: 'Claude AI', icon: 'SiAnthropic', color: '#d97757' },
  { name: 'GitHub Copilot', icon: 'SiGithubcopilot', color: '#f8fafc' },
  { name: 'OpenAI', icon: 'SiOpenai', color: '#10a37f' },
  { name: 'Google Gemini', icon: 'SiGooglegemini', color: '#4285f4' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06b6d4' },
]

