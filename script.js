(function () {
    var body = document.getElementById("terminal-body");
    var termEl = document.getElementById("terminal-boot");
    if (!body || !termEl) return;

    var BOOT_LINES = [
        { type: "dim", text: "\u00a0\u00a0> portfolio@1.0.0 dev" },
        { type: "blank" },
        { type: "info", text: "  Chargement des modules..." },
        { type: "success", text: "  [OK] HTML5 \u00b7 CSS3 \u00b7 JavaScript" },
        { type: "success", text: "  [OK] Bootstrap 5 \u00b7 Font Awesome 7" },
        { type: "blank" },
        { type: "info", text: "  R\u00e9cup\u00e9ration des comp\u00e9tences et des outils..." },
        { type: "success", text: "  [OK] HTML \u00b7 CSS \u00b7 JavaScript \u00b7 Bootstrap \u00b7 TailwindCSS \u00b7 Next.js \u00b7 Tauri" },
        { type: "success", text: "  [OK] VS Code \u00b7 DDEV \u00b7 GitHub \u00b7 Claude Code" },
        { type: "blank" },
        { type: "info", text: "  R\u00e9cup\u00e9ration des projets..." },
        { type: "success", text: "  [OK] flavortown-github-exporter" },
        { type: "success", text: "  [OK] NxtAIGen" },
        { type: "success", text: "  [OK] NxtGit" },
        { type: "success", text: "  [OK] NxtAI Card" },
        { type: "success", text: "  [OK] NxtUpdate" },
        { type: "blank" },
        { type: "progress" },
        { type: "blank" },
        {
            type: "success",
            text: "  [OK] Interface construite !",
        },
        { type: "ascii-banner" },
        { type: "blank" },
        { type: "url", text: "  \u279C  Local:    http://127.0.0.1/" },
        { type: "url", text: "  \u279C  Network:  https://theo.nxtaigen.com/" },
        { type: "blank" },
    ];

    var DELAYS = [
        120, 150, 700, 380, 380, 150, 700, 380, 380, 150, 700, 380, 380, 380, 380, 380, 150, 0, 150,
        550, 200, 0, 150, 350, 120, 150,
    ];

    function span(cls, txt) {
        var s = document.createElement("span");
        s.className = cls;
        if (txt !== undefined) s.textContent = txt;
        return s;
    }

    function makePromptLine(withCursor) {
        var d = document.createElement("div");
        d.className = "term-prompt-line";
        d.appendChild(span("term-user", "theo"));
        d.appendChild(span("term-at", "@"));
        d.appendChild(span("term-host", "portfolio"));
        d.appendChild(span("term-sep", " ~ % "));
        if (withCursor) {
            d.appendChild(span("term-cursor-inline", "\u2588"));
        } else {
            var cmdEl = span("term-cmd-text", "");
            cmdEl.id = "term-cmd-text";
            d.appendChild(cmdEl);
            var cur = span("term-cursor-inline", "\u2588");
            cur.id = "term-cmd-cursor";
            d.appendChild(cur);
        }
        return d;
    }

    function typeCommand(cb) {
        var line = makePromptLine(false);
        body.appendChild(line);
        var cmdEl = document.getElementById("term-cmd-text");
        var cursor = document.getElementById("term-cmd-cursor");
        var cmd = "npm run dev";
        var i = 0;
        function tick() {
            cmdEl.textContent = cmd.slice(0, i);
            i++;
            if (i <= cmd.length) {
                setTimeout(tick, 65 + Math.random() * 45);
            } else {
                cursor.style.display = "none";
                setTimeout(cb, 200);
            }
        }
        setTimeout(tick, 300);
    }

    function animateProgress(el, cb) {
        var BAR_LEN = 20;
        var step = 0;
        function update() {
            var filled = "\u2588".repeat(step);
            var empty = "\u2591".repeat(BAR_LEN - step);
            var pct = Math.round((step / BAR_LEN) * 100);
            el.textContent =
                "  Compilation... [" + filled + empty + "] " + pct + "%";
            if (step < BAR_LEN) {
                step++;
                setTimeout(update, 55 + Math.random() * 35);
            } else {
                setTimeout(cb, 250);
            }
        }
        update();
    }

    function animateWelcomeBanner(container, cb) {
        var ROWS = [
            "  ****   ***  ***** *   * *   * ***** *   * *   * *****",
            "  *   *   *   *     **  * *   * *     **  * *   * *    ",
            "  *   *   *   ****  * * * *   * ****  * * * *   * **** ",
            "  ****    *   *     *  **  * *  *     *  ** *   * *    ",
            "  *   *   *   *     *   *  * *  *     *   * *   * *    ",
            "  *   *   *   *     *   *   *   *     *   * *   * *    ",
            "  ****   ***  ***** *   *   *   ***** *   *  ***  *****"
        ];
        var rowIdx = 0;
        function printRow() {
            if (rowIdx >= ROWS.length) {
                setTimeout(cb, 150);
                return;
            }
            var line = document.createElement("div");
            line.className = "term-banner-line";
            container.appendChild(line);
            var text = ROWS[rowIdx];
            var charIdx = 0;
            function printChar() {
                line.textContent = text.slice(0, charIdx);
                charIdx++;
                if (charIdx <= text.length) {
                    setTimeout(printChar, 4);
                } else {
                    rowIdx++;
                    setTimeout(printRow, 15);
                }
            }
            printChar();
        }
        printRow();
    }

    function showBootLines(cb) {
        var i = 0;
        function next() {
            if (i >= BOOT_LINES.length) {
                setTimeout(cb, 300);
                return;
            }
            var d = BOOT_LINES[i];
            var el = document.createElement("div");

            if (d.type === "blank") {
                el.className = "term-blank";
                body.appendChild(el);
                var w = DELAYS[i] !== undefined ? DELAYS[i] : 100;
                i++;
                setTimeout(next, w);
            } else if (d.type === "progress") {
                el.className = "term-boot-info";
                body.appendChild(el);
                i++;
                animateProgress(el, next);
            } else if (d.type === "ascii-banner") {
                body.appendChild(el);
                i++;
                animateWelcomeBanner(el, next);
            } else {
                if (d.type === "dim") el.className = "term-boot-dim";
                if (d.type === "info") el.className = "term-boot-info";
                if (d.type === "success") el.className = "term-boot-success";
                if (d.type === "url") el.className = "term-boot-url";
                el.textContent = d.text;
                body.appendChild(el);
                var wait = DELAYS[i] !== undefined ? DELAYS[i] : 200;
                i++;
                setTimeout(next, wait);
            }
        }
        next();
    }

    function showFinalPrompt(cb) {
        var line = makePromptLine(true);
        body.appendChild(line);
        setTimeout(cb, 1200);
    }

    function hideTerm() {
        termEl.classList.add("hide");
        termEl.addEventListener(
            "transitionend",
            function () {
                termEl.remove();
                startTypewriter();
            },
            { once: true },
        );
    }

    typeCommand(function () {
        showBootLines(function () {
            showFinalPrompt(hideTerm);
        });
    });
})();

function startTypewriter() {
    var el = document.getElementById("typewriter-text");
    var cursor = document.getElementById("typewriter-cursor");
    if (!el) return;
    if (cursor) cursor.classList.add("active");
    var text = "D\u00e9veloppeur Web";
    var i = 0;
    function tick() {
        el.textContent = text.slice(0, i);
        i++;
        if (i <= text.length) {
            setTimeout(tick, 85 + Math.random() * 45);
        }
    }
    tick();
}

function renderContribGraph(container, contributions, total) {
    var COLORS = ["#1a1918", "#0e4429", "#006d32", "#26a641", "#39d353"];
    var MONTHS = [
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Jun",
        "Jul",
        "Aoû",
        "Sep",
        "Oct",
        "Nov",
        "Déc",
    ];
    var DAY_LABELS = ["", "Lun", "", "Mer", "", "Ven", ""];

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
                (day.level > 0 ? " — " + day.level + " contribution(s)" : "");
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
        totalEl.textContent = sum + " contributions cette année";
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
            err.textContent = "Impossible de charger les contributions.";
            container.appendChild(err);
        });
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
