function handleScrollAnimation() {
    var elementos = document.querySelectorAll('.animacao,');
    
    elementos.forEach(function(elemento) {
        if (isElementInViewport(elemento)) {
            elemento.classList.add('aparecer');
        }
    });
}