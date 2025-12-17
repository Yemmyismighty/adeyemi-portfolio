import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-medium">
          Adeyemi A.
        </Link>

        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="/#projects" className="hover:text-text">
            Projects
          </Link>
          <Link href="/experience" className="hover:text-text">
            Experience
          </Link>
          <Link href="/contact" className="hover:text-text">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
