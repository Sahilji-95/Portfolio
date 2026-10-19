import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahil Kumar Gautam | MERN Stack Developer",
  description:
    "Sahil Kumar Gautam is a BCA student and aspiring MERN stack developer building responsive web applications, REST APIs, and full-stack products.",
  openGraph: {
    title: "Sahil Kumar Gautam | MERN Stack Developer",
    description:
      "BCA student and aspiring full-stack developer building useful, thoughtful web experiences.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Sahil Kumar Gautam | MERN Stack Developer",
    description:
      "BCA student and aspiring full-stack developer building useful, thoughtful web experiences.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
