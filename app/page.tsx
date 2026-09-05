"use client";

import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import HeroSection from "@/src/components/HeroSection";
import FeatureCard from "@/src/components/FeatureCard";
import Footer from "@/src/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  // Close demo modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (form.name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      setFormStatus("");
      return;
    }

    setFormStatus("Thank you! Your message has been sent.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const faqs = [
    {
      question: "What is FlowSync?",
      answer:
        "FlowSync is an all-in-one workspace that helps teams organize tasks, manage projects and collaborate.",
    },
    {
      question: "Can I try FlowSync for free?",
      answer:
        "Yes! FlowSync offers a free 14-day trial with no credit card required.",
    },
    {
      question: "Is FlowSync suitable for remote teams?",
      answer:
        "Yes. FlowSync helps remote teams collaborate, organize tasks and track projects from anywhere.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. You can cancel your FlowSync plan whenever you need to.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <HeroSection onDemoClick={() => setIsModalOpen(true)} />

      {/* Features */}
      <section id="features" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Features
            </p>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Everything You Need To Stay Productive
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Powerful features designed to help your team plan, collaborate,
              and deliver projects faster.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon="📋"
              title="Smart Task Management"
              description="Organize tasks, assign priorities, and track progress with an intuitive dashboard."
            />

            <FeatureCard
              icon="👥"
              title="Team Collaboration"
              description="Collaborate in real time with comments, file sharing, mentions, and instant updates."
            />

            <FeatureCard
              icon="📊"
              title="Analytics & Insights"
              description="Understand project performance with clear insights that help your team make better decisions."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="bg-gray-50 px-6 py-20 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Loved By Teams Around The World
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            See how businesses are boosting productivity and collaboration with
            FlowSync.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Sarah */}
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm dark:bg-gray-800">
              <div className="mb-4 text-yellow-400">★★★★★</div>

              <Image
                src="/219.webp"
                alt="Sarah Johnson"
                width={100}
                height={100}
                className="mx-auto mb-5 h-24 w-24 rounded-full object-cover"
              />

              <p className="text-gray-600 dark:text-gray-300">
                “FlowSync has completely transformed the way our team
                collaborates. It's simple, fast, and incredibly intuitive.”
              </p>

              <p className="mt-5 font-semibold text-gray-900 dark:text-white">
                Sarah Johnson
              </p>

              <p className="text-sm text-gray-500">Product Manager</p>
            </div>

            {/* Michael */}
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm dark:bg-gray-800">
              <div className="mb-4 text-yellow-400">★★★★★</div>

              <Image
                src="/222.webp"
                alt="Michael Chen"
                width={100}
                height={100}
                className="mx-auto mb-5 h-24 w-24 rounded-full object-cover"
              />

              <p className="text-gray-600 dark:text-gray-300">
                “Managing projects has never been easier. The clean interface
                and powerful features save us hours every week.”
              </p>

              <p className="mt-5 font-semibold text-gray-900 dark:text-white">
                Michael Chen
              </p>

              <p className="text-sm text-gray-500">Startup Founder</p>
            </div>

            {/* Emily */}
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm dark:bg-gray-800">
              <div className="mb-4 text-yellow-400">★★★★★</div>

              <Image
                src="/217.webp"
                alt="Emily Davis"
                width={100}
                height={100}
                className="mx-auto mb-5 h-24 w-24 rounded-full object-cover"
              />

              <p className="text-gray-600 dark:text-gray-300">
                “The best productivity platform we've used. Our entire
                workflow is now more organized and efficient.”
              </p>

              <p className="mt-5 font-semibold text-gray-900 dark:text-white">
                Emily Davis
              </p>

              <p className="text-sm text-gray-500">Marketing Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              FAQ
            </p>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Quick answers to common questions about FlowSync.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>

                    <span className="text-2xl text-gray-500">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Let's build a more productive workflow.
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Fill out the form and we'll get back to you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-gray-900 dark:text-white"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-gray-900 dark:text-white"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFormChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-gray-900 dark:text-white"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleFormChange}
                  placeholder="Tell us what you need..."
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

              {formStatus && (
                <p className="font-medium text-green-600 dark:text-green-400">
                  {formStatus}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 py-20 text-center md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl px-8 py-16 text-white">
          <h2 className="text-4xl font-bold">
            Ready to boost your team productivity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Join thousands of teams already using FlowSync to get more done
            every day.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3 font-semibold text-blue-600 hover:bg-gray-100"
            >
              Get Started Free
            </a>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-full border border-white px-7 py-3 font-semibold text-white hover:bg-white/10"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Demo Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                FlowSync Demo
              </h2>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-2xl text-gray-500 hover:text-gray-900 dark:hover:text-white"
                aria-label="Close demo"
              >
                ×
              </button>
            </div>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
              Explore the FlowSync product demo and discover how our smart
              workflow tools help your team stay organized and productive.
            </p>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-7 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Close Demo
            </button>
          </div>
        </div>
      )}
    </main>
  );
}