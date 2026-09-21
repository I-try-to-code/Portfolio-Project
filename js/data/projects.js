/**
 * Clean Structured Data for Projects
 * Explicitly structured around: PROBLEM -> APPROACH -> TECHNOLOGY -> RESULT
 * Featuring deep engineering decisions for technical case studies.
 */

export const heroProjects = [
  {
    id: "finance-rag",
    title: "Financial Research & Regulatory Intelligence RAG",
    category: "Generative AI & Enterprise RAG",
    badge: "Flagship Enterprise RAG",
    subtitle: "Enterprise annual report intelligence engine for TCS, HDFC Bank, Reliance & HUL with hybrid search & zero-hallucination citations.",
    
    // Explicit 4-Phase Flow
    problem: "Retrieving precise financial metrics, fiscal-year figures, and regulatory disclosures from long (26k+ chunk) corporate annual reports without hallucinations or fiscal-year swaps.",
    approach: "Built PyMuPDF ingestion preserving page/year metadata. Implemented hybrid retrieval (BGE-small-en-v1.5 dense + BM25 lexical) merged via Reciprocal Rank Fusion (RRF), followed by ms-marco-MiniLM-L-6-v2 Cross-Encoder reranking. Fed Top-5 context into Groq gpt-oss-120b with strict citation & refusal constraints.",
    technologies: ["LangChain", "PyMuPDF", "ChromaDB", "BGE Embeddings", "BM25", "Reciprocal Rank Fusion", "Cross-Encoder", "Groq LLM", "FastAPI", "Pytest"],
    result: "82.5% Hit@10 (vs 67.5% baseline), 0.5180 MRR, 100% citation validity, 100% out-of-domain abstention accuracy, and 5/5 adversarial test pass rate.",

    github: "https://github.com/I-try-to-code/Finance-RAG--annual-reports-of-4-companies-",
    liveDemo: "",

    architectureDiagram: `
      <svg viewBox="0 0 680 130" class="arch-svg">
        <rect x="10" y="40" width="110" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="65" y="63" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700">Annual Reports</text>
        <text x="65" y="77" text-anchor="middle" fill="#64748B" font-size="9">PyMuPDF (26k Chunks)</text>

        <path d="M 120 65 L 155 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="160" y="40" width="130" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="225" y="61" text-anchor="middle" fill="#1E4ED8" font-size="10" font-weight="700">Hybrid Search (RRF)</text>
        <text x="225" y="76" text-anchor="middle" fill="#2563EB" font-size="9">BGE Dense + BM25</text>

        <path d="M 290 65 L 325 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="330" y="40" width="130" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="395" y="61" text-anchor="middle" fill="#1E4ED8" font-size="10" font-weight="700">Cross-Encoder</text>
        <text x="395" y="76" text-anchor="middle" fill="#2563EB" font-size="9">MiniLM-L6 Reranker</text>

        <path d="M 460 65 L 495 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="500" y="40" width="170" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="585" y="61" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700">Groq Grounded LLM</text>
        <text x="585" y="76" text-anchor="middle" fill="#64748B" font-size="9">100% Provenance Citations</text>
      </svg>
    `,

    engineeringDecisions: [
      {
        decision: "Hybrid Retrieval (Dense BGE + BM25 Lexical + RRF) vs. Dense Vector Only",
        rationale: "Dense-only retrieval failed on exact numerical figures, financial codes, and fiscal year tags (67.5% Hit@10). Combining BM25 keyword precision with dense semantic similarity via Reciprocal Rank Fusion boosted Hit@10 to 82.5% and MRR to 0.5180."
      },
      {
        decision: "Cross-Encoder Reranking (ms-marco-MiniLM-L-6-v2)",
        rationale: "Second-stage joint query-document context evaluation reranked dense+lexical candidate pools down to Top-5 contexts, eliminating noise from long multi-year corporate filings."
      },
      {
        decision: "Strict Grounded LLM Generation & Provenance Citations",
        rationale: "Implemented explicit prompt constraints for Groq gpt-oss-120b enforcing page/chunk-level citations, 100% abstention on unanswerable/out-of-corpus queries, and passing 5/5 adversarial tests."
      }
    ],

    metrics: [
      { value: "82.5%", label: "Hit@10 Retrieval" },
      { value: "100%", label: "Citation Validity" },
      { value: "100%", label: "Abstention Accuracy" }
    ]
  },
  {
    id: "banking77-transformer",
    title: "Transformer-Based Banking Support Intelligence",
    category: "Transformer NLP & MLOps",
    badge: "Hero Project 02",
    subtitle: "End-to-end intent classification engine across 77 fine-grained banking support intents with model latency trade-off benchmarking.",
    
    problem: "Classifying complex, multi-intent banking customer queries into 77 domain-specific intent classes with tight inference latency and memory requirements.",
    approach: "Established TF-IDF + Logistic Regression baseline (0.832 F1), then fine-tuned pretrained DistilBERT and BERT-base. Conducted per-class error analysis on overlapping semantic boundaries (e.g., pending_transfer vs transfer_timing). Deployed DistilBERT via FastAPI REST API and interactive frontend.",
    technologies: ["PyTorch", "Hugging Face", "DistilBERT", "BERT", "Scikit-Learn", "FastAPI", "Uvicorn", "Weights & Biases", "REST API"],
    result: "0.891 Macro F1 with DistilBERT across 77 intent classes; deployed through FastAPI REST backend with real-time latency monitoring.",

    github: "https://github.com/I-try-to-code/finance-ticket-classifier-using-transformers--multi-head-attention-",
    liveDemo: "",

    architectureDiagram: `
      <svg viewBox="0 0 680 130" class="arch-svg">
        <rect x="10" y="40" width="120" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="70" y="63" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700">Banking Query</text>
        <text x="70" y="77" text-anchor="middle" fill="#64748B" font-size="9">77 Intent Classes</text>

        <path d="M 130 65 L 165 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="170" y="40" width="140" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="240" y="61" text-anchor="middle" fill="#1E4ED8" font-size="10" font-weight="700">Pretrained Tokenizer</text>
        <text x="240" y="76" text-anchor="middle" fill="#2563EB" font-size="9">distilbert-base-uncased</text>

        <path d="M 310 65 L 345 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="350" y="40" width="140" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="420" y="61" text-anchor="middle" fill="#1E4ED8" font-size="10" font-weight="700">Fine-Tuned Classifier</text>
        <text x="420" y="76" text-anchor="middle" fill="#2563EB" font-size="9">0.891 Macro F1</text>

        <path d="M 490 65 L 525 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="530" y="40" width="140" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="600" y="61" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700">FastAPI REST Service</text>
        <text x="600" y="76" text-anchor="middle" fill="#64748B" font-size="9">Interactive Frontend</text>
      </svg>
    `,

    engineeringDecisions: [
      {
        decision: "DistilBERT Selection vs. BERT-base",
        rationale: "BERT-base achieved 0.895 Macro F1 vs DistilBERT's 0.891 (+0.004 delta), but required double the parameters and significantly higher GPU inference latency. Selected DistilBERT for production deployment."
      },
      {
        decision: "Per-Class Error & Confusion Pair Analysis",
        rationale: "Diagnosed confusion clusters across fine-grained intents (e.g., virtual_card_not_working vs getting_virtual_card), leading to targeted class re-weighting and dataset refinement."
      }
    ],

    metrics: [
      { value: "0.891", label: "Macro F1 Score" },
      { value: "77", label: "Intent Classes" },
      { value: "FastAPI", label: "Inference API" }
    ]
  },
  {
    id: "fracture-detection-cv",
    title: "Fracture Detection System for X-ray Radiographs",
    category: "Computer Vision & Deep Learning",
    badge: "Hero Project 03",
    subtitle: "Deep learning computer vision pipeline with EfficientNet-B0, post-hoc Temperature Scaling, and Grad-CAM saliency heatmaps.",
    
    problem: "Detecting bone fractures in X-ray images while providing clinically calibrated predictions and explainable visual attention maps.",
    approach: "Unified and MD5-deduplicated 7,860 radiographs across 5 anatomical sites (FracAtlas + Multi-Region datasets). Benchmarked custom CNN baseline, ResNet-50, and EfficientNet-B0 in PyTorch. Applied Temperature Scaling (ECE 1.70%) and real-time Grad-CAM saliency maps.",
    technologies: ["PyTorch", "Computer Vision", "EfficientNet-B0", "ResNet-50", "Grad-CAM", "Weights & Biases", "Scikit-Learn", "Temperature Scaling"],
    result: "97.48% ROC-AUC, 98.45% Specificity, 81.52% Sensitivity on 1,179 multi-center test cases with 1.70% ECE; EfficientNet-B0 delivered 4.8x smaller footprint and 45% faster inference.",

    github: "https://github.com/I-try-to-code/Fracture-detection-CNN-model",
    liveDemo: "",

    architectureDiagram: `
      <svg viewBox="0 0 680 130" class="arch-svg">
        <rect x="10" y="40" width="110" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="65" y="63" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700">X-ray Radiograph</text>
        <text x="65" y="77" text-anchor="middle" fill="#64748B" font-size="9">7,860 Scans (MD5 Purged)</text>

        <path d="M 120 65 L 155 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="160" y="40" width="140" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="230" y="61" text-anchor="middle" fill="#1E4ED8" font-size="10" font-weight="700">EfficientNet-B0</text>
        <text x="230" y="76" text-anchor="middle" fill="#2563EB" font-size="9">5.3M Params (~32ms)</text>

        <path d="M 300 65 L 335 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="340" y="40" width="140" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="410" y="61" text-anchor="middle" fill="#1E4ED8" font-size="10" font-weight="700">Temperature Scaling</text>
        <text x="410" y="76" text-anchor="middle" fill="#2563EB" font-size="9">Calibrated ECE 1.70%</text>

        <path d="M 480 65 L 515 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="520" y="40" width="150" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="595" y="61" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700">Grad-CAM Overlay</text>
        <text x="595" y="76" text-anchor="middle" fill="#64748B" font-size="9">Visual Saliency Map</text>
      </svg>
    `,

    engineeringDecisions: [
      {
        decision: "EfficientNet-B0 vs ResNet-50 Architecture",
        rationale: "EfficientNet-B0 outperformed ResNet-50 (99.14% vs 98.97% single-source accuracy, 0.9981 vs 0.9957 ROC-AUC) while using 4.8x fewer parameters (5.3M vs 25.6M) and 45% faster latency (~32ms vs ~58ms)."
      },
      {
        decision: "Post-Hoc Temperature Scaling for Calibration",
        rationale: "Calibrated prediction overconfidence using Temperature Scaling (T* = 0.9157), reducing Expected Calibration Error (ECE) to 1.70% for clinical reliability."
      },
      {
        decision: "Grad-CAM Saliency Maps for Interpretability",
        rationale: "Visualized spatial activation heatmaps on fine cortical disruptions, transforming black-box predictions into interpretable visual overlays."
      }
    ],

    metrics: [
      { value: "97.48%", label: "ROC-AUC (Multi-Center)" },
      { value: "98.45%", label: "Clinical Specificity" },
      { value: "1.70%", label: "Calibrated ECE" }
    ]
  },
  {
    id: "ticket-classification-nlp",
    title: "AI-Powered Customer Support Ticket Routing & Response Assistant",
    category: "NLP & LLM System",
    badge: "Hero Project 04",
    subtitle: "Production NLP ticket classification pipeline and LLM response assistant with confidence-based human-in-the-loop fallback.",
    
    problem: "Automating multi-class ticket categorization, priority prediction, and response drafting for large customer support volumes (~28k tickets).",
    approach: "Built modular NLP pipeline evaluating Classical ML (Linear SVM, LogReg, Naive Bayes), Word2Vec + BiLSTM, and fine-tuned DistilBERT. Selected Linear SVM baseline (69.28% Acc, 0.7065 Macro F1). Integrated predicted metadata into LLM response generator with confidence thresholds.",
    technologies: ["Python", "Scikit-Learn", "NLTK", "Gensim", "TensorFlow / BiLSTM", "Transformers", "MLflow", "FastAPI", "Streamlit", "Docker"],
    result: "69.28% Accuracy & 0.7065 Macro F1 across ~28,000 tickets; integrated MLflow experiment tracking, FastAPI inference, Streamlit dashboard, and human-in-the-loop fallback.",

    github: "https://github.com/I-try-to-code/NLP--customer-ticket-classfier--Classical-ML",
    liveDemo: "",

    architectureDiagram: `
      <svg viewBox="0 0 680 130" class="arch-svg">
        <rect x="10" y="40" width="110" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="65" y="63" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700">Support Ticket</text>
        <text x="65" y="77" text-anchor="middle" fill="#64748B" font-size="9">28k Tickets Corpus</text>

        <path d="M 120 65 L 155 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="160" y="40" width="140" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="230" y="61" text-anchor="middle" fill="#1E4ED8" font-size="10" font-weight="700">Linear SVM Engine</text>
        <text x="230" y="76" text-anchor="middle" fill="#2563EB" font-size="9">Queue & Priority Predictor</text>

        <path d="M 300 65 L 335 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="340" y="40" width="130" height="50" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5"/>
        <text x="405" y="61" text-anchor="middle" fill="#1E4ED8" font-size="10" font-weight="700">Confidence Check</text>
        <text x="405" y="76" text-anchor="middle" fill="#2563EB" font-size="9">Human-in-Loop Gate</text>

        <path d="M 470 65 L 505 65" stroke="#2563EB" stroke-width="2"/>

        <rect x="510" y="40" width="160" height="50" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="590" y="61" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700">LLM Response Assistant</text>
        <text x="590" y="76" text-anchor="middle" fill="#64748B" font-size="9">Agent Dashboard UI</text>
      </svg>
    `,

    engineeringDecisions: [
      {
        decision: "Linear SVM Baseline vs. Complex Deep Learning",
        rationale: "Linear SVM outperformed MultinomialNB (40.45% Acc) and Logistic Regression (54.99% Acc), matching complex models on this dataset with 69.28% accuracy and 0.7065 Macro F1."
      },
      {
        decision: "Decoupled Routing Engine & LLM Generator",
        rationale: "Separated predictive classification (queue/priority) from generative response drafting, allowing independent evaluation and confidence-based human review."
      }
    ],

    metrics: [
      { value: "69.28%", label: "Classification Accuracy" },
      { value: "0.7065", label: "Macro F1 Score" },
      { value: "MLflow", label: "MLOps Tracking" }
    ]
  }
];

export const secondaryProjects = [
  {
    id: "url-shortener",
    title: "Production Custom URL Shortener",
    category: "Backend & Systems",
    badge: "RoboVITics Tool",
    
    problem: "Managing dozens of external registration forms, event pages, and sponsor links required a reliable internal link management tool with custom slugs and usage tracking.",
    approach: "Engineered a custom URL shortening backend with fast hash lookup algorithms, custom vanity aliases, click analytics, and role-based admin controls.",
    technologies: ["Node.js / Express", "Python API", "PostgreSQL", "REST API", "Admin Controls"],
    result: "500+ URLs shortened, 50+ custom/admin URLs created, actively serving 100+ RoboVITics members across 7 API endpoints.",

    github: "https://github.com/I-try-to-code", 
    liveDemo: "",

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
  },
  {
    id: "house-price-ml",
    title: "Production-Grade House Price Prediction",
    category: "ML Engineering",
    badge: "ML Pipeline",
    
    problem: "Moving ML models from unvalidated Jupyter notebooks into reliable, production-ready backend microservices with strict input schemas.",
    approach: "Constructed an automated ML pipeline covering outlier removal, target encoding, multi-model cross-validation (XGBoost vs. Random Forest), and serialized FastAPI deployment.",
    technologies: ["Python", "XGBoost", "Scikit-Learn", "FastAPI", "Docker", "Pydantic"],
    result: "Automated feature validation pipeline, zero data leakage, and production API serving.",

    github: "https://github.com/I-try-to-code", 
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

    github: "https://github.com/I-try-to-code", 
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

    github: "https://github.com/I-try-to-code", 
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
