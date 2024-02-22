
  
const body = document.querySelector('body');
const animations = document.querySelectorAll('[data-animation');

const canvasSize = body.offsetHeight * body.offsetWidth;
const starsFraction = Math.ceil(canvasSize / 3000);

(function addStars() { 
    for(let i = 0; i < starsFraction; i++) {
    // Set coördinates and form of star.
    let xCoördinate = random(0, 100);
    let yCoördinate = random(0, 100);
    let opacity = random(0.5, 1);
    let size = random(1, 2);
    let colour = '#F7FDFF';
        
    // Add star to body.
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = xCoördinate + '%';
    star.style.top = yCoördinate + '%';
    star.style.opacity = opacity;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = colour;

    // Prepend so stars are behind other elements.
    body.prepend(star);
    }
}());

function random(min, max) {
    return min + Math.random() * (max + 1 - min);
}


function toggleAnimations(animations) {
    animations.forEach(animation => {
        const running = animation.style.animationPlayState || 'running';
        animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
    })
}

// Toggle animations after loop
setInterval(
    function(){
        toggleAnimations(animations)
        setTimeout(() => {
            toggleAnimations(animations)
        }, 2000);
    },14000
);

