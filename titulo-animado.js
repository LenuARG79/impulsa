document.addEventListener("DOMContentLoaded", function() {
    let tituloOriginal = document.title;
    let titulo = tituloOriginal + " ";
    let index = 0;

    function desplazarTitulo() {
        document.title = titulo.substring(index) + titulo.substring(0, index);
        index = (index + 1) % titulo.length;
        setTimeout(desplazarTitulo, 300); // Ajusta la velocidad de desplazamiento (300 ms)
    }

    desplazarTitulo();
});
