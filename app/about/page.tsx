import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function AboutPage() {
  return (
    <main className="about-page min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero */}
      <section className="about-hero px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            ABOUT FLOWSYNC
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-7xl">
            Your work has a rhythm.
            <span className="about-gradient-text block">
              We keep it flowing.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            FlowSync was created to make teamwork feel simpler. Instead of
            jumping between different tools, teams can plan, collaborate,
            organize, and move projects forward from one focused workspace.
          </p>
        </div>
      </section>

      {/* Flow Journey */}
      <section className="about-flow border-y border-gray-200 px-6 py-20 dark:border-gray-800">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
              THE FLOWSYNC METHOD
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              From idea to done.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="about-flow-card rounded-3xl border bg-white p-8 shadow-sm dark:bg-gray-950">
              <span className="text-sm font-bold text-purple-600">01</span>

              <h3 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                FLOW
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                Bring tasks, projects, and conversations together so your
                team always knows what is happening.
              </p>
            </div>

            <div className="about-flow-card rounded-3xl border bg-white p-8 shadow-sm dark:bg-gray-950">
              <span className="text-sm font-bold text-purple-600">02</span>

              <h3 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                FOCUS
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                Turn busy workflows into clear priorities and help your team
                focus on what matters most.
              </p>
            </div>

            <div className="about-flow-card rounded-3xl border bg-white p-8 shadow-sm dark:bg-gray-950">
              <span className="text-sm font-bold text-purple-600">03</span>

              <h3 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                FINISH
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                Keep momentum going, track progress, and turn plans into
                completed projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why FlowSync */}
      <section className="about-why px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
                WHY FLOWSYNC
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                Less chaos.
                <br />
                More momentum.
              </h2>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
                Great teamwork shouldn't feel complicated. FlowSync keeps
                your workflow clear, connected, and easy to manage so your
                team can spend more time creating and less time organizing.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="about-why-card rounded-2xl border p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  🧠 Less Noise
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Keep everything important in one organized workspace.
                </p>
              </div>

              <div className="about-why-card rounded-2xl border p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  ⚡ More Momentum
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Make progress visible and keep projects moving.
                </p>
              </div>

              <div className="about-why-card rounded-2xl border p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  🌎 Work Anywhere
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Stay connected with your team wherever work happens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="about-final-cta mx-auto max-w-6xl rounded-3xl px-8 py-16 text-center md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            READY TO FLOW?
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Make your next project feel effortless.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
            Bring your team, tasks, and ideas together with FlowSync.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-purple-600 transition hover:bg-gray-100"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}