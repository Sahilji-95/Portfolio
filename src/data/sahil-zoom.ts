export const sections = [
  ["overview", "Overview"],
  ["problem", "Problem and goals"],
  ["stack", "Tech stack"],
  ["features", "Features"],
  ["architecture", "Architecture"],
  ["flow", "Meeting flow"],
  ["data", "Data and API"],
  ["challenges", "Challenges"],
  ["security", "Security"],
  ["testing", "Testing"],
  ["deploy", "Deployment"],
  ["roadmap", "Roadmap"],
] as const;

export const meta = {
  title: "Sahil Zoom",
  tagline:
    "A browser-based video-conferencing app with WebRTC peer-to-peer media, Socket.IO signaling, in-call chat, screen sharing and meeting history.",
  heroStack: ["React", "WebRTC", "Socket.IO", "Node.js", "Express", "MongoDB"],
  demoUrl: "https://sahil-zoom.onrender.com/",
  frontendRepo: "https://github.com/Sahilji-95/Sahil-Zoom-Frontend",
  backendRepo: "https://github.com/Sahilji-95/Sahil-Zoom-Backend",
  category: "Real-time communication",
  role: "Full-stack developer",
  users: "Students and small groups who need a browser-based meeting room",
  status: "Live",
  timeline: "May–June 2026",
};

export const stackRows = [
  ["Frontend", "React 19, React Router", "Component-based UI and client-side navigation."],
  ["UI", "Material UI, Emotion", "Meeting controls, forms, icons and responsive styling."],
  ["Media", "WebRTC, getUserMedia, getDisplayMedia", "Peer-to-peer audio/video, device access and screen sharing."],
  ["Real-time", "Socket.IO", "Signaling, room events, participant updates and in-call chat."],
  ["Backend", "Node.js, Express", "REST API, server startup and Socket.IO host."],
  ["Data", "MongoDB, Mongoose", "User records and meeting-history records."],
  ["Security", "bcrypt, token-based login", "Password hashing and authenticated history lookups."],
  ["Connectivity", "Google STUN", "Helps WebRTC peers discover viable network paths."],
];

export const featureGroups = [
  {
    title: "Meetings and media",
    items: [
      "Join a meeting through its URL.",
      "Preview local camera and microphone in a lobby before joining.",
      "Create peer-to-peer audio and video streams with WebRTC.",
      "Render a local tile and multiple remote participant tiles.",
      "Toggle camera and microphone during a call.",
    ],
  },
  {
    title: "Screen sharing and chat",
    items: [
      "Capture the screen with the browser getDisplayMedia API.",
      "Replace active outbound media when screen sharing starts and restore camera media when it ends.",
      "Send and receive text chat through Socket.IO.",
      "Replay in-memory room messages to a participant who joins later in the same server session.",
      "Show unread chat messages with a badge when the chat panel is closed.",
    ],
  },
  {
    title: "Accounts and history",
    items: [
      "Register users with bcrypt-hashed passwords.",
      "Sign in with a server-generated token.",
      "Save a meeting code against the signed-in user.",
      "Display previous meeting codes on a meeting-history page.",
    ],
  },
];

export const challenges = [
  {
    title: "Coordinating multiple WebRTC peers",
    problem: "Every participant needs a connection to every other participant in the same room.",
    approach: "Maintain a peer-connection object keyed by Socket.IO socket ID.",
    solution: "When the server emits user-joined, the client creates peer connections and exchanges SDP offers, answers and ICE candidates through a signal event.",
  },
  {
    title: "Removing stale video tiles",
    problem: "A disconnected participant must not remain visible in other clients.",
    approach: "Track room membership on the signaling server and emit a leave event.",
    solution: "On user-left, the React client filters the matching socket ID from its participant video state.",
  },
  {
    title: "Switching to screen sharing",
    problem: "Screen sharing changes the active media stream while the peer connections stay open.",
    approach: "Capture a display stream and update the tracks supplied to existing peers.",
    solution: "The app uses getDisplayMedia for screen capture and restores user media after the screen track ends.",
  },
  {
    title: "Giving late joiners chat context",
    problem: "People who join after a conversation has started should see the available room context.",
    approach: "Keep chat messages in a room-level server array during the running server session.",
    solution: "The server replays saved in-memory messages to the newly joined socket.",
  },
];

export const roadmap = [
  "Add authenticated meeting rooms and participant authorization.",
  "Add a TURN server for calls behind restrictive networks.",
  "Persist chat history in MongoDB and move shared room state to Redis when scaling.",
  "Restrict Socket.IO CORS, validate inputs and add rate limits.",
  "Add unit, integration and browser-level automated tests.",
  "Add meeting scheduling, invite links and host controls.",
];
