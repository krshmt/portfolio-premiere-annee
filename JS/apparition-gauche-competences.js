const slidingText = document.querySelector('.competences-techniques'); 

window.addEventListener('scroll', () => {
    
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToViewport = slidingText.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToViewport).toFixed() - clientHeight*0.5) {
        slidingText.classList.add('active');
    }
    else{
        slidingText.classList.remove('active');
    }
})