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

const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Mostrar mensaje de carga antes de enviar
    Swal.fire({
      title: 'Enviando...',
      text: 'Por favor, espera un momento.',
      icon: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    // Enviar el formulario mediante AJAX
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
      .then(response => {
        if (response.ok) {
          // Cerrar el mensaje de carga y mostrar éxito
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
            text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
          });

          // Limpiar el formulario
          form.reset();
        } else {
          // Mostrar mensaje de error
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
          });
        }
      })
      .catch(() => {
        // Mostrar mensaje de error en caso de fallo en el fetch
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
        });
      });
  });