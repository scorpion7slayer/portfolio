// Changement d'icône plus/moins selon l'état du menu
document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarContent");
    const togglerIcon = document.querySelector("#navbar-toggler-icon i");
    const togglerSpan = document.getElementById("navbar-toggler-icon");

    if (!navbarCollapse || !togglerIcon || !togglerSpan) return;

    navbarCollapse.addEventListener("shown.bs.collapse", function () {
        togglerIcon.classList.remove("fa-plus");
        togglerIcon.classList.add("fa-minus");
        // ajout de la classe pour déclencher l'animation CSS
        togglerSpan.classList.add("open");
    });
    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
        togglerIcon.classList.remove("fa-minus");
        togglerIcon.classList.add("fa-plus");
        togglerSpan.classList.remove("open");
    });
});
