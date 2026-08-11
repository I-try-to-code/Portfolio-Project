/**
 * Clean Structured Data for Projects
 * Explicitly structured around: PROBLEM -> APPROACH -> TECHNOLOGY -> RESULT
 * Featuring deep engineering decisions for technical case studies.
 */

export const heroProjects = [
  {
    id: "real-estate-ai",
    title: "AI-Powered Real Estate Recommendation Platform",
    category: "AI & ML System",
    badge: "Hero Project 01",
    subtitle: "Hybrid ML discovery engine with vector similarity matching and spatial preference scoring.",
    
    // Explicit 4-Phase Flow
    problem: "Conventional real estate portals rely on rigid database filters (e.g. price range, location), failing to capture complex buyer intent, spatial similarity, or contextual preferences.",
    approach: "Built a hybrid recommendation system combining content-based feature vector similarity (cosine scoring over TF-IDF & amenity vectors) with implicit user interaction signals.",
    technologies: ["Python", "FastAPI", "Scikit-Learn", "Pandas", "PostgreSQL", "REST API"],
    result: "Achieved sub-100ms recommendation inference latency with scalable REST API endpoints ready for frontend integration.",

    github: "", // URL added by user later
    liveDemo: "", // URL added by user later
    
    architectureDiagram: `
      <svg viewBox="0 0 680 130" class="arch-svg">
        <rect x="10" y="40" width="120" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="70" y="63" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="700">Client / Search</text>
        <text x="70" y="77" text-anchor="middle" fill="#64748B" font-size="9">Buyer Vector</text>

        <path d="M 130 65 L 175 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="180" y="40" width="130" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="245" y="63" text-anchor="middle" fill="#1E4ED8" font-size="11" font-weight="700">FastAPI Service</text>
        <text x="245" y="77" text-anchor="middle" fill="#2563EB" font-size="9">Async REST API</text>

        <path d="M 310 65 L 355 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="360" y="40" width="140" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="430" y="61" text-anchor="middle" fill="#1E4ED8" font-size="11" font-weight="700">Scikit Vector Matcher</text>
        <text x="430" y="76" text-anchor="middle" fill="#2563EB" font-size="9">Cosine Similarity</text>

        <path d="M 500 65 L 545 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="550" y="40" width="120" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="610" y="63" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="700">PostgreSQL</text>
        <text x="610" y="77" text-anchor="middle" fill="#64748B" font-size="9">Indexed Datasets</text>
      </svg>
    `,

    engineeringDecisions: [
      {
        decision: "Vector Cosine Similarity vs. Relational SQL Queries",
        rationale: "Relational SQL queries with nested WHERE clauses degrade significantly as listing attributes scale. Storing pre-computed feature vectors and calculating cosine similarity in memory via NumPy/Scikit-Learn reduced query latency to <100ms."
      },
      {
        decision: "Hybrid Filtering over Pure Collaborative Filtering",
        rationale: "Pure collaborative filtering suffers from severe cold-start issues when new properties or buyers enter the system. Combining content-based feature vector similarity with user interaction logs ensured immediate recommendation relevance."
      }
    ],

    metrics: [
      { value: "< 100ms", label: "Inference Latency" },
      { value: "Hybrid ML", label: "Recommendation Pipeline" },
      { value: "FastAPI", label: "Backend Service" }
    ]
  },
  {
    id: "health-navigator-ai",
    title: "Health Navigator AI",
    category: "AI & Healthcare System",
    badge: "Hero Project 02",
    subtitle: "AI-assisted medical report digitization, fracture detection, and emergency facility router.",
    
    problem: "Medical lab reports and X-ray scans contain complex technical data that patients struggle to interpret during emergency situations without immediate triage context.",
    approach: "Architected a multi-modal pipeline integrating OCR for text extraction, fine-tuned CV models for preliminary fracture detection, LLMs for plain-language summaries, and Google Maps API for facility routing.",
    technologies: ["Python", "FastAPI", "OCR", "Computer Vision", "LLMs", "PostgreSQL", "Google Maps API"],
    result: ">94% OCR text extraction accuracy, report summaries generated in <2.5s, and real-time nearest hospital navigation.",

    github: "", 
    liveDemo: "",

    architectureDiagram: `
      <svg viewBox="0 0 680 130" class="arch-svg">
        <rect x="10" y="40" width="120" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="70" y="63" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="700">Lab Scan / Report</text>
        <text x="70" y="77" text-anchor="middle" fill="#64748B" font-size="9">Document / Image</text>

        <path d="M 130 65 L 175 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="180" y="40" width="130" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="245" y="63" text-anchor="middle" fill="#1E4ED8" font-size="11" font-weight="700">OCR & CV Pipeline</text>
        <text x="245" y="77" text-anchor="middle" fill="#2563EB" font-size="9">Tesseract / Vision</text>

        <path d="M 310 65 L 355 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="360" y="40" width="140" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="430" y="61" text-anchor="middle" fill="#1E4ED8" font-size="11" font-weight="700">LLM Summarizer</text>
        <text x="430" y="76" text-anchor="middle" fill="#2563EB" font-size="9">Structured Summary</text>

        <path d="M 500 65 L 545 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="550" y="40" width="120" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="610" y="63" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="700">Maps API Route</text>
        <text x="610" y="77" text-anchor="middle" fill="#64748B" font-size="9">Emergency Center</text>
      </svg>
    `,

    engineeringDecisions: [
      {
        decision: "Asynchronous FastAPI Worker Queue vs. Synchronous REST Calls",
        rationale: "Multi-modal OCR image processing and LLM summarization calls carry higher latency. Utilizing FastAPI async background tasks prevented main thread blocking, allowing immediate HTTP 202 response generation."
      },
      {
        decision: "Strict Safety & Non-Diagnostic Guardrails",
        rationale: "Engineered LLM prompts with deterministic structural schemas (Pydantic) and explicit non-diagnostic disclaimers to ensure outputs remain informational helper summaries rather than medical diagnoses."
      }
    ],

    metrics: [
      { value: "> 94%", label: "OCR Accuracy" },
      { value: "< 2.5s", label: "Pipeline Response" },
      { value: "FastAPI", label: "Async Microservice" }
    ]
  },
  {
    id: "url-shortener",
    title: "Production Custom URL Shortener",
    category: "Backend & Systems",
    badge: "Hero Project 03",
    subtitle: "High-performance link shortening, custom slug routing, and analytics engine built for RoboVITics.",
    
    problem: "Managing dozens of external registration forms, event pages, and sponsor links required a reliable internal link management tool with custom slugs and usage tracking.",
    approach: "Engineered a custom URL shortening backend with fast hash lookup algorithms, custom vanity aliases, click analytics, and role-based admin controls.",
    technologies: ["Node.js / Express", "Python API", "PostgreSQL", "REST API", "Admin Controls"],
    result: "500+ URLs shortened, 50+ custom/admin URLs created, actively serving 100+ RoboVITics members across 7 API endpoints.",

    github: "", 
    liveDemo: "",

    architectureDiagram: `
      <svg viewBox="0 0 680 130" class="arch-svg">
        <rect x="10" y="40" width="120" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="70" y="63" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="700">Client / Request</text>
        <text x="70" y="77" text-anchor="middle" fill="#64748B" font-size="9">GET /r/{alias}</text>

        <path d="M 130 65 L 175 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="180" y="40" width="140" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="250" y="63" text-anchor="middle" fill="#1E4ED8" font-size="11" font-weight="700">7 REST Endpoints</text>
        <text x="250" y="77" text-anchor="middle" fill="#2563EB" font-size="9">Express Router</text>

        <path d="M 320 65 L 365 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="370" y="40" width="130" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="435" y="61" text-anchor="middle" fill="#1E4ED8" font-size="11" font-weight="700">Hash Lookup & Auth</text>
        <text x="435" y="76" text-anchor="middle" fill="#2563EB" font-size="9">Atomic Counters</text>

        <path d="M 500 65 L 545 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="550" y="40" width="120" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="610" y="63" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="700">302 Redirect</text>
        <text x="610" y="77" text-anchor="middle" fill="#64748B" font-size="9">Destination URL</text>
      </svg>
    `,

    engineeringDecisions: [
      {
        decision: "Base62 Slug Encoding vs. Standard UUIDs",
        rationale: "Standard UUIDs produce long, unreadable strings unsuitable for event links. Implemented Base62 key generation with custom vanity alias override support."
      },
      {
        decision: "Atomic DB Counters for Click Analytics",
        rationale: "Used atomic SQL increment operations for click tracking to eliminate race conditions during high-concurrency event launches like Equinox and RoboWars."
      }
    ],

    metrics: [
      { value: "500+", label: "URLs Shortened" },
      { value: "100+", label: "Active Members Using" },
      { value: "7", label: "REST Endpoints" }
    ]
  }
];

export const secondaryProjects = [
  {
    id: "house-price-ml",
    title: "Production-Grade House Price Prediction",
    category: "ML Engineering",
    badge: "ML Pipeline",
    
    problem: "Moving ML models from unvalidated Jupyter notebooks into reliable, production-ready backend microservices with strict input schemas.",
    approach: "Constructed an automated ML pipeline covering outlier removal, target encoding, multi-model cross-validation (XGBoost vs. Random Forest), and serialized FastAPI deployment.",
    technologies: ["Python", "XGBoost", "Scikit-Learn", "FastAPI", "Docker", "Pydantic"],
    result: "Automated feature validation pipeline, zero data leakage, and production API serving.",

    github: "", 
    liveDemo: "",

    engineeringDecisions: [
      {
        decision: "XGBoost over Deep Learning for Tabular Data",
        rationale: "Tree-based ensembles outperformed neural networks on structured real estate tabular data, offering better interpretability and lower inference compute requirements."
      }
    ],
    metrics: [
      { value: "XGBoost", label: "Primary Model" },
      { value: "Zero Leak", label: "Validation Strategy" }
    ]
  },
  {
    id: "fog-flood-warning",
    title: "Fog-Based Flood Prediction & Early Warning System",
    category: "IoT & Edge",
    badge: "IoT System",
    
    problem: "Flash flood events in remote areas require immediate low-latency alerting even during cellular grid or cloud disconnects.",
    approach: "Deployed ESP32 water level telemetry nodes transmitting to a local fog gateway executing ML forecasting with fallback rule-based threshold logic.",
    technologies: ["ESP32", "IoT Sensors", "Machine Learning", "Fog Computing", "Blynk IoT", "C++"],
    result: "<500ms emergency alert latency and deterministic rule-based edge fallback during cloud disconnects.",

    github: "", 
    liveDemo: "",

    engineeringDecisions: [
      {
        decision: "Dual-Layer Edge Fail-Safe",
        rationale: "If cloud or fog connection fails during severe storms, ESP32 nodes fallback immediately to hard-coded local threshold relays to sound physical sirens."
      }
    ],
    metrics: [
      { value: "< 500ms", label: "Alert Latency" },
      { value: "ESP32", label: "Edge Hardware" }
    ]
  },
  {
    id: "smart-circuit-breaker",
    title: "Smart IoT Circuit Breaker",
    category: "Embedded Systems",
    badge: "Hardware & IoT",
    
    problem: "Mechanical thermal circuit breakers degrade over time, trip slowly, and provide no telemetry or remote overcurrent control.",
    approach: "Designed a solid-state electronic circuit breaker combining ACS712 current sensing with TRIAC solid-state switching controlled by ESP32 microcontrollers.",
    technologies: ["ESP32", "ACS712 Sensor", "TRIAC Switching", "C++ / Embedded", "Blynk Cloud"],
    result: "<10ms trip isolation time and real-time cloud current telemetry.",

    github: "", 
    liveDemo: "",

    engineeringDecisions: [
      {
        decision: "TRIAC Solid-State Switching vs. Relay",
        rationale: "Mechanical relays arc under high load and trip slowly (~50ms). TRIAC solid-state switching isolates fault currents in <10ms without mechanical wear."
      }
    ],
    metrics: [
      { value: "< 10ms", label: "Trip Isolation" },
      { value: "ACS712", label: "Current Sensing" }
    ]
  }
];

export const additionalProjectsList = [
  {
    title: "Sponsor Outreach Automation Engine",
    category: "Automation & Python",
    description: "Automated cold-mailing and follow-up pipeline tool used by RoboVITics to secure ₹8.3 Lakhs in technical event sponsorships from corporate partners.",
    technologies: ["Python", "SMTP / REST API", "CSV Engine"]
  },
  {
    title: "Kinetic Pavement Energy Harvester",
    category: "IoT & Hardware Concept",
    description: "Piezoelectric energy harvesting simulation and telemetry system capturing footsteps on high-footfall event walkways.",
    technologies: ["Arduino", "Sensors", "Circuit Design"]
  },
  {
    title: "Campus Ambassador Portal (CA Website)",
    category: "Web Engineering",
    description: "Registration and referral tracking platform for campus ambassadors promoting Equinox and RoboWars across national institutions.",
    technologies: ["HTML5", "CSS3", "JavaScript", "REST API"]
  },
  {
    title: "Shopping List Management System",
    category: "Software Engineering",
    description: "Full-stack inventory and collaborative shopping list application with item categorization, user auth, and real-time state sync.",
    technologies: ["JavaScript", "Node.js", "Express", "Database"]
  },
  {
    title: "StressSense Biosensor Analyzer",
    category: "AI / ML",
    description: "Biometric sensor signal collector and ML classifier for evaluating stress response patterns during intense task simulation.",
    technologies: ["Python", "Scikit-Learn", "Biometric Sensors"]
  }
];
