# Théo — Portfolio

> **Online:** [theo.nxtaigen.com](https://theo.nxtaigen.com/)

## Why I Created This Site

I wanted a space that reflected me, not a pre-established template. The terminal startup animation came first: I spend most of my time in a terminal, so it made sense to start there. Everything else was built around this idea: the dark theme, the fixed-width font, the project cards styled like editor tabs.

## Content

| Section | Features |

|---|---|

| **Startup Animation** | Terminal startup sequence with a button to skip (Esc or click) |

| **About** | Short personal introduction in a mock terminal displaying `cat about.txt` |

| **Skills and Tools** | Badge Grid — HTML · CSS · JS · Bootstrap · Tailwind · Next.js · Tauri · VS Code · DDEV · GitHub · Claude Code |

| **Projects** | Project carousel with screenshots and links |

| **GitHub Contributions** | Live heatmap retrieved via the GitHub Contributions API |

| **Contact** | Formspree powered form |

The site is **bilingual (FR/EN)** — change the language in the navigation bar. Your preference is saved in `localStorage`. (English is not my native language, so there may be some errors)

## Featured Projects

- **[flavortown-github-exporter](https://github.com/scorpion7slayer/flavortown-github-exporter)** — Chrome and Firefox extension for submitting GitHub projects to Flavortown with one click

- **[NxtAIGen](https://github.com/scorpion7slayer/NxtAIGen)** — Multi-model AI chatbot (GPT, Claude, Mistral) from a single interface

- **[NxtGit](https://nxtgit.nxtaigen.com/)** — Lightweight GitHub client for macOS/Windows: cloning, committing, diffing — no browser required

- **[Nxt AI Card](https://nxtaicard.nxtaigen.com/)** — Dashboard comparing AI models: performance, price, and speed Real-time updates
- **[NxtUpdate](https://github.com/scorpion7slayer/NxtUpdate)** — Updates Homebrew, Node, Python, Rust, and macOS from a single terminal.

## Technology Stack

- **HTML5 · CSS3 · Pure JavaScript** — No dependencies, no compilation steps

- **Bootstrap 5** via CDN — Layout and utilities

- **Font Awesome 7** via CDN — Icons

- **Iosevka Charon Mono** — Single font

- **Formspree** — Contact form administration interface

- **DigitalOcean** — Hosting

## Main Features

- Terminal splash screen with character-by-character animation and the ability to skip characters

- Typewriter effect in the main section, which repeats when switching languages

- Responsive project carousel (1/2/3 cards depending on screen size)

- GitHub contribution heatmap with month and day labels that change according to language

- Glassmorphism navigation bar with blur and frosted glass effects

- Full keyboard navigation and ARIA tags

## Execution Local

No installation required.

```bash
# Option 1 — Direct opening
open index.html

# Option 2 — Local server
python3 -m http.server 8000
# then open http://localhost:8000
```

## File Structure

```
index.html Single-page document — all sections inline

style.css All custom styles (~1200 lines)

script.js Animations, i18n, GitHub contributions, carousel
assets/

screenshots/ Project images (WebP)

robots.txt SEO

sitemap.xml SEO
```

## Author

**Théo** (scorpion7slayer)

- Portfolio: [theo.nxtaigen.com](https://theo.nxtaigen.com/)

- GitHub: [github.com/scorpion7slayer](https://github.com/scorpion7slayer)

---

[![Sponsorship badge DigitalOcean](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=cb3c5c7ece01&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)
