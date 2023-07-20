// Fonction pour vérifier si l'élément est dans le viewport
function isElementInViewport1(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter la classe d'animation lorsque l'élément est visible dans le viewport
function addAnimationWhenVisible1() {
    var element = document.querySelector(".progress1.animate-on-scroll");
    if (isElementInViewport1(element)) {
        element.classList.add("animate");
    } else {
        element.classList.remove("animate"); // Supprimer la classe "animate" si l'élément n'est pas dans le viewport
    }
}

// Event listener pour vérifier lorsque l'utilisateur scroll
window.addEventListener1("scroll", function() {
    addAnimationWhenVisible1();
});

// Event listener pour vérifier lorsque la taille de la fenêtre change (utile pour les animations au chargement de la page)
window.addEventListener1("resize", function() {
    addAnimationWhenVisible1();
});

// Vérifier lorsque la page se charge si l'élément est déjà dans le viewport
addAnimationWhenVisible1();