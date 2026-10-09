import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shield, c as Instagram, d as CodeXml, f as Cloud, i as ShoppingBag, l as Github, n as Workflow, o as Menu, s as Link2, t as X, u as Gauge } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C7O7Mese.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#expertise",
		label: "Expertise"
	},
	{
		href: "#stack",
		label: "Stack"
	},
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var expertise = [
	{
		icon: CodeXml,
		title: "Web Development",
		text: "Frontend and backend systems built to stay fast under real traffic."
	},
	{
		icon: ShoppingBag,
		title: "E-Commerce",
		text: "WooCommerce, Shopify, and custom stores designed around conversion."
	},
	{
		icon: Workflow,
		title: "Automation",
		text: "n8n, Zapier, and custom scripts that remove repetitive work."
	},
	{
		icon: Link2,
		title: "API Integration",
		text: "Platforms, microservices, and webhooks connected into one flow."
	},
	{
		icon: Gauge,
		title: "SEO & Growth",
		text: "Technical SEO and performance systems that actually move numbers."
	},
	{
		icon: Cloud,
		title: "Hosting & Deploy",
		text: "Cloud architecture, servers, and deployments that stay online."
	},
	{
		icon: Shield,
		title: "Security",
		text: "Hardening, access control, and performance under load."
	}
];
var groups = [
	{
		title: "Frontend",
		items: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"TypeScript",
			"React",
			"Next.js"
		]
	},
	{
		title: "Backend",
		items: [
			"PHP",
			"Python",
			"Node.js",
			"Express"
		]
	},
	{
		title: "Platforms",
		items: [
			"WordPress",
			"WooCommerce",
			"Elementor",
			"Shopify"
		]
	},
	{
		title: "Automation",
		items: [
			"n8n",
			"Zapier",
			"REST API",
			"Webhooks"
		]
	},
	{
		title: "Cloud",
		items: [
			"Cloudflare",
			"AWS",
			"Google Cloud",
			"DigitalOcean",
			"Vercel",
			"cPanel"
		]
	},
	{
		title: "Data",
		items: [
			"MySQL",
			"MariaDB",
			"PostgreSQL",
			"MongoDB"
		]
	},
	{
		title: "Infrastructure",
		items: [
			"Git",
			"GitHub",
			"Docker",
			"Linux"
		]
	}
];
var work = [
	"Large-scale web systems",
	"Business process automation",
	"API integrations across platforms",
	"Full e-commerce builds",
	"Hosting and deployment architecture",
	"SEO and performance systems",
	"Security and system hardening",
	"Custom tools for operations teams"
];
function Home() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl items-center justify-between px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "font-display text-sm font-bold tracking-[0.28em] text-primary",
						children: "SHADOW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden gap-7 md:flex",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "text-sm text-muted hover:text-fg",
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-11 place-items-center rounded-lg border border-border text-fg md:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					})
				]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "py-3 text-sm text-fg",
					onClick: () => setOpen(false),
					children: item.label
				}, item.href))
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "top",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto flex max-w-5xl flex-col items-center px-5 pb-20 pt-16 text-center md:pt-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mb-8 size-44",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-primary/30 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/shadow.jpg",
								alt: "SHADOW",
								className: "relative size-44 rounded-full border-2 border-primary object-cover object-top"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl font-extrabold tracking-[0.22em] text-fg md:text-7xl",
							children: "SHADOW"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-muted",
							children: "Full Stack Developer and Digital Solutions Engineer. I build systems, automations, and high-performance web applications that run a business — not just a page."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap justify-center gap-2",
							children: [
								"Full Stack",
								"Automation",
								"APIs",
								"Cloud",
								"E-Commerce"
							].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border bg-surface px-3 py-1 text-xs text-primary",
								children: tag
							}, tag))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.tiktok.com/@shadow1s10",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center gap-2 rounded-lg bg-surface px-4 text-sm font-semibold text-fg ring-1 ring-border hover:ring-primary",
									children: "TikTok"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.instagram.com/shadow1s10",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center gap-2 rounded-lg bg-surface px-4 text-sm font-semibold text-fg ring-1 ring-border hover:ring-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 16 }), "Instagram"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://github.com/shadow1s10",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center gap-2 rounded-lg bg-surface px-4 text-sm font-semibold text-fg ring-1 ring-border hover:ring-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 }), "GitHub"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "mt-8 inline-flex min-h-12 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-fg",
							children: "Start a project"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "mx-auto grid max-w-5xl gap-6 px-5 py-16 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-widest",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted",
							children: "I design and ship complete digital ecosystems: interfaces, backends, automation, APIs, hosting, and performance. From the first idea through deployment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted",
							children: "Businesses use this when they need the site, the store, and the operations behind it to work as one system."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "rounded-card border border-border bg-surface p-8 text-lg leading-relaxed text-fg",
						children: "I don’t just build websites. I build systems, automation, and infrastructure that run businesses."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "expertise",
					className: "mx-auto max-w-5xl px-5 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-widest",
						children: "Expertise"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: expertise.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-card border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "text-primary",
									size: 20
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-semibold",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: item.text
								})
							]
						}, item.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "stack",
					className: "mx-auto max-w-5xl px-5 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-widest",
						children: "Stack"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-col gap-6",
						children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
							children: group.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg",
								children: item
							}, item))
						})] }, group.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "work",
					className: "mx-auto max-w-5xl px-5 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-widest",
						children: "Selected work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 md:grid-cols-2",
						children: work.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-card border border-border bg-surface px-5 py-4 text-sm text-muted",
							children: line
						}, line))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "contact",
					className: "mx-auto max-w-xl px-5 pb-24 pt-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-widest",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "Open for freelance projects, collaborations, and system builds."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap justify-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.tiktok.com/@shadow1s10",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-fg",
									children: "TikTok"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.instagram.com/shadow1s10",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 items-center rounded-lg border border-border px-5 text-sm font-semibold text-fg",
									children: "Instagram"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://github.com/shadow1s10",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 items-center rounded-lg border border-border px-5 text-sm font-semibold text-fg",
									children: "GitHub"
								})
							]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { Home as component };
