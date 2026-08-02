# Portfolio Static Site

## Project Overview

Static portfolio website for Théo. Pure HTML + CSS + vanilla JavaScript — no build tools, no package manager, no bundler.

**Stack:** HTML5, CSS3, vanilla JS, Bootstrap 5 (CDN), Font Awesome 7 (CDN)
**Language:** French (`<html lang="fr">`)
**Hosting:** DigitalOcean, domain `theo.nxtaigen.com`

## File Structure

```
index.html       # Single-page app, all sections inline
style.css        # All styles (~860 lines)
script.js        # Boot animation, typewriter, GitHub contributions, UI logic
assets/
  screenshots/   # Project screenshots (WebP format preferred)
robots.txt       # SEO
sitemap.xml      # SEO
```

## Build / Dev / Lint Commands

There are **no build tools, linters, or test runners** in this project. To preview locally, open `index.html` directly or use a simple HTTP server:

If you don't open it, the user will do it themselves.

If you add linting in the future, consider:

- `npx htmlhint index.html` for HTML
- `npx stylelint "style.css"` for CSS
- `npx eslint script.js` for JavaScript

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<main>`, `<section>`, `<nav>`, `<footer>`)
- All interactive elements need `aria-label` attributes (especially links with icon-only content)
- Use `target="_blank"` with `rel` considerations for external links
- French content: labels, alt text, and user-facing strings are in French
- Keep Bootstrap utility classes inline — this project uses Bootstrap 5 via CDN
- Cache-bust local assets with query strings: `style.css?v=3`, `script.js?v=3`

### CSS

- All custom styles live in `style.css` — no inline styles in HTML
- Use CSS custom properties for the color palette (dark theme):
    - Background: `#1e1d1c`, `#252423`
    - Text: `#e5e4e2`
    - Accent: `#0d6efd` (Bootstrap primary)
- Glassmorphism pattern: `background: rgba(30,29,28,0.55)` + `backdrop-filter: blur(8px) saturate(120%)`
- Transitions use `ease` or `ease-out`, durations 150ms–300ms
- Use `!important` sparingly — only for overriding Bootstrap defaults
- Font: `"Iosevka Charon Mono", monospace` everywhere
- Group related rules with section comments: `/* Section Name */`

### JavaScript

- Vanilla JS only — no frameworks, no modules, no imports
- Wrap boot animation in an IIFE: `(function() { ... })();`
- Use `var` (ES5 style) consistently throughout `script.js` — do not mix `var`/`let`/`const`
- DOM access: `document.getElementById()`, `document.createElement()`
- Use `addEventListener` for events, prefer `{ once: true }` for one-shot listeners
- API calls use `fetch()` with `.then()/.catch()` chains (not async/await)
- No console.log in production code

### Naming Conventions

- CSS classes: lowercase with hyphens (`project-card`, `section-accueil`, `term-boot-info`)
- JS functions: camelCase (`startTypewriter`, `loadGithubContributions`, `renderContribGraph`)
- JS DOM element variables: descriptive (`body`, `termEl`, `backBtn`, `navbarCollapse`)
- HTML IDs: camelCase (`terminal-body`, `navbarContent`, `backToTop`)

### Accessibility

- Skip links for keyboard navigation (`Aller au contenu`, `Aller aux réseaux`)
- Focus outlines: `outline: 3px solid #ffc107; outline-offset: 2px`
- ARIA labels on icon-only links and buttons
- Meaningful `alt` text on all images

## Important Constraints

- **Do NOT add npm/package.json** unless explicitly requested — this is intentionally zero-dependency
- **Do NOT add build steps** — files are served as-is
- **Keep it vanilla** — no React, no TypeScript, no preprocessors
- Images should use **WebP format** for performance
- Bootstrap and Font Awesome load from CDN — do not download locally
- Commit messages are in French
- Version cache-busting is manual (`?v=N` in HTML)
