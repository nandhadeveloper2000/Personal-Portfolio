export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  shortBio: string;
  longBio: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
};

export const personalInfo: PersonalInfo = {
  name: "Nandhakumar S",
  title: "MERN Stack & React Native Developer",
  email: "nandhadeveloper56@gmail.com",
  phone: "+91 8939615914",
  location: "Chennai, India",
  github: "https://github.com/nandhadeveloper2000",
  linkedin: "https://linkedin.com/in/snandhakumar-dev",
  shortBio:
    "MERN Stack Developer with experience building full-stack web and mobile applications using React, Next.js, Node.js, MongoDB, and React Native. Passionate about creating scalable backend systems and premium user interfaces.",
  longBio:
    "I am a MERN Stack and React Native developer with 1.5+ years of experience building full-stack web and mobile applications. I have worked on real-world platforms such as LMS systems, movie ticket booking apps, service booking platforms, commerce dashboards, and role-based business applications. My expertise includes building responsive UI using React, Next.js, Tailwind CSS, React Native, and developing scalable backend systems with Node.js, Express.js, and MongoDB. I enjoy transforming ideas into polished digital products with clean architecture and modern design.",
};

export const skills: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "React Native",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST API",
  "JWT Authentication",
  "Google OAuth",
  "Git & GitHub",
  "Google Cloud (GCP)",
  "Render",
  "Expo",
  "Figma",
];

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer (MERN & React Native)",
    company: "GloboGreen System & Technology Private Limited, Cuddalore",
    period: "Oct 2025 - Present",
    points: [
      "Building a full-stack web and mobile platform for service booking, buy/sell workflows, eCommerce, and inventory management.",
      "Developing role-based modules for shop owners, employees, and customers across mobile and web applications.",
      "Using React Native, React.js, Express.js, and MongoDB for scalable app architecture and API-driven workflows.",
      "Implementing complete mobile UI from Figma designs with production-focused user experience.",
      "Deploying backend services on Render and mobile builds through Expo.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "WHY Global Services, Chennai",
    period: "Apr 2024 - Sep 2025",
    points: [
      "Built scalable web platforms including LMS and movie ticket booking systems.",
      "Developed responsive full-stack applications using the MERN stack.",
      "Built RESTful APIs with Express.js and integrated MongoDB for dynamic data management.",
      "Implemented JWT and Google OAuth authentication with role-based access control.",
      "Collaborated with UI/UX designers using Figma and participated in Agile sprints and code reviews.",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "WHY Global Services, Chennai",
    period: "Sep 2023 - Mar 2024",
    points: [
      "Contributed to a live MERN stack movie ticket booking web application.",
      "Developed real-time seat selection, user authentication, and admin panel features.",
      "Worked with Agile methodology and Git-based workflows.",
      "Implemented secure login/signup functionality using JWT and Google OAuth with MongoDB backend.",
      "Recognized for quick learning, adaptability, and strong technical contribution.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "QMatrix Technologies Website",
    description:
      "A premium IT training institute website with modern UI sections, animated hero banners, course showcases, and responsive layouts focused on branding and lead generation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://example.com",
    github: "https://github.com/yourusername/qmatrix-project",
  },
  {
    title: "ShopStack Commerce Platform",
    description:
      "A scalable role-based commerce platform with admin dashboards, product management, authentication flows, and multi-role access for shop owners, managers, and employees.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    live: "https://example.com",
    github: "https://github.com/yourusername/shopstack-project",
  },
  {
    title: "Bike & Scooter Service Booking Platform",
    description:
      "A service booking platform allowing users to schedule bike servicing, track status, and manage service requests through an admin dashboard.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    live: "https://alfmotors.in",
    github: "https://github.com/yourusername/bike-service-project",
  },
  {
    title: "Movie Ticket Booking Application",
    description:
      "A full-stack movie ticket booking system with authentication, real-time seat selection, booking management, and admin panel for theater management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://example.com",
    github: "https://github.com/yourusername/movie-booking-project",
  },
  {
    title: "React Native Role-Based Business App",
    description:
      "A mobile application built with React Native and Expo featuring role-based dashboards, authentication, shop management modules, and scalable API integration.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    live: "",
    github: "https://github.com/yourusername/react-native-business-app",
  },
];