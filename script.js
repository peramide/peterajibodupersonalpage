/* ---------- TYPING EFFECT ---------- */
const typeText = document.querySelector(".type-text");
const textLoad = () => {
    setTimeout(() => {
        typeText.textContent = "Researcher";
    }, 0);
    setTimeout(() => {
        typeText.textContent = "AI/ML Programmer";
    }, 4000);
    setTimeout(() => {
        typeText.textContent = "Chemistry Tutor";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);

/* ---------- MOBILE MENU ---------- */
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

/* ---------- SCROLL REVEAL ANIMATION ---------- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        // else { entry.target.classList.remove('show'); } // Uncomment if you want them to fade out when scrolling up
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* ---------- ACTIVE LINK HIGHLIGHT ---------- */
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    var current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach((li) => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    });
};