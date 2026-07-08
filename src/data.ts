export const personalInfo = {
  name: 'Jaydev Hapani',
  // Positioning-first titles. These rotate in the hero to frame the brand,
  // not the job description.
  roles: [
    'AI Product Engineer',
    'Senior Mobile Architect',
    'React Native Expert',
    'Startup Technology Partner',
    'Mobile Team Lead',
  ],
  // The one-line elevator pitch used across meta + hero.
  tagline: 'I help startups turn ideas into AI-powered mobile products that ship fast and scale.',
  email: 'hapanijaydev04@gmail.com',
  phone: '+91 81282 46008',
  location: 'India',
  timezone: 'IST (UTC+5:30) · overlaps EU & US mornings',
  linkedin: 'https://linkedin.com/in/hapani-jaydev-33a34b20a',
  github: 'https://github.com/jaydevhapani',
  calendly: 'https://cal.com/jaydevhapani',
  resumeUrl: '/resume.pdf',
  // Founder-facing summary — outcomes, not a duty list.
  summary:
    'I partner with founders and product teams to build cross-platform mobile products end to end — from architecture and AI-assisted development to release, crash monitoring, and scale. 5+ years, 19+ production apps, teams of engineers led. I do not just write React Native; I own the outcome.',
  shortSummary:
    'Mobile architect and AI product engineer. I take mobile products from zero to production-grade — and keep them stable at scale.',
  languages: ['English', 'Hindi', 'Gujarati'],
  education: {
    degree: 'Bachelor of Science (B.Sc.) – Computer Science',
    institution: 'IIMT, Delhi',
    year: '2021',
  },
}

// Headline impact metrics — real numbers, framed as outcomes clients care about.
export interface Metric {
  value: number
  suffix: string
  label: string
  description: string
  color: string
}

export const metrics: Metric[] = [
  {
    value: 19,
    suffix: '+',
    label: 'Production Apps',
    description: 'Shipped to the App Store & Google Play',
    color: '#22d3ee',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Years Building Mobile',
    description: 'React Native, Android & iOS in production',
    color: '#3b82f6',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Countries Served',
    description: 'Products used across 3 continents',
    color: '#8b5cf6',
  },
  {
    value: 14,
    suffix: '',
    label: 'Engineers Led',
    description: 'Hired, mentored & shipped alongside',
    color: '#06b6d4',
  },
  {
    value: 70,
    suffix: '%',
    label: 'Crash Reduction',
    description: 'On a live B2B app, release over release',
    color: '#10b981',
  },
  {
    value: 50,
    suffix: '%',
    label: 'ANR Reduction',
    description: 'Fewer app-not-responding events at scale',
    color: '#f59e0b',
  },
  {
    value: 100,
    suffix: 'K+',
    label: 'Users Impacted',
    description: 'Across shipped consumer & B2B apps',
    color: '#ec4899',
  },
  {
    value: 0,
    suffix: '',
    label: 'Rollback Releases',
    description: 'Zero emergency rollbacks as team lead',
    color: '#a78bfa',
  },
]

// Compact stat set used in the hero + about (subset of metrics).
export const stats = [
  { label: 'Production Apps', value: 19, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Engineers Led', value: 14, suffix: '' },
  { label: 'Users Impacted', value: 100, suffix: 'K+' },
]

// Trust / social-proof strip shown under the hero CTA.
export const trustSignals = [
  'Available for select projects',
  'Remote-first · works across time zones',
  'Founder-friendly, product-minded',
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
    period: 'Apr 2024 – Present',
    current: true,
    color: '#7c3aed',
    points: [
      'Technical lead for Callyzer Pro — a live B2B call-management & analytics Android app used by paying business clients.',
      'Drove a 70% crash reduction and 50% fewer ANRs by owning Firebase Crashlytics triage, Remote Config feature gates, and post-release monitoring.',
      'Author Functional Specification Documents (FSDs) for every feature and run kickoffs that align product, QA, and engineering before a line of code is written.',
      'Own the release pipeline end to end — Play Console beta & production rollouts, versioning, release notes, and CI/CD to shorten release cycles.',
      'Engage directly with the CEO on product roadmap; translate business goals into shippable delivery plans.',
      'Hired and mentored a team of engineers and interns — ran technical interviews and turned juniors into production-shipping developers.',
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
      'Architected and optimised high-performance React Native apps; led key modules and mentored junior developers.',
      'Unified subscriptions across iOS & Android with RevenueCat and drove engagement with segment-based push — reducing billing bugs and restore failures.',
      'Awarded the Star Performance Award for consistently improving app stability and performance across production releases.',
    ],
  },
  {
    id: 3,
    role: 'Mobile Developer',
    company: 'ManekTech Pvt. Ltd.',
    location: 'Ahmedabad',
    period: 'Dec 2021 – Dec 2022',
    current: false,
    color: '#f59e0b',
    points: [
      'Built and shipped React Native apps for international clients; integrated REST APIs and the full Firebase suite.',
      'Delivered client projects under tight deadlines — received the Client Appreciation & Outstanding Performance Award.',
    ],
  },
  {
    id: 4,
    role: 'Mobile Developer',
    company: 'iFlair Pvt. Ltd.',
    location: 'Ahmedabad',
    period: 'Dec 2020 – Dec 2021',
    current: false,
    color: '#10b981',
    points: [
      'Started my mobile career building strong fundamentals in cross-platform architecture, debugging, and store deployment.',
      'Contributed to Android & iOS releases from development through to store submission.',
    ],
  },
]

// "Why clients hire me" — outcomes, not a skills checklist.
export interface HireReason {
  title: string
  description: string
  icon: 'product' | 'ownership' | 'architecture' | 'ai' | 'scale' | 'comms' | 'ship'
  color: string
}

export const hireReasons: HireReason[] = [
  {
    title: 'Product Thinking',
    description:
      'I start from the user and the business goal, not the ticket. I push back on the wrong feature and propose the right one — so you build what actually moves the metric.',
    icon: 'product',
    color: '#22d3ee',
  },
  {
    title: 'Full Ownership',
    description:
      'From architecture to App Store review to post-launch crash triage — I own the outcome, not just my slice. You get a partner, not a pair of hands.',
    icon: 'ownership',
    color: '#3b82f6',
  },
  {
    title: 'AI-First Workflow',
    description:
      'I build with Claude, Copilot, and custom AI tooling wired into the pipeline — shipping faster and catching bugs before they reach your users.',
    icon: 'ai',
    color: '#8b5cf6',
  },
  {
    title: 'Architecture That Scales',
    description:
      'Clean, modular React Native architecture with the right state, data, and offline strategy — so the app is still maintainable at v10, not just v1.',
    icon: 'architecture',
    color: '#06b6d4',
  },
  {
    title: 'Production-Grade Stability',
    description:
      'I obsess over crashes, ANRs, and performance in the real world. 70% crash reduction on a live app is not an accident — it is a process.',
    icon: 'scale',
    color: '#10b981',
  },
  {
    title: 'Clear Communication',
    description:
      'Written specs, honest timelines, and no jargon. Founders and non-technical stakeholders always know where the product stands.',
    icon: 'comms',
    color: '#f59e0b',
  },
]

// "How I build products with AI" — the delivery process as a story.
export interface ProcessStep {
  phase: string
  title: string
  description: string
  tools: string[]
  color: string
}

export const processSteps: ProcessStep[] = [
  {
    phase: '01',
    title: 'Research & Discovery',
    description:
      'Understand the user, the market, and the real problem. Competitor teardown, feature gap analysis, and a sharp definition of what to build first.',
    tools: ['User Research', 'Competitor Analysis', 'Claude'],
    color: '#22d3ee',
  },
  {
    phase: '02',
    title: 'Product Planning',
    description:
      'Scope the MVP, write the functional spec, and align product, QA, and engineering before any code — so the team ships in one direction.',
    tools: ['FSD Authoring', 'Roadmapping', 'ChatGPT'],
    color: '#3b82f6',
  },
  {
    phase: '03',
    title: 'Architecture & Design',
    description:
      'Design the app architecture, data model, and offline strategy, then map it against Figma flows so engineering and design never drift.',
    tools: ['System Design', 'Figma', 'TypeScript'],
    color: '#6366f1',
  },
  {
    phase: '04',
    title: 'AI-Assisted Development',
    description:
      'Build in React Native with AI tooling wired into the loop — faster feature work, cleaner code, and reviews that catch issues early.',
    tools: ['React Native', 'GitHub Copilot', 'Claude Code'],
    color: '#8b5cf6',
  },
  {
    phase: '05',
    title: 'Testing & QA',
    description:
      'Automated checks, AI-generated unit tests, and a written review checklist that kills recurring bug classes before release.',
    tools: ['Unit Tests', 'Code Review', 'CI/CD'],
    color: '#a855f7',
  },
  {
    phase: '06',
    title: 'Release & Deployment',
    description:
      'Staged rollouts on Play Console & App Store, feature-gated behind Remote Config so risky changes can be killed without a new release.',
    tools: ['Play Console', 'App Store', 'Remote Config'],
    color: '#ec4899',
  },
  {
    phase: '07',
    title: 'Monitor & Improve',
    description:
      'Firebase Crashlytics, Analytics, and ANR triage in production — turning real usage into the next iteration. The product gets better after launch.',
    tools: ['Crashlytics', 'Analytics', 'Continuous Improvement'],
    color: '#10b981',
  },
]

// "Currently building" — the AI engineering agent flow.
export const currentlyBuilding = {
  title: 'AI Engineering Copilot',
  tagline: 'An autonomous workflow that turns production crashes into shipped fixes.',
  description:
    'I am building an AI-powered engineering agent that closes the loop between a Firebase crash and a merged pull request — reading stack traces, finding root causes, and drafting the fix so engineers move faster and users hit fewer bugs.',
  steps: [
    { label: 'Detects Firebase Crashes & ANRs', icon: 'alert' },
    { label: 'Reads & Parses Stack Traces', icon: 'code' },
    { label: 'Finds the Root Cause', icon: 'search' },
    { label: 'Creates Jira Tasks', icon: 'ticket' },
    { label: 'Suggests a Fix', icon: 'bulb' },
    { label: 'Generates Unit Tests', icon: 'check' },
    { label: 'Writes the PR Description', icon: 'doc' },
    { label: 'Opens the Pull Request', icon: 'git' },
    { label: 'Assists the Engineer', icon: 'user' },
  ],
}

export interface Skill {
  name: string
  level: number
}

export const skillCategories: Record<string, Skill[]> = {
  Mobile: [
    { name: 'React Native', level: 98 },
    { name: 'Android', level: 90 },
    { name: 'iOS', level: 85 },
    { name: 'Expo', level: 82 },
    { name: 'Play Store', level: 95 },
    { name: 'App Store', level: 88 },
  ],
  Languages: [
    { name: 'JavaScript (ES6+)', level: 96 },
    { name: 'TypeScript', level: 90 },
    { name: 'Java', level: 78 },
    { name: 'Kotlin', level: 72 },
    { name: 'Swift', level: 68 },
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
  AI: [
    { name: 'Claude (Anthropic)', level: 92 },
    { name: 'GitHub Copilot', level: 88 },
    { name: 'ChatGPT', level: 87 },
    { name: 'AI Agents & Tooling', level: 82 },
    { name: 'Gemini', level: 80 },
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
      '70% reduction in crashes and 50% fewer ANRs across the monitored period.',
      'Zero rollback releases — a stable, predictable cadence enterprise clients could trust.',
      'Faster client SLA response — issues triaged as usage vs config vs technical bug within hours, not days.',
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
      'Built a receipt-restore flow that worked offline-first so users never lost access on app reinstall.',
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
      "Ran technical interviews and assessed each junior's learning style — self-starter vs guided — and tailored onboarding tasks to match.",
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
  { name: 'Expo', icon: 'SiExpo', color: '#f8fafc' },
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
