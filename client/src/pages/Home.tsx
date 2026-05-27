import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Linkedin, 
  Github, 
  Mail, 
  ArrowUpRight, 
  TrendingUp, 
  Users, 
  RefreshCw, 
  Target, 
  Award, 
  BookOpen, 
  Briefcase, 
  ChevronRight, 
  Database, 
  Layers, 
  BarChart3, 
  MessageSquare, 
  ExternalLink,
  Code2,
  Cpu,
  Brain,
  Sparkles
} from "lucide-react";
import GrowthCalculator from "@/components/GrowthCalculator";

export default function Home() {
  const rotatingWords = ["growth", "insights", "funnels", "dashboards", "strategy"];

const [wordIndex, setWordIndex] = useState(0);
const [typedWord, setTypedWord] = useState("");
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentWord = rotatingWords[wordIndex];

  const speed = isDeleting ? 45 : 110;
  const pause = 1000;

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      if (typedWord.length < currentWord.length) {
        setTypedWord(currentWord.slice(0, typedWord.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (typedWord.length > 0) {
        setTypedWord(currentWord.slice(0, typedWord.length - 1));
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }
    }
  }, speed);

  return () => clearTimeout(timeout);
}, [typedWord, isDeleting, wordIndex]);

  const [activeTab, setActiveTab] = useState<string>("all");

  // Project details
  const projects = [
    {
      id: "unible",
      category: "product",
      title: "UNIble Product Engagement & Funnel Analysis",
      summary: "Product analytics case study exploring onboarding funnels, feature adoption, and retention patterns using simulated user event data based on real product workflows.",
      question: "Which onboarding and engagement behaviors are most strongly associated with long-term retention in student productivity platforms?",
      tools: ["Firebase", "SQL", "Power BI", "Cohort Analysis"],
      insights: [
        "Built a simulated product event dataset based on UNIble's onboarding and feature interaction flows to analyze user activation patterns.",
        "Explored how onboarding completion, notification opt-in, and early feature engagement could influence Week 4 retention and recurring usage behavior."
      ],
      impact: "Developed a product analytics framework to evaluate onboarding friction, engagement drivers, and feature prioritization opportunities for future product growth experiments."
    },
    {
      id: "marketing",
      category: "marketing",
      title: "Marketing Performance & Audience Insights",
      summary: "Campaign performance analysis project focused on ROAS optimization, audience segmentation, and marketing KPI evaluation across multi-channel datasets.",
      question: "Which audience segments, creatives, and campaign structures demonstrate the strongest marketing efficiency and engagement performance?",
      tools: ["Excel", "Pivot Tables", "KPI Analysis", "Audience Segmentation"],
      insights: [
        "Analyzed campaign-level performance metrics including ROAS, CPM, CTR, and conversion efficiency across multiple audience and creative segments.",
        "Identified meaningful performance differences between campaign structures, suggesting opportunities for more targeted audience segmentation and budget allocation strategies."
      ],
      impact: "Developed data-driven recommendations around audience targeting, creative optimization, and marketing spend allocation by translating campaign performance metrics into actionable business insights."
    },
    {
      id: "credit",
      category: "risk",
      title: "Credit Default Risk Analysis",
      summary: "Credit risk modeling project using real loan application and bureau datasets to identify borrower-level risk indicators and evaluate default prediction performance.",
      question: "Which borrower and bureau-level features are most useful for identifying potential default risk in consumer credit applications?",
      tools: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Azure"],
      insights: [
        "Merged loan application, bureau, and bureau balance datasets to engineer credit behavior features such as maximum overdue amount, days overdue, and delinquency status.",
        "Trained and evaluated gradient boosting models for default prediction, achieving a ROC-AUC score of 0.86 while identifying overdue history and debt-related variables as key predictive indicators."
      ],
      impact: "Leveraged Azure GPU computing to accelerate model training and experimentation workflows by approximately 6x, demonstrating how bureau-level repayment history and behavioral features can support structured credit risk analysis."
    },
    {
      id: "nlp",
      category: "insights",
      title: "Emotion Classification & Audience Insight Analysis",
      summary: "Team-based NLP research project exploring how transformer-based emotion classification can support audience sentiment understanding.",
      question: "How can emotion classification models help identify recurring sentiment patterns and audience themes in large-scale social text data?",
      tools: ["Python", "Hugging Face", "PyTorch", "GoEmotions"],
      insights: [
        "Collaborated on a team-based NLP project analyzing 58K+ GoEmotions text samples to explore recurring emotional patterns across online discussions.",
        "Benchmarked transformer-based models including RoBERTa and DistilBERT for multi-label emotion classification using Hugging Face Transformers."
      ],
      impact: "Translated model outputs into audience insight use cases, showing how emotion classification could support social listening, content strategy, and engagement analysis for digital products and online communities."
    }
  ];

  // Experience details
  const experiences = [
    {
      role: "Product Operations & Growth Analytics",
      company: "UNIble",
      period: "Aug 2025 – Present",
      bullets: [
        "Defined product KPIs, analytics events, and reporting logic to help evaluate onboarding, activation, retention, and early user engagement.",
        "Designed Firebase event structure and SQL-ready tracking logic to support future funnel, cohort, and feature adoption analysis.",
        "Planned early campus growth initiatives across social content, QR campaigns, referrals, and student communities to compare acquisition channels and messaging ideas.",
        "Coordinated execution across product, design, and development workstreams, supporting launch readiness for core app modules and improving sprint planning clarity."
      ]
    },
    {
      role: "Machine Learning Engineer (NLP)",
      company: "UTMIST",
      period: "Oct 2024 – May 2025",
      bullets: [
        "Benchmarked transformer-based NLP models including BERT, RoBERTa, and DistilBERT on large-scale multi-label emotion classification datasets.",
        "Worked with 58K+ social text samples using Hugging Face Transformers and PyTorch to evaluate sentiment and emotion classification performance.",
        "Compared model accuracy, macro F1, and inference efficiency across multiple architectures to analyze trade-offs in NLP model selection.",
        "Explored applications of emotion classification and audience sentiment analysis for online communities and behavioral insight generation."
      ]
    },
    {
      role: "Statistical Research & Data Analysis",
      company: "Toronto Open Data Projects",
      period: "Jan 2024 – Mar 2025",
      bullets: [
        "Conducted statistical analyses using Toronto Open Data to study urban systems, demographic trends, and operational resource allocation patterns.",
        "Applied Bayesian regression and exploratory data analysis techniques to projects involving waste management, homelessness, and public infrastructure datasets.",
        "Designed data visualizations and analytical reports using PowerBI and Tableau to communicate geographic and demographic insights from large-scale municipal datasets.",
        "Performed data cleaning, transformation, and modeling workflows in Python, SQL and R across multiple research-focused analytics projects."
      ]
    }
  ];

  // Skills organized into modern categories
  const skillCategories = [
    {
      title: "Product & Growth Analytics",
      icon: <TrendingUp className="h-4 w-4 text-primary" />,
      skills: ["Funnel Optimization", "A/B Testing & Experimentation", "Cohort Analysis", "User Retention Modeling", "Activation & Engagement Metrics"]
    },
    {
      title: "Business Insights & KPI Reporting",
      icon: <BarChart3 className="h-4 w-4 text-primary" />,
      skills: ["KPI Framework Design", "Executive Dashboards", "Data Storytelling", "Stakeholder Communication", "Revenue & LTV Modeling"]
    },
    {
      title: "Marketing & Audience Analytics",
      icon: <Target className="h-4 w-4 text-primary" />,
      skills: ["ROAS Optimization", "Audience Segmentation", "Customer Acquisition Cost (CAC)", "Multi-channel Attribution", "Social Listening & Sentiment"]
    },
    {
      title: "Data & Visualization Tools",
      icon: <Database className="h-4 w-4 text-primary" />,
      skills: ["SQL (PostgreSQL, BigQuery)", "Python (Pandas, NumPy, Scikit-learn)", "Power BI & Tableau", "Excel (Advanced, Pivot Tables, Solver)", "Firebase Analytics"]
    },
    {
      title: "Collaboration & Strategy",
      icon: <Layers className="h-4 w-4 text-primary" />,
      skills: ["Cross-functional Leadership", "Product Operations", "Agile Methodologies", "User Research Synthesis", "Market Opportunity Analysis"]
    }
  ];

  // Blog / Insights previews
  const blogPosts = [
    {
      title: "2024 U.S. Presidential Election Forecast",
      excerpt:
        "Applied a Bayesian generalized linear model to poll-of-polls data to analyze Harris support, accounting for pollster effects, population type, and poll recency.",
      date: "Research Paper",
      readTime: "Bayesian GLM",
      category: "Forecasting",
      link: "/papers/paper2024_US_Election_Forecast.pdf"
    },
    {
      title: "2020 U.S. Election Result Analysis",
      excerpt:
        "Used multilevel regression and post-stratification to analyze how gender, education, and geography shaped voting patterns in the 2020 U.S. Presidential Election.",
      date: "Research Paper",
      readTime: "MRP",
      category: "Statistical Modeling",
      link: "/papers/paper2020_US_Election_Result_Analysis.pdf"
    },
    {
      title: "Urban Waste Management in Toronto",
      excerpt:
        "Analyzed Toronto waste collection patterns using demographic, housing, and ward-level data to study operational efficiency and equitable resource allocation.",
      date: "Research Paper",
      readTime: "Bayesian Modeling",
      category: "Operations Insights",
      link: "/papers/paperWaste-and-Recycling-in-Toronto.pdf"
    },
    {
      title: "Toronto Homelessness Pattern Analysis",
      excerpt:
        "Explored geographic and demographic patterns in Toronto shelter demand using SMIS occupancy and capacity data to identify service gaps and resource needs.",
      date: "Research Paper",
      readTime: "Public Data Analysis",
      category: "Social Insights",
      link: "/papers/paperAnalyzing-Geographic-and-Demographic-Patterns-of-Homelessness.pdf"
    },
    {
      title: "2023–24 EPL Forecasting Model",
      excerpt:
        "Built a Bayesian regression model using possession, goals, expected goals, progressive passes, and carries to forecast EPL team points and performance drivers.",
      date: "Research Paper",
      readTime: "Sports Analytics",
      category: "Forecasting",
      link: "/papers/paper23-24-EPL-Forecast.pdf"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary relative overflow-x-hidden">
      
      {/* Background Grid Lines (Swiss Design Motif) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] grid grid-cols-4 md:grid-cols-12 gap-4 px-6 md:px-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-full border-r border-foreground" />
        ))}
      </div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-lg tracking-tight text-foreground">
              Jiwon<span className="text-primary"> </span>Choi
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono bg-secondary px-2 py-0.5 rounded text-secondary-foreground">
              Applied Statistics @ U of T
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#insights" className="hover:text-foreground transition-colors">Research</a>
            <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex border-border/60 hover:bg-muted/30">
              <a href="#contact">Contact</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-border/40">
        {/* Abstract Generated Background */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663704297874/XgnwZVUyWtDSJq4fqeVyPH/hero-bg-AJCSJD8ts9VkkfikotqQFt.webp" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono font-medium">
              <Sparkles className="h-3 w-3 text-secondary-foreground" />
              <span>Open to Data-Driven Product, Strategy & Analytics Roles</span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight leading-none text-foreground">
                Jiwon Choi
              </h1>
              <p className="text-xl md:text-2xl font-serif text-primary italic font-medium">
                Product, Growth & Business Analytics
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed tracking-[-0.01em]">
  Turning data into{" "}
  <span className="text-primary font-medium border-b border-primary/30">
    {typedWord}
    <span className="animate-pulse">|</span>
  </span>
  , engagement, and actionable business insights. Bridging the gap between rigorous statistics and high-impact product strategy.
</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                <a href="#projects" className="flex items-center gap-2">
                  Explore Projects <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild className="border-border/60 hover:bg-muted/30">
                <a href="#about">Learn More</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6 border-t border-border/40 max-w-md">
              <a href="https://www.linkedin.com/in/jwonc4602/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-mono">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/jwonc4602" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-mono">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="mailto:jadechoi316@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-mono">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>

          {/* Hero Image / Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            {/* <div className="relative w-full max-w-[380px] aspect-square rounded-2xl bg-card border border-border/40 p-4 shadow-md overflow-hidden">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663704297874/XgnwZVUyWtDSJq4fqeVyPH/analytics-illustration-KqdhFnrf6qgRE95qUxmCYw.webp" 
                alt="Product Analytics Illustration" 
                className="w-full h-full object-contain rounded-xl"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                01 // Biography
              </span>
              <h2 className="text-3xl font-serif font-bold text-foreground">
                The Intersection of Numbers & Strategy
              </h2>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 space-y-6 text-muted-foreground leading-relaxed text-base">
            <p>
              As a <strong>Math and Statistics graduate from the University of Toronto</strong>, I spent years studying probability, regression models, and experimental design. What excites me most is applying that rigor to understand <strong>human behavior, optimize products, and drive business growth</strong>.
            </p>

            <p>
              I position myself at the intersection of <strong>analytics, product strategy, and storytelling</strong>. I believe data is only as valuable as the actions it inspires, so I focus on translating complex metrics into clear, visual, and actionable insights.
            </p>

            <p>
              Whether analyzing onboarding friction, campaign performance, or predictive risk signals, I approach problems with a <strong>growth-first mindset</strong>. I am eager to join a forward-thinking product or analytics team where I can leverage my quantitative background to unlock meaningful customer and business insights.
            </p>

              {/* Mini Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-border/40">
                <div className="space-y-1">
                  <div className="text-lg font-bold text-foreground font-serif">U of T</div>
                  <div className="text-xs text-muted-foreground font-mono">Applied Statistics and Mathematical Sciences</div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-bold text-foreground font-serif">Growth-First</div>
                  <div className="text-xs text-muted-foreground font-mono">Analytical Mindset</div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-bold text-foreground font-serif">Data-Led</div>
                  <div className="text-xs text-muted-foreground font-mono">Storytelling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 border-b border-border/40 bg-muted/10">
        <div className="container space-y-12">
          {/* Header & Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                02 // Case Studies
              </span>
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Featured Analytics Projects
              </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {["all", "product", "marketing", "risk", "insights"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded border transition-all uppercase tracking-wider ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground border-primary font-semibold"
                      : "bg-card text-muted-foreground border-border/60 hover:text-foreground hover:border-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Simulator Highlight */}
          <div className="max-w-4xl mx-auto">
            <GrowthCalculator />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {filteredProjects.map((project) => (
              <Card
              key={project.id}
              className="border-border/60 hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card flex flex-col justify-between overflow-hidden"
            >
                <CardContent className="p-6 space-y-6">
                  {/* Card Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                        {project.category} case study
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Core Question */}
                  <div className="bg-muted/30 border-l-2 border-primary/40 p-3 rounded-r-md">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-wider block font-bold">
                      Key Business Question
                    </span>
                    <span className="text-xs text-foreground italic">
                      &ldquo;{project.question}&rdquo;
                    </span>
                  </div>

                  {/* Insights & Recommendations */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block font-bold">
                        Key Insights Generated
                      </span>
                      <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 mt-1 pl-1">
                        {project.insights.map((insight, idx) => (
                          <li key={idx} className="leading-relaxed">{insight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border/40 pt-3">
                      <span className="text-[10px] font-mono text-secondary-foreground uppercase tracking-wider block font-bold">
                        Impact & Recommendations
                      </span>
                      <p className="text-xs text-foreground mt-1 leading-relaxed font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-[10px] font-mono bg-muted/20 text-muted-foreground border-border/40">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                03 // Expertise
              </span>
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Analytical Toolkit & Core Competencies
              </h2>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Organized around growth and business impact, avoiding overly engineering-heavy framing.
              </p>
            </div>

            {/* Right Skills Grid */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillCategories.map((category, idx) => (
                  <Card key={idx} className="border-border/60 bg-card shadow-sm hover:border-primary/20 transition-all">
                    <CardContent className="p-5 space-y-4">
                      <div className="flex items-center gap-2.5 pb-2 border-b border-border/40">
                        {category.icon}
                        <h3 className="font-serif font-bold text-sm text-foreground">
                          {category.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {category.skills.map((skill) => (
                          <li key={skill} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-b border-border/40 bg-muted/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                04 // Professional Path
              </span>
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Hands-On Analytics Experience
              </h2>
            </div>

            {/* Right Timeline */}
            <div className="lg:col-span-8 space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l border-primary/20 space-y-4">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5.5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-card px-2.5 py-1 rounded border border-border/40 self-start sm:self-center">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed pl-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optional Blog / Insights Section */}
      <section id="insights" className="py-20 border-b border-border/40">
  <div className="container space-y-12">
    <div className="space-y-4">
      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
        05 // Research & Writing
      </span>
      <h2 className="text-3xl font-serif font-bold text-foreground">
        Applied Statistical Research
      </h2>
      <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
        Selected research papers applying statistical modeling, forecasting, and public data analysis to real-world questions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {blogPosts.map((post, idx) => (
        <Card key={idx} className="border-border/60 hover:border-primary/20 hover:shadow-sm transition-all bg-card flex flex-col justify-between">
          <CardContent className="p-5 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                <span>{post.date}</span>
                <span className="bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded">
                  {post.category}
                </span>
              </div>

              <h3 className="text-md font-serif font-bold text-foreground leading-snug hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-primary font-semibold">
              <span>{post.readTime}</span>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline cursor-pointer"
              >
                View Paper <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/10">
        <div className="container max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
              06 // Connection
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Let&rsquo;s Drive Growth Together
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              I am actively looking for opportunities to contribute to fast-growing teams. If you are looking for an analyst who speaks both math and business, let&rsquo;s connect.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
              <a href="mailto:jadechoi316@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Send an Email
              </a>
            </Button>
            <Button variant="outline" asChild className="border-border/60 hover:bg-muted/30">
              <a href="https://www.linkedin.com/in/jwonc4602/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-border/40 max-w-xs mx-auto">
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              Based in Toronto, Canada
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Open to local, hybrid, and remote roles.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-card">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Jiwon Choi. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/jwonc4602/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/jwonc4602" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="mailto:jadechoi316@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
