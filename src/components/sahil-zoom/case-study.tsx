import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import SahilZoomCaseStudyNav from "./case-study-nav";
import { challenges, featureGroups, meta, roadmap, stackRows } from "@/data/sahil-zoom";

function Heading({ n, id, title }: { n: number; id: string; title: string }) {
  return (
    <div className="cs-heading">
      <p className="section-kicker">{String(n).padStart(2, "0")}</p>
      <h2 id={`${id}-title`}>{title}</h2>
    </div>
  );
}

function List({ items }: { items: readonly string[] }) {
  return <ul className="cs-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function LinkButton({ href, children, primary = false }: { href: string; children: string; primary?: boolean }) {
  return (
    <a className={`button ${primary ? "button--primary" : "button--outline"}`} href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={14} />
    </a>
  );
}

export default function SahilZoomCaseStudy() {
  return (
    <div className="cs-shell">
      <div className="cs-layout">
        <SahilZoomCaseStudyNav />
        <main id="main-content" className="cs-main">
          <header className="cs-hero">
            <p className="cs-eyebrow">Case study · Full-stack project</p>
            <h1>{meta.title}</h1>
            <p className="cs-sub">{meta.tagline}</p>
            <div className="cs-chips">{meta.heroStack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="cs-actions">
              <LinkButton primary href={meta.demoUrl}>Live demo</LinkButton>
              <LinkButton href={meta.frontendRepo}>Frontend code</LinkButton>
              <LinkButton href={meta.backendRepo}>Backend code</LinkButton>
            </div>
          </header>

          <section id="overview" aria-labelledby="overview-title">
            <Heading n={1} id="overview" title="Project overview" />
            <p>
              Sahil Zoom is a browser-based video-conferencing application for small group meetings.
              Users can register and sign in, create or join a room, share their camera and
              microphone, chat during a call, share their screen, and review meeting history.
            </p>
            <dl className="cs-facts">
              <div><dt>Category</dt><dd>{meta.category}</dd></div>
              <div><dt>My role</dt><dd>{meta.role}</dd></div>
              <div><dt>Target users</dt><dd>{meta.users}</dd></div>
              <div><dt>Status</dt><dd>{meta.status}</dd></div>
              <div><dt>Timeline</dt><dd>{meta.timeline}</dd></div>
              <div><dt>Codebase</dt><dd>2 repositories: React client and Express API</dd></div>
            </dl>
            <p><strong>Main objective:</strong> understand the end-to-end flow of browser media, signaling, real-time room events, user accounts and meeting persistence.</p>
          </section>

          <section id="problem" aria-labelledby="problem-title">
            <Heading n={2} id="problem" title="Problem and goals" />
            <p>
              A video call needs more than a camera preview. Browsers must capture media, discover
              who is in the same room, exchange WebRTC offers, answers and ICE candidates, render
              remote streams, and react when a participant joins or leaves. Sahil Zoom was built to
              practise these real-time interactions in a focused full-stack project.
            </p>
            <div className="cs-cols">
              <div className="cs-card"><h3>Problems addressed</h3><List items={[
                "Joining a shared room from a browser URL.",
                "Exchanging peer-to-peer video and audio without sending media through the application server.",
                "Showing live participant joins and leaves.",
                "Keeping chat available during a meeting.",
              ]} /></div>
              <div className="cs-card"><h3>Goals</h3><List items={[
                "Build multi-participant browser calls with WebRTC.",
                "Use Socket.IO as a signaling and room-coordination layer.",
                "Provide camera, microphone, screen-share, chat and leave-call controls.",
                "Store user accounts and meeting history in MongoDB.",
              ]} /></div>
            </div>
          </section>

          <section id="stack" aria-labelledby="stack-title">
            <Heading n={3} id="stack" title="Technology stack" />
            <div className="cs-table"><table><thead><tr><th>Layer</th><th>Technology</th><th>Why I used it</th></tr></thead><tbody>
              {stackRows.map(([layer, tech, why]) => <tr key={tech}><td>{layer}</td><td>{tech}</td><td>{why}</td></tr>)}
            </tbody></table></div>
          </section>

          <section id="features" aria-labelledby="features-title">
            <Heading n={4} id="features" title="Core features" />
            <div className="cs-cols">{featureGroups.map((group) => <div className="cs-card" key={group.title}><h3>{group.title}</h3><List items={group.items} /></div>)}</div>
          </section>

          <section id="architecture" aria-labelledby="architecture-title">
            <Heading n={5} id="architecture" title="System architecture" />
            <p>The browser talks to the backend through REST and Socket.IO. WebRTC then carries media directly between participant browsers whenever the network allows it.</p>
            <pre className="cs-pre"><code>{`React client
  ├─ REST requests ───► Express API ───► MongoDB
  │                      ├─ users
  │                      └─ meeting history
  ├─ Socket.IO ───────► signaling server
  │                      ├─ rooms and participant events
  │                      ├─ SDP / ICE forwarding
  │                      └─ in-memory chat
  └─ WebRTC ──────────► other participants`}</code></pre>
            <List items={[
              "The meeting URL is used as the room key on the Socket.IO server.",
              "The client creates an RTCPeerConnection for each remote socket ID.",
              "Socket.IO forwards signaling messages; it does not carry the audio or video stream.",
              "MongoDB persists user and meeting-history records.",
            ]} />
          </section>

          <section id="flow" aria-labelledby="flow-title">
            <Heading n={6} id="flow" title="Meeting join flow" />
            <ol className="cs-list">
              <li>The user enters a display name in the lobby and grants camera and microphone permission.</li>
              <li>The client connects to Socket.IO and emits <code>join-call</code> with the meeting URL.</li>
              <li>The server records the socket in the room and emits <code>user-joined</code>.</li>
              <li>The client creates peer connections and exchanges SDP plus ICE candidates through the <code>signal</code> event.</li>
              <li>Remote media streams are added to the participant-video list and rendered as tiles.</li>
              <li>On disconnect, the server emits <code>user-left</code> and clients remove the matching tile.</li>
            </ol>
          </section>

          <section id="data" aria-labelledby="data-title">
            <Heading n={7} id="data" title="Data and API design" />
            <div className="cs-cols">
              <div className="cs-card"><h3>User model</h3><p>Stores name, username, email, a bcrypt-hashed password and the token used by the current application flow.</p></div>
              <div className="cs-card"><h3>Meeting history model</h3><p>Associates a meeting code with the signed-in user so previous meeting codes can be listed on the history page.</p></div>
            </div>
            <div className="cs-table"><table><thead><tr><th>Area</th><th>Responsibility</th></tr></thead><tbody>
              <tr><td>Registration</td><td>Create a user after hashing the password with bcrypt.</td></tr>
              <tr><td>Login</td><td>Validate credentials and return a server-generated token.</td></tr>
              <tr><td>History</td><td>Save a meeting code and fetch meeting records for the supplied token.</td></tr>
              <tr><td>Signaling</td><td>Coordinate rooms, peer discovery, signaling messages, chat and participant departure.</td></tr>
            </tbody></table></div>
          </section>

          <section id="challenges" aria-labelledby="challenges-title">
            <Heading n={8} id="challenges" title="Challenges and solutions" />
            {challenges.map((item) => <article className="cs-chal" key={item.title}><h3>{item.title}</h3><dl><dt>Problem</dt><dd>{item.problem}</dd><dt>Approach</dt><dd>{item.approach}</dd><dt>Solution</dt><dd>{item.solution}</dd></dl></article>)}
          </section>

          <section id="security" aria-labelledby="security-title">
            <Heading n={9} id="security" title="Security and current limitations" />
            <p>Password values are hashed with bcrypt before storage. This is a useful foundation, but the current app remains a learning project and needs hardening before production use.</p>
            <div className="cs-cols">
              <div className="cs-card"><h3>Implemented <span className="cs-tag cs-tag--ok">in code</span></h3><List items={[
                "bcrypt password hashing during registration.",
                "Token returned after successful credential validation.",
                "A health-check endpoint and an Express request-size limit.",
                "Local media tracks stopped when a participant leaves the call.",
              ]} /></div>
              <div className="cs-card"><h3>Next security work <span className="cs-tag cs-tag--no">important</span></h3><List items={[
                "Authenticate Socket.IO handshakes and authorize access to each meeting room.",
                "Replace the permissive Socket.IO CORS configuration with an origin allowlist.",
                "Use expiring sessions or HTTP-only cookies and protect server routes.",
                "Add request validation, rate limiting and security headers.",
              ]} /></div>
            </div>
          </section>

          <section id="testing" aria-labelledby="testing-title">
            <Heading n={10} id="testing" title="Testing and quality" />
            <p>The frontend includes the standard Create React App test setup, but the project does not yet have a dedicated automated meeting-workflow suite.</p>
            <div className="cs-cols">
              <div className="cs-card"><h3>Manual scenarios checked</h3><List items={[
                "Register and sign in with a new account.", "Join a room from two browser sessions.", "Toggle camera and microphone.", "Join and leave participants.", "Send chat messages and join after messages exist.", "Start and stop screen sharing.", "Save and view meeting history.",
              ]} /></div>
              <div className="cs-card"><h3>Recommended automated tests</h3><List items={[
                "React Testing Library for meeting-control interactions.", "Socket.IO integration tests for join, leave and chat events.", "API tests for registration, login and history endpoints.", "Browser-level tests for the join-to-call flow.",
              ]} /></div>
            </div>
          </section>

          <section id="deploy" aria-labelledby="deploy-title">
            <Heading n={11} id="deploy" title="Deployment and local setup" />
            <p>The live application is deployed on Render. Clone both repositories to run the client and backend locally.</p>
            <pre className="cs-pre"><code>{`# backend
git clone https://github.com/Sahilji-95/Sahil-Zoom-Backend.git
cd Sahil-Zoom-Backend
npm install
# add MONGO_URL to .env
npm start

# frontend
git clone https://github.com/Sahilji-95/Sahil-Zoom-Frontend.git
cd Sahil-Zoom-Frontend
npm install
npm start`}</code></pre>
          </section>

          <section id="roadmap" aria-labelledby="roadmap-title">
            <Heading n={12} id="roadmap" title="Roadmap and learnings" />
            <div className="cs-cols">
              <div className="cs-card"><h3>Next</h3><ul className="cs-list cs-list--icon">{roadmap.map((item) => <li key={item}><ArrowRight size={13} aria-hidden="true" />{item}</li>)}</ul></div>
              <div className="cs-card"><h3>What I learned</h3><ul className="cs-list cs-list--icon">{[
                "How browser media permissions and WebRTC peer connections work together.",
                "How Socket.IO can provide signaling without carrying the media stream.",
                "How to coordinate joins, leaves, chat and remote-video state in React.",
                "How to connect a React frontend, Express API, Socket.IO server and MongoDB database.",
              ].map((item) => <li key={item}><Check size={13} aria-hidden="true" />{item}</li>)}</ul></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
