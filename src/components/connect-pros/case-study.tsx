import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import {
  architectureNotes,
  caseStudyMeta as meta,
  challenges,
  envExampleSnippet,
  envNames,
  featureGroups,
  goals,
  hostingNotes,
  learnings,
  lifecycleNotes,
  messageSchemaSnippet,
  models,
  paginationNotes,
  performanceDone,
  problems,
  rateLimits,
  roadmap,
  routeGroups,
  screenshots,
  securityDone,
  securityPending,
  setupSnippet,
  socketEvents,
  stackRows,
  testingDone,
  testingPlanned,
  uiPoints,
  validationNotes,
} from "@/data/connect-pros";
import CaseStudyNav from "./case-study-nav";
import { ArchitectureDiagram, ChatSequenceDiagram } from "./diagrams";
import { Rich } from "./rich";

function Heading({ n, title, id }: { n: number; title: string; id: string }) {
  return (
    <div className="cs-heading">
      <p className="section-kicker">{String(n).padStart(2, "0")}</p>
      <h2 id={`${id}-title`}>{title}</h2>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="cs-list">
      {items.map((item) => (
        <li key={item}>
          <Rich>{item}</Rich>
        </li>
      ))}
    </ul>
  );
}

function Placeholder({ children }: { children: string }) {
  return <span className="cs-todo">{children}</span>;
}

function LinkButton({
  href,
  children,
  primary = false,
  missing,
}: {
  href: string | null;
  children: string;
  primary?: boolean;
  missing: string;
}) {
  if (!href) {
    return (
      <span className="button button--outline cs-btn-missing" title={missing}>
        {children}
      </span>
    );
  }
  return (
    <a
      className={`button ${primary ? "button--primary" : "button--outline"}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children} <ArrowUpRight size={14} />
    </a>
  );
}

export default function ConnectProsCaseStudy() {
  return (
    <div className="cs-shell">
      <div className="cs-layout">
        <CaseStudyNav />
        <main id="main-content" className="cs-main">
          <header className="cs-hero">
            <p className="cs-eyebrow">Case study · Full-stack project</p>
            <h1>{meta.title}</h1>
            <p className="cs-sub">{meta.tagline}</p>
            <div className="cs-chips">
              {meta.heroStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="cs-actions">
              <LinkButton primary href={meta.demoUrl} missing="Add the live demo link">
                Live demo
              </LinkButton>
              <LinkButton href={meta.frontendRepo} missing="Add frontendRepo in src/data/connect-pros.ts">
                Frontend code
              </LinkButton>
              <LinkButton href={meta.backendRepo} missing="Add backendRepo in src/data/connect-pros.ts">
                Backend code
              </LinkButton>
            </div>
          </header>

          <section id="overview" aria-labelledby="overview-title">
            <Heading n={1} id="overview" title="Project overview" />
            <p>
              Connect Pros lets people create a professional profile, find other users, send and
              accept connection requests, share posts with images, like and comment, receive
              notifications, and chat in real time with accepted connections.
            </p>
            <dl className="cs-facts">
              <div><dt>Category</dt><dd>{meta.category}</dd></div>
              <div><dt>My role</dt><dd>{meta.role}</dd></div>
              <div><dt>Target users</dt><dd>{meta.users}</dd></div>
              <div>
                <dt>Status</dt>
                <dd>{meta.status ?? <Placeholder>Add status</Placeholder>}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{meta.timeline ?? <Placeholder>Add timeline</Placeholder>}</dd>
              </div>
              <div><dt>Codebase</dt><dd>2 repositories: Next.js client, Express API</dd></div>
            </dl>
            <p>
              <strong>Main objectives:</strong> secure cookie-based sessions, a smooth interface,
              real-time messaging that cannot be abused, and a backend that keeps data consistent.
            </p>
          </section>

          <section id="problem" aria-labelledby="problem-title">
            <Heading n={2} id="problem" title="Problem and goals" />
            <p>
              I built Connect Pros to practise the full life of a networking product end to end:
              identity, relationships between users, content, and live communication. It is a
              learning project, not a replacement for any existing network.
            </p>
            <div className="cs-cols">
              <div className="cs-card"><h3>Problems addressed</h3><List items={problems} /></div>
              <div className="cs-card"><h3>Goals</h3><List items={goals} /></div>
            </div>
          </section>

          <section id="stack" aria-labelledby="stack-title">
            <Heading n={3} id="stack" title="Technology stack" />
            <div className="cs-table">
              <table>
                <thead>
                  <tr><th>Layer</th><th>Technology</th><th>Why I used it</th></tr>
                </thead>
                <tbody>
                  {stackRows.map((row) => (
                    <tr key={row.tech}>
                      <td>{row.layer}</td>
                      <td>{row.tech}</td>
                      <td><Rich>{row.why}</Rich></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="features" aria-labelledby="features-title">
            <Heading n={4} id="features" title="Core features" />
            <p>Every item below was checked against the code. Items that exist only partly are marked.</p>
            <div className="cs-cols">
              {featureGroups.map((group) => (
                <div className="cs-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="cs-list">
                    {group.items.map((item) => (
                      <li key={item.text}>
                        <Rich>{item.text}</Rich>
                        {item.flag && <span className="cs-tag cs-tag--no">{item.flag}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="architecture" aria-labelledby="architecture-title">
            <Heading n={5} id="architecture" title="System architecture" />
            <p>
              The browser talks to one Node process over two channels. Both channels authenticate
              with the same cookie, and both end in the same MongoDB database.
            </p>
            <figure className="cs-figure">
              <div className="cs-fig"><ArchitectureDiagram /></div>
              <figcaption>
                REST and WebSocket traffic reach the same server. REST controllers also emit
                Socket.IO events (for example <code>notification:new</code>) through the shared{" "}
                <code>io</code> instance.
              </figcaption>
            </figure>
            <h3>How the pieces connect</h3>
            <List items={architectureNotes} />
          </section>

          <section id="data" aria-labelledby="data-title">
            <Heading n={6} id="data" title="Database design" />
            <p>Nine Mongoose models. Fields, indexes and constraints are taken from the schema files.</p>
            <div className="cs-table">
              <table>
                <thead>
                  <tr><th>Model</th><th>Key fields</th><th>Relations</th><th>Indexes and rules</th></tr>
                </thead>
                <tbody>
                  {models.map((m) => (
                    <tr key={m.name}>
                      <td>{m.name}</td>
                      <td><Rich>{m.fields}</Rich></td>
                      <td><Rich>{m.relations}</Rich></td>
                      <td><Rich>{m.rules}</Rich></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <pre className="cs-pre"><code>{messageSchemaSnippet}</code></pre>
          </section>

          <section id="api" aria-labelledby="api-title">
            <Heading n={7} id="api" title="API design and backend structure" />
            <p>
              Routes live in four files (users, post, chat, notification), each pointing at a
              controller. Protected routes run <code>authMiddleware</code> first. Rate limiters are
              attached per route.
            </p>
            <div className="cs-table">
              <table>
                <thead><tr><th>Area</th><th>Routes</th></tr></thead>
                <tbody>
                  {routeGroups.map((g) => (
                    <tr key={g.area}>
                      <td>{g.area}</td>
                      <td>
                        <div className="cs-routes">
                          {g.routes.map((r) => <code key={r}>{r}</code>)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3>Validation and errors</h3>
            <List items={validationNotes} />
            <h3>Pagination and search</h3>
            <List items={paginationNotes} />
            <h3>Rate limits</h3>
            <div className="cs-table cs-table--narrow">
              <table>
                <thead><tr><th>Scope</th><th>Limit per 15 minutes</th></tr></thead>
                <tbody>
                  {rateLimits.map((r) => (
                    <tr key={r.scope}>
                      <td><Rich>{r.scope}</Rich></td>
                      <td>{r.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="realtime" aria-labelledby="realtime-title">
            <Heading n={8} id="realtime" title="Real-time communication" />
            <p>
              Chat is the most interesting part of the build. The server treats every socket event
              as untrusted input and re-checks who the user is and whether they may do the thing.
            </p>
            <h3>Connection lifecycle</h3>
            <List items={lifecycleNotes} />
            <figure className="cs-figure">
              <div className="cs-fig"><ChatSequenceDiagram /></div>
              <figcaption>
                A retry with the same <code>clientMessageId</code> returns the stored message with{" "}
                <code>duplicate: true</code> and does not create a second one. Reusing an id with
                different text is rejected as <code>MESSAGE_ID_CONFLICT</code>.
              </figcaption>
            </figure>
            <h3>Event reference</h3>
            <div className="cs-table">
              <table>
                <thead><tr><th>Event</th><th>Direction</th><th>Purpose</th></tr></thead>
                <tbody>
                  {socketEvents.map((e) => (
                    <tr key={e.event}>
                      <td><code>{e.event}</code></td>
                      <td>{e.direction}</td>
                      <td><Rich>{e.purpose}</Rich></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="security" aria-labelledby="security-title">
            <Heading n={9} id="security" title="Authentication and security" />
            <p>Only controls that exist in the code are listed as implemented. Open items are listed separately.</p>
            <div className="cs-cols">
              <div className="cs-card">
                <h3>Implemented <span className="cs-tag cs-tag--ok">in code</span></h3>
                <List items={securityDone} />
              </div>
              <div className="cs-card">
                <h3>Not done yet <span className="cs-tag cs-tag--no">audit pending</span></h3>
                <List items={securityPending} />
              </div>
            </div>
          </section>

          <section id="ui" aria-labelledby="ui-title">
            <Heading n={10} id="ui" title="UI and UX" />
            <List items={uiPoints} />
            <div className="cs-shots">
              {screenshots.map((shot) => (
                <figure className="cs-shot" key={shot.title}>
                  {shot.src ? (
                    <Image
                      src={shot.src}
                      alt={`${shot.title} screen of Connect Pros`}
                      width={1280}
                      height={800}
                      sizes="(max-width: 700px) 100vw, 360px"
                    />
                  ) : (
                    <div className="cs-shot__empty">Add screenshot: {shot.title.toLowerCase()}</div>
                  )}
                  <figcaption><strong>{shot.title}</strong>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="challenges" aria-labelledby="challenges-title">
            <Heading n={11} id="challenges" title="Challenges and solutions" />
            <p>Each item is a problem the code now solves.</p>
            {challenges.map((c) => (
              <article className="cs-chal" key={c.title}>
                <h3>{c.title}</h3>
                <dl>
                  <dt>Problem</dt><dd><Rich>{c.problem}</Rich></dd>
                  <dt>Approach</dt><dd><Rich>{c.approach}</Rich></dd>
                  <dt>Solution</dt><dd><Rich>{c.solution}</Rich></dd>
                </dl>
              </article>
            ))}
          </section>

          <section id="performance" aria-labelledby="performance-title">
            <Heading n={12} id="performance" title="Performance and optimization" />
            <p>
              These are changes present in the code. I have not benchmarked before and after, so
              there are no percentage claims here.
            </p>
            <List items={performanceDone} />
            <p className="cs-callout">
              Not optimized yet: the feed fetches every post in one request. Adding pagination and an
              index on post creation time is the biggest remaining win.
            </p>
          </section>

          <section id="testing" aria-labelledby="testing-title">
            <Heading n={13} id="testing" title="Testing and quality" />
            <p>Testing so far is manual and script-based. There is no automated test suite yet.</p>
            <List items={testingDone} />
            <h3>Planned</h3>
            <p><Rich>{testingPlanned}</Rich></p>
          </section>

          <section id="deploy" aria-labelledby="deploy-title">
            <Heading n={14} id="deploy" title="Deployment and setup" />
            <div className="cs-cols">
              <div className="cs-card"><h3>Hosting</h3><List items={hostingNotes} /></div>
              <div className="cs-card">
                <h3>Environment variables (names only)</h3>
                <ul className="cs-list">
                  {envNames.map((n) => <li key={n}><code>{n}</code></li>)}
                </ul>
              </div>
            </div>
            <h3>Run it locally</h3>
            <pre className="cs-pre"><code>{setupSnippet}</code></pre>
            <pre className="cs-pre"><code>{envExampleSnippet}</code></pre>
          </section>

          <section id="roadmap" aria-labelledby="roadmap-title">
            <Heading n={15} id="roadmap" title="Roadmap and learnings" />
            <div className="cs-cols">
              <div className="cs-card">
                <h3>Next</h3>
                <ul className="cs-list cs-list--icon">
                  {roadmap.map((r) => <li key={r}><ArrowRight size={13} aria-hidden="true" />{r}</li>)}
                </ul>
              </div>
              <div className="cs-card">
                <h3>What I learned</h3>
                <ul className="cs-list cs-list--icon">
                  {learnings.map((l) => <li key={l}><Check size={13} aria-hidden="true" />{l}</li>)}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
