"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 border-b border-border/50">
      <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground no-underline"
        >
          TechBlog
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 sm:flex">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground no-underline"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-foreground no-underline"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted hover:text-foreground no-underline"
          >
            About
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex items-center sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="text-foreground"
          >
            {menuOpen ? (
              <path
                d="M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M2 5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass border-t border-border/50 sm:hidden">
          <div className="flex flex-col gap-1 px-6 py-3">
            <Link
              href="/"
              className="rounded-lg py-2 text-sm text-muted hover:text-foreground no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="rounded-lg py-2 text-sm text-muted hover:text-foreground no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="rounded-lg py-2 text-sm text-muted hover:text-foreground no-underline"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
