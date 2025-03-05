const carousel = document.querySelector('.s-cards-carousel');
const buttons = document.querySelectorAll('.s-controller__button');

function selectCarouselItem(button) {
    // Remover la clase activa de todos los botones
    buttons.forEach(btn => btn.classList.remove('s-controller__button--active'));
    
    // Agregar la clase activa al botón seleccionado
    button.classList.add('s-controller__button--active');
    
    // Obtener el ID del botón (que se usará como índice)
    const id = parseInt(button.id);
    
    // Calcular el ángulo de rotación basado en el índice
    const angle = 120 * (id - 1);
    
    // Aplicar la transformación al carrusel
    carousel.style.transform = `translateZ(-40vw) rotateY(-${angle}deg)`;
}

// Inicializar el primer elemento como activo
selectCarouselItem(document.getElementById('1'));
