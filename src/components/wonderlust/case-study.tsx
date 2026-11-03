import { ArrowUpRight, Check } from "lucide-react";
import WonderLustCaseStudyNav from "./case-study-nav";

const stack = [
  [
    "Frontend",
    "EJS, Bootstrap, CSS",
    "Server-rendered pages and responsive UI.",
  ],
  [
    "Backend",
    "Node.js, Express",
    "Routes, controllers, middleware and application logic.",
  ],
  ["Database", "MongoDB, Mongoose", "Listings, users and reviews."],
  [
    "Authentication",
    "Passport.js, express-session",
    "User registration, login and session management.",
  ],
  [
    "Media",
    "Multer, Cloudinary",
    "Listing image uploads and cloud-hosted images.",
  ],
  ["Validation", "Joi", "Server-side validation for listing and review data."],
];

function Heading({
  number,
  id,
  title,
}: {
  number: number;
  id: string;
  title: string;
}) {
  return (
    <div className="cs-heading">
      <p className="section-kicker">{String(number).padStart(2, "0")}</p>
      <h2 id={`${id}-title`}>{title}</h2>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="cs-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function WonderLustCaseStudy() {
  return (
    <div className="cs-shell">
      <div className="cs-layout">
        <WonderLustCaseStudyNav />
        <main id="main-content" className="cs-main">
          <header className="cs-hero">
            <p className="cs-eyebrow">Case study · Full-stack project</p>

            <h1>WonderLust</h1>

            <p className="cs-sub">
              A rental listing platform with property management, image uploads,
              reviews, authentication and ownership-based authorization.
            </p>

            <div className="cs-chips">
              {[
                "Node.js",
                "Express",
                "MongoDB",
                "EJS",
                "Passport.js",
                "Cloudinary",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="cs-actions">
              <a
                className="button button--primary"
                href="https://wonderlust-ooph.onrender.com/listings"
                target="_blank"
                rel="noreferrer"
              >
                Live demo <ArrowUpRight size={14} />
              </a>

              <a
                className="button button--outline"
                href="https://github.com/Sahilji-95/ProjectWonderLust"
                target="_blank"
                rel="noreferrer"
              >
                Source code <ArrowUpRight size={14} />
              </a>
            </div>
          </header>

          <section id="overview" aria-labelledby="overview-title">
            <Heading number={1} id="overview" title="Project overview" />

            <p>
              WonderLust is a full-stack rental listing application where users
              can browse properties, create listings, upload images, leave
              reviews and manage content they own.
            </p>

            <dl className="cs-facts">
              <div>
                <dt>Category</dt>
                <dd>Rental listing platform</dd>
              </div>
              <div>
                <dt>My role</dt>
                <dd>Full-stack developer</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Live</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>Completed March 10, 2026</dd>
              </div>
              <div>
                <dt>Architecture</dt>
                <dd>MVC with server-rendered views</dd>
              </div>
              <div>
                <dt>Codebase</dt>
                <dd>Node.js and Express application</dd>
              </div>
            </dl>
          </section>

          <section id="problem" aria-labelledby="problem-title">
            <Heading number={2} id="problem" title="Problem and goals" />

            <div className="cs-cols">
              <div className="cs-card">
                <h3>Problems addressed</h3>
                <List
                  items={[
                    "A simple way to browse rental listings and view property details.",
                    "A secure flow for users to create, edit and delete their own listings.",
                    "Image upload support for property listings.",
                    "A review system with ratings and ownership controls.",
                  ]}
                />
              </div>

              <div className="cs-card">
                <h3>Goals</h3>
                <List
                  items={[
                    "Build complete CRUD functionality for rental listings.",
                    "Implement secure user registration and login.",
                    "Use server-side validation for listing and review input.",
                    "Apply authorization before users edit or delete content.",
                  ]}
                />
              </div>
            </div>
          </section>

          <section id="stack" aria-labelledby="stack-title">
            <Heading number={3} id="stack" title="Technology stack" />

            <div className="cs-table">
              <table>
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Technology</th>
                    <th>Why I used it</th>
                  </tr>
                </thead>
                <tbody>
                  {stack.map(([layer, technology, why]) => (
                    <tr key={technology}>
                      <td>{layer}</td>
                      <td>{technology}</td>
                      <td>{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="features" aria-labelledby="features-title">
            <Heading number={4} id="features" title="Core features" />

            <div className="cs-cols">
              <div className="cs-card">
                <h3>Listings</h3>
                <List
                  items={[
                    "Browse rental listings and open individual listing details.",
                    "Create, edit and delete listings through CRUD routes.",
                    "Upload listing images with Multer and Cloudinary.",
                    "Display title, price, location, image and listing description.",
                  ]}
                />
              </div>

              <div className="cs-card">
                <h3>Accounts and reviews</h3>
                <List
                  items={[
                    "Register and log in using Passport.js authentication.",
                    "Maintain login state with MongoDB-backed sessions.",
                    "Add ratings and written reviews to a listing.",
                    "Delete reviews and listings only when the user owns them.",
                  ]}
                />
              </div>
            </div>
          </section>

          <section id="architecture" aria-labelledby="architecture-title">
            <Heading number={5} id="architecture" title="System architecture" />

            <pre className="cs-pre">
              <code>{`Browser
  ↓
Express routes → Controllers → Mongoose models → MongoDB
  ↓                 ↓
EJS views       Cloudinary image storage
  ↓
Passport.js sessions and authorization middleware`}</code>
            </pre>

            <List
              items={[
                "Express routes group listing, review and user actions.",
                "Controllers keep listing, review and authentication logic separate.",
                "Mongoose models define Listing, Review and User data.",
                "EJS renders server-side pages using reusable layout and partial files.",
                "Cloudinary stores uploaded listing images.",
              ]}
            />
          </section>

          <section id="data" aria-labelledby="data-title">
            <Heading number={6} id="data" title="Data models and routes" />

            <div className="cs-cols">
              <div className="cs-card">
                <h3>Listing model</h3>
                <p>
                  Stores the listing title, description, price, location, image
                  information, owner reference and related review references.
                </p>
              </div>

              <div className="cs-card">
                <h3>Review model</h3>
                <p>
                  Stores a rating, review text and the user who created the
                  review. Reviews are connected to their parent listing.
                </p>
              </div>
            </div>

            <div className="cs-table">
              <table>
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Listings</td>
                    <td>Create, read, update and delete property listings.</td>
                  </tr>
                  <tr>
                    <td>Reviews</td>
                    <td>
                      Add ratings and written reviews; allow authors to delete
                      their reviews.
                    </td>
                  </tr>
                  <tr>
                    <td>Users</td>
                    <td>Register, log in, log out and maintain sessions.</td>
                  </tr>
                  <tr>
                    <td>Uploads</td>
                    <td>
                      Accept listing images through Multer and store them on
                      Cloudinary.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="security" aria-labelledby="security-title">
            <Heading
              number={7}
              id="security"
              title="Validation and authorization"
            />

            <div className="cs-cols">
              <div className="cs-card">
                <h3>Implemented</h3>
                <List
                  items={[
                    "Passport.js authentication with persistent sessions.",
                    "Authorization checks for listing owners and review authors.",
                    "Joi validation for listing and review data.",
                    "Centralized error handling using custom Express errors.",
                    "Flash messages for success and error feedback.",
                  ]}
                />
              </div>

              <div className="cs-card">
                <h3>Key learning</h3>
                <List
                  items={[
                    "Authentication confirms who the user is.",
                    "Authorization controls what the user can change.",
                    "Validation must happen on the server, not only in browser forms.",
                    "Ownership checks help prevent unauthorized edits and deletes.",
                  ]}
                />
              </div>
            </div>
          </section>

          <section id="ui" aria-labelledby="ui-title">
            <Heading number={8} id="ui" title="UI and UX" />

            <List
              items={[
                "Listing cards make available properties easy to scan.",
                "Detail pages bring together images, price, location and reviews.",
                "Flash messages provide feedback after create, update and delete actions.",
                "Navigation gives clear routes to browse, create a listing, register and log in.",
                "Bootstrap helps keep layouts responsive across screen sizes.",
              ]}
            />
          </section>

          <section id="challenges" aria-labelledby="challenges-title">
            <Heading
              number={9}
              id="challenges"
              title="Challenges and solutions"
            />

            <div className="cs-cols">
              <div className="cs-card">
                <h3>Image uploads</h3>
                <p>
                  Property listings need visual context. Multer handles
                  multipart form uploads, while Cloudinary stores the uploaded
                  image and provides a hosted image URL.
                </p>
              </div>

              <div className="cs-card">
                <h3>Related review cleanup</h3>
                <p>
                  Listings can contain multiple reviews. Cascade deletion
                  removes associated reviews when their parent listing is
                  deleted.
                </p>
              </div>
            </div>
          </section>

          <section id="testing" aria-labelledby="testing-title">
            <Heading number={10} id="testing" title="Testing and quality" />

            <div className="cs-cols">
              <div className="cs-card">
                <h3>Manual validation</h3>
                <List
                  items={[
                    "Register and log in with a new account.",
                    "Create, edit and delete a listing.",
                    "Upload and display a listing image.",
                    "Create and delete a review.",
                    "Verify that unauthorized users cannot edit another user's content.",
                  ]}
                />
              </div>

              <div className="cs-card">
                <h3>Recommended next tests</h3>
                <List
                  items={[
                    "Route tests for listings, reviews and user flows.",
                    "Validation tests for invalid listing and review payloads.",
                    "Authorization tests for owner-only actions.",
                    "End-to-end tests for signup-to-listing creation flow.",
                  ]}
                />
              </div>
            </div>
          </section>

          <section id="roadmap" aria-labelledby="roadmap-title">
            <Heading number={11} id="roadmap" title="Roadmap and learnings" />

            <div className="cs-cols">
              <div className="cs-card">
                <h3>Next improvements</h3>
                <List
                  items={[
                    "Add listing search, filters and pagination.",
                    "Add map-based location browsing.",
                    "Support multiple images for each listing.",
                    "Add automated tests for routes and authorization.",
                  ]}
                />
              </div>

              <div className="cs-card">
                <h3>What I learned</h3>
                <ul className="cs-list cs-list--icon">
                  {[
                    "How to structure an MVC Express application.",
                    "How to model related data with MongoDB and Mongoose.",
                    "How Passport.js sessions and ownership middleware work.",
                    "How Multer and Cloudinary handle media uploads.",
                  ].map((item) => (
                    <li key={item}>
                      <Check size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
