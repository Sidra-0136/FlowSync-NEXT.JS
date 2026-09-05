"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.webp"
            alt="FlowSync"
            className="h-10 w-auto dark:brightness-0 dark:invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200"
          >
            Home
          </Link>

          <Link
            href="#features"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200"
          >
            Features
          </Link>

          <Link
            href="#testimonials"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200"
          >
            Testimonials
          </Link>

          <Link
            href="#faq"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200"
          >
            FAQ
          </Link>

          <Link
            href="#contact"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200"
          >
            Contact
          </Link>

          {/* Dark Mode Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="rounded-full border border-gray-300 px-3 py-2 text-lg dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">

          {/* Dark Mode Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="rounded-full border border-gray-300 px-3 py-2 text-lg dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>

          <Link href="#features" onClick={() => setIsMenuOpen(false)}>
            Features
          </Link>

          <Link
            href="#testimonials"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>

          <Link href="#faq" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>

          <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
