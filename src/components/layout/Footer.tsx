export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono text-xs text-zinc-600">
          © {year} Efe Kocagoz — Built with Next.js &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/efekocagozz" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/efe-kocagoz-73995524b/" },
            { label: "Email", href: "mailto:kocagozefe@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="font-mono text-xs text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
