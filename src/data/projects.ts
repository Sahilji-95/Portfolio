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
    title: "WonderLust",
    description:
      "A property-listing application inspired by the way people discover memorable places to stay.",
    features: [
      "Property discovery",
      "Listing-focused experience",
      "Responsive layouts",
    ],
    stack: ["EJS", "Node.js", "Express", "Render"],
    repoUrl: "https://github.com/Sahilji-95/ProjectWonderLust",
    demoUrl: "https://wonderlust-ooph.onrender.com/listings",
    visual: "wonderlust",
  },
  {
    title: "Zerodha Clone",
    description:
      "A trading-platform-inspired application focused on clear market information and familiar workflows.",
    features: [
      "Dashboard interface",
      "Market-inspired views",
      "Responsive design",
    ],
    stack: ["React", "JavaScript", "CSS"],
    repoUrl: null,
    demoUrl: null,
    visual: "trading",
  },
];
