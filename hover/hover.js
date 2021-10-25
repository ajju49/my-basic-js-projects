const circle = document.querySelector('#circle');

//add event listener

circle.addEventListener('mouseenter', () => {
    if  (!circle.classList.contains('hover')){
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave',() => {
    if (circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
});