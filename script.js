// DARK LIGHT MODE
function toggleTheme() {
    document.body.classList.toggle("light");
}

// TYPING EFFECT
const text = "Machine Learning Engineer | Deep Learning | Neural Networks | Natutal Lanugage Processing";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}

typingEffect();
// SCROLL FADE-IN
const cards = document.querySelectorAll(".card");

function revealCards() {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (cardTop < trigger) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);
revealCards(); // run once on load

VanillaTilt.init(document.querySelectorAll(".project"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3
});
VanillaTilt.init(document.querySelectorAll(".skill-item"), {
    max: 12,
    speed: 400,
    scale: 1.08,
    glare: true,
    "max-glare": 0.2
});

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
setTimeout(() => {
    document.getElementById("loader").style.display = "none";
}, 3000);

const flipCard = document.querySelector(".flip-card");

if (flipCard) {
    flipCard.addEventListener("click", () => {
        flipCard.querySelector(".flip-inner")
            .classList.toggle("flip-active");
    });
}
function connectSkills() {

    const svg = document.querySelector(".connections");
    const skills = document.querySelectorAll(".skill-item");

    if (!svg || skills.length < 2) return;

    svg.innerHTML = "";

    const containerRect = svg.getBoundingClientRect();

    skills.forEach((skill1, i) => {
        for (let j = i + 1; j < skills.length; j++) {

            const skill2 = skills[j];

            const rect1 = skill1.getBoundingClientRect();
            const rect2 = skill2.getBoundingClientRect();

            const x1 = rect1.left + rect1.width / 2 - containerRect.left;
            const y1 = rect1.top + rect1.height / 2 - containerRect.top;

            const x2 = rect2.left + rect2.width / 2 - containerRect.left;
            const y2 = rect2.top + rect2.height / 2 - containerRect.top;

            const line = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );

            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);

            svg.appendChild(line);
        }
    });
}
window.addEventListener("load", connectSkills);
window.addEventListener("resize", connectSkills);
window.addEventListener("scroll", connectSkills);


