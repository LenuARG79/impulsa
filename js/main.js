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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto (enviar el formulario)
  
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    var scriptUrl = 'https://script.google.com/macros/s/AKfycbwfY8HQeL8NaZKsm1mEs49q8kgVtRXueX1v70z6c7wfzSNTQi_RQDqfA93EUNPg3JVE0A/exec'; // Asegúrate de usar la URL correcta
  
    var formData = {
      name: name,
      phone: phone,
      email: email,
      message: message
    };
  
    // Usar el método POST con los datos JSON correctamente formateados
    fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      alert('Formulario enviado con éxito.');
      document.getElementById('contactForm').reset(); // Resetear el formulario
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario.');
    });
  });
  