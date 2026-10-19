export type Project = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  visual: "wonderlust" | "video" | "social" | "trading";
};

export const projects: Project[] = [
  {
    title: "WonderLust",
    description:
      "A property-listing application inspired by the way people discover memorable places to stay.",
    features: [
      "Property discovery",
      "Listing-focused experience",
      "Responsive layouts",
    ],
    stack: ["EJS", "Node.js", "Express"],
    repoUrl: "https://github.com/Sahilji-95/ProjectWonderLust",
    demoUrl: "https://wonderlust-ooph.onrender.com/listings",
    visual: "wonderlust",
  },
  {
    title: "Real-Time Video Calling",
    description:
      "An exploration of browser-based video communication and real-time connection flows.",
    features: ["Peer-to-peer video", "Real-time signaling", "Room-based calls"],
    stack: ["React", "Node.js", "Socket.io", "WebRTC"],
    repoUrl: "https://github.com/Sahilji-95/Sahil-Zoom-Backend",
    demoUrl: "https://sahil-zoom.onrender.com/",
    visual: "video",
  },
  {
    title: "Social Media Application",
    description:
      "A social product concept centered on user profiles, sharing posts, and community interactions.",
    features: ["User profiles", "Post creation", "Social interactions"],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    repoUrl: null,
    demoUrl: null,
    visual: "social",
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
