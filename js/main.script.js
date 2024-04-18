// popup solution card text
const solutionCards = document.querySelectorAll('div.solutions-card');
console.log(solutionCards);
solutionCards.forEach(card => {
    card.addEventListener('mouseover', event => {
        let wrapper = event.currentTarget.querySelector('div.card-text-wrapper');
        wrapper.style.bottom = '0%';
    });
    card.addEventListener('mouseout', event => {
        let wrapper = event.currentTarget.querySelector('div.card-text-wrapper');
        wrapper.style.bottom = '-45%';
    });

    // for mobile
    card.addEventListener('touchstart', event => {
        let wrapper = event.currentTarget.querySelector('div.card-text-wrapper');
        wrapper.style.bottom == '0%'
    });
    card.addEventListener('touchout', event => {
        let wrapper = event.currentTarget.querySelector('div.card-text-wrapper');
        wrapper.style.bottom = '-45%';
    });
});

// move-in banner decor
const bannerText = document.querySelector('div.banner-text');
const decorOne = document.querySelector('div.banner-decor.one');
const decorTwo = document.querySelector('div.banner-decor.two');
const decorThree = document.querySelector('div.banner-decor.three');

// call banner decor move
window.addEventListener('load', () => {
    bannerText.style.cssText = 'left: 1em;';
    decorOne.style.cssText = 'left: -12em;';
    decorTwo.style.cssText = 'bottom: -2em;';
    decorThree.style.cssText = 'top: -2em; right: -2em;';
});

// current year
const now = new Date().getFullYear();
document.getElementById('current-year').innerHTML = now;

