// Fonction pour vérifier si l'élément est dans le viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter la classe d'animation lorsque l'élément est visible dans le viewport
function addAnimationWhenVisible() {
    var elements = document.querySelectorAll(".progress.animate-on-scroll");

    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
}

// Event listener pour vérifier lorsque l'utilisateur scroll ou que la taille de la fenêtre change
window.addEventListener("scroll", function() {
    addAnimationWhenVisible();
});

window.addEventListener("resize", function() {
    addAnimationWhenVisible();
});

// Vérifier lorsque la page se charge si les éléments sont déjà dans le viewport
addAnimationWhenVisible();
