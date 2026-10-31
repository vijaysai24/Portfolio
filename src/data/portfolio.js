// All portfolio content lives here so facts are updated in one place.
// Sources: public/resume.pdf and the previous version of this site.
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { TbApi, TbBrandVscode } from "react-icons/tb";

import profilePhoto from "../assets/images/profile.webp";
import ringpeLogo from "../assets/images/RingpeLogo.jpg";
import moviesCover from "../assets/images/movies.webp";

export const profile = {
  name: "Pechetti Sai Vijay",
  shortName: "Sai Vijay",
  role: "Full Stack Developer",
  specialty: "React & React Native",
  experience: "2.5 years",
  location: "Bangalore, India",
  availability: "Open to new opportunities",
  currentRole: "Software Development Engineer",
  currentCompany: "SABADO Technologies",
  currentSince: "June 2024",
  email: "saipechetti2002@gmail.com",
  phone: "+91 9347549149",
  phoneHref: "tel:+919347549149",
  resume: "/resume.pdf",
  resumeFileName: "Pechetti_Sai_Vijay_Resume.pdf",
  photo: profilePhoto,
  github: "https://github.com/vijaysai24",
  githubHandle: "vijaysai24",
  // The resume and the old site disagreed on this URL; this is the one from the resume.
  linkedin: "https://www.linkedin.com/in/vijay-pechetti-01845027b/",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const tech = {
  react: { name: "React.js", icon: SiReact, color: "#61DAFB" },
  reactNative: { name: "React Native", icon: SiReact, color: "#61DAFB" },
  javascript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  html: { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  css: { name: "CSS", icon: SiCss, color: "#A57EF5" },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  node: { name: "Node.js", icon: SiNodedotjs, color: "#6CC24A" },
  rest: { name: "REST APIs", icon: TbApi, color: "#58C4DC" },
  mysql: { name: "MySQL", icon: SiMysql, color: "#5C9BD1" },
  git: { name: "Git", icon: SiGit, color: "#F05032" },
  github: { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  vscode: { name: "VS Code", icon: TbBrandVscode, color: "#3BA7F2" },
  postman: { name: "Postman", icon: SiPostman, color: "#FF6C37" },
};

export const marqueeTech = [
  tech.react, tech.reactNative, tech.javascript, tech.node, tech.rest,
  tech.mysql, tech.tailwind, tech.html, tech.css, tech.git, tech.github,
];

// Skills, arranged the way a request travels through a full stack app.
export const skillLayers = {
  client: [
    {
      id: "frontend",
      title: "Frontend",
      summary: "Responsive web interfaces built from reusable components.",
      items: [tech.react, tech.javascript, tech.html, tech.css, tech.tailwind],
    },
    {
      id: "mobile",
      title: "Mobile",
      summary: "Cross-platform apps from one React codebase.",
      items: [tech.reactNative],
    },
  ],
  backend: {
    id: "backend",
    title: "Backend",
    summary: "API endpoints, authentication and business logic.",
    items: [tech.node, tech.rest],
  },
  database: {
    id: "database",
    title: "Database",
    summary: "Relational schemas, queries and data operations.",
    items: [tech.mysql],
  },
  tools: {
    id: "tools",
    title: "Tools",
    summary: "Version control, editing and API testing.",
    items: [tech.git, tech.github, tech.vscode, tech.postman],
  },
};

export const coreConcepts = [
  "Authentication & token management",
  "Role-based access control (RBAC)",
  "State management",
  "Responsive web design",
  "Performance optimization",
  "Object-oriented programming",
];

export const about = {
  statement:
    "I turn business requirements into responsive web and mobile apps, and build the APIs and databases that power them.",
  paragraphs: [
    "I'm a Full Stack Developer with 2.5 years of professional experience, currently a Software Development Engineer at SABADO Technologies in Bangalore. Most of my day is spent in React and React Native: building reusable component systems, integrating REST APIs, and handling the parts users never see but always feel, like authentication, protected routes and role-based access control.",
    "When a feature needs it, I work on the other side of the request too, writing Node.js endpoints and MySQL queries so it can ship end to end. I work closely with designers and backend developers in Agile teams, and I enjoy turning a rough requirement into something clear, fast and easy to use.",
  ],
  principles: [
    {
      title: "Components first",
      text: "Reusable, modular building blocks that keep a codebase consistent and quick to extend.",
    },
    {
      title: "Secure by default",
      text: "Token management, protected routes and RBAC designed in from the first screen, not added at the end.",
    },
    {
      title: "Performance is a feature",
      text: "Lazy loading, optimized routing and fewer API calls so screens respond quickly.",
    },
    {
      title: "Fix the root cause",
      text: "I debug by tracing data from the UI through the API to the database, then fix the real problem.",
    },
  ],
  facts: [
    { value: "2.5 years", label: "Professional experience" },
    { value: "SABADO", label: "Software Development Engineer since June 2024" },
    { value: "B.Tech CSE", label: "SRKR Engineering College, 2024" },
    { value: "Bangalore", label: "Based in India" },
  ],
};

export const experience = [
  {
    company: "SABADO Technologies",
    role: "Software Development Engineer",
    period: "June 2024 — Present",
    location: "Bangalore",
    current: true,
    summary:
      "Building web and mobile products end to end: React and React Native interfaces, the REST APIs that feed them, and the Node.js and MySQL services behind them.",
    highlight:
      "Independently built the complete Wallet feature for RingPe, a payments app live on the Google Play Store, covering UI implementation and API integration in React Native.",
    groups: [
      {
        title: "Interfaces",
        points: [
          "Designed and developed responsive, scalable UI components with React JS, React Native and Tailwind CSS for a consistent experience across web and mobile.",
          "Built reusable, modular components that improved maintainability, scalability and development speed across the codebase.",
        ],
      },
      {
        title: "APIs & data",
        points: [
          "Integrated RESTful APIs for authentication, data retrieval, form submissions and error handling.",
          "Built and maintained backend API endpoints and database operations with Node.js and MySQL, supporting features end to end.",
        ],
      },
      {
        title: "Security",
        points: [
          "Implemented role-based access control on the frontend, dynamically managing routes, UI visibility and user permissions.",
          "Developed secure authentication flows with token management, protected routes and session-based UI behavior.",
        ],
      },
      {
        title: "Performance & teamwork",
        points: [
          "Improved application performance through lazy loading, optimized routing and fewer API calls.",
          "Collaborated with backend developers and designers in an Agile team to turn business requirements into user-friendly features.",
        ],
      },
    ],
    stack: ["React JS", "React Native", "Node.js", "MySQL", "Tailwind CSS", "JavaScript", "REST APIs", "Git & GitHub"],
  },
  {
    company: "Black Bucks Pvt Ltd",
    role: "Software Development Intern",
    period: "June 2023 — August 2023",
    location: "Bangalore",
    current: false,
    summary:
      "Built a web-based restaurant management system that lets restaurants manage food items, categories, pricing and availability through one interface.",
    groups: [
      {
        title: "Contributions",
        points: [
          "Designed and implemented frontend screens in React JS and integrated RESTful APIs for CRUD operations.",
          "Designed MySQL tables, wrote queries and managed data for menus and restaurant operations.",
          "Kept data flowing smoothly between frontend and backend with form validation, API response handling and error management.",
        ],
      },
    ],
    stack: ["React JS", "JavaScript", "MySQL", "Git & GitHub"],
  },
];

export const education = [
  {
    school: "SRKR Engineering College, Bhimavaram",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2020 — 2024",
  },
  {
    school: "Tirumala Junior College, Rajahmundry",
    degree: "Higher Secondary Education",
    period: "2018 — 2020",
  },
];

export const featuredProject = {
  id: "ringpe",
  title: "RingPe Wallet",
  label: "Payments app · Live on Google Play",
  context: "Built at SABADO Technologies",
  logo: ringpeLogo,
  summary:
    "I independently developed the complete Wallet feature for RingPe, a payments app that is live on the Google Play Store, from the React Native screens to the API integration behind them.",
  features: [
    "Complete Wallet feature, built independently end to end",
    "Real-time balance state management",
    "Tokenized payment flows",
    "JWT-based session handling",
  ],
  stack: ["React Native", "JavaScript", "REST APIs", "Node.js", "JWT"],
  // TODO: replace with the app's exact Play Store listing URL.
  storeUrl: "https://play.google.com/store/search?q=RingPe&c=apps",
};

// `image` is optional. Projects without a real screenshot get a designed cover
// built from `cover`; add a screenshot import to `image` to replace it.
// `links.repo` / `links.live` render buttons only when they are set.
export const projects = [
  {
    id: "movies",
    title: "Movie Recommendation System",
    category: "Entertainment discovery platform",
    image: moviesCover,
    imageAlt: "A wall of movie and TV series posters",
    summary:
      "A movie and series discovery platform that brings together titles from multiple OTT platforms, upcoming releases and theatrical releases using movie database APIs.",
    features: [
      "Personalized recommendations based on context",
      "Detailed title pages with ratings and reviews",
      "Watchlists and favorites",
      "Personal profiles with memorable movie dialogues",
    ],
    stack: ["React JS", "Node.js", "REST APIs", "TMDB API", "MySQL"],
    links: {},
  },
  {
    id: "mlive",
    title: "M-Live Track",
    category: "Enterprise tracking & workflow",
    cover: { tone: "teal", words: ["Master data", "Reservations", "Inward goods", "GRN"] },
    summary:
      "An enterprise tracking and workflow platform covering master data, reservations and the full inward goods process.",
    features: [
      "Master data management",
      "Reservation pipelines",
      "Inward goods and GRN (Goods Receive Note) process flows",
      "Role-based access control",
    ],
    stack: ["Angular", "Tailwind CSS", "Node.js", "REST APIs", "MySQL"],
    links: {},
  },
  {
    id: "school",
    title: "School Digitalization App",
    category: "Education management",
    cover: { tone: "stone", words: ["Classwork", "Homework", "Announcements", "Roles"] },
    summary:
      "Brings a school's academic and administrative work into one digital system for teachers, students, parents and management.",
    features: [
      "Classwork and homework assignment",
      "Communication between teachers, students and parents",
      "Announcements from principals and management",
      "Role-based workflows across the institution",
    ],
    stack: ["React JS", "Node.js", "REST APIs", "MySQL", "Tailwind CSS"],
    links: {},
  },
  {
    id: "restaurant",
    title: "Restaurant Management System",
    category: "Full stack admin platform",
    context: "Internship at Black Bucks",
    cover: { tone: "graphite", words: ["Menu", "Categories", "Pricing", "Availability"] },
    summary:
      "An admin platform for restaurants to manage menus, categories, pricing and availability, with validated CRUD operations from form to database.",
    features: [
      "Dynamic menu hierarchies and pricing variants",
      "Category management",
      "CRUD APIs with backend validation",
      "Form validation and error handling",
    ],
    stack: ["React JS", "Node.js", "Express.js", "MySQL", "REST APIs"],
    links: {},
  },
];

export const services = [
  {
    title: "Frontend Development",
    text: "Responsive, fast interfaces in React with reusable components, clean state management and Tailwind CSS.",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Full Stack Development",
    text: "Features built end to end: React on the client, Node.js APIs and MySQL schemas on the server.",
    stack: ["React.js", "Node.js", "REST APIs", "MySQL"],
  },
  {
    title: "Mobile App Development",
    text: "Cross-platform mobile apps in React Native, like the wallet feature I shipped in RingPe on Google Play.",
    stack: ["React Native", "JavaScript", "REST APIs"],
  },
  {
    title: "API Integration",
    text: "Connecting interfaces to real data: authentication, token management, form submissions and error handling.",
    stack: ["REST APIs", "Node.js", "JWT", "Postman"],
  },
];
