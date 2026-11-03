import type { Metadata } from "next";
import SahilZoomCaseStudy from "@/components/sahil-zoom/case-study";

// Reuse the existing case-study design system so this page matches Connect Pros.
import "../connect-pros/case-study.css";

export const metadata: Metadata = {
  title: "Sahil Zoom case study | Sahil Kumar Gautam",
  description:
    "How I built Sahil Zoom, a browser-based video-conferencing app with React, WebRTC, Socket.IO, Express and MongoDB.",
  openGraph: {
    title: "Sahil Zoom case study | Sahil Kumar Gautam",
    description:
      "Architecture, real-time signaling, WebRTC media flow and roadmap for a full-stack video-conferencing project.",
    type: "article",
    locale: "en_IN",
  },
};

export default function SahilZoomPage() {
  return <SahilZoomCaseStudy />;
}
