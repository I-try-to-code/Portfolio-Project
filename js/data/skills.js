/**
 * Clean Structured Data for Technical Skills
 * Strictly representing technologies verified in projects & experience.
 */

export const skillCategories = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "brain",
    description: "Generative AI, RAG architecture, computer vision, transformers, and deep learning pipelines.",
    skills: [
      { name: "Python", category: "Core Language", projectRef: "Financial RAG, BANKING77, Fracture CV, Support NLP" },
      { name: "PyTorch", category: "Deep Learning", projectRef: "Fracture Detection CV, BANKING77 Transformers" },
      { name: "Transformers (BERT/DistilBERT)", category: "NLP Models", projectRef: "BANKING77 77-Class Intent Intelligence Engine" },
      { name: "Computer Vision (CNNs)", category: "Vision Models", projectRef: "Fracture Detection (EfficientNet-B0 & ResNet-50)" },
      { name: "Grad-CAM & XAI", category: "Explainable AI", projectRef: "Fracture Detection Visual Saliency Overlay" },
      { name: "Scikit-Learn & Classical ML", category: "Algorithms", projectRef: "Customer Support Ticket Classifier (Linear SVM)" },
      { name: "LLMs & Prompt Guardrails", category: "Generative AI", projectRef: "Financial Research RAG (Groq gpt-oss-120b)" }
    ]
  },
  {
    id: "rag-nlp",
    title: "RAG & Advanced Information Retrieval",
    icon: "database",
    description: "Hybrid dense/lexical retrieval, vector databases, cross-encoder reranking, and provenance benchmarking.",
    skills: [
      { name: "LangChain", category: "Framework", projectRef: "Financial RAG Annual Report Ingestion" },
      { name: "ChromaDB", category: "Vector Database", projectRef: "Financial RAG Corpus (26,488 Document Chunks)" },
      { name: "BGE Embeddings", category: "Dense Search", projectRef: "BAAI/bge-small-en-v1.5 Semantic Vector Engine" },
      { name: "BM25 Lexical Search", category: "Keyword Search", projectRef: "Exact Financial Figure & Code Retrieval" },
      { name: "Reciprocal Rank Fusion (RRF)", category: "Hybrid Fusion", projectRef: "Merging Dense & Lexical Search Ranks" },
      { name: "Cross-Encoder Reranking", category: "Reranking Engine", projectRef: "ms-marco-MiniLM-L-6-v2 Context Reranker" },
      { name: "PyMuPDF", category: "Document AI", projectRef: "Page-level Provenance & PDF Parsing" }
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering & Backend",
    icon: "code",
    description: "Production REST APIs, microservices, model serving, and object-oriented design.",
    skills: [
      { name: "FastAPI", category: "Web Framework", projectRef: "Financial RAG API, BANKING77 Inference Microservice" },
      { name: "REST APIs & Uvicorn", category: "Architecture", projectRef: "Production Inference & System Endpoints" },
      { name: "Java", category: "OOP Language", projectRef: "IMMO Infotech Software Engineering Internship" },
      { name: "C++", category: "Systems Language", projectRef: "Embedded Systems & Algorithmic Firmware" },
      { name: "PostgreSQL & SQL", category: "Databases", projectRef: "Relational Queries & Database Indexing" }
    ]
  },
  {
    id: "mlops-devops",
    title: "MLOps, Experimentation & DevOps",
    icon: "cloud",
    description: "Systematic experiment tracking, model versioning, calibration, Docker, and CI/CD pipelines.",
    skills: [
      { name: "Weights & Biases (W&B)", category: "Experimentation", projectRef: "Fracture Detection & BANKING77 Fine-Tuning" },
      { name: "MLflow", category: "MLOps Tracking", projectRef: "Customer Support Ticket Classifier Pipeline" },
      { name: "Temperature Scaling & ECE", category: "Model Calibration", projectRef: "Post-Hoc Probability Calibration (1.70% ECE)" },
      { name: "Docker & Containerization", category: "Deployment", projectRef: "Model Serving Containers & FastAPI Isolation" },
      { name: "GitHub Actions & Git", category: "CI/CD & Version", projectRef: "Automated Workflows & Repository Control" }
    ]
  },
  {
    id: "frontend-web",
    title: "Frontend Engineering & Observability",
    icon: "layout",
    description: "Interactive web applications, real-time latency monitoring, and RAG observability interfaces.",
    skills: [
      { name: "JavaScript (ES6+)", category: "Language", projectRef: "BANKING77 UI, RAG Observability Dashboard" },
      { name: "HTML5 & Semantic Markup", category: "Structure", projectRef: "Accessible & Standardized Web Design" },
      { name: "CSS3 & Modern Layouts", category: "Styling", projectRef: "Responsive Flexbox/Grid Systems & Animations" },
      { name: "Streamlit", category: "AI UI Framework", projectRef: "Customer Support Agent Dashboard Interface" }
    ]
  }
];
