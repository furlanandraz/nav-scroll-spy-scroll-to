// mobile menu toggle
const menuToggleButton = document.getElementById('menu-toggle-button');
const bars = document.querySelectorAll('span.bar');
console.log(bars);
const menuContainer = document.getElementById('menu-container');
menuToggleButton.addEventListener('click', () => {
    if (menuContainer.classList.contains('on-display')) {
        menuContainer.style.top = '-12em';
        menuContainer.classList.remove('on-display');
        bars.forEach(bar => {
            bar.classList.remove('x');
        });
    } else {
        menuContainer.style.top = '4em';
        menuContainer.classList.add('on-display');
        bars.forEach(bar => {
            bar.classList.add('x');
        })
    }
});

// collapse on lng btn click
document.querySelectorAll('div.lng-btn').forEach(link => {
    link.addEventListener('click', () => {
        menuContainer.style.top = '-12em';
        menuContainer.classList.remove('on-display');
        bars.forEach(bar => {
            bar.classList.remove('x');
        });
    });
});

// collapse on link click
document.querySelectorAll('div.item a').forEach(link => {
    link.addEventListener('click', () => {
        menuContainer.style.top = '-12em';
        menuContainer.classList.remove('on-display');
        bars.forEach(bar => {
            bar.classList.remove('x');
        });
    });
});

// active on scroll
// section key:value array constructor
const sections = document.querySelectorAll('section');
var sectionArray = new Object();
sections.forEach(section => {
    sectionArray[section.id] = { top: section.offsetTop, bottom: section.offsetTop + section.offsetHeight, height: section.offsetHeight };
});

// params
const percentage = 0.4;
let id, idTester, windowTopPrev;
const scrollSpy = () => {
    let windowTop = parseInt(this.scrollY);
    let windowHeight = parseInt(this.innerHeight);
    let windowBreakline = parseInt(windowTop + windowHeight * percentage);
    // console.log(windowTop + navbarHeight);
    // section tester
    for (const [key, value] of Object.entries(sectionArray)) {
        // if top is over breakline && check in bottom is under breakline (only one at time fits this check)
        if (value.top < windowBreakline && windowBreakline < value.bottom) { idTester = key; }
    }
    // console.log(idTester);

    // section change on positive test
    let change = false;
    if (id != idTester) { change = true; }

    // action on section change
    if (change) {
        id = idTester
        if (windowTop > windowTopPrev) {
            // on downscroll:
            document.querySelector('div.item a.active').style.animationName = 'deactivate-down';
            document.querySelector('div.item a.active').classList.remove('active');
            document.querySelector(`div.item a[href="#${id}"`).classList.add('active');
            document.querySelector(`div.item a[href="#${id}"`).style.animationName = 'active-down';
        } else if (windowTop < windowTopPrev) {
            // on upscroll:
            document.querySelector('div.item a.active').style.animationName = 'deactivate-up';
            document.querySelector('div.item a.active').classList.remove('active');
            document.querySelector(`div.item a[href="#${id}"`).classList.add('active');
            document.querySelector(`div.item a[href="#${id}"`).style.animationName = 'active-up';
        }
    };
    // record previous windowTop
    windowTopPrev = windowTop;
}

// call on scroll event
window.onscroll = scrollSpy;
// force to top on reload
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

// scroll to section
const navbarHeight = document.getElementById('navbar').offsetHeight;
const navLinks = document.querySelectorAll('div.item a');
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        sectionIdLink = link.href.split('#')[1];
        let sectionTarget = document.getElementById(sectionIdLink);
        let sectionTop = sectionTarget.offsetTop - navbarHeight;
        scrollTo({
            top: sectionTop,
            behavior: 'smooth',
        });
    });
});
