export type JobTeam =
  | "Engineering"
  | "Cloud"
  | "Data & AI"
  | "Design"
  | "Consulting"
  | "Security";

export type JobLocationType =
  | "Remote"
  | "Hybrid"
  | "On-site"
  | "To be confirmed";

export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship";

export type ExperienceLevel =
  | "Entry Level"
  | "Mid Level"
  | "Senior"
  | "Lead"
  | "Principal";

export type JobStatus = "open" | "closed";

export type Job = {
  id: string;
  slug: string;

  title: string;
  team: JobTeam;

  location: string;
  locationType: JobLocationType;

  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;

  summary: string;
  aboutRole: string;

  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];

  technologies: string[];

  whatYouWillWorkOn: string[];
  whatWeOffer: string[];
  hiringProcess: string[];

  featured?: boolean;
  status: JobStatus;
};

const standardHiringProcess = [
  "Application and initial review",
  "Introductory conversation",
  "Role-relevant technical or professional discussion",
  "Team conversation",
  "Final decision and employment discussion",
];

export const jobs: Job[] = [
  {
    id: "job-001",
    slug: "senior-software-engineer",

    title: "Senior Software Engineer",
    team: "Engineering",

    location: "Location to be confirmed",
    locationType: "To be confirmed",

    employmentType: "Full-time",
    experienceLevel: "Senior",

    summary:
      "Work across modern applications, APIs, platforms, architecture, quality, and engineering foundations while helping teams build software that can evolve over time.",

    aboutRole:
      "As a Senior Software Engineer, you would contribute to the design and delivery of modern software systems across client engagements. The role combines hands-on engineering with architecture, technical decision-making, collaboration, and responsibility for the long-term quality of the systems being built.",

    responsibilities: [
      "Design and build maintainable frontend, backend, API, and platform capabilities.",
      "Contribute to architecture and technical design decisions.",
      "Work closely with engineers, designers, cloud specialists, consultants, and client teams.",
      "Review code and provide constructive technical feedback.",
      "Help improve testing, reliability, observability, security, and delivery practices.",
      "Investigate technical problems and evaluate practical implementation options.",
      "Contribute to documentation and knowledge sharing across project teams.",
      "Support less experienced engineers through collaboration and mentoring.",
    ],

    requirements: [
      "Strong professional software engineering experience.",
      "Experience designing and building production software systems.",
      "Solid understanding of modern application architecture and API design.",
      "Experience working with automated testing and version control.",
      "Ability to communicate technical decisions clearly.",
      "Comfort working collaboratively across multidisciplinary teams.",
      "Ability to reason about maintainability, reliability, and technical trade-offs.",
    ],

    niceToHave: [
      "Experience with cloud-native applications.",
      "Experience with platform engineering or developer tooling.",
      "Experience working in consulting or client-facing environments.",
      "Experience mentoring engineers or contributing to technical leadership.",
      "Exposure to security, observability, or distributed systems.",
    ],

    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "APIs",
      "SQL",
      "Cloud",
      "CI/CD",
      "Observability",
    ],

    whatYouWillWorkOn: [
      "Modern web and application platforms",
      "Backend services and APIs",
      "Architecture modernization",
      "Engineering quality and developer experience",
      "Cloud-connected software systems",
      "Reusable technical foundations",
    ],

    whatWeOffer: [
      "Opportunities to work on meaningful technology problems.",
      "Collaboration with experienced multidisciplinary practitioners.",
      "Room to deepen technical expertise and broaden your perspective.",
      "Meaningful ownership appropriate to your experience.",
      "A working culture focused on clarity, quality, learning, and constructive feedback.",
    ],

    hiringProcess: standardHiringProcess,

    featured: true,
    status: "open",
  },

  {
    id: "job-002",
    slug: "cloud-platform-engineer",

    title: "Cloud Platform Engineer",
    team: "Cloud",

    location: "Location to be confirmed",
    locationType: "To be confirmed",

    employmentType: "Full-time",
    experienceLevel: "Senior",

    summary:
      "Build cloud foundations, infrastructure automation, deployment platforms, observability, and reusable capabilities that help engineering teams deliver reliably.",

    aboutRole:
      "As a Cloud Platform Engineer, you would help design and build cloud environments and internal platform capabilities that enable software teams to deliver securely and reliably. The role combines infrastructure engineering, automation, reliability, cloud architecture, and developer enablement.",

    responsibilities: [
      "Design and implement reusable cloud infrastructure foundations.",
      "Build infrastructure automation using infrastructure-as-code practices.",
      "Improve deployment, CI/CD, and developer platform capabilities.",
      "Contribute to cloud architecture and environment design.",
      "Implement observability, monitoring, and reliability practices.",
      "Work with engineering and security teams on cloud controls and operational standards.",
      "Investigate performance, reliability, deployment, and infrastructure issues.",
      "Document platform patterns and reusable engineering practices.",
    ],

    requirements: [
      "Professional experience with at least one major cloud platform.",
      "Experience with infrastructure as code.",
      "Experience with CI/CD and automated deployment practices.",
      "Understanding of networking, identity, security, and cloud architecture fundamentals.",
      "Experience working with containers or modern application deployment environments.",
      "Ability to troubleshoot infrastructure and platform problems.",
      "Strong written and verbal technical communication skills.",
    ],

    niceToHave: [
      "Experience with Kubernetes.",
      "Experience building internal developer platforms.",
      "Experience with site reliability engineering practices.",
      "Experience with policy as code or cloud governance.",
      "Consulting or client-facing delivery experience.",
    ],

    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Terraform",
      "Containers",
      "CI/CD",
      "Observability",
      "Platform Engineering",
    ],

    whatYouWillWorkOn: [
      "Cloud foundations",
      "Infrastructure automation",
      "Developer platforms",
      "Deployment pipelines",
      "Reliability engineering",
      "Cloud governance and operational patterns",
    ],

    whatWeOffer: [
      "Exposure to varied cloud and platform challenges.",
      "Collaboration with software, security, data, and consulting teams.",
      "Opportunities to influence technical foundations and engineering practices.",
      "A strong focus on automation, reliability, and maintainable infrastructure.",
      "Room to develop deeper architecture and platform leadership skills.",
    ],

    hiringProcess: standardHiringProcess,

    featured: true,
    status: "open",
  },

  {
    id: "job-003",
    slug: "data-ai-engineer",

    title: "Data & AI Engineer",
    team: "Data & AI",

    location: "Location to be confirmed",
    locationType: "To be confirmed",

    employmentType: "Full-time",
    experienceLevel: "Mid Level",

    summary:
      "Build data pipelines, analytics foundations, AI-enabled applications, evaluation workflows, and production-ready data and machine-learning systems.",

    aboutRole:
      "As a Data & AI Engineer, you would work across data engineering and applied AI problems, helping teams move from experimentation toward dependable production systems. The role involves data foundations, software engineering, AI integration, evaluation, and operational thinking.",

    responsibilities: [
      "Design and implement reliable data pipelines and transformations.",
      "Build services and applications that use machine-learning or generative AI capabilities.",
      "Contribute to data platform and AI architecture decisions.",
      "Develop evaluation, monitoring, and quality practices for AI-enabled systems.",
      "Work with engineers and stakeholders to translate use cases into practical implementations.",
      "Improve reproducibility, maintainability, and deployment of data and AI workloads.",
      "Support responsible handling of data, security, and access controls.",
    ],

    requirements: [
      "Professional experience with Python or similar engineering languages.",
      "Experience working with structured or unstructured data.",
      "Understanding of data pipelines and data-processing concepts.",
      "Experience building production software or data systems.",
      "Ability to evaluate technical trade-offs and communicate them clearly.",
      "Strong problem-solving and collaborative working skills.",
    ],

    niceToHave: [
      "Experience with generative AI or large language model applications.",
      "Experience with machine-learning operations or model deployment.",
      "Experience with vector search or retrieval systems.",
      "Experience with modern cloud data platforms.",
      "Knowledge of AI evaluation and observability practices.",
    ],

    technologies: [
      "Python",
      "SQL",
      "Data Engineering",
      "Generative AI",
      "Machine Learning",
      "MLOps",
      "Cloud",
      "APIs",
      "Evaluation",
    ],

    whatYouWillWorkOn: [
      "Data pipelines and platforms",
      "AI-enabled applications",
      "Retrieval and knowledge systems",
      "Machine-learning workflows",
      "AI evaluation and monitoring",
      "Production data architecture",
    ],

    whatWeOffer: [
      "Opportunities to work beyond prototypes and into production systems.",
      "Collaboration across data, software, cloud, security, and consulting disciplines.",
      "Room to build both engineering depth and applied AI experience.",
      "Exposure to architecture, evaluation, operations, and responsible AI considerations.",
      "A learning-focused environment built around practical problem-solving.",
    ],

    hiringProcess: standardHiringProcess,

    featured: true,
    status: "open",
  },

  {
    id: "job-004",
    slug: "product-designer",

    title: "Product Designer",
    team: "Design",

    location: "Location to be confirmed",
    locationType: "To be confirmed",

    employmentType: "Full-time",
    experienceLevel: "Mid Level",

    summary:
      "Design thoughtful digital experiences while working closely with engineering, consulting, and product stakeholders across complex technology engagements.",

    aboutRole:
      "As a Product Designer, you would help turn complex business and technology problems into useful digital experiences. You would work closely with engineering and consulting teams from discovery through implementation rather than treating design as an isolated phase.",

    responsibilities: [
      "Translate user and business needs into clear product experiences.",
      "Create user flows, wireframes, prototypes, and interface designs.",
      "Collaborate closely with software engineers throughout delivery.",
      "Contribute to research, discovery, and problem-framing activities.",
      "Develop and evolve reusable design-system patterns.",
      "Present design decisions and explain underlying rationale.",
      "Consider accessibility, usability, consistency, and implementation feasibility.",
    ],

    requirements: [
      "Professional product or UX design experience.",
      "Portfolio demonstrating product thinking and interface design.",
      "Experience designing digital products or complex workflows.",
      "Strong understanding of interaction and visual design principles.",
      "Ability to communicate design rationale clearly.",
      "Comfort collaborating directly with engineers and stakeholders.",
    ],

    niceToHave: [
      "Experience with enterprise or B2B products.",
      "Experience contributing to design systems.",
      "UX research experience.",
      "Experience in consulting or multidisciplinary delivery teams.",
      "Knowledge of accessibility standards and implementation constraints.",
    ],

    technologies: [
      "Product Design",
      "UX",
      "Interaction Design",
      "Design Systems",
      "Prototyping",
      "Accessibility",
    ],

    whatYouWillWorkOn: [
      "Digital products",
      "Enterprise workflows",
      "Product discovery",
      "Design systems",
      "User experience modernization",
      "Cross-functional product delivery",
    ],

    whatWeOffer: [
      "Close collaboration with engineering and consulting teams.",
      "Opportunities to influence products from discovery through implementation.",
      "Exposure to varied industries and technology problems.",
      "Room to deepen both product thinking and design craft.",
      "A culture that values clarity, usability, accessibility, and constructive feedback.",
    ],

    hiringProcess: standardHiringProcess,

    status: "open",
  },

  {
    id: "job-005",
    slug: "technology-consultant",

    title: "Technology Consultant",
    team: "Consulting",

    location: "Location to be confirmed",
    locationType: "To be confirmed",

    employmentType: "Full-time",
    experienceLevel: "Mid Level",

    summary:
      "Connect business problems with technology strategy, architecture, delivery, and multidisciplinary engineering teams across client engagements.",

    aboutRole:
      "As a Technology Consultant, you would help organizations understand complex technology problems, evaluate options, shape practical strategies, and connect strategic decisions with real delivery. The role sits between business context, architecture, engineering, and stakeholder collaboration.",

    responsibilities: [
      "Support technology discovery and assessment activities.",
      "Help translate business needs into technology options and priorities.",
      "Facilitate conversations with technical and non-technical stakeholders.",
      "Contribute to technology strategies, roadmaps, and delivery plans.",
      "Work closely with architects, engineers, designers, and client teams.",
      "Document decisions, risks, dependencies, and recommendations clearly.",
      "Help connect strategic recommendations with practical implementation.",
    ],

    requirements: [
      "Experience working on technology initiatives or transformation programs.",
      "Strong analytical and problem-framing skills.",
      "Ability to communicate clearly with technical and business stakeholders.",
      "Understanding of modern software, cloud, data, or digital delivery concepts.",
      "Strong written communication and documentation skills.",
      "Ability to work effectively across multidisciplinary teams.",
    ],

    niceToHave: [
      "Consulting experience.",
      "Technology architecture experience.",
      "Experience with cloud or software modernization programs.",
      "Experience facilitating workshops or discovery sessions.",
      "Delivery or program coordination experience.",
    ],

    technologies: [
      "Technology Strategy",
      "Architecture",
      "Discovery",
      "Delivery",
      "Cloud",
      "Software Modernization",
      "Client Collaboration",
    ],

    whatYouWillWorkOn: [
      "Technology strategy",
      "Modernization planning",
      "Architecture assessments",
      "Discovery engagements",
      "Transformation roadmaps",
      "Delivery alignment",
    ],

    whatWeOffer: [
      "Exposure to technology problems across multiple disciplines.",
      "Direct collaboration with experienced technical practitioners.",
      "Opportunities to develop architecture and advisory capability.",
      "Meaningful involvement from problem definition through delivery.",
      "Room to strengthen both technical understanding and consulting skills.",
    ],

    hiringProcess: standardHiringProcess,

    status: "open",
  },

  {
    id: "job-006",
    slug: "security-engineer",

    title: "Security Engineer",
    team: "Security",

    location: "Location to be confirmed",
    locationType: "To be confirmed",

    employmentType: "Full-time",
    experienceLevel: "Senior",

    summary:
      "Integrate security into applications, cloud environments, identity, architecture, and engineering delivery practices.",

    aboutRole:
      "As a Security Engineer, you would work with engineering and cloud teams to make security part of architecture and delivery rather than an isolated review at the end. The role spans application security, cloud security, identity, threat modeling, and secure engineering practices.",

    responsibilities: [
      "Contribute security requirements and controls to application and cloud architectures.",
      "Perform threat modeling and security design reviews.",
      "Support secure software development practices.",
      "Work with teams on identity, access, secrets, and cloud security controls.",
      "Help integrate security checks into CI/CD and engineering workflows.",
      "Identify security risks and communicate practical remediation approaches.",
      "Contribute to security documentation, patterns, and reusable guidance.",
    ],

    requirements: [
      "Professional experience in application, cloud, or infrastructure security.",
      "Strong understanding of modern security engineering principles.",
      "Experience reviewing technical architectures or software systems.",
      "Understanding of identity and access management concepts.",
      "Ability to communicate security risks in practical engineering terms.",
      "Experience collaborating with software or platform engineering teams.",
    ],

    niceToHave: [
      "Cloud security experience.",
      "DevSecOps experience.",
      "Experience with threat modeling.",
      "Knowledge of container or Kubernetes security.",
      "Experience supporting regulated or security-sensitive environments.",
    ],

    technologies: [
      "Application Security",
      "Cloud Security",
      "Identity & Access",
      "DevSecOps",
      "Threat Modeling",
      "CI/CD",
      "Security Architecture",
    ],

    whatYouWillWorkOn: [
      "Application security",
      "Cloud security architecture",
      "Identity and access",
      "Secure delivery pipelines",
      "Threat modeling",
      "Security engineering standards",
    ],

    whatWeOffer: [
      "The opportunity to integrate security directly into engineering delivery.",
      "Collaboration with software, cloud, data, and consulting practitioners.",
      "Exposure to different technical environments and security challenges.",
      "Room to influence architecture and secure engineering practices.",
      "A culture that treats security as an engineering responsibility.",
    ],

    hiringProcess: standardHiringProcess,

    status: "open",
  },
];

export const openJobs = jobs.filter((job) => job.status === "open");

export const featuredJobs = jobs.filter(
  (job) => job.status === "open" && job.featured,
);

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}

export function getRelatedJobs(job: Job, limit = 3) {
  const sameTeam = openJobs.filter(
    (candidate) =>
      candidate.id !== job.id && candidate.team === job.team,
  );

  const otherTeams = openJobs.filter(
    (candidate) =>
      candidate.id !== job.id && candidate.team !== job.team,
  );

  return [...sameTeam, ...otherTeams].slice(0, limit);
}