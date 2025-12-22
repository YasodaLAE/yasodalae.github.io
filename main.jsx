import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code, 
  Cpu, 
  Brain, 
  Database, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight,
  Download,
  Terminal,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';

// --- Data based on your CV ---

const personalInfo = {
  name: "Yasoda Lasiru",
  fullName: "Yasoda Lasiru Ariyarathna Epa",
  title: "Electronic & Telecommunication Engineer",
  subtitle: "Specializing in Full-Stack Engineering, AI & Embedded Systems",
  email: "yasodalasiru@gmail.com",
  phone: "(+94) 702450125",
  linkedin: "https://linkedin.com/in/yasoda-lasiru",
  github: "https://github.com/YasodaLAE",
  location: "Moratuwa, Sri Lanka",
  bio: "I am a final-year engineering undergraduate at the University of Moratuwa with a passion for bridging the gap between hardware and software. With a CGPA of 3.91 and a diverse portfolio ranging from Quantum AI research to full-stack web applications, I enjoy solving complex engineering problems.",
};

const skills = {
  languages: ["Python", "Java", "C++", "C", "JavaScript", "SQL", "MATLAB", "Ballerina", "LaTeX"],
  frameworks: ["Spring Boot", "React", "PyTorch", "PennyLane", "NodeRED"],
  tools: ["Git", "MySQL", "Altium", "Solidworks", "Jupyter"],
  concepts: ["Deep Learning", "Quantum Computing", "IoT", "Data Structures & Algorithms"]
};

const experience = [
  {
    id: 1,
    role: "Intern AI Engineering",
    company: "Singapore University of Technology and Design (SUTD)",
    period: "Dec 2024 – Jun 2025",
    description: "Worked on improving the robustness of Vision Language Models against data poisoning attacks. Implemented and evaluated multiple defense techniques across different model architectures and proposed a new defense approach validated through extensive experiments.",
    type: "Research/AI"
  }
];

const projects = [
  {
    id: 1,
    title: "Quantum Hybrid Image Classification",
    category: "AI & Research",
    tech: ["Python", "PennyLane", "PyTorch", "Quantum Circuits"],
    description: "Designed a hybrid quantum-classical image classification pipeline. Evaluated performance on standard datasets against classical baselines to analyze feasibility and scalability.",
    link: "#", // Placeholder as CV didn't have a direct link for FYP
    github: "#"
  },
  {
    id: 2,
    title: "Transformer Management System",
    category: "Software Engineering",
    tech: ["Spring Boot", "React", "AI Integration", "SQL"],
    description: "A web application for managing electrical transformer inspections. Integrated AI-driven thermal anomaly detection with interactive annotation and feedback loops.",
    github: "https://github.com/YasodaLAE"
  },
  {
    id: 3,
    title: "MedCare Web Application",
    category: "Software Engineering",
    tech: ["React", "Node.js", "Database Integration"],
    description: "Full-stack application for managing doctor appointments and patient records. Features include scheduling, data retrieval, and comprehensive user management.",
    github: "https://github.com/YasodaLAE"
  },
  {
    id: 4,
    title: "5-DOF Robot Arm",
    category: "Hardware & IoT",
    tech: ["C++", "Embedded Systems", "Motion Control"],
    description: "Designed a 5-degree-of-freedom robotic arm for pick-and-place tasks. Implemented precise motion control algorithms for accurate positioning.",
    github: "#"
  },
  {
    id: 5,
    title: "Smart MediBox",
    category: "Hardware & IoT",
    tech: ["NodeRED", "IoT", "Sensors"],
    description: "IoT-based medication management device assisting users with timely medication. Features scheduling, alerting, and environmental monitoring.",
    github: "https://github.com/YasodaLAE"
  },
  {
    id: 6,
    title: "Multi-Turn Magnetic Encoder",
    category: "Hardware & IoT",
    tech: ["PCB Design", "Firmware", "Magnetic Sensors"],
    description: "Designed an absolute shaft positioning encoder for stepper motors with battery backup. Handled circuit design, enclosure modeling, and firmware.",
    github: "https://github.com/YasodaLAE"
  }
];

const education = [
  {
    institution: "University of Moratuwa",
    degree: "B.Sc. Engineering (Hons) in Electronic & Telecommunication",
    period: "Mar 2022 – Present",
    details: ["CGPA: 3.91/4.00", "Dean's List: Semesters 1, 2, 4, 5, 6"]
  },
  {
    institution: "Sanghamiththa Girls' College",
    degree: "G.C.E. Advanced Level (Physical Science)",
    period: "2020",
    details: ["Island Rank: 30", "Z-Score: 2.7632", "3 A's (Maths, Physics, Chemistry)"]
  }
];

const awards = [
  "Sujatha Guruge Scholarship for Best Performance (Year 1)",
  "Mahapola Higher Education Merit Scholarship",
  "Island Rank 91 - IEEE Xtreme 17.0",
  "2nd Runners Up - Inspi Her Tech V2.0",
  "S.H. Punchihewa Memorial Prize for Best Student"
];

// --- Components ---

const SectionTitle = ({ children, align = "center" }) => (
  <h2 className={`text-3xl font-bold text-slate-800 mb-8 ${align === "left" ? "text-left" : "text-center"}`}>
    {children}
    <div className={`h-1 w-20 bg-blue-600 mt-2 ${align === "left" ? "" : "mx-auto"} rounded-full`}></div>
  </h2>
);

const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800",
    indigo: "bg-indigo-100 text-indigo-800",
    emerald: "bg-emerald-100 text-emerald-800",
    slate: "bg-slate-100 text-slate-800"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[color] || colors.blue}`}>
      {children}
    </span>
  );
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter) || (activeFilter === "Software" && p.category.includes("Software")) || (activeFilter === "Hardware" && p.category.includes("Hardware")));

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tight text-slate-900">
            Yasoda<span className="text-blue-600">.dev</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-slate-600 font-medium py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px]"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open to Software Engineering Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Engineering <br/>
              <span className="text-blue-600">Intelligence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Hi, I'm <span className="font-semibold text-slate-900">{personalInfo.name}</span>. 
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
              >
                View My Work <ChevronRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                Contact Me
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-blue-500"/>
                <span className="text-sm font-medium">3.91/4.00 CGPA</span>
              </div>
              <div className="w-px h-4 bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-blue-500"/>
                <span className="text-sm font-medium">Island Rank 30 (A/L)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle>Education & Background</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <BookOpen className="text-blue-600" /> Academic Journey
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 bg-white border-2 border-blue-600 rounded-full"></div>
                    <div className="mb-1 text-sm text-blue-600 font-semibold">{edu.period}</div>
                    <h4 className="text-lg font-bold text-slate-900">{edu.institution}</h4>
                    <p className="text-slate-700 font-medium mb-2">{edu.degree}</p>
                    <ul className="list-disc list-inside text-slate-500 text-sm space-y-1">
                      {edu.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Award className="text-blue-600" /> Honors & Awards
              </h3>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <ul className="space-y-4">
                  {awards.map((award, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 min-w-[20px] text-yellow-500">★</div>
                      <span className="text-slate-700">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <SectionTitle>Technical Arsenal</SectionTitle>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 text-blue-400">
                <Terminal size={24} />
                <h3 className="text-lg font-bold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-blue-500 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 text-indigo-400">
                <Layers size={24} />
                <h3 className="text-lg font-bold">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-indigo-500 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 text-emerald-400">
                <Database size={24} />
                <h3 className="text-lg font-bold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-emerald-500 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 text-purple-400">
                <Brain size={24} />
                <h3 className="text-lg font-bold">Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-purple-500 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle>Experience</SectionTitle>
          
          <div className="max-w-4xl mx-auto">
            {experience.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                    <div className="text-blue-600 font-medium">{job.company}</div>
                  </div>
                  <div className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                    {job.period}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {job.description}
                </p>
                <Badge color="indigo">{job.type}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle>Featured Projects</SectionTitle>
          
          {/* Filters */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {["All", "Software Engineering", "AI & Research", "Hardware & IoT"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      {project.category.includes("Hardware") ? <Cpu size={20} /> : project.category.includes("AI") ? <Brain size={20} /> : <Code size={20} />}
                    </div>
                    <a href={project.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Ready to Collaborate?</h2>
            <p className="text-slate-300 mb-10 text-lg">
              I am currently open to Software Engineering internships and full-time opportunities. 
              Let's discuss how my background in full-stack development and research can contribute to your team.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all w-full md:w-auto justify-center"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-all w-full md:w-auto justify-center"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={personalInfo.github} className="hover:text-white transition-colors"><Github size={18}/></a>
                <a href={personalInfo.linkedin} className="hover:text-white transition-colors"><Linkedin size={18}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
