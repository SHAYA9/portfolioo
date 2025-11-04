import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Shayan",
    title: "Full Stack Developer",
    subtitle: "I build powerful, clean, and scalable web solutions.",
    bio: "I'm a 17-year-old full stack developer currently working at Infinity Shipping Service and studying at GIAC. I started coding at a young age and fell in love with creating things that solve real-world problems. I'm passionate about clean, functional code and building applications that make a difference. I am a freelancer and a Teacher. I have done my matriculation. I'm also studying Agentic AI and specialize in creating AI agents and intelligent chatbots.",
    age: 17,
    location: "Pakistan",
    email: "ai.shayanyt@gmail.com",
  },
  skills: [
    {
      name: "Python",
      icon: "🐍",
      level: 90,
      category: "languages"
    },
    {
      name: "TypeScript",
      icon: "📘",
      level: 85,
      category: "languages"
    },
    {
      name: "JavaScript",
      icon: "⚡",
      level: 88,
      category: "languages"
    },
    {
      name: "React",
      icon: "⚛️",
      level: 85,
      category: "frontend"
    },
    {
      name: "Next.js",
      icon: "▲",
      level: 80,
      category: "frontend"
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 82,
      category: "backend"
    },
    {
      name: "Git",
      icon: "📚",
      level: 85,
      category: "tools"
    },
    {
      name: "Agentic AI",
      icon: "🤖",
      level: 80,
      category: "ai"
    },
    {
      name: "AI Chatbots",
      icon: "💬",
      level: 85,
      category: "ai"
    },
    {
      name: "Meta ads",
      icon: "🧠",
      level: 84,
      category: "seo"
    },
    {
      name: "Seo",
      icon: "🧠",
      level: 86,
      category: "seo"
    },
    {
      name: "Machine Learning",
      icon: "🧠",
      level: 75,
      category: "ai"
    }
  ],
  projects: [
    {
      id: "shipping-management",
      title: "Velocity International",
      description: "A shipping management system for Infinity Shipping Service.",
      longDescription: "Develope a website for Velocity International, a branch of Infinity Shipping Service.",
      techStack: ["React", "Node.js", "Tailwind", "Next.js", "Typescript"],
      imageUrl: "/projects/shipping-system.jpg",
      liveUrl: "https://velocity-gules-zeta.vercel.app/",
      featured: true
    },
    {
      id: "ecommerce-platform",
      title: "XpertSphere",
      description: "All in one app for all your needs.A Website that contain all apps like Image editor, AI chatbot and many more",
      longDescription: "Develope a website that contain all apps like Image editor, AI chatbot and many more",
      techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      imageUrl: "/projects/ecommerce.jpg",
      githubUrl: "https://xpertsphere.vercel.app/",
      featured: true
    },
    {
      id: "task-management",
      title: "ShareQR",
      description: "A websie where you can upload your files and get them by scaning the QR code",
      longDescription: "A websie where you can upload your files and get them by scaning the QR code",
      techStack: ["React", "QRcode", "API", "Tailwind", "Nextjs"],
      imageUrl: "/projects/task-manager.jpg",
      githubUrl: "https://shareqr.vercel.app/",
      featured: true
    },
    {
      id: "ai-chatbot",
      title: "Intelligent AI Chatbot",
      description: "An advanced AI chatbot with natural language processing and context-aware responses for customer support.",
      longDescription: "Developed an intelligent chatbot using modern AI techniques that can understand context, provide helpful responses, and learn from interactions. Features include sentiment analysis, multi-language support, and integration capabilities.",
      techStack: ["Python", "Gemini_Api", "LangChain", "Streamlit"],
      imageUrl: "/projects/ai-chatbot.jpg",
      githubUrl: "https://xpertai.streamlit.app/",
      featured: true
    },
    {
      id: "coming_soon",
      title: "COMMING SOON",
      description: "Working on more powerfull tools",
      longDescription: "Developed an intelligent chatbot using modern AI techniques that can understand context, provide helpful responses, and learn from interactions. Features include sentiment analysis, multi-language support, and integration capabilities.",
      techStack: ["Comming Soon"],
      imageUrl: "/projects/ai-chatbot.jpg",
      githubUrl: "https://comming_soon",
      featured: true
    },
    {
      id: "coming_soon",
      title: "COMMING SOON",
      description: "Working on more powerfull tools",
      longDescription: "Developed an intelligent chatbot using modern AI techniques that can understand context, provide helpful responses, and learn from interactions. Features include sentiment analysis, multi-language support, and integration capabilities.",
      techStack: ["Comming Soon"],
      imageUrl: "/projects/ai-chatbot.jpg",
      githubUrl: "https://comming_soon",
      featured: true
    }
  ],
  experience: [
    {
      company: "Infinity Shipping Service",
      position: "Full Stack Developer",
      duration: "2025 - Present",
      description: "Developing and maintaining web applications, Help in IT Management",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      achievements: [
        "Built the website for Velocity International",
        "Improved system performance by 40% through optimization",
        "Make website UI/UX for better customer experience",
        "Help the company in IT Management"
      ]
    }
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/SHAYA9",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shaya9/",
      icon: "linkedin"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/itz_shaya9/",
      icon: "instagram"
    },
    {
      name: "Email",
      url: "mailto:ai.shayanyt@gmail.com",
      icon: "mail"
    }
  ]
};
