
// récupérer tous les éléments de classe "apparition"
var elements = document.getElementsByClassName(".cartes");

// définir une fonction pour l'animation d'apparition
function appear() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var delay = i * 0.5; // ajouter un délai pour chaque élément pour créer un effet de cascade
    element.style.transition = "transform 1s ease-in-out " + delay + "s, opacity 1s ease-in-out " + delay + "s"; // définir une transition pour la transformation et l'opacité
    element.style.transform = "translateY(0)"; // changer la transformation de l'élément pour le faire apparaître
    element.style.opacity = 1; // changer l'opacité de l'élément à 1 pour le rendre visible
  }
}

// définir une fonction pour détecter le défilement de la page
function checkScroll() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elementTop = element.getBoundingClientRect().top;
    var elementBottom = element.getBoundingClientRect().bottom;
    var screenHeight = window.innerHeight;
    if (elementBottom > 0 && elementTop < screenHeight) {
      appear(); // déclencher l'animation d'apparition
      element.classList.remove(".cartes"); // supprimer la classe "apparition" pour éviter de répéter l'animation
    }
  }
}

// ajouter un écouteur d'événement pour détecter le défilement de la page
window.addEventListener("scroll", checkScroll);