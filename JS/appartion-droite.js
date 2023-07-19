const slidingTextRight = document.querySelector('.slide-in-right');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToViewport = slidingTextRight.getBoundingClientRect().top;

    if (scrollTop + clientHeight > topElementToViewport + scrollTop) {
        slidingTextRight.classList.add('active');
    }
    else{
        slidingTextRight.classList.remove('active');
    }
});
