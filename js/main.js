function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    if (menu.style.left === '0px') {
        menu.style.left = '-100%';
        hamburger.classList.remove('active');
    } else {
        menu.style.left = '0';
        hamburger.classList.add('active');
    }
}

function closeMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    menu.style.left = '-100%';
    hamburger.classList.remove('active');
}

// Detectar el enlace activo
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll("a.menu-link");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});
