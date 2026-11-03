import type { Metadata } from "next";
import WonderLustCaseStudy from "@/components/wonderlust/case-study";
import "../connect-pros/case-study.css";

export const metadata: Metadata = {
  title: "WonderLust Case Study | Sahil Kumar Gautam",
  description:
    "A full-stack rental listing platform built with Node.js, Express, MongoDB, EJS, Passport.js and Cloudinary.",
  openGraph: {
    title: "WonderLust Case Study | Sahil Kumar Gautam",
    description:
      "How I built a rental listing platform with CRUD operations, authentication, image uploads, reviews and authorization.",
    type: "article",
    locale: "en_IN",
  },
};

export default function WonderLustPage() {
  return <WonderLustCaseStudy />;
}
