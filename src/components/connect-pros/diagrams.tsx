export function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 780 330"
      role="img"
      aria-label="The Next.js client sends REST requests and a WebSocket to one Express and Socket.IO server, which reads and writes MongoDB and calls Cloudinary and Resend"
      fontSize="13"
      fill="currentColor"
    >
      <defs>
        <marker id="cs-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="currentColor" />
        </marker>
      </defs>
      <rect x="10" y="95" width="180" height="140" rx="8" fill="none" stroke="currentColor" />
      <text x="100" y="120" textAnchor="middle" fontWeight="700">Next.js client</text>
      <text x="100" y="146" textAnchor="middle" opacity=".75">Redux Toolkit store</text>
      <text x="100" y="168" textAnchor="middle" opacity=".75">Axios (cookies)</text>
      <text x="100" y="190" textAnchor="middle" opacity=".75">one shared socket</text>
      <text x="100" y="212" textAnchor="middle" opacity=".75">Vercel</text>

      <rect x="300" y="20" width="230" height="290" rx="8" fill="none" stroke="currentColor" />
      <text x="415" y="44" textAnchor="middle" fontWeight="700">Node process (Render)</text>
      <rect x="318" y="62" width="194" height="106" rx="6" fill="none" stroke="currentColor" strokeDasharray="4 3" />
      <text x="415" y="84" textAnchor="middle" fontWeight="600">Express REST</text>
      <text x="415" y="106" textAnchor="middle" opacity=".75">helmet, CORS, rate limit</text>
      <text x="415" y="126" textAnchor="middle" opacity=".75">authMiddleware (JWT + DB)</text>
      <text x="415" y="146" textAnchor="middle" opacity=".75">controllers, Zod, multer</text>
      <rect x="318" y="184" width="194" height="108" rx="6" fill="none" stroke="currentColor" strokeDasharray="4 3" />
      <text x="415" y="206" textAnchor="middle" fontWeight="600">Socket.IO</text>
      <text x="415" y="228" textAnchor="middle" opacity=".75">socketAuth handshake</text>
      <text x="415" y="248" textAnchor="middle" opacity=".75">{"room user:<id>"}</text>
      <text x="415" y="268" textAnchor="middle" opacity=".75">presence, chat, read</text>

      <rect x="640" y="20" width="130" height="64" rx="8" fill="none" stroke="currentColor" />
      <text x="705" y="48" textAnchor="middle" fontWeight="700">MongoDB</text>
      <text x="705" y="68" textAnchor="middle" opacity=".75">9 collections</text>
      <rect x="640" y="130" width="130" height="64" rx="8" fill="none" stroke="currentColor" />
      <text x="705" y="158" textAnchor="middle" fontWeight="700">Cloudinary</text>
      <text x="705" y="178" textAnchor="middle" opacity=".75">images</text>
      <rect x="640" y="240" width="130" height="64" rx="8" fill="none" stroke="currentColor" />
      <text x="705" y="268" textAnchor="middle" fontWeight="700">Resend</text>
      <text x="705" y="288" textAnchor="middle" opacity=".75">OTP emails</text>

      <line x1="190" y1="125" x2="316" y2="115" stroke="currentColor" markerEnd="url(#cs-ar)" />
      <text x="253" y="100" textAnchor="middle" fontSize="12">REST</text>
      <line x1="190" y1="215" x2="316" y2="225" stroke="currentColor" markerEnd="url(#cs-ar)" markerStart="url(#cs-ar)" />
      <text x="253" y="250" textAnchor="middle" fontSize="12">WebSocket</text>
      <line x1="532" y1="52" x2="638" y2="52" stroke="currentColor" markerEnd="url(#cs-ar)" markerStart="url(#cs-ar)" />
      <text x="585" y="44" textAnchor="middle" fontSize="12">reads, writes</text>
      <line x1="532" y1="162" x2="638" y2="162" stroke="currentColor" markerEnd="url(#cs-ar)" />
      <text x="585" y="154" textAnchor="middle" fontSize="12">upload</text>
      <line x1="532" y1="272" x2="638" y2="272" stroke="currentColor" markerEnd="url(#cs-ar)" />
      <text x="585" y="264" textAnchor="middle" fontSize="12">send OTP</text>
    </svg>
  );
}

export function ChatSequenceDiagram() {
  return (
    <svg
      viewBox="0 0 780 450"
      role="img"
      aria-label="Sequence of sending a chat message: the server checks membership and connection, de-duplicates by clientMessageId, saves, emits to both user rooms, acknowledges the sender, then handles the recipient's read receipt"
      fontSize="12.5"
      fill="currentColor"
    >
      <defs>
        <marker id="cs-ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="currentColor" />
        </marker>
      </defs>
      <g fontWeight="700" textAnchor="middle">
        <rect x="20" y="10" width="120" height="34" rx="6" fill="none" stroke="currentColor" />
        <text x="80" y="32">User A</text>
        <rect x="250" y="10" width="140" height="34" rx="6" fill="none" stroke="currentColor" />
        <text x="320" y="32">Socket.IO server</text>
        <rect x="470" y="10" width="120" height="34" rx="6" fill="none" stroke="currentColor" />
        <text x="530" y="32">MongoDB</text>
        <rect x="640" y="10" width="120" height="34" rx="6" fill="none" stroke="currentColor" />
        <text x="700" y="32">User B</text>
      </g>
      <g stroke="currentColor" opacity=".35" strokeDasharray="3 4">
        <line x1="80" y1="44" x2="80" y2="440" />
        <line x1="320" y1="44" x2="320" y2="440" />
        <line x1="530" y1="44" x2="530" y2="440" />
        <line x1="700" y1="44" x2="700" y2="440" />
      </g>
      <g stroke="currentColor" fill="none">
        <line x1="80" y1="76" x2="318" y2="76" markerEnd="url(#cs-ar2)" />
        <line x1="322" y1="112" x2="528" y2="112" markerEnd="url(#cs-ar2)" />
        <line x1="322" y1="148" x2="528" y2="148" markerEnd="url(#cs-ar2)" />
        <line x1="322" y1="184" x2="528" y2="184" markerEnd="url(#cs-ar2)" />
        <line x1="322" y1="226" x2="528" y2="226" markerEnd="url(#cs-ar2)" />
        <line x1="322" y1="262" x2="698" y2="262" markerEnd="url(#cs-ar2)" />
        <line x1="318" y1="298" x2="82" y2="298" markerEnd="url(#cs-ar2)" />
        <line x1="322" y1="334" x2="698" y2="334" markerEnd="url(#cs-ar2)" strokeDasharray="5 3" />
        <line x1="698" y1="376" x2="322" y2="376" markerEnd="url(#cs-ar2)" />
        <line x1="318" y1="418" x2="82" y2="418" markerEnd="url(#cs-ar2)" />
      </g>
      <g>
        <text x="90" y="68">chat:send {"{conversationId, clientMessageId, text}"}</text>
        <text x="332" y="104">is A a participant of this conversation?</text>
        <text x="332" y="140">accepted connection between A and B?</text>
        <text x="332" y="176">same (sender, clientMessageId) already saved?</text>
        <text x="332" y="218">if new: insert message (unique index guards races)</text>
        <text x="332" y="254">chat:message to rooms user:A and user:B</text>
        <text x="90" y="290">ack {"{success, duplicate, message}"}</text>
        <text x="332" y="326">chat:popup, only if B is not viewing this chat</text>
        <text x="332" y="368">B sends chat:read {"{messageIds}"}; server sets readAt</text>
        <text x="90" y="410">chat:read_receipt {"{messageIds, readAt}"} to A</text>
      </g>
    </svg>
  );
}
