// const slidingText = document.querySelector('.slide-in'); 

// window.addEventListener('scroll', () => {
    
//     const {scrollTop, clientHeight} = document.documentElement;
//     const topElementToViewport = slidingText.getBoundingClientRect().top;

//     if(scrollTop > (scrollTop + topElementToViewport).toFixed() - clientHeight*0.5) {
//         slidingText.classList.add('active');
//     }
//     else{
//         slidingText.classList.remove('active');
//     }
// })



// const slidingCompetences = document.querySelector('.cote'); 

// window.addEventListener('scroll', () => {
    
//     const {scrollTopCompetences, clientHeightCompetences} = document.documentElement;
//     const topElementToViewportCompetences = slidingCompetences.getBoundingClientRect().top;

//     if(scrollTopCompetences > (scrollTopCompetences + topElementToViewportCompetences).toFixed() - clientHeightCompetences*0.5) {
//         slidingCompetences.classList.add('active');
//     }
//     else{
//         slidingCompetences.classList.remove('active');
//     }
// })


// Premier bloc de code pour l'élément "slidingText"
const slidingText = document.querySelector('.slide-in');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToViewport = slidingText.getBoundingClientRect().top;

    if (scrollTop > topElementToViewport - clientHeight * 0.5) {
        slidingText.classList.add('active');
    } else {
        slidingText.classList.remove('active');
    }
});









const slidingCompetences = document.querySelector('.cote');

// Fonction pour vérifier si l'élément est dans la zone visible lors du défilement
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

window.addEventListener('scroll', () => {
    if (isInViewport(slidingCompetences)) {
        slidingCompetences.classList.add('active');
    } else {
        slidingCompetences.classList.remove('active');
    }
});

const slidingSavoir = document.querySelector('.cote-oppose');

// Fonction pour vérifier si l'élément est dans la zone visible lors du défilement
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

window.addEventListener('scroll', () => {
    if (isInViewport(slidingSavoir)) {
        slidingSavoir.classList.add('active');
    } else {
        slidingSavoir.classList.remove('active');
    }
});