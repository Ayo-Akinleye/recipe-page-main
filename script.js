// load scroll trigger
gsap.registerPlugin(ScrollTrigger);

const imageDiv = document.querySelector(".image")
const omeletteImage = document.querySelector(".omelette");
const descriptionSection = document.querySelector(".description");
const prepSection = document.querySelector(".prep");
const ingredientsSection = document.querySelector(".ingredients");
const instructionsSection = document.querySelector(".instructions");
const nutritionSection = document.querySelector(".nutrition")


window.addEventListener("load", () => {
    const tl = gsap.timeline()

    tl.to(imageDiv, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    })
        .from(omeletteImage, {
            scale: 0.8,
            duration: 1,
            ease: 'back.out(1.2)'
        }, '-=0.6')

        .from([descriptionSection, prepSection, ingredientsSection, instructionsSection, nutritionSection], {
            opacity: 0,
            y: 30,
            duration: 2,
            stagger: 0.5,
            ease: 'power2.out'
        }, '-=0.4');

    gsap.from('.ingredient-item', {
        opacity: 0,
        x: -20,
        duration: 0.8,
        stagger: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: ingredientsSection,
            start: 'top 80%',
        }
    });

    gsap.from('.instruction-step', {
        opacity: 0,
        x: -20,
        duration: 0.8,
        stagger: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: instructionsSection,
            start: 'top 80%',
        }
    });

    ScrollTrigger.create({
        trigger: nutritionSection,
        start: 'top 80%',
        onEnter: () => {
            document.querySelectorAll('.nutrition-value').forEach(element => {
                const target = parseInt(element.getAttribute('data-target'));
                gsap.to(element, {
                    innerText: target,
                    duration: 1.5,
                    snap: { innerText: 1 },
                    ease: 'power2.out'
                });
            });
        },
        once: true
    });

})
