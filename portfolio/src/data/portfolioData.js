export const personalInfo = {
  name: "Harshit Verma",
  title: "Web Developer & AI Agent Developer",
  tagline: "I create stunning digital experiences and intelligent AI solutions that make an impact.",
  email: "varma789ajay@gmail.com",
  phone: "+91 6306050027",
  location: "Ghaziabad, Delhi NCR, India",
  freelance: "Available",
  bio: "I am a dedicated and creative web developer with a strong passion for building beautiful, functional, and user-centered digital experiences. Currently working on agentic AI workflows at WNS Global, where I'm gaining hands-on experience in building intelligent multi-agent systems. With a background in both design and development, I bring a unique perspective to every project I work on.",
  bio2: "I believe in clean code, thoughtful design, and continuous learning. My goal is to create websites, applications, and AI solutions that not only look great but also solve real problems for users and clients. I'm particularly passionate about exploring the intersection of full-stack development and AI agent architectures.",
  cvLink: "images/CV.pdf"
};

export const social = {
  linkedin: "https://www.linkedin.com/in/harshit-verma-4684ba260",
  github: "https://github.com/Truehars",
  twitter: "https://x.com/varma789ajay",
  instagram: "https://www.instagram.com/harshit_verm__a?igsh=aXBmMnFnYTZ4MG94"
};

export const technicalSkills = [
  { name: "HTML5", percentage: 95, icon: "fab fa-html5", desc: "Semantic markup and modern HTML features" },
  { name: "CSS3", percentage: 90, icon: "fab fa-css3-alt", desc: "Advanced styling and animations" },
  { name: "JavaScript", percentage: 85, icon: "fab fa-js-square", desc: "ES6+ and modern JavaScript development" },
  { name: "React.js", percentage: 80, icon: "fab fa-react", desc: "Component-based UI development" },
  { name: "Node.js", percentage: 75, icon: "fab fa-node-js", desc: "Server-side JavaScript development" },
  { name: "UI/UX Design", percentage: 85, icon: "fas fa-palette", desc: "User interface and experience design" }
];

export const softSkills = [
  { name: "Communication", percentage: 90, icon: "fas fa-comments", desc: "Clear and effective communication" },
  { name: "Teamwork", percentage: 95, icon: "fas fa-users", desc: "Collaborative project development" },
  { name: "Problem Solving", percentage: 85, icon: "fas fa-lightbulb", desc: "Creative solutions to complex challenges" },
  { name: "Time Management", percentage: 80, icon: "fas fa-clock", desc: "Efficient project planning and execution" },
  { name: "Adaptability", percentage: 90, icon: "fas fa-sync-alt", desc: "Quick learning and flexibility" }
];

export const projects = [
  {
    id: 1,
    title: "Invoice Validation Agent",
    category: "web",
    image: "/invoice.jpg",
    description: "Fullstack AI agent system with multi-agent orchestration for invoice validation. FastAPI backend with LLM-powered extraction and React frontend with interactive chat interface.",
    technologies: ["FastAPI", "React", "AI Agents", "LLM", "Python", "PDFs"],
    liveLink: "#",
    githubLink: "https://github.com/Truehars/invoice_ai_agent.git",
    rating: 4.9,
    forks: 15,
    featured: true
  },
  {
    id: 2,
    title: "vibe todo list",
    category: "web",
    image: "/vibecodingtodolist.png",
    description: "A fully responsive todo list used to create daily task and after creating you can check the checkbox.",
    technologies: ["HTML", "CSS", "Python"],
    liveLink: "#",
    githubLink: "#",
    rating: 4.8,
    forks: 12
  },
  {
    id: 3,
    title: "Fitness Tracker",
    category: "app",
    image: "/fitness_tracker_app.webp",
    description: "A comprehensive mobile application to track workouts, nutrition, and fitness goals with social features.",
    technologies: ["React Native", "Firebase", "Redux"],
    liveLink: "#",
    githubLink: "#",
    rating: 4.9,
    downloads: "2.5k"
  },
  {
    id: 4,
    title: "Travel Agency Redesign",
    category: "design",
    image: "/travel_agency.png",
    description: "Complete UI/UX redesign for a travel agency website focusing on user experience and conversion optimization.",
    technologies: ["Figma", "Adobe XD", "Photoshop"],
    liveLink: "#",
    figmaLink: "#",
    views: "1.2k",
    likes: 89
  },
  {
    id: 5,
    title: "Personal Portfolio",
    category: "web",
    image: "/projects/portfolio.png",
    description: "A modern, responsive portfolio website showcasing skills, projects, and professional experience with glassmorphism design.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://truehars.github.io/portfolio/",
    githubLink: "https://github.com/Truehars/portfolio.git",
    rating: 5.0,
    forks: 8,
    featured: false
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    institution: "Raj Kumar Goel Institute of Technology",
    location: "Ghaziabad, UP",
    year: "2022 - Present",
    status: "In Progress",
    icon: "fas fa-university",
    cgpa: "7.5",
    description: "Pursuing Computer Science Engineering with specialization in modern web technologies. Building expertise in software development, algorithms, and system design.",
    learning: [
      { title: "Programming", desc: "C++, Java, Python, JavaScript" },
      { title: "Database Systems", desc: "SQL, NoSQL, Data Structures" },
      { title: "Web Technologies", desc: "React, Node.js, Full Stack" }
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Praxis Vidyapeeth",
    location: "Colony Basti, UP",
    year: "2022",
    status: "Completed",
    icon: "fas fa-school",
    score: "69%",
    description: "Specialized in Science stream with Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving foundation for engineering.",
    learning: [
      { title: "Mathematics", desc: "Calculus, Algebra, Statistics" },
      { title: "Physics", desc: "Mechanics, Electronics" },
      { title: "Chemistry", desc: "Organic, Inorganic" }
    ]
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "Praxis Vidyapeeth",
    location: "Colony Basti, UP",
    year: "2020",
    status: "Completed",
    icon: "fas fa-book-open",
    score: "83%",
    description: "Built strong foundational knowledge across all subjects. Developed critical thinking, communication skills, and academic discipline.",
    learning: [
      { title: "Critical Thinking", desc: "Analysis & Logic" },
      { title: "Communication", desc: "Written & Verbal" },
      { title: "Problem Solving", desc: "Analytical Approach" }
    ]
  }
];

export const experience = [
  {
    id: 1,
    position: "Intern",
    company: "WNS Global Private Limited",
    year: "March 2026 - Present",
    status: "Current",
    icon: "fas fa-briefcase",
    description: "Working as an intern at WNS Global, gaining hands-on experience in web development and professional software development practices.",
    highlights: [
      { icon: "fas fa-code", text: "Web Development" },
      { icon: "fas fa-laptop", text: "Real-world Projects" },
      { icon: "fas fa-users", text: "Team Collaboration" }
    ],
    achievements: [
      { number: "5+", label: "Projects" },
      { number: "Team", label: "Experience" }
    ]
  },
  {
    id: 2,
    position: "Freelance Web Developer",
    company: "Self-Employed",
    year: "2023 - Present",
    status: "Current",
    icon: "fas fa-laptop-code",
    description: "Developing responsive websites and web applications for clients, focusing on modern design principles and user experience.",
    highlights: [
      { icon: "fab fa-react", text: "React Development" },
      { icon: "fas fa-mobile-alt", text: "Responsive Design" },
      { icon: "fas fa-users", text: "Client Management" }
    ],
    achievements: [
      { number: "10+", label: "Projects Completed" },
      { number: "5+", label: "Happy Clients" }
    ]
  },
  {
    id: 3,
    position: "Web Development Intern",
    company: "Local Tech Startup",
    year: "2022 - 2023",
    status: "Completed",
    icon: "fas fa-code",
    description: "Gained hands-on experience in web development, working on real projects and learning industry best practices.",
    highlights: [
      { icon: "fab fa-html5", text: "HTML/CSS" },
      { icon: "fab fa-js-square", text: "JavaScript" },
      { icon: "fas fa-tools", text: "Development Tools" }
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "Invoice Validation Agent",
    description: "Built a fullstack agentic AI workflow with multi-agent orchestration for invoice validation. Hands-on experience with LLM-powered data extraction and FastAPI + React integration.",
    year: "2026",
    icon: "fas fa-robot"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Created a modern, responsive portfolio website showcasing technical skills and projects.",
    year: "2024",
    icon: "fas fa-trophy"
  },
  {
    id: 3,
    title: "Quiz Application",
    description: "Developed an interactive quiz application using Kotlin and Firebase with engaging user interface.",
    year: "2023",
    icon: "fas fa-mobile-alt"
  },
  {
    id: 4,
    title: "Open Source Contributions",
    description: "Active contributor to open source projects on GitHub, sharing knowledge with the developer community.",
    year: "2023 - Present",
    icon: "fas fa-code-branch"
  },
  {
    id: 5,
    title: "Technical Certifications",
    description: "Completed multiple online certifications in web development, UI/UX design, and mobile app development.",
    year: "2022 - 2023",
    icon: "fas fa-certificate"
  }
];

export const services = [
  { icon: "fas fa-code", title: "Web Development", desc: "Custom website development with clean, optimized code and modern technologies." },
  { icon: "fas fa-mobile-alt", title: "Responsive Design", desc: "Creating websites that work flawlessly across all devices and screen sizes." },
  { icon: "fas fa-paint-brush", title: "UI/UX Design", desc: "Designing intuitive and engaging user interfaces with great user experience." },
  { icon: "fas fa-shopping-cart", title: "E-commerce Solutions", desc: "Building online stores with secure payment gateways and inventory management." },
  { icon: "fas fa-server", title: "API Development", desc: "Creating robust and scalable APIs for web and mobile applications." },
  { icon: "fas fa-search", title: "SEO Optimization", desc: "Improving website visibility and ranking on search engines." }
];
