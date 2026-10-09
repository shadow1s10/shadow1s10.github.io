import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const nav = [
  { href: "#about", label: "About" },
  { href: "#flow", label: "Automation" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const flow = [
  ["01", "Trigger", "Form, order, or webhook hits the system."],
  ["02", "Route", "n8n or a custom script decides the next step."],
  ["03", "Confirm", "Payment status is checked and locked in."],
  ["04", "Deliver", "Store, email, and the client update together."],
];

const expertise = [
  ["Web Development", "Frontend and backend, from the interface to the server."],
  ["E-Commerce", "WooCommerce, Shopify, and custom stores."],
  ["Automation", "n8n, Zapier, and scripts that remove repetitive work."],
  ["API Integration", "Microservices, REST, and webhooks between platforms."],
  ["SEO & Growth", "Technical SEO and performance systems."],
  ["Business Tools", "Dashboards built around the real workflow."],
  ["Hosting", "Deployment, servers, and cloud architecture."],
  ["Security", "Hardening and performance under real traffic."],
];

const work = [
  "Temporary email platforms that receive and show mail instantly.",
  "Full stores: catalog, checkout, shipping, and admin.",
  "Payment confirmation that updates the order without manual work.",
  "Automation between forms, email, WhatsApp, and inventory.",
  "Company sites and internal systems, deployed and hardened.",
];

const groups: { title: string; badges: [string, string][] }[] = [
  {
    title: "Frontend",
    badges: [
      ["HTML5", "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"],
      ["CSS3", "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"],
      ["JavaScript", "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"],
      ["TypeScript", "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"],
      ["React", "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"],
      ["Next.js", "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"],
    ],
  },
  {
    title: "Backend",
    badges: [
      ["PHP", "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"],
      ["Python", "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"],
      ["Node.js", "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"],
      ["Express", "https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"],
    ],
  },
  {
    title: "Platforms",
    badges: [
      ["WordPress", "https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white"],
      ["WooCommerce", "https://img.shields.io/badge/WooCommerce-96588A?style=for-the-badge&logo=woocommerce&logoColor=white"],
      ["Elementor", "https://img.shields.io/badge/Elementor-92003B?style=for-the-badge&logo=elementor&logoColor=white"],
      ["Shopify", "https://img.shields.io/badge/Shopify-96BF48?style=for-the-badge&logo=shopify&logoColor=white"],
    ],
  },
  {
    title: "Automation",
    badges: [
      ["n8n", "https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge"],
      ["Zapier", "https://img.shields.io/badge/Zapier-FF4A00?style=for-the-badge&logo=zapier&logoColor=white"],
      ["REST API", "https://img.shields.io/badge/REST%20API-02569B?style=for-the-badge"],
      ["Webhooks", "https://img.shields.io/badge/Webhooks-1E1E1E?style=for-the-badge"],
    ],
  },
  {
    title: "Hosting & Cloud",
    badges: [
      ["Cloudflare", "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"],
      ["AWS", "https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"],
      ["Google Cloud", "https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white"],
      ["DigitalOcean", "https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white"],
      ["Vercel", "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"],
      ["cPanel", "https://img.shields.io/badge/cPanel-FF6C2C?style=for-the-badge&logo=cpanel&logoColor=white"],
    ],
  },
  {
    title: "Databases",
    badges: [
      ["MySQL", "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"],
      ["MariaDB", "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"],
      ["PostgreSQL", "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"],
      ["MongoDB", "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"],
    ],
  },
  {
    title: "Infrastructure",
    badges: [
      ["Git", "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"],
      ["Docker", "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"],
      ["Linux", "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"],
    ],
  },
];

function Social() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a href="https://www.tiktok.com/@shadow1s10" target="_blank" rel="noreferrer">
        <img alt="TikTok" src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white" />
      </a>
      <a href="https://www.instagram.com/shadow1s10" target="_blank" rel="noreferrer">
        <img alt="Instagram" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
      </a>
    </div>
  );
}

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,26,60,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,60,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          transform: "perspective(600px) rotateX(62deg) translateY(-18%)",
          transformOrigin: "center top",
        }}
      />

      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-sm font-bold tracking-[0.28em] text-primary">SHADOW</a>
          <nav className="hidden gap-7 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted hover:text-fg">{item.label}</a>
            ))}
          </nav>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-lg border border-border md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open ? (
          <nav className="flex flex-col border-t border-border px-5 py-2 md:hidden">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="py-3 text-sm" onClick={() => setOpen(false)}>{item.label}</a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top" className="relative">
        <section className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="order-2 md:order-1">
            <p className="text-sm font-semibold text-primary">Systems · Stores · Automation</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold tracking-[0.16em] md:text-6xl">SHADOW</h1>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Full Stack Developer and Digital Solutions Engineer. Large-scale systems, payment confirmation,
              and automation that keeps a business running after launch.
            </p>
            <div className="mt-7"><Social /></div>
          </div>

          <div className="order-1 flex justify-center md:order-2" style={{ perspective: "900px" }}>
            <div
              className="relative"
              style={{ transform: "rotateY(-18deg) rotateX(8deg)", transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-6 rounded-full border border-primary/40" style={{ transform: "translateZ(-30px)" }} />
              <img
                src="/shadow.jpg"
                alt="SHADOW"
                className="relative size-56 rounded-3xl border border-primary object-cover object-top shadow-[0_30px_60px_rgba(255,26,60,0.28)] md:size-72"
              />
              <div
                className="absolute -bottom-4 left-6 right-6 h-8 rounded-full bg-primary/30 blur-xl"
                style={{ transform: "translateZ(-40px) rotateX(70deg)" }}
              />
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-5xl gap-6 px-5 py-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-widest">About</h2>
            <p className="mt-4 leading-relaxed text-muted">
              I design complete digital ecosystems: backend, frontend, automation, APIs, hosting, and performance.
              From the first idea through deployment.
            </p>
          </div>
          <blockquote className="rounded-card border border-border bg-surface/90 p-8 text-lg leading-relaxed">
            I don’t just build websites. I build systems, automation, and infrastructure that run businesses.
          </blockquote>
        </section>

        <section id="flow" className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-2xl tracking-widest">Automation</h2>
          <p className="mt-3 max-w-xl text-sm text-muted">One pipeline. The order does not wait for someone to copy it by hand.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4" style={{ perspective: "1000px" }}>
            {flow.map(([num, title, text], i) => (
              <article
                key={num}
                className="rounded-card border border-border bg-surface p-5 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                style={{ transform: `rotateX(8deg) translateY(${i % 2 ? "12px" : "0"})` }}
              >
                <p className="font-display text-xs text-primary">{num}</p>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-2xl tracking-widest">Expertise</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {expertise.map(([title, text]) => (
              <article key={title} className="rounded-card border border-border bg-surface/90 p-5">
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-2xl tracking-widest">Stack</h2>
          <div className="mt-8 flex flex-col gap-8">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.badges.map(([name, src]) => (
                    <img key={name} alt={name} src={src} className="h-8" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-2xl tracking-widest">Work</h2>
          <ul className="mt-8 grid gap-3">
            {work.map((line) => (
              <li key={line} className="rounded-card border border-border bg-surface/90 px-5 py-4 text-sm text-muted">{line}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mx-auto max-w-xl px-5 pb-24 pt-8 text-center">
          <h2 className="font-display text-2xl tracking-widest">Contact</h2>
          <p className="mt-4 text-muted">Open for freelance projects, collaborations, and system development.</p>
          <div className="mt-6"><Social /></div>
        </section>
      </main>
    </div>
  );
}
