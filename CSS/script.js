let index = 0;

function mostrarImagen() {
    const imagenes = document.querySelector('.imagenes');
    const totalImagenes = imagenes.children.length;
    index = (index + 1) % totalImagenes;
    const desplazamiento = -index * 100;
    imagenes.style.transform = `translateX(${desplazamiento}%)`;
}

// Cambiar imagen cada 3 segundos
setInterval(mostrarImagen, 3000);