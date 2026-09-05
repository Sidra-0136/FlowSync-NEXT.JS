import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  onDemoClick: () => void;
};

export default function HeroSection({
  onDemoClick,
}: HeroSectionProps) {
  return (
    <section  id="hero" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Hero Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Smart Workflow Management
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
            Work Smarter. Stay Organized.
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            FlowSync helps teams manage projects, collaborate in real time,
            and stay productive from anywhere.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started Free
            </Link>

            <button
              type="button"
              onClick={onDemoClick}
              className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
            >
              ▶ Watch Demo
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-500 dark:text-gray-400">
            <span>✓ No Credit Card</span>
            <span>✓ Free 14-Day Trial</span>
            <span>✓ Cancel Anytime</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/dashboard.png"
            alt="FlowSync dashboard"
            width={800}
            height={600}
            priority
            className="h-auto w-full"
          />
        </div>

      </div>
    </section>
  );
}
