/**
 * Clean Structured Data for Technical Skills
 * Strictly representing technologies verified in projects & experience.
 */

export const skillCategories = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "brain",
    description: "Core intelligent systems, computer vision, report analysis, and predictive modeling.",
    skills: [
      { name: "Python", category: "Core", projectRef: "Health Navigator AI, Real Estate AI, Price Prediction" },
      { name: "Machine Learning", category: "Algorithms", projectRef: "House Price Prediction, Flood Warning" },
      { name: "Deep Learning", category: "Frameworks", projectRef: "Computer Vision & Classifier Models" },
      { name: "Computer Vision", category: "CV / OCR", projectRef: "Health Navigator AI Fracture Detection" },
      { name: "NLP", category: "Text Mining", projectRef: "Medical Report Processing & Summaries" },
      { name: "LLMs & Prompting", category: "Generative AI", projectRef: "Health Navigator AI Summary Layer" }
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering & Backend",
    icon: "code",
    description: "Production REST APIs, robust backend microservices, and system architecture.",
    skills: [
      { name: "FastAPI", category: "Web Framework", projectRef: "Health Navigator AI, ML Serving APIs" },
      { name: "Java", category: "OOP Language", projectRef: "IMMO Infotech Software Engineering" },
      { name: "C++", category: "Systems Language", projectRef: "Embedded Systems & Algorithmic Logic" },
      { name: "REST APIs", category: "Architecture", projectRef: "URL Shortener (7 Endpoints), Backend Services" },
      { name: "Backend Development", category: "Systems", projectRef: "Production Web Applications" }
    ]
  },
  {
    id: "data-databases",
    title: "Data Systems & Pipeline",
    icon: "database",
    description: "Relational databases, feature pipelines, structured queries, and data processing.",
    skills: [
      { name: "PostgreSQL", category: "RDBMS", projectRef: "Health Navigator AI, Production Apps" },
      { name: "SQL", category: "Querying", projectRef: "Database Indexing & Schema Design" },
      { name: "Data Preprocessing", category: "Engineering", projectRef: "Production House Price Prediction" },
      { name: "Feature Engineering", category: "ML Pipelines", projectRef: "Spatial & Temporal Feature Scoring" }
    ]
  },
  {
    id: "frontend-web",
    title: "Frontend Engineering",
    icon: "layout",
    description: "Responsive user interfaces, modular components, and web application state.",
    skills: [
      { name: "JavaScript (ES6+)", category: "Language", projectRef: "Custom Web Applications & Portals" },
      { name: "React", category: "UI Library", projectRef: "Interactive Web Interfaces" },
      { name: "HTML5 & Semantic Web", category: "Structure", projectRef: "Accessible Clean Document Design" },
      { name: "CSS3 & Modern Layouts", category: "Styling", projectRef: "Responsive Layout Systems & Animations" }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud, Tools & Deployment",
    icon: "cloud",
    description: "Version control, automated deployments, and web hosting platforms.",
    skills: [
      { name: "GitHub / Git", category: "Version Control", projectRef: "Code Repositories & Collaboration" },
      { name: "Vercel", category: "Deployment", projectRef: "Frontend Application Hosting" },
      { name: "Render", category: "Cloud Hosting", projectRef: "Python API & Backend Deployment" }
    ]
  },
  {
    id: "iot-embedded",
    title: "IoT & Embedded Systems",
    icon: "cpu",
    description: "Microcontroller telemetry, hardware sensor integration, and edge intelligence.",
    skills: [
      { name: "ESP32", category: "Microcontroller", projectRef: "Flood Warning System, Smart Breaker" },
      { name: "Arduino / C++ Firmware", category: "Embedded", projectRef: "Sensor Telemetry & Hardware Control" },
      { name: "ACS712 & TRIACs", category: "Electronics", projectRef: "Smart Solid-State Circuit Breaker" },
      { name: "Blynk IoT Cloud", category: "Telemetry UI", projectRef: "Real-time Mobile Monitoring Dashboards" }
    ]
  }
];
