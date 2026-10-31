import type { Metadata } from "next";
import ConnectProsCaseStudy from "@/components/connect-pros/case-study";
import "./case-study.css";

export const metadata: Metadata = {
  title: "Connect Pros case study | Sahil Kumar Gautam",
  description:
    "How I built Connect Pros, a full-stack professional networking platform with Next.js, Express, MongoDB and Socket.IO real-time chat.",
  openGraph: {
    title: "Connect Pros case study | Sahil Kumar Gautam",
    description:
      "Architecture, data models, API design, real-time chat and security of a full-stack networking platform.",
    type: "article",
    locale: "en_IN",
  },
};

export default function ConnectProsPage() {
  return <ConnectProsCaseStudy />;
}
