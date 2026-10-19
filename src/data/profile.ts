export const profile = {
  name: "Sahil Kumar Gautam",
  shortName: "Sahil",
  role: "MERN Stack Developer",
  location: "Noida / Delhi NCR, India",
  education: "Bachelor of Computer Applications (BCA)",
  education2: "Intermediate (12th)",
  education3: "High School (10th)",
  educationPeriod: "2024–2027",
  educationPeriod2: "2024",
  educationPeriod3: "2021",
  email: "sahilji955@gmail.com",
  github: "https://github.com/Sahilji-95",
  linkedin: "www.linkedin.com/in/sahil-kumar-gautam-2538a6361",
} as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT authentication",
      "bcrypt",
    ],
  },
  { title: "Database", skills: ["MongoDB", "MongoDB Atlas", "Basic SQL"] },
  {
    title: "Tools & deployment",
    skills: ["Git", "GitHub", "Vercel", "Render", "Docker fundamentals"],
  },
  {
    title: "Other",
    skills: ["Redux Toolkit", "Socket.io", "WebRTC", "API integration"],
  },
] as const;
