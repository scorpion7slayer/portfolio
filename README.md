# My Portfolio

This repository contains the source code for my personal portfolio website: [theo.nxtaigen.com](https://theo.nxtaigen.com/).

## What this site includes

The portfolio is a single-page website with:

- an intro section with a terminal-style landing animation
- a short "about me" section
- a skills and tools section
- a projects carousel
- a GitHub contributions section
- a contact form powered by Formspree

The goal is simple: present my work clearly and keep the site easy to maintain.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5 via CDN
- Font Awesome 7 via CDN

## A few implementation details

- Dark UI with a glassmorphism-inspired navbar
- Terminal boot screen and typewriter effect in the hero section
- Responsive layout for desktop and mobile
- Open Graph tags, `robots.txt`, and `sitemap.xml` for basic SEO
- Manual cache busting for local assets with `?v=...`

## Featured projects shown on the site

Some of the projects currently highlighted in the portfolio:

- Flavortown GitHub Exporter
- NxtAIGen
- NxtGit
- Nxt AI Card
- NxtUpdate

## Project structure

```text
index.html       Main single-page document
style.css        Custom styles
script.js        UI behavior and animations
assets/
  screenshots/   Project images and preview media
robots.txt       SEO
sitemap.xml      SEO
```

## Running it locally

There is nothing to build.

You can either open `index.html` directly in your browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Author

scorpion7slayer

- Portfolio: [theo.nxtaigen.com](https://theo.nxtaigen.com/)
- GitHub: [github.com/scorpion7slayer](https://github.com/scorpion7slayer)

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=cb3c5c7ece01&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)
