// Content for the Connect Pros case study page.
// Text wrapped in `backticks` is rendered as inline code.
// Everything below was checked against the Connect Pros frontend and backend source.

export const caseStudyMeta = {
  title: "Connect Pros",
  tagline:
    "A professional networking platform with connections, a social feed, notifications and real-time one-to-one chat.",
  role: "Full-stack developer",
  category: "Professional networking",
  users: "Professionals and students who want a place to connect and talk",
  // TODO: fill these in. Leave as null to show a placeholder.
  status: "Live",
  timeline: "1 Sep 2026 to Present",
  demoUrl: "https://connect-pros-frontend.vercel.app/",
  backendRepo: "https://github.com/Sahilji-95/Connect-Pros-Backend",
  frontendRepo: "https://github.com/Sahilji-95/Connect-Pros-Frontend",
  heroStack: [
    "Next.js",
    "React",
    "Redux Toolkit",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
  ],
};

export const sections = [
  ["overview", "Overview"],
  ["problem", "Problem and goals"],
  ["stack", "Tech stack"],
  ["features", "Features"],
  ["architecture", "Architecture"],
  ["data", "Data models"],
  ["api", "API design"],
  ["realtime", "Real-time chat"],
  ["security", "Security"],
  ["ui", "UI and UX"],
  ["challenges", "Challenges"],
  ["performance", "Performance"],
  ["testing", "Testing"],
  ["deploy", "Deployment"],
  ["roadmap", "Roadmap and learnings"],
] as const;

export const problems = [
  "One place to manage a professional profile and a list of connections.",
  "Controlled relationships: only accepted connections can message each other.",
  "Sharing short professional updates with images.",
  "Direct conversation with presence and read receipts.",
  "One feed of activity: likes, comments, requests and new posts.",
];

export const goals = [
  "Secure authentication with email verification.",
  "Server-side authorization on every REST call and socket event.",
  "Messages that are never lost or duplicated on retry.",
  "Cursor-based pagination where lists can grow.",
  "Frontend and backend deployable separately.",
];

export const stackRows: { layer: string; tech: string; why: string }[] = [
  {
    layer: "Frontend",
    tech: "Next.js 16 (App Router)",
    why: "File-based routing for pages such as `/chat`, `/search` and `/view_profile/[username]`, and `next/image` for remote images.",
  },
  {
    layer: "Frontend",
    tech: "React 19",
    why: "Component model for the feed, chat window and popups.",
  },
  {
    layer: "Frontend",
    tech: "Redux Toolkit",
    why: "Four slices (auth, post, chat, notification) so the chat list, unread count and presence are shared across pages.",
  },
  {
    layer: "Frontend",
    tech: "Axios, socket.io-client",
    why: "Axios with `withCredentials` for cookie sessions; one shared socket instance reused across pages.",
  },
  {
    layer: "Frontend",
    tech: "CSS Modules, Tailwind 4, lucide-react",
    why: "Page-scoped styles, with Tailwind and icons for the shell.",
  },
  {
    layer: "Backend",
    tech: "Node.js, Express 5",
    why: "REST routes and middleware, plus the HTTP server that Socket.IO attaches to.",
  },
  {
    layer: "Data",
    tech: "MongoDB with Mongoose 9",
    why: "Document model fits profiles, posts and messages; Mongoose gives schemas, validators and indexes.",
  },
  {
    layer: "Real-time",
    tech: "Socket.IO 4",
    why: "Rooms, acknowledgements and automatic reconnection for chat, presence and live notifications.",
  },
  {
    layer: "Validation",
    tech: "Zod",
    why: "Schema validation of signup, login, OTP and reset requests.",
  },
  {
    layer: "Security",
    tech: "bcrypt, jsonwebtoken, helmet, cors, express-rate-limit",
    why: "Password hashing, signed sessions, secure headers, an origin allowlist and throttling.",
  },
  {
    layer: "Services",
    tech: "Resend, Cloudinary, multer, pdfkit",
    why: "OTP emails, image storage, multipart uploads held in memory, and profile PDF generation.",
  },
  {
    layer: "Hosting",
    tech: "Vercel, Render",
    why: "Frontend on Vercel, API and WebSocket server on Render.",
  },
];

export type FeatureGroup = {
  title: string;
  items: { text: string; flag?: string }[];
};

export const featureGroups: FeatureGroup[] = [
  {
    title: "Authentication and accounts",
    items: [
      {
        text: "Registration that stores a pending signup until the email is verified.",
      },
      { text: "Six-digit email OTP, with resend and a 60-second cooldown." },
      { text: "Login and logout with a JWT in an HttpOnly cookie." },
      {
        text: "Forgot password: OTP, then a one-time reset token, then a new password.",
      },
      {
        text: "Inactive accounts are rejected; `tokenVersion` invalidates old sessions.",
      },
    ],
  },
  {
    title: "Profile",
    items: [
      { text: "Bio, current position, education and past work entries." },
      { text: "Profile picture upload to Cloudinary." },
      { text: "Public profile page by username." },
      { text: "Profile PDF download", flag: "hardening pending" },
    ],
  },
  {
    title: "Connections",
    items: [
      { text: "Send, accept and delete a connection." },
      { text: "Incoming requests list and accepted connections list." },
      { text: "Connection status between two users." },
      {
        text: "Global username search with prefix match and cursor pagination.",
      },
    ],
  },
  {
    title: "Social feed",
    items: [
      {
        text: "Create posts with an optional image (JPEG, PNG, WebP or GIF, up to 5 MB).",
      },
      {
        text: "Like and unlike with `$addToSet` and `$pull`, so a user can like once.",
      },
      { text: "Comments, with delete limited to the comment owner." },
      { text: "Single post page and posts by username." },
      { text: "Post delete limited to the post owner." },
    ],
  },
  {
    title: "Real-time chat",
    items: [
      { text: "One-to-one conversations between accepted connections only." },
      { text: "Live delivery, history with cursor pagination, unread counts." },
      { text: "Online and offline presence with last seen." },
      { text: "Read receipts and temporary popups for new messages." },
      {
        text: "Filter the conversation list by name",
        flag: "message search not built",
      },
    ],
  },
  {
    title: "Notifications",
    items: [
      {
        text: "Post like, post comment, connection request, connection accepted, new post.",
      },
      { text: "Saved in MongoDB and pushed live to the recipient." },
      { text: "Last 50 shown with an unread count; mark one or all as read." },
      { text: "You are never notified about your own action." },
    ],
  },
];

export const architectureNotes = [
  "**Frontend:** Next.js App Router pages, a `DashboardLayout` that owns the global socket, presence and notification listeners, and four Redux slices.",
  "**Backend:** routes grouped into users, posts, chat and notifications; controllers hold the logic; `notification.service.js` creates, saves and emits notifications.",
  "**Auth middleware:** reads the cookie, verifies the JWT, then loads the user to compare `active` and `tokenVersion`.",
  "**External services:** Cloudinary stores post and profile images; Resend sends verification and reset emails.",
];

export const models: {
  name: string;
  fields: string;
  relations: string;
  rules: string;
}[] = [
  {
    name: "User",
    fields:
      "name, username, usernameLower, email, password (hash), active, isEmailVerified, profilePicture, lastSeen, tokenVersion, reset OTP and token fields",
    relations: "-",
    rules:
      "unique `username` and `email`; index `{usernameLower, _id}`; `usernameLower` set in a pre-validate hook",
  },
  {
    name: "Profile",
    fields:
      "bio, currentPost, pastWork[ ] (pastWork, position, years), education[ ] (school, degree, fieldOfStudy)",
    relations: "`userId` to User",
    rules: "embedded sub-documents for work and education",
  },
  {
    name: "Post",
    fields: "body, likes, likedBy[ ], media, mediaPublicId, fileType, active",
    relations: "`userId` to User; `likedBy` to User",
    rules: "body required; no custom indexes yet",
  },
  {
    name: "Comment",
    fields: "body",
    relations: "`userId` to User, `postId` to Post",
    rules: "timestamps",
  },
  {
    name: "ConnectionRequest",
    fields: "status: pending, accepted or rejected",
    relations: "`userId`, `connectionId` to User",
    rules: "default status pending",
  },
  {
    name: "Conversation",
    fields: "participants[2], participantKey, lastMessage, lastMessageAt",
    relations: "participants to User; lastMessage to Message",
    rules:
      "unique `participantKey` (sorted ids); validator: exactly two distinct users; index `{participants, lastMessageAt}`",
  },
  {
    name: "Message",
    fields:
      "conversationId, senderId, recipientId, clientMessageId, text, type, readAt",
    relations: "to Conversation and User",
    rules:
      "text 1 to 5000 chars; unique `{senderId, clientMessageId}`; index `{conversationId, createdAt, _id}`",
  },
  {
    name: "Notification",
    fields: "recipient, sender, type, message, relatedId, isRead",
    relations: "recipient, sender to User",
    rules:
      "type enum; indexes `{recipient, createdAt}` and `{recipient, isRead}`",
  },
  {
    name: "PendingSignup",
    fields:
      "name, username, email, password (hash), emailOtpHash, emailOtpExpiry, emailOtpAttempts, emailOtpLastSentAt",
    relations: "-",
    rules: "TTL index deletes the document after 24 hours",
  },
];

export const messageSchemaSnippet = `// Message (from message.model.js)
{
  conversationId, senderId, recipientId,   // ObjectId refs
  clientMessageId,                         // String, max 100, unique with senderId
  text,                                    // String, trimmed, max 5000
  type: "text",
  readAt: null | Date,
  createdAt, updatedAt
}`;

export const routeGroups: { area: string; routes: string[] }[] = [
  {
    area: "Auth",
    routes: [
      "POST /send-email-otp",
      "POST /verify-email-otp",
      "POST /resend-email-otp",
      "POST /login",
      "POST /logout",
      "POST /forgot-password",
      "POST /resend-reset-otp",
      "POST /verify-reset-otp",
      "POST /reset-password",
    ],
  },
  {
    area: "Profile",
    routes: [
      "GET /get_user_and_profile",
      "POST /update_profile",
      "POST /profile_to_update",
      "POST /upload_profile_picture",
      "GET /user/get_profile_by_username",
      "GET /user/get_all_user",
    ],
  },
  {
    area: "Connections",
    routes: [
      "POST /user/send_connection_request",
      "GET /user/get_connection_request",
      "POST /user/accept_connection_request",
      "GET /user/connection_status",
      "GET /user/get_my_connections",
      "POST /user/delete_connection",
    ],
  },
  { area: "Search", routes: ["GET /user/search?q=&cursor="] },
  {
    area: "Posts",
    routes: [
      "POST /post/create_post",
      "GET /post/get_post",
      "DELETE /post/delete_post",
      "POST /post/like",
      "GET /post/username/:username",
      "GET /post/:id",
    ],
  },
  {
    area: "Comments",
    routes: [
      "POST /comment/create_comment",
      "GET /comment/get_comment",
      "DELETE /comment/delete_comment",
    ],
  },
  {
    area: "Chat",
    routes: [
      "GET /chat/conversations",
      "POST /chat/conversations",
      "GET /chat/conversations/:id/messages?limit=&before=",
    ],
  },
  {
    area: "Notifications",
    routes: [
      "GET /notification",
      "PATCH /notification/read-all",
      "PATCH /notification/:id/read",
    ],
  },
];

export const validationNotes = [
  "Zod validates signup, login, OTP and reset payloads (name 2 to 60 characters, password 8 to 72, OTP exactly six digits).",
  "Chat and notification code validates ObjectIds with `mongoose.isValidObjectId` before any query.",
  "Controllers use try/catch and return status codes 400, 401, 403, 404, 429 or a generic 500 message; details go to the server log only.",
  "Newer controllers (chat, notifications, posts) return `{ success, message, ... }`. Some older user routes return only `{ message }`. Unifying this is on the roadmap.",
];

export const paginationNotes = [
  "**Messages:** `before=<messageId>` cursor, sorted by `createdAt, _id`, limit up to 50, fetches `limit + 1` rows to compute `hasMore`.",
  "**User search:** prefix match on `usernameLower` with escaped regex input, 10 per page, a base64url cursor holding the last username and id, limited to active and verified users other than yourself.",
  "The feed (`GET /post/get_post`) returns all posts today and is not paginated yet.",
];

export const rateLimits: { scope: string; limit: string }[] = [
  { scope: "All routes", limit: "100 requests" },
  { scope: "Login", limit: "10" },
  { scope: "Send OTP, resend OTP, forgot password", limit: "5" },
  { scope: "Verify OTP", limit: "10" },
  { scope: "Reset password", limit: "5" },
  {
    scope: "Socket `chat:send` and `chat:read`",
    limit: "10 events per 10 seconds per user, in memory",
  },
];

export const lifecycleNotes = [
  "**Handshake:** the browser sends the session cookie with the WebSocket request. `socketAuth` parses it, verifies the JWT, loads the user and compares `tokenVersion`. No valid cookie, no connection.",
  "**Rooms:** each socket joins `user:<id>`. Messages are emitted to rooms, so every open tab of a user receives them.",
  "**Presence:** a map of `userId` to a set of socket ids. A user goes online when the first socket joins and offline when the last one leaves, at which point `lastSeen` is saved.",
  "**Active conversation:** `chat:active` and `chat:inactive` record which chat each tab is viewing. If the recipient is not viewing that chat, the server also emits `chat:popup`.",
  "**Re-validation:** `chat:send`, `chat:read` and `chat:active` check that the session is still valid and disconnect the socket if it is not.",
];

export const socketEvents: {
  event: string;
  direction: string;
  purpose: string;
}[] = [
  {
    event: "presence:get / presence:initial",
    direction: "client / server",
    purpose: "Ask for, and receive, the list of online user ids",
  },
  {
    event: "presence:update",
    direction: "server to all",
    purpose: "A user went online or offline, with `lastSeen`",
  },
  {
    event: "chat:active / chat:inactive",
    direction: "client",
    purpose: "Mark which conversation this tab is viewing",
  },
  {
    event: "chat:send / chat:message",
    direction: "client / server",
    purpose: "Send a message, deliver it to both users' rooms",
  },
  {
    event: "chat:popup",
    direction: "server",
    purpose: "Temporary in-app alert when the chat is not open",
  },
  {
    event: "chat:read / chat:read_receipt",
    direction: "client / server",
    purpose: "Mark messages read and tell the sender",
  },
  {
    event: "notification:new",
    direction: "server",
    purpose: "Live activity notification after it is saved",
  },
];

export const securityDone = [
  "Passwords hashed with bcrypt, cost 12.",
  "JWT signed with a server secret, 1 day expiry, sent only as an HttpOnly cookie (`Secure` and `SameSite=None` in production, `Lax` in development). The library default algorithm, HS256, is used.",
  "`tokenVersion` is checked on every request and socket event; logout and password reset increment it so old tokens stop working.",
  "Email OTP: generated with `crypto.randomInt`, stored as a SHA-256 hash, compared with `timingSafeEqual`, expires in 5 minutes, locked after 5 wrong attempts, 60-second resend cooldown.",
  "Password reset uses a separate random 64-character token, stored hashed, valid for 10 minutes.",
  'Login returns the same "Invalid credentials" message for an unknown email and a wrong password, and blocks unverified emails.',
  "Socket authentication at handshake, plus conversation membership and accepted-connection checks on every send and read.",
  "Owner checks before deleting a post or a comment.",
  "Helmet headers, a CORS allowlist with credentials, and `trust proxy` for correct client IPs behind Render.",
  "Image uploads limited to four MIME types and 5 MB, held in memory and sent to Cloudinary.",
  "Search input is regex-escaped before it reaches MongoDB.",
  "Rate limiting on HTTP routes and on chat socket events.",
];

export const securityPending = [
  "**CSRF protection:** not implemented. Production cookies use `SameSite=None` for the cross-site frontend, so a CSRF token or an Origin check on state-changing routes is the next step.",
  "**Profile PDF endpoint:** `/user/dwonlaod_resume` is not behind `authMiddleware` and takes a user id. It needs an access decision (owner only, or public by choice).",
  "**Upload checks:** validation uses the declared MIME type only, not the file content.",
  "**JWT algorithm:** not pinned explicitly in `jwt.verify`.",
  "**Rate-limit storage:** in memory, so limits reset on restart and apply per instance.",
  "**Dependency audit:** no recorded scan yet.",
];

export const uiPoints = [
  "**Pages:** landing, login and signup, forgot and reset password, dashboard feed, post detail, own profile and edit profile, public profile, search, connections, chat, notifications.",
  '**Loading states:** skeleton components for the dashboard, and a "Checking your session" screen on first load.',
  "**Error states:** inline messages for failed connection actions, chat send failures and socket disconnects.",
  "**Responsive:** the chat screen switches between list and window on small screens; media queries appear in 19 of the stylesheets.",
  "**Live feedback:** unread badge on notifications and chat, popups for new messages and new activity.",
  "**Destructive actions:** post deletion uses an in-page confirmation dialog.",
];

// Replace `src` with a path under /public (for example "/images/connect-pros/chat.png") to show a real screenshot.
export const screenshots: {
  title: string;
  caption: string;
  src: string | null;
}[] = [
  {
    title: "Dashboard",
    caption: "Create a post, like and comment.",
    src: "/dashboard.png",
  },
  {
    title: "Chat",
    caption: "Conversation list, unread counts, online dot.",
    src: "/chat.png",
  },
  {
    title: "Search",
    caption: "Username prefix search with paged results.",
    src: "/search.png",
  },
  {
    title: "Connections",
    caption: "Requests, accepted list, start a chat.",
    src: "/connections.png",
  },
  {
    title: "Notifications",
    caption: "Saved list with mark all as read.",
    src: "/notification.png",
  },
  {
    title: "Mobile",
    caption: "Dashboard and window on a phone.",
    src: "/respon.png",
  },
];

export const challenges: {
  title: string;
  problem: string;
  approach: string;
  solution: string;
}[] = [
  {
    title: "Authenticating a WebSocket with an HttpOnly cookie",
    problem:
      "JavaScript cannot read an HttpOnly cookie, so the token cannot be passed as a socket option.",
    approach:
      "Let the browser send the cookie with the handshake (`withCredentials`), and allow the frontend origin with `credentials: true` in the Socket.IO CORS settings.",
    solution:
      "`socketAuth` middleware parses the cookie header, verifies the JWT and the user's `tokenVersion`, and rejects the connection otherwise.",
  },
  {
    title: "Duplicate messages on retry",
    problem:
      "A flaky network can make the client resend, which would store the same message twice.",
    approach: "Make sending idempotent: the client creates a UUID per message.",
    solution:
      "Unique index on `{senderId, clientMessageId}`, a lookup before insert, and handling of the duplicate-key error for concurrent retries. The ack tells the client whether it was a duplicate.",
  },
  {
    title: "Reading someone else's conversation",
    problem:
      "A conversation id in a request or socket event can be guessed or replayed.",
    approach: "Never trust the id alone.",
    solution:
      "Every query filters by `participants: currentUser`, and sending or reading also requires an accepted connection. A sorted `participantKey` keeps exactly one conversation per pair.",
  },
  {
    title: "Presence with several tabs",
    problem:
      "Closing one tab must not mark a user offline while another tab is open.",
    approach: "Track sockets per user instead of a single flag.",
    solution:
      "A `Map` of user to socket-id set; online and offline are broadcast only on the first connect and the last disconnect. The map is in memory, so running several server instances would need Redis.",
  },
  {
    title: "Invalidating sessions that are still signed",
    problem:
      "A JWT stays valid until it expires, even after logout or a password change.",
    approach: "Put a version number in the token and in the user record.",
    solution:
      "Logout and reset increment `tokenVersion`; both the HTTP middleware and the socket layer compare it, so old tokens stop working everywhere.",
  },
  {
    title: "Paging users and messages stably",
    problem: "Offset pagination skips or repeats rows when data changes.",
    approach:
      "Use cursors built from a sort key plus `_id` as the tie-breaker.",
    solution:
      "Messages page by `(createdAt, _id)`; search pages by `(usernameLower, _id)` with a validated base64url cursor.",
  },
  {
    title: "Keeping notifications and live events consistent",
    problem: "A live event alone is lost if the user is offline.",
    approach: "Save first, emit second.",
    solution:
      "`createAndEmitNotification` stores the document, populates the sender and then emits to the recipient's room. A failure is caught so it never breaks the like, comment or post that caused it.",
  },
  {
    title: "Cookies and CORS across Vercel and Render",
    problem:
      "The frontend and API are on different sites, so cookies are cross-site.",
    approach:
      "Switch cookie flags by environment and restrict origins to a list.",
    solution:
      "`Secure` plus `SameSite=None` in production, `Lax` locally, an origin allowlist shared by Express and Socket.IO, and `trust proxy` behind Render. This setup is also why CSRF protection is on the roadmap.",
  },
];

export const performanceDone = [
  "**Indexes** on message history, conversation lists, notifications and username search.",
  "**Cursor pagination** for messages and user search, with a capped page size.",
  "**Field selection and `lean()`** on auth checks and list queries, to avoid loading whole documents.",
  "**One aggregation** computes unread counts for all conversations instead of one query per chat.",
  "**Atomic updates** for likes (`$addToSet` and `$pull` with a guard condition).",
  "**One shared socket** for presence, chat and notifications, and no polling.",
  "**Redux state** keeps messages per conversation and merges by id, so moving between pages does not refetch everything.",
  "**Images:** `next/image` on the dashboard and public profile with an allowlisted Cloudinary host; uploads are limited to 5 MB.",
  "**Cleanup:** a TTL index removes stale pending signups after 24 hours.",
];

export const testingDone = [
  "**Socket scripts:** `test-socket.js` sends rapid messages to check the chat rate limit, and `test-recipient.js` connects a second user to check delivery and read receipts.",
  "**Manual API checks** with an `api.http` request file.",
  "**Manual scenarios:** signup and OTP, login, invalid or expired token, messaging between users who are not connected, duplicate sends, connection accept and delete.",
  "**Frontend:** ESLint configured through `eslint-config-next`.",
];

export const testingPlanned =
  "Supertest for API routes, Vitest or Jest for reducers, Playwright for the signup-to-chat flow, a CI pipeline, and `npm audit` in CI.";

export const hostingNotes = [
  "**Frontend:** Vercel.",
  "**Backend:** Render (HTTP and WebSocket on port 9090).",
  "**Database:** MongoDB through a connection string.",
  "**Images:** Cloudinary. **Email:** Resend.",
  "The frontend picks the API URL from the build mode; the backend allows the Vercel and localhost origins.",
];

export const envNames = [
  "MONGO_URI",
  "JWT_SECRET",
  "RESEND_API_KEY, APP_NAME",
  "CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET",
  "NODE_ENV=production",
];

export const setupSnippet = `# backend
git clone <backend-repository>
cd backend
npm install
cp .env.example .env      # fill in your own values
npm run dev               # http://localhost:9090

# frontend
git clone <frontend-repository>
cd frontend
npm install
npm run dev               # http://localhost:3000`;

export const envExampleSnippet = `# .env.example
MONGO_URI=
JWT_SECRET=
RESEND_API_KEY=
APP_NAME=ConnectPros
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NODE_ENV=development`;

export const roadmap = [
  "CSRF protection and an access rule for profile PDFs.",
  "Feed pagination and a post index.",
  "Message search and group chat.",
  "Redis for presence and rate limits across instances.",
  "Web Push notifications and Google sign-in.",
  "Automated tests, CI and monitoring.",
  "One response format across all routes.",
];

export const learnings = [
  "Designing a full-stack app from schema to UI.",
  "Session security: cookies, token versioning and OTP flows.",
  "Authorizing every request and every socket event on the server.",
  "Building idempotent, real-time features and handling reconnects.",
  "Modelling relationships and indexes in MongoDB.",
  "Deploying two services with cross-site cookies and CORS.",
];
