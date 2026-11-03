export type Project = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  caseStudyUrl?: string;
  visual: "wonderlust" | "video" | "social" | "trading";
};

export const projects: Project[] = [
  {
    title: "Connect Pros",
    description:
      "A professional networking platform with connections, a social feed, notifications and real-time one-to-one chat.",
    features: [
      "Email OTP signup with cookie-based JWT sessions",
      "Connection requests and a social feed",
      "Real-time chat with presence and read receipts",
    ],
    stack: [
      "Next.js",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Render",
      "Vercel",
    ],
    repoUrl: "https://github.com/Sahilji-95/Connect-Pros-Backend",
    demoUrl: "https://connect-pros-frontend.vercel.app/",
    caseStudyUrl: "/projects/connect-pros",
    visual: "social",
  },
  {
    title: "Sahil Zoom — Real-Time Video Conferencing",
    description:
      "A browser-based video-conferencing application built with WebRTC and Socket.IO, featuring multi-participant calls, screen sharing, real-time chat, and meeting history.",
    features: [
      "Peer-to-peer audio and video calls using WebRTC",
      "Real-time signaling, participant updates, and in-call chat with Socket.IO",
      "Screen sharing, media controls, user authentication, and meeting history",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "Material UI",
      "Render",
    ],
    repoUrl: "https://github.com/Sahilji-95/Sahil-Zoom-Backend",
    demoUrl: "https://sahil-zoom.onrender.com/",
    caseStudyUrl: "/projects/sahil-zoom",
    visual: "video",
  },
  {
    title: "WonderLust — Rental Listing Platform",
    description:
      "A full-stack rental listing platform for discovering, creating and managing property listings with secure authentication, reviews and image uploads.",
    features: [
      "Complete CRUD operations for rental listings",
      "Cloudinary image uploads with Multer integration",
      "Passport.js authentication, reviews and owner-based authorization",
    ],
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Passport.js",
      "Cloudinary",
      "Bootstrap",
      "Joi",
      "Render",
    ],
    repoUrl: "https://github.com/Sahilji-95/ProjectWonderLust",
    demoUrl: "https://wonderlust-ooph.onrender.com/listings",
    caseStudyUrl: "/projects/wonderlust",
    visual: "wonderlust",
  },
  {
    title: "SKGit — Version Control System",
    description:
      "An ongoing full-stack version control system built with TypeScript, focused on repository workflows, frontend-backend integration and automated test cases.",
    features: [
      "Version-control workflow implementation",
      "TypeScript-based frontend and backend development",
      "Automated test cases for improved reliability and maintainability",
    ],
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "Git",
      "GitHub",
      "Automated Testing",
    ],
    repoUrl: "https://github.com/Sahilji-95/GitHub-FrontEnd",
    demoUrl: null,
    visual: "trading",
  },
];
