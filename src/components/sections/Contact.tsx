"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeInView from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/utils";

type Status = "idle" | "loading" | "success";

const socials = [
  { label: "GitHub", href: "https://github.com/efekocagozz", meta: "github.com/efekocagozz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/efe-kocagoz-73995524b/", meta: "linkedin.com/in/efe-kocagoz" },
  { label: "Email", href: "mailto:kocagozefe@gmail.com", meta: "kocagozefe@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xbdvpoga", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("idle");
        alert("Something went wrong. Please email me directly at kocagozefe@gmail.com");
      }
    } catch {
      setStatus("idle");
      alert("Something went wrong. Please email me directly at kocagozefe@gmail.com");
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-white/[0.10] py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors duration-200";

  return (
    <section
      id={SECTION_IDS.contact}
      className="section-padding max-w-[1200px] mx-auto"
      aria-label="Contact"
    >
      {/* Section label */}
      <FadeInView className="flex items-center gap-4 mb-12">
        <span className="section-label">05 — Contact</span>
        <div className="flex-1 h-px bg-white/[0.07]" aria-hidden="true" />
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">
        {/* Left — heading + social links */}
        <FadeInView>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed mb-10 max-w-sm">
            Open to internships, junior backend roles, and interesting
            collaborations. Based in Haarlem, Netherlands — happy to work
            remotely or on-site.
          </p>

          {/* Social links */}
          <ul className="divide-y divide-white/[0.06]">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center justify-between py-4 group hover:text-white transition-colors duration-150"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{s.label}</p>
                    <p className="text-xs text-zinc-600 mt-0.5">{s.meta}</p>
                  </div>
                  <span
                    className="text-zinc-700 group-hover:text-white transition-colors duration-150 text-sm"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </FadeInView>

        {/* Right — form */}
        <FadeInView direction="left" delay={0.1}>
          <form onSubmit={onSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="section-label block mb-2">Name</label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={onChange}
                  placeholder="Your name"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="email" className="section-label block mb-2">Email</label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={onChange}
                  placeholder="your@email.com"
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="section-label block mb-2">Message</label>
              <textarea
                id="message" name="message" required rows={5}
                value={form.message} onChange={onChange}
                placeholder="What would you like to discuss?"
                className={`${inputCls} resize-none`}
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status !== "idle"}
                className="px-5 py-2.5 rounded bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "✓ Sent" : "Send Message"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-zinc-500"
                >
                  I&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
            </div>
          </form>
        </FadeInView>
      </div>
    </section>
  );
}
