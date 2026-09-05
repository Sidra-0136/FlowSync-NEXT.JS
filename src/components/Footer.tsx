import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo.webp"
              alt="FlowSync"
              width={150}
              height={40}
              className="h-10 w-auto dark:brightness-0 dark:invert"
            />
          </Link>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
            FlowSync is the all-in-one workspace that helps teams plan,
            track, and collaborate effortlessly.
          </p>

          {/* Social Media */}
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-900"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-900"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-900"
            >
              <FaLinkedinIn size={17} />
            </a>

            <a
              href="#"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-900"
            >
              <FaXTwitter size={17} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
            <Link href="/">Home</Link>
            <Link href="#features">Features</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Product
          </h3>

          <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
            <Link href="#features">Features</Link>
            <Link href="#contact">Get Started</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Company
          </h3>

          <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
            <Link href="/about">About Us</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-200 pt-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
        © 2026 FlowSync. All rights reserved.
      </div>
    </footer>
  );
}