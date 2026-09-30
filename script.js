/* ==================================================
   EKE PRINCE PORTFOLIO JAVASCRIPT
================================================== */


/* ==================================================
   PAGE LOADER
================================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("pageLoader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 700);

});


/* ==================================================
   MOBILE MENU
================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        nav.classList.toggle("open");

    });


    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");

            nav.classList.remove("open");

        });

    });

}


/* ==================================================
   HEADER SCROLL
================================================== */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current =
        "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ==================================================
   TYPING EFFECT
================================================== */

const typingText =
    document.getElementById("typingText");


const words = [

    "Web Developer",
    "UI Designer",
    "Creative Developer",
    "Digital Builder"

];


let wordIndex =
    0;

let characterIndex =
    0;

let deleting =
    false;


function typeEffect() {

    if (!typingText) return;


    const currentWord =
        words[wordIndex];


    if (!deleting) {

        characterIndex++;

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting =
                true;

            setTimeout(
                typeEffect,
                1400
            );

            return;

        }

    } else {

        characterIndex--;

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        if (characterIndex === 0) {

            deleting =
                false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

        }

    }


    const speed =
        deleting ? 55 : 90;


    setTimeout(
        typeEffect,
        speed
    );

}


setTimeout(
    typeEffect,
    1000
);


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ==================================================
   COUNTERS
================================================== */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                const counter =
                    entry.target;


                const target =
                    Number(
                        counter.dataset.target
                    );


                let current =
                    0;


                const increment =
                    Math.max(
                        1,
                        Math.ceil(target / 50)
                    );


                const updateCounter =
                    () => {

                        current += increment;


                        if (
                            current >= target
                        ) {

                            counter.textContent =
                                target;

                            return;

                        }


                        counter.textContent =
                            current;


                        requestAnimationFrame(
                            updateCounter
                        );

                    };


                updateCounter();

                observer.unobserve(counter);

            });

        },

        {
            threshold: 0.7
        }

    );


counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* ==================================================
   BACK TO TOP
================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* ==================================================
   PROFILE CARD TILT
================================================== */

const profileCard =
    document.querySelector(".profile-card");


if (
    profileCard &&
    window.innerWidth > 800
) {

    profileCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                profileCard.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -4;


            const rotateY =
                ((x - centerX) / centerX) * 4;


            profileCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        }
    );

}


/* ==================================================
   MAGNETIC BUTTON EFFECT
================================================== */

const magneticButtons =
    document.querySelectorAll(
        ".primary-button, .whatsapp-button"
    );


magneticButtons.forEach((button) => {

    button.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * 0.08}px, ${y * 0.08}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "";

        }
    );

});


/* ==================================================
   SMOOTH ANCHOR LINKS
================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                targetId === "#" ||
                !targetId
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});


/* ==================================================
   CURRENT YEAR
================================================== */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ==================================================
   PROJECT CARD POINTER GLOW
================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            card.style.background =
                `radial-gradient(
                    350px circle at
                    ${x}px ${y}px,
                    rgba(79, 140, 255, 0.10),
                    #0D1426 60%
                )`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "#0D1426";

        }
    );

});


/* ==================================================
   SKILL CARD EFFECT
================================================== */

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


skillCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            card.style.background =
                `radial-gradient(
                    250px circle at
                    ${x}px ${y}px,
                    rgba(139, 92, 246, 0.10),
                    #0D1426 65%
                )`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "#0D1426";

        }
    );

});