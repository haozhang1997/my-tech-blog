"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 border-b border-border">
      <nav className="mx-auto flex h-11 max-w-[980px] items-center justify-between px-6">
        <Link
          href="/"
          className="text-[1.05rem] font-medium tracking-tight text-foreground no-underline"
        >
          TechBlog
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-9 sm:flex">
          <Link
            href="/"
            className="text-xs text-muted hover:text-foreground no-underline transition-colors duration-200"
          >
            首页
          </Link>
          <Link
            href="/blog"
            className="text-xs text-muted hover:text-foreground no-underline transition-colors duration-200"
          >
            博客
          </Link>
          <Link
            href="/about"
            className="text-xs text-muted hover:text-foreground no-underline transition-colors duration-200"
          >
            关于
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex items-center justify-center w-8 h-8 sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-4 h-3 flex flex-col justify-between">
            <span
              className={`block h-[1.5px] w-full bg-foreground rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[5.25px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-foreground rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[5.25px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu with animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out sm:hidden ${
          menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border px-6 py-4 flex flex-col gap-1">
          <Link
            href="/"
            className="py-2 text-sm text-muted hover:text-foreground no-underline transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            首页
          </Link>
          <Link
            href="/blog"
            className="py-2 text-sm text-muted hover:text-foreground no-underline transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            博客
          </Link>
          <Link
            href="/about"
            className="py-2 text-sm text-muted hover:text-foreground no-underline transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            关于
          </Link>
        </div>
      </div>
    </header>
  );
}
