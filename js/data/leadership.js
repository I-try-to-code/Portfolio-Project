/**
 * Comprehensive RoboVITics Leadership & Execution Data
 * Structured around 4 Dimensions: Leadership, Operations, Sponsorship, Event Execution
 */

export const progressionSteps = [
  {
    role: "Junior Core Member",
    phase: "Foundation & Execution",
    period: "Initial Leadership Phase",
    description: "Hands-on execution of event logistics, venue coordination, and technical workshop setup across campus."
  },
  {
    role: "Head of Finance & Logistics",
    phase: "Executive Leadership",
    period: "Core Executive Committee",
    description: "Managed ₹11 Lakh budget, directed financial allocations, audited event accounts, and secured corporate sponsorships."
  },
  {
    role: "Senior Core Member",
    phase: "Strategic Advisory",
    period: "Senior Leadership",
    description: "Strategic guidance for incoming core committee, high-level corporate sponsor negotiations, and flagship event oversight."
  }
];

export const dimensionsData = [
  {
    id: "leadership",
    title: "Leadership & Team Management",
    icon: "users",
    subtitle: "Orchestrating teams and executive committee strategy.",
    metrics: [
      { value: "60", label: "Active Members Managed", detail: "Coordinated operational teams across technical, design, and logistics domains." },
      { value: "6", label: "Executive Core Committee", detail: "Direct alignment and strategic execution with the core committee." }
    ],
    narrative: "Led and coordinated operational workflows across approximately 60 active club members and a 6-member executive core committee. Established clear task ownership, milestone tracking, and cross-functional team communication for national fests."
  },
  {
    id: "operations",
    title: "Operations & Finance Management",
    icon: "briefcase",
    subtitle: "Financial audits, resource allocation, and logistics planning.",
    metrics: [
      { value: "₹11L", label: "Budget Managed", detail: "Audited financial budgets allocated across 14 campus-wide technical events." },
      { value: "14", label: "Technical Events Executed", detail: "Campus workshops, hackathons, and national robotics competitions." }
    ],
    narrative: "Served as Head of Finance & Logistics, overseeing budget planning, vendor negotiations, hardware procurement, and institutional permissions. Maintained audited balance sheets and financial transparency throughout the academic year."
  },
  {
    id: "sponsorship",
    title: "Corporate Sponsorship & Automation",
    icon: "trending-up",
    subtitle: "Partnership negotiations and automated cold outreach engine.",
    metrics: [
      { value: "₹8.3L", label: "Sponsorships Secured", detail: "Funding raised through corporate pitches and automated outreach." },
      { value: "4", label: "Industry Sponsors", detail: "Siemens, ADI, Module143, Anchor by Panasonic." }
    ],
    sponsors: [
      { name: "Siemens", area: "Industrial Automation & Software" },
      { name: "ADI (Analog Devices)", area: "Semiconductors & Signal Processing" },
      { name: "Module143", area: "Hardware & Electronics" },
      { name: "Anchor by Panasonic", area: "Electrical & Industrial Systems" }
    ],
    automationHighlight: {
      title: "Sponsorship Cold-Outreach Automation Engine",
      tech: "Python, SMTP / REST APIs, CSV Analytics Engine",
      description: "Engineered an automated Python email pipeline and response tracking tool to reach corporate leads systematically, contributing directly to securing ₹8.3 Lakhs in sponsorship."
    },
    narrative: "Secured corporate funding by negotiating value propositions with major multinational industry sponsors. Deployed custom automation tools to scale outreach efficiency."
  },
  {
    id: "events",
    title: "Flagship Event Execution",
    icon: "award",
    subtitle: "Executing national combat robotics and technical hackathons.",
    flagships: [
      {
        name: "RoboWars",
        type: "National Combat Robotics Competition",
        metrics: [
          { val: "1,500+", lbl: "Audience Footfall" },
          { val: "15", lbl: "Combat Teams" },
          { val: "58", lbl: "National Competitors" },
          { val: "₹3.0L", lbl: "Prize Pool" }
        ],
        desc: "Coordinated steel arena construction, safety protocols, live scoring infrastructure, competitor logistics, and audience security."
      },
      {
        name: "Equinox",
        type: "Flagship Robotics & Tech Fest",
        metrics: [
          { val: "1,400+", lbl: "Registrations" },
          { val: "450", lbl: "Shortlisted Participants" }
        ],
        desc: "Managed multi-track robotics hackathon logistics, evaluation rubrics, sponsor booth arrangements, and judge schedules."
      }
    ],
    narrative: "Organized and executed RoboWars and Equinox, two of VIT Vellore's largest technical flagship events, handling high-footfall audience flows and complex arena hardware."
  }
];
