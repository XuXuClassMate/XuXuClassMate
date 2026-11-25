"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 0.61, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section className="relative overflow-hidden pt-[calc(var(--nav-h)+64px)]">
      <div className="container-ap pb-20 text-center">
        <motion.p className="eyebrow" {...rise(0.05)}>
          AI-powered Quality Engineering
        </motion.p>
        <motion.h1 className="display-1 mx-auto mt-3 max-w-[16ch]" {...rise(0.12)}>
          Test cases your team can actually review.
        </motion.h1>
        <motion.p className="lead mx-auto mt-5 max-w-[42ch]" {...rise(0.2)}>
          Turn a requirement — PDF, image, or spec — into structured,
          reviewable test cases, and run them on pullable test databases.
        </motion.p>
        <motion.div
          className="mt-7 flex items-center justify-center gap-7"
          {...rise(0.28)}
        >
          <Link href="/#try" className="link-ap">
            Try the generator
          </Link>
          <Link href="/#products" className="link-ap">
            See the work
          </Link>
        </motion.div>
      </div>

      {/* Product visual: the generator's real output, as a window */}
      <motion.div
        className="container-ap pb-24"
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, y: 48, scale: 0.98 },
              animate: { opacity: 1, y: 0, scale: 1 },
              transition: { duration: 0.9, delay: 0.36, ease },
            })}
      >
        <GeneratorWindow />
      </motion.div>
    </section>
  );
}

function GeneratorWindow() {
  const cases = [
    {
      id: "TC-01",
      p: "P0",
      title: "Request OTP with a valid email",
      steps: 3,
      expected: "OTP sent, 5-min countdown",
    },
    {
      id: "TC-02",
      p: "P1",
      title: "Reject an invalid email format",
      steps: 3,
      expected: "Inline error, no OTP",
    },
    {
      id: "TC-03",
      p: "P2",
      title: "Resend is rate-limited after 3 tries",
      steps: 4,
      expected: "Cooldown shown, send disabled",
    },
  ];
  return (
    <div className="mx-auto max-w-[920px] overflow-hidden rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-[12px] text-muted-invert">
          testcase-generator — reviewed set
        </span>
      </div>
      <div className="grid gap-3 p-5 sm:p-7">
        {cases.map((c) => (
          <div
            key={c.id}
            className="rounded-xl border border-white/10 p-4 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[13px] text-[#5ac8fa]">{c.id}</span>
              <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-[11px] font-medium text-white">
                {c.p}
              </span>
            </div>
            <p className="mt-1.5 text-[15px] text-ink-invert">{c.title}</p>
            <p className="mt-1 font-mono text-[12px] text-muted-invert">
              Steps {c.steps} · Expected:{" "}
              <span className="text-[#6fd39a]">{c.expected}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
