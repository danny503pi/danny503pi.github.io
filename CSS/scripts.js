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

// Constructor de la clase App
function App() {}

// Ejecutado cuando la ventana se carga
window.onload = function() {
    var app = new App();
    window.app = app;
}

// Método para manejar el clic en los botones del carrusel
App.prototype.processingButtom = function(event) {
    const btn = event.currentTarget;
    const carouselList = btn.parentNode;
    const track = carouselList.querySelector('#track');
    const carruseel = track.querySelectorAll('.carruseel');

    // Calcular el ancho de cada carrusel
    const carruseelWidth = carruseel[0].offsetWidth;
    const trackWidth = track.scrollWidth; // Total del ancho del track
    const listWidth = carouselList.offsetWidth; // Ancho visible del carrusel

    // Obtener la posición actual del track
    let leftPosition = parseFloat(track.style.left) || 0; // Maneja valores vacíos

    // Determinar qué acción tomar según el botón
    if (btn.dataset.buttom === "buttom-prev") {
        prevAction(leftPosition, carruseelWidth, track);
    } else if (btn.dataset.buttom === "buttom-next") {
        nextAction(leftPosition, trackWidth, listWidth, carruseelWidth, track);
    }
}
// Función para mover el carrusel hacia atrás
let prevAction = (leftPosition, carruseelWidth, track) => {
    // Evitar mover más allá del límite izquierdo
    if (leftPosition < 0) {
        track.style.left = `${Math.min(leftPosition + carruseelWidth, 0)}px`;
    }
}

// Función para mover el carrusel hacia adelante
let nextAction = (leftPosition, trackWidth, listWidth, carruseelWidth, track) => {
    // Evitar mover más allá del límite derecho
    if (Math.abs(leftPosition) < (trackWidth - listWidth)) {
        track.style.left = `${Math.max(leftPosition - carruseelWidth, -(trackWidth - listWidth))}px`;
    }
}

   document.addEventListener('DOMContentLoaded', () => {
        const videos = document.querySelectorAll('.vdio');
        const buttons = document.querySelectorAll('.control-btn');

        buttons.forEach((button, index) => {
            const video = videos[index]; // Selecciona el video correspondiente

            button.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    button.textContent = 'Pausar';
                    video.classList.remove('paused');
                } else {
                    video.pause();
                    button.textContent = 'Reproducir';
                    video.classList.add('paused');
                }
            });
        });
    });
	
	
const loadLinks = document.querySelectorAll('.load-link');

loadLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el enlace se siga inmediatamente
        const href = this.getAttribute('href'); // Obtén la URL del enlace
        
        // Muestra el loader
        document.getElementById('loader').style.display = 'flex';
        
        // Simula un tiempo de carga (puedes ajustar esto)
        setTimeout(() => {
            window.location.href = href; // Redirige después de mostrar el loader
        }, 1500); // 1500 ms = 1.5 segundos
    });
});

//
function togglePlayPause(videoId, button) {
    const video = document.getElementById(videoId);
    video.muted = false;
    if (video.paused) {
        video.play();
        button.textContent = '⏸️';
    } else {
        video.pause();
        button.textContent = '▶️';
    }
}
