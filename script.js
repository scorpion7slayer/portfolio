window.currentLang = localStorage.getItem("portfolio-lang") || "fr";

var TRANSLATIONS = {
    fr: {
        "nav-home": "Accueil",
        "nav-about": "\u00c0 propos",
        "nav-skills": "Comp\u00e9tences et Outils",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "hero-lead": "D\u00e9veloppeur web, motiv\u00e9 et curieux.",
        "hero-btn-projects": "Voir mes projets",
        "hero-btn-contact": "Me contacter",
        "about-output":
            "Bonjour\u00a0! Je suis Th\u00e9o, d\u00e9veloppeur web de 16\u00a0ans bas\u00e9 en Belgique. Je code depuis un an et j\u2019ai lanc\u00e9 plusieurs projets open-source sous l\u2019organisation NxtAIGen. J\u2019aime construire des outils concrets \u2014 un client GitHub, un chatbot IA multi-mod\u00e8les, une extension navigateur. Ce qui me passionne vraiment, c\u2019est l\u2019IA\u00a0: comprendre comment elle fonctionne et l\u2019utiliser pour construire des choses utiles.",
        "skills-title": "Comp\u00e9tences",
        "tools-title": "Outils de d\u00e9veloppement",
        "projects-title": "Projets",
        "proj-1-desc":
            "Extension Chrome & Firefox pour exporter vos projets GitHub vers Flavortown en un clic.",
        "proj-2-desc":
            "Chatbot web multi-mod\u00e8les\u00a0: GPT, Claude, Mistral.",
        "proj-3-desc":
            "Client GitHub l\u00e9ger pour macOS/Windows\u00a0: clone, commit, diff \u2014 sans navigateur.",
        "proj-5-desc":
            "Dashboard comparant les mod\u00e8les IA\u00a0: benchmarks, prix et vitesse en temps r\u00e9el.",
        "proj-6-desc":
            "Marketplace web avec cat\u00e9gories, articles tendances et derni\u00e8res annonces.",
        "proj-7-desc":
            "Outil en ligne de commande pour mettre \u00e0 jour tous tes paquets en une seule fois.",
        "proj-8-desc":
            "Site web pixel-art pour un serveur Minecraft Java\u00a0: pr\u00e9sentation, statut et acc\u00e8s Discord.",
        "contribs-title": "Contributions GitHub",
        "contact-title": "Contact",
        "contact-name": "Votre nom\u00a0:",
        "contact-email": "Votre email\u00a0:",
        "contact-message": "Votre message\u00a0:",
        "contact-submit": "Envoyer",
        "footer-rights": "Tous droits r\u00e9serv\u00e9s.",
        "modal-browser-title": "Choisissez votre navigateur",
        "modal-nxtaigen-unavailable": "Site web indisponible pour le moment",
        "modal-nxtupdate-title": "Installer NxtUpdate",
        "modal-step1": "1. Installer Bun",
        "modal-step2": "2. Installer NxtUpdate",
        "install-or": "ou",
        "typewriter-text": "D\u00e9veloppeur Web",
        "contribs-year": "contributions cette ann\u00e9e",
        "contribs-loading": "Chargement...",
        "contribs-error": "Impossible de charger les contributions.",
        "contrib-months": [
            "Jan",
            "F\u00e9v",
            "Mar",
            "Avr",
            "Mai",
            "Jun",
            "Jul",
            "Ao\u00fb",
            "Sep",
            "Oct",
            "Nov",
            "D\u00e9c",
        ],
        "contrib-days": ["", "Lun", "", "Mer", "", "Ven", ""],
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills & Tools",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-lead": "Web developer, motivated and curious.",
        "hero-btn-projects": "View my projects",
        "hero-btn-contact": "Contact me",
        "about-output":
            "Hey! I\u2019m Th\u00e9o, a 16-year-old web developer based in Belgium. I\u2019ve been coding for a year and shipped several open-source projects under the NxtAIGen org. I like building concrete tools \u2014 a GitHub client, a multi-model AI chatbot, a browser extension. What really drives me is AI: understanding how it works and using it to build things that matter.",
        "skills-title": "Skills",
        "tools-title": "Dev Tools",
        "projects-title": "Projects",
        "proj-1-desc":
            "Chrome & Firefox extension to submit your GitHub projects to Flavortown in one click.",
        "proj-2-desc": "Multi-model web chatbot: GPT, Claude, Mistral.",
        "proj-3-desc":
            "Lightweight GitHub client for macOS/Windows: clone, commit, diff \u2014 no browser needed.",
        "proj-5-desc":
            "Dashboard comparing AI models: benchmarks, pricing and speed in real time.",
        "proj-6-desc":
            "Web marketplace with categories, trending items and latest listings.",
        "proj-7-desc": "Command-line tool to update all your packages at once.",
        "proj-8-desc":
            "Pixel-art website for a Minecraft Java server: presentation, status and Discord access.",
        "contribs-title": "GitHub Contributions",
        "contact-title": "Contact",
        "contact-name": "Your name:",
        "contact-email": "Your email:",
        "contact-message": "Your message:",
        "contact-submit": "Send",
        "footer-rights": "All rights reserved.",
        "modal-browser-title": "Choose your browser",
        "modal-nxtaigen-unavailable": "Website unavailable at the moment",
        "modal-nxtupdate-title": "Install NxtUpdate",
        "modal-step1": "1. Install Bun",
        "modal-step2": "2. Install NxtUpdate",
        "install-or": "or",
        "typewriter-text": "Web Developer",
        "contribs-year": "contributions this year",
        "contribs-loading": "Loading...",
        "contribs-error": "Unable to load contributions.",
        "contrib-months": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        "contrib-days": ["", "Mon", "", "Wed", "", "Fri", ""],
    },
};

var typewriterVersion = 0;

function startTypewriter() {
    var el = document.getElementById("typewriter-text");
    var cursor = document.getElementById("typewriter-cursor");
    if (!el) return;
    window.typewriterDone = true;
    if (cursor) cursor.classList.add("active");
    var lang = window.currentLang || "fr";
    var text = TRANSLATIONS[lang]["typewriter-text"];
    el.textContent = "";
    var version = ++typewriterVersion;
    var i = 0;

    function typeNext() {
        if (version !== typewriterVersion) return;
        el.textContent = text.slice(0, i);
        if (i < text.length) {
            i++;
            setTimeout(typeNext, 85 + Math.random() * 45);
        } else {
            setTimeout(deleteNext, 6000 + Math.random() * 3500);
        }
    }

    function deleteNext() {
        if (version !== typewriterVersion) return;
        if (i > 0) {
            i--;
            el.textContent = text.slice(0, i);
            setTimeout(deleteNext, 45 + Math.random() * 35);
        } else {
            setTimeout(typeNext, 700 + Math.random() * 500);
        }
    }

    typeNext();
}

function renderContribGraph(container, contributions, total) {
    var lang = window.currentLang || "fr";
    var COLORS = ["#1a1918", "#0e4429", "#006d32", "#26a641", "#39d353"];
    var MONTHS = TRANSLATIONS[lang]["contrib-months"];
    var DAY_LABELS = TRANSLATIONS[lang]["contrib-days"];

    // Map date -> level
    var map = {};
    contributions.forEach(function (c) {
        map[c.date] = c.level;
    });

    // Start from the Sunday 52 full weeks ago
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var start = new Date(today);
    start.setDate(start.getDate() - 364 - start.getDay());

    // Build weeks
    var weeks = [];
    var cur = new Date(start);
    while (cur <= today) {
        var week = [];
        for (var d = 0; d < 7; d++) {
            var ds = cur.toISOString().slice(0, 10);
            week.push({
                date: ds,
                level: map[ds] !== undefined ? map[ds] : 0,
                future: cur > today,
            });
            cur.setDate(cur.getDate() + 1);
        }
        weeks.push(week);
    }

    var wrapper = document.createElement("div");
    wrapper.className = "contrib-wrapper";

    var inner = document.createElement("div");
    inner.className = "contrib-inner";

    // Month labels row
    var monthRow = document.createElement("div");
    monthRow.className = "contrib-months";
    var lastMonth = -1;
    weeks.forEach(function (week) {
        var sp = document.createElement("span");
        var m = new Date(week[0].date).getMonth();
        if (m !== lastMonth) {
            sp.textContent = MONTHS[m];
            lastMonth = m;
        }
        monthRow.appendChild(sp);
    });
    inner.appendChild(monthRow);

    // Grid row (day labels + grid)
    var gridRow = document.createElement("div");
    gridRow.className = "contrib-grid-row";

    var dayCol = document.createElement("div");
    dayCol.className = "contrib-day-labels";
    DAY_LABELS.forEach(function (lbl) {
        var sp = document.createElement("span");
        sp.textContent = lbl;
        dayCol.appendChild(sp);
    });
    gridRow.appendChild(dayCol);

    var grid = document.createElement("div");
    grid.className = "contrib-grid";
    weeks.forEach(function (week) {
        var col = document.createElement("div");
        col.className = "contrib-col";
        week.forEach(function (day) {
            var cell = document.createElement("div");
            cell.className = "contrib-cell";
            cell.style.background = day.future
                ? "transparent"
                : COLORS[day.level];
            cell.title =
                day.date +
                (day.level > 0
                    ? " \u2014 " + day.level + " contribution(s)"
                    : "");
            col.appendChild(cell);
        });
        grid.appendChild(col);
    });
    gridRow.appendChild(grid);
    inner.appendChild(gridRow);
    wrapper.appendChild(inner);

    while (container.firstChild) container.removeChild(container.firstChild);
    container.appendChild(wrapper);

    // Total
    var totalEl = document.getElementById("contributions-total");
    if (totalEl && total) {
        var sum = Object.values(total).reduce(function (a, b) {
            return a + b;
        }, 0);
        window.contribSum = sum;
        totalEl.textContent = sum + " " + TRANSLATIONS[lang]["contribs-year"];
    }
}

function loadGithubContributions() {
    var container = document.getElementById("contributions-graph");
    if (!container) return;

    fetch(
        "https://github-contributions-api.jogruber.de/v4/scorpion7slayer?y=last",
    )
        .then(function (r) {
            return r.json();
        })
        .then(function (data) {
            window.cachedContribData = data;
            renderContribGraph(
                container,
                data.contributions || [],
                data.total || {},
            );
        })
        .catch(function () {
            while (container.firstChild)
                container.removeChild(container.firstChild);
            var err = document.createElement("p");
            err.className = "contrib-loading";
            err.textContent =
                TRANSLATIONS[window.currentLang || "fr"]["contribs-error"];
            container.appendChild(err);
        });
}

function scrambleElement(el, finalText, duration) {
    var chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@&%?!";
    var interval = 30;
    var steps = Math.ceil(duration / interval);
    var step = 0;
    var timer = setInterval(function () {
        step++;
        var progress = step / steps;
        var revealCount = Math.floor(progress * finalText.length);
        var output = "";
        for (var i = 0; i < finalText.length; i++) {
            if (i < revealCount) {
                output += finalText[i];
            } else if (finalText[i] === " " || finalText[i] === "\u00a0") {
                output += finalText[i];
            } else {
                output += chars[Math.floor(Math.random() * chars.length)];
            }
        }
        el.textContent = output;
        if (step >= steps) {
            clearInterval(timer);
            el.textContent = finalText;
        }
    }, interval);
}

function applyTranslations(lang, withAnimation) {
    if (!TRANSLATIONS[lang]) return;
    var t = TRANSLATIONS[lang];

    document.documentElement.lang = lang;
    var frEl = document.getElementById("lang-fr");
    var enEl = document.getElementById("lang-en");
    if (frEl) frEl.classList.toggle("active", lang === "fr");
    if (enEl) enEl.classList.toggle("active", lang === "en");
    localStorage.setItem("portfolio-lang", lang);
    window.currentLang = lang;

    var els = document.querySelectorAll("[data-i18n]");
    var duration = withAnimation ? 500 : 0;

    for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute("data-i18n");
        if (typeof t[key] !== "string") continue;
        if (withAnimation) {
            scrambleElement(els[i], t[key], duration);
        } else {
            els[i].textContent = t[key];
        }
    }

    var delay = withAnimation ? 520 : 0;
    setTimeout(function () {
        if (window.typewriterDone) startTypewriter();
        if (window.cachedContribData) {
            var container = document.getElementById("contributions-graph");
            if (container) {
                renderContribGraph(
                    container,
                    window.cachedContribData.contributions || [],
                    window.cachedContribData.total || {},
                );
            }
        }
    }, delay);
}

document.addEventListener("DOMContentLoaded", function () {
    var navbarCollapse = document.getElementById("navbarContent");
    var togglerSpan = document.getElementById("navbar-toggler-icon");
    var footerYear = document.getElementById("copyright-year");

    if (!navbarCollapse || !togglerSpan) return;

    navbarCollapse.addEventListener("shown.bs.collapse", function () {
        togglerSpan.classList.add("open");
    });
    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
        togglerSpan.classList.remove("open");
    });

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // Language init
    var savedLang = localStorage.getItem("portfolio-lang") || "fr";
    applyTranslations(savedLang);
    setTimeout(startTypewriter, 0);

    // Language toggle
    var langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.addEventListener("click", function () {
            var newLang = window.currentLang === "fr" ? "en" : "fr";
            applyTranslations(newLang, true);
        });
    }

    loadGithubContributions();

    // Carrousel projets
    (function () {
        var track = document.getElementById("projectsTrack");
        var prevBtn = document.getElementById("projectsPrev");
        var nextBtn = document.getElementById("projectsNext");
        var dotsContainer = document.getElementById("projectsDots");
        if (!track || !prevBtn || !nextBtn) return;

        var cards = track.querySelectorAll(".project-card");
        var currentIndex = 0;

        function getVisibleCount() {
            if (window.innerWidth < 576) return 1;
            if (window.innerWidth < 992) return 2;
            return 3;
        }

        function getMaxIndex() {
            return Math.max(0, cards.length - getVisibleCount());
        }

        function rebuildDots(maxIndex) {
            if (!dotsContainer) return;
            var dotCount = maxIndex + 1;
            if (dotsContainer.children.length !== dotCount) {
                while (dotsContainer.firstChild) {
                    dotsContainer.removeChild(dotsContainer.firstChild);
                }
                for (var i = 0; i <= maxIndex; i++) {
                    var dot = document.createElement("button");
                    dot.className = "carousel-dot";
                    dot.setAttribute("aria-label", "Position " + (i + 1));
                    (function (idx) {
                        dot.addEventListener("click", function () {
                            goTo(idx);
                        });
                    })(i);
                    dotsContainer.appendChild(dot);
                }
            }
        }

        function updateDots() {
            if (!dotsContainer) return;
            var dots = dotsContainer.querySelectorAll(".carousel-dot");
            for (var j = 0; j < dots.length; j++) {
                dots[j].classList.toggle("active", j === currentIndex);
            }
        }

        function goTo(index) {
            var maxIndex = getMaxIndex();
            rebuildDots(maxIndex);
            currentIndex = Math.max(0, Math.min(index, maxIndex));
            var cardEl = track.querySelector(".project-card");
            var gap =
                parseFloat(window.getComputedStyle(track).columnGap) || 24;
            var offset = cardEl ? currentIndex * (cardEl.offsetWidth + gap) : 0;
            track.style.transform = "translateX(-" + offset + "px)";
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
            updateDots();
        }

        prevBtn.addEventListener("click", function () {
            goTo(currentIndex - 1);
        });
        nextBtn.addEventListener("click", function () {
            goTo(currentIndex + 1);
        });

        var resizeTimer;
        window.addEventListener("resize", function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                goTo(Math.min(currentIndex, getMaxIndex()));
            }, 150);
        });

        goTo(0);
    })();

    // Boutons copier dans les modals
    document.addEventListener("click", function (e) {
        var btn = e.target.closest(".copy-btn");
        if (!btn) return;
        var text = btn.getAttribute("data-copy");
        if (!text) return;
        navigator.clipboard.writeText(text).then(function () {
            var icon = btn.querySelector("i");
            if (icon) {
                icon.className = "fa-solid fa-check";
            }
            btn.classList.add("copied");
            setTimeout(function () {
                if (icon) icon.className = "fa-regular fa-copy";
                btn.classList.remove("copied");
            }, 1800);
        });
    });

    var backBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            backBtn.classList.add("show");
        } else {
            backBtn.classList.remove("show");
        }
    });
    if (backBtn) {
        backBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
