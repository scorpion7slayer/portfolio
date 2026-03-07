document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarContent");
    const togglerSpan = document.getElementById("navbar-toggler-icon");
    const footerYear = document.getElementById("copyright-year");

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

    /* scroll-to-top button */
    const backBtn = document.getElementById("backToTop");
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
