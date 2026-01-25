"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/projects", label: "My Projects" },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        {/* Logo - Fixed to go to homepage */}
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            bhusan.com
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 font-medium transition-colors ${
                pathname === item.href || (pathname === "/" && item.href === "#projects")
                  ? "border-b-2 border-yellow-400 text-black hover:text-black"
                  : "hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:bhusansharma303@gmail.com"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-neutral-800 transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="border-t border-neutral-200 bg-white px-4 py-4">
            <nav className="flex flex-col gap-4 text-sm text-neutral-600">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`pb-1 font-medium transition-colors ${
                    pathname === item.href || (pathname === "/" && item.href === "#projects")
                      ? "border-b-2 border-yellow-400 text-black"
                      : "hover:text-black"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:bhusansharma303@gmail.com"
                className="rounded-full bg-black px-6 py-3 text-center text-sm font-medium text-white shadow-lg hover:bg-neutral-800"
              >
                Hire Me
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
