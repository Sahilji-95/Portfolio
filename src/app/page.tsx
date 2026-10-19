import { existsSync } from "node:fs";
import { join } from "node:path";
import Portfolio from "@/components/portfolio";

export default function Home() {
  const resumeAvailable = existsSync(join(process.cwd(), "public", "resume.pdf"));
  return <Portfolio resumeAvailable={resumeAvailable} />;
}
