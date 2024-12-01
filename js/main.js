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

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Evita la redirección inmediata

        const targetURL = this.href; // Obtén la URL del enlace
        
        // Espera que la animación del subrayado se complete (ajusta el tiempo si es necesario)
        setTimeout(() => {
            window.location.href = targetURL; // Redirige a la página deseada
        }, 500); // Duración de la animación del subrayado
    });
});

document.querySelector('.whatsapp-tab').addEventListener('click', function () {
    alert('Abriendo WhatsApp...'); // Aquí puedes integrar un enlace o acción personalizada.
    // Ejemplo: Redirigir a un enlace de WhatsApp
    window.open('https://wa.me/1234567890', '_blank'); // Reemplaza el número con tu número de WhatsApp.
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-herramientas");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.1 // 10% del elemento visible para activarse
    });

    cards.forEach(card => observer.observe(card));
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxcRHgL9-eVkG9xqD3zbkGqL-2ssdTY7GQXWXRu-YJs7SOj_af9BHyJy0uBLH_zHjty5Q/exec", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            alert("Tu mensaje se envió con éxito.");
            form.reset();
        } else {
            alert("Ocurrió un error. Intenta nuevamente.");
        }
    } catch (error) {
        alert("Error al enviar el formulario. Revisa tu conexión.");
    }
});