document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    var link = document.querySelector(".link");

    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que o link seja seguido

        audio.play();

        // Aguarda 1 segundo (1000 milissegundos) antes de seguir para o link
        setTimeout(function() {
            window.location.href = link.getAttribute("href");
        }, 1500);
    });
});

