document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll("[data-scroll]");

    // Using Intersection Observer to trigger animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            const delay = el.getAttribute("data-scroll-delay");
            if (delay) {
                el.style.setProperty("--scroll-delay", `${delay}ms`);
            }

            if (entry.isIntersecting) {
                el.classList.add("scroll-show");
            } else {
                el.classList.remove("scroll-show");
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    // Observe each scroll animation element
    scrollElements.forEach(el => observer.observe(el));
});




const services = document.querySelectorAll('.service');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.3
});

services.forEach(service => observer.observe(service));






document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    target.classList.add("active");
                } else {
                    // Remove to allow re-triggering when scrolling back
                    target.classList.remove("active");
                }
            });
        },
        {
            threshold: 0.2, // Trigger when 20% of the element is visible
        }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));
});







document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-scroll]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;

            // Set delay dynamically from data attribute
            const delay = el.getAttribute('data-scroll-delay');
            if (delay) {
                el.style.setProperty('--scroll-delay', `${delay}ms`);
            }

            if (entry.isIntersecting) {
                el.classList.add('scroll-show');
            } else {
                el.classList.remove('scroll-show'); // remove to allow retrigger
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
});


// Control Wedget
const widget = document.querySelector('.widget')
const Control = document.querySelector('.control')
widget.addEventListener('click', () => {
    Control.classList.toggle('open')
})

const colors = document.querySelectorAll('.colors span')

colors.forEach(item => {
    item.addEventListener('click', () => {
        const currentColor = item.dataset.id
        document.querySelector(':root').style.setProperty('--customColor', currentColor)
    })
});
window.addEventListener('scroll', () => {
    Control.classList.remove('open')
})

const links = [...document.querySelectorAll('.scroll-link')]
links.map((link) => {
    link.addEventListener('click', (e) => {
        //    e.preventDefault()

    })
})




// Typelt
new TypeIt("#type", {
    speed: 120,
    loop: true,
})
    .type("Designer", { delay: 600 })
    .delete(10, { delay: 600 })
    .type('Developer')
    .go();

// Typelt
new TypeIt("#type1", {
    speed: 120,
    loop: true,
})
    .type("Designer", { delay: 600 })
    .delete(10, { delay: 600 })
    .type('Developer')
    .go();

//   AOS
AOS.init();
// GSAP
gsap.from('.logo', { opacity: 0, duration: 1, delay: 1, y: -10 });
gsap.from('.namburger', { opacity: 0, duration: 1, delay: 0.8, x: 20 });
gsap.from('.banner', { opacity: 0, duration: 1, delay: 1.1, x: -200 });
gsap.from('.hero h3', { opacity: 0, duration: 1, delay: 1.4, x: -50 });
gsap.from('.hero h1', { opacity: 0, duration: 1, delay: 1.7, x: -45 });
gsap.from('.hero h4', { opacity: 0, duration: 1, delay: 2.1, y: -30 });
gsap.from('.hero a', { opacity: 0, duration: 1, delay: 2.4, y: -30 });

gsap.from('.nav-item', {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 30,
    stagger: 0.2
});

gsap.from('.icons span', {
    opacity: 0,
    duration: 1,
    delay: 2.5,
    x: -30,
    stagger: 0.2,

})


