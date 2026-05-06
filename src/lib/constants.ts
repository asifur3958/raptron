import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Layers,
  Puzzle,
  Workflow,
  Code2,
  BrainCircuit,
  Factory,
  ShoppingBag,
  Building2,
  LineChart,
  HardHat,
  Wrench,
} from "lucide-react";

export type ServiceSlug =
  | "erp-consulting"
  | "erp-implementation"
  | "erp-customization"
  | "business-process-improvement"
  | "custom-software-development"
  | "ai-consulting";

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  tagline: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  whatsIncluded: string[];
  process: { title: string; description: string }[];
  outcomes: { title: string; description: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "erp-consulting",
    title: "ERP Consulting & Strategy",
    shortTitle: "ERP Consulting",
    tagline: "Strategy first. Software second.",
    headline: "Define Your Digital Future Before You Build It",
    description:
      "Independent, vendor-neutral ERP advisory grounded in your operations, your goals, and your reality.",
    icon: Compass,
    bullets: [
      "Vendor-neutral ERP selection",
      "Digital transformation roadmap",
      "Risk & gap analysis",
    ],
    whatsIncluded: [
      "Requirement analysis (BRD / FRD)",
      "ERP selection & solution architecture",
      "Digital transformation roadmap",
      "System audit & gap analysis",
      "Total cost of ownership modeling",
      "Stakeholder alignment workshops",
    ],
    process: [
      {
        title: "Discovery",
        description: "Deep interviews across functions and operations.",
      },
      {
        title: "Analysis",
        description: "Map current-state inefficiencies and capability gaps.",
      },
      {
        title: "Architecture",
        description: "Design future-state systems and selection shortlist.",
      },
      {
        title: "Roadmap",
        description: "Phased plan with budgets, owners, and milestones.",
      },
    ],
    outcomes: [
      {
        title: "Reduced implementation risk",
        description: "Decisions backed by evidence, not vendor pressure.",
      },
      {
        title: "Faster time-to-value",
        description: "Roadmaps that prioritize quick operational wins.",
      },
      {
        title: "Aligned investment",
        description: "Technology spend matched to business outcomes.",
      },
    ],
  },
  {
    slug: "erp-implementation",
    title: "ERP Implementation",
    shortTitle: "ERP Implementation",
    tagline: "From kickoff to go-live, owned end-to-end.",
    headline: "Go Live With Confidence",
    description:
      "Full lifecycle ERP rollouts — configuration, migration, training, and adoption — engineered to land safely and stick.",
    icon: Layers,
    bullets: [
      "End-to-end deployment",
      "Zero-loss data migration",
      "User training & change management",
    ],
    whatsIncluded: [
      "End-to-end ERP deployment",
      "Module configuration & environment setup",
      "Data migration & integrations",
      "User training & change management",
      "UAT and cutover planning",
      "Hypercare & post-go-live support",
    ],
    process: [
      {
        title: "Plan",
        description: "Project charter, RACI, and cutover strategy.",
      },
      {
        title: "Build",
        description: "Configure, integrate, and validate every module.",
      },
      { title: "Test", description: "UAT cycles with real-world scenarios." },
      {
        title: "Launch",
        description: "Cutover, hypercare, and adoption tracking.",
      },
    ],
    outcomes: [
      {
        title: "On-time go-live",
        description: "Disciplined execution against clear milestones.",
      },
      {
        title: "Zero-loss migration",
        description: "Verified data quality across every cutover.",
      },
      {
        title: "Adoption-ready teams",
        description: "Trained, equipped, and confident from day one.",
      },
    ],
  },
  {
    slug: "erp-customization",
    title: "ERP Customization & Integration",
    shortTitle: "ERP Customization",
    tagline: "Bend the system to your business.",
    headline: "Your ERP Should Work the Way You Do",
    description:
      "Custom modules, integrations, and automations that reshape your ERP around your real operating model.",
    icon: Puzzle,
    bullets: [
      "Custom module engineering",
      "Workflow automation",
      "Third-party API integrations",
    ],
    whatsIncluded: [
      "Custom module development",
      "Workflow automation & process alignment",
      "Third-party API integrations",
      "Performance optimization",
      "Custom reports and dashboards",
      "Data sync between systems of record",
    ],
    process: [
      {
        title: "Scope",
        description: "Translate operational gaps into engineering specs.",
      },
      {
        title: "Design",
        description: "Architect modules and integration patterns.",
      },
      {
        title: "Develop",
        description: "Build, test, and harden customizations.",
      },
      {
        title: "Optimize",
        description: "Tune performance and document the system.",
      },
    ],
    outcomes: [
      {
        title: "Automated manual work",
        description: "Eliminate friction across recurring workflows.",
      },
      {
        title: "Unified system ecosystem",
        description: "Single source of truth across applications.",
      },
      {
        title: "Optimized performance",
        description: "Systems engineered to scale with your data.",
      },
    ],
  },
  {
    slug: "business-process-improvement",
    title: "Business Process Improvement",
    shortTitle: "Process Improvement",
    tagline: "Engineer how the work actually flows.",
    headline: "Eliminate Waste. Accelerate Output.",
    description:
      "We re-engineer operations using lean principles, measurable KPIs, and process intelligence — before software ever enters the room.",
    icon: Workflow,
    bullets: [
      "Process mapping & redesign",
      "SOPs & operating standards",
      "KPI & operational frameworks",
    ],
    whatsIncluded: [
      "Process mapping & inefficiency analysis",
      "SOP design & workflow restructuring",
      "KPI framework & operational optimization",
      "Lean transformation initiatives",
      "Cross-functional process alignment",
      "Continuous improvement governance",
    ],
    process: [
      {
        title: "Observe",
        description: "Walk the process. Measure where time is lost.",
      },
      {
        title: "Diagnose",
        description: "Quantify bottlenecks and rework loops.",
      },
      {
        title: "Redesign",
        description: "Re-architect flows for speed and clarity.",
      },
      {
        title: "Operationalize",
        description: "Embed SOPs, KPIs, and review cadences.",
      },
    ],
    outcomes: [
      {
        title: "Productivity gains",
        description: "Measurable lift in throughput per role.",
      },
      {
        title: "Standardized operations",
        description: "Consistent execution across teams and sites.",
      },
      {
        title: "Data-driven decisions",
        description: "Operating rhythm built on live KPIs.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    tagline: "Software shaped to your business logic.",
    headline: "Software Engineered for Your Exact Business Logic",
    description:
      "When off-the-shelf doesn't fit, we build resilient, scalable, ownable systems — web, mobile, and cloud-native.",
    icon: Code2,
    bullets: [
      "Web & SaaS platforms",
      "Mobile (iOS / Android / cross-platform)",
      "Cloud-native architectures",
    ],
    whatsIncluded: [
      "Enterprise web applications & SaaS platforms",
      "Mobile apps (Android, iOS, cross-platform)",
      "CRM, POS, HRM, Inventory systems",
      "Cloud & on-premise tailored solutions",
      "API platforms and developer tooling",
      "DevOps, CI/CD, and observability",
    ],
    process: [
      {
        title: "Define",
        description: "Translate goals into product specs and architecture.",
      },
      {
        title: "Design",
        description: "Wireframes, UX flows, and design systems.",
      },
      {
        title: "Engineer",
        description: "Iterative builds with production-grade quality bars.",
      },
      {
        title: "Operate",
        description: "Launch, monitor, and evolve in production.",
      },
    ],
    outcomes: [
      {
        title: "Scalable custom systems",
        description: "Architecture engineered for growth.",
      },
      {
        title: "Cross-platform reach",
        description: "Reach customers wherever they work.",
      },
      {
        title: "Full ownership & IP",
        description: "You own the code, the data, and the roadmap.",
      },
    ],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting & Intelligent Automation",
    shortTitle: "AI Consulting",
    tagline: "Make your business smarter, not just faster.",
    headline: "Make Your Business Smarter, Not Just Faster",
    description:
      "Pragmatic AI strategy and integration — embedding predictive intelligence into the systems your business already runs on.",
    icon: BrainCircuit,
    bullets: [
      "AI readiness & strategy",
      "Predictive analytics",
      "AI inside ERP & workflows",
    ],
    whatsIncluded: [
      "AI readiness & strategy development",
      "Use-case identification & ROI mapping",
      "Predictive analytics & data intelligence",
      "AI integration into ERP and business workflows",
      "Document & process intelligence",
      "Responsible AI governance",
    ],
    process: [
      {
        title: "Assess",
        description: "Audit data maturity and identify high-ROI use cases.",
      },
      {
        title: "Prototype",
        description: "Validate value through targeted pilots.",
      },
      {
        title: "Integrate",
        description: "Embed AI into core systems and processes.",
      },
      {
        title: "Scale",
        description: "Productionize, monitor, and govern responsibly.",
      },
    ],
    outcomes: [
      {
        title: "High-ROI AI opportunities",
        description: "Backed by data, not hype.",
      },
      {
        title: "Reduced operational overhead",
        description: "Automate decisions, not just tasks.",
      },
      {
        title: "Predictive business insights",
        description: "See around corners with confidence.",
      },
    ],
  },
];

export const INDUSTRIES = [
  { name: "Real Estate", icon: Building2 },
  { name: "Trading", icon: LineChart },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: ShoppingBag },
  { name: "Construction", icon: HardHat },
  { name: "Facilities Management", icon: Wrench },
];

export const STATS = [
  { value: 150, suffix: "+", label: "ERP Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 40, suffix: "%", label: "Avg. Efficiency Gain" },
];

export const TESTIMONIALS = [
  {
    quote:
      "RAPTRON treated our ERP rollout like an operations problem first and a software project second. That's why it actually worked.",
    name: "Lorem Ipsum",
    title: "VP Operations",
    company: "Placeholder Manufacturing Co.",
  },
  {
    quote:
      "They rebuilt processes we'd lived with for a decade. The new flow is faster, cleaner, and finally measurable.",
    name: "Dolor Sit",
    title: "Chief Operating Officer",
    company: "Placeholder Logistics Group",
  },
  {
    quote:
      "Their AI consulting cut through the hype. We shipped two production use-cases in a quarter — both already paying for themselves.",
    name: "Amet Consectetur",
    title: "Director, Digital Strategy",
    company: "Placeholder Retail Holdings",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Discovery & Audit",
    description: "Understand the business, the people, the data.",
  },
  {
    title: "Solution Architecture",
    description: "Design systems and processes that fit how you operate.",
  },
  {
    title: "Implementation & Configuration",
    description: "Build, integrate, and validate against real workflows.",
  },
  {
    title: "Training & Change Management",
    description: "Equip teams to own the new way of working.",
  },
  {
    title: "Optimization & Growth",
    description: "Measure, iterate, and compound the value.",
  },
];

export const VALUES = [
  {
    title: "Client-First Thinking",
    description: "Your outcomes shape every recommendation we make.",
  },
  {
    title: "Engineering Integrity",
    description: "We build what we'd be proud to operate ourselves.",
  },
  {
    title: "Continuous Improvement",
    description: "Every engagement leaves an organization stronger.",
  },
  {
    title: "Transparent Partnership",
    description: "Honest scopes, honest tradeoffs, honest reporting.",
  },
];

export const COMPANY = {
  name: "RAPTRON Digital Solutions LLC",
  email: "consult@raptron.com",
  phone: "+971 50 6638260",
  address: "DAMAC Lakeside, Dubai Production City, Dubai, United Arab Emirates",
  shortDescription:
    "A premium technology consulting firm specializing in ERP, business process re-engineering, AI consulting, and custom software.",
};
