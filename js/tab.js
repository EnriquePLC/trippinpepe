document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.lsd-container');
    const numberOfTabs = 20;

    for (let i = 0; i < numberOfTabs; i++) {
        const tab = createTabElement();
        setRandomStartPosition(tab);
        setRandomSpeed(tab);
        container.appendChild(tab);
    }
});

function createTabElement() {
    const tab = document.createElement('div');
    tab.classList.add('lsd-tab');
    const img = document.createElement('img');
    img.src = "images/tab.gif";  // Adjusted path here
    img.alt = "LSD Tab";
    tab.appendChild(img);
    return tab;
}

function setRandomStartPosition(tab) {
    const randomLeftPosition = Math.random() * (window.innerWidth - 80); // 80 is the width of the tab
    tab.style.left = `${randomLeftPosition}px`;
    tab.style.top = `-80px`; // Start from above the viewport
}

function setRandomSpeed(tab) {
    const fallDuration = '6s'; // Set a fixed fall duration 
    const randomRotateDuration = (Math.random() * 5 + 5) + 's'; // Random rotate duration between 5 to 10 seconds

    const randomDelay = (Math.random() * 5) + 's'; // This will delay the start of the animation by up to 5 seconds

    tab.style.animationDuration = `${fallDuration}, ${randomRotateDuration}`;
    tab.style.animationDelay = `${randomDelay}, 0s`; // No delay for rotation, only for fall
}



