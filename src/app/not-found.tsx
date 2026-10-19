import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d1117] px-6 text-white">
      <div className="w-full max-w-xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
          Page Not Found
        </p>

        <h1 className="text-8xl font-extrabold tracking-tight sm:text-9xl">
          404
        </h1>

        <div className="mx-auto my-6 h-1 w-20 rounded-full bg-indigo-500" />

        <h2 className="text-2xl font-bold sm:text-3xl">
          Lost in the digital space?
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-400">
          Sorry, the page you're looking for doesn't exist on Sahil's Portfolio
          or may have been moved. Let's get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 font-semibold transition hover:bg-indigo-600"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[#30363d] px-5 py-3 font-semibold transition hover:bg-[#161b22]"
          >
            <ArrowLeft size={18} />
            Go Back
          </Link>
        </div>

        <p className="mt-12 text-sm text-gray-500">© 2026 Sahil Kumar Gautam</p>
      </div>
    </main>
  );
}
