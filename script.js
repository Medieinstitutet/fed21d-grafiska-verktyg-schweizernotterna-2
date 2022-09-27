// Hämta variabler
let sectionStart = document.getElementById("sectionStart");
let menuBtnText = document.getElementById("menuBtnText");
let menuBtnHamburger = document.getElementById("menuBtnHamburger");
let acceptBtn = document.getElementById("acceptBtn");
let denyBtn = document.getElementById("denyBtn");
let cookies = document.getElementById("cookies");


// Klick på "Meny"-text (mobilläge)
menuBtnText.addEventListener("click", () => {
    openMenu();
});


// Klick på hamburgermenyn (tablet- och desktop-läge)
menuBtnHamburger.addEventListener("click", () => {
    openMenu();
});


// Funktion för att öppna menyn
function openMenu() {

    // Skapa meny
    let openMenu = document.createElement("section");
    openMenu.classList = "openMenu";

    openMenu.innerHTML = `
        <h1>Meny</h1>

        <button id="closeMenuBtn">
            <span id="span1"></span>
            <span id="span2"></span>
        </button>

        <h2><a href="">Nyheter</a></h2>
        <h2><a href="">Funktioner</a></h2>
        <h2><a href="">Boka</a></h2>
    `;

    sectionStart.append(openMenu);

    // Klick på kryss för att stänga meny
    document.getElementById("closeMenuBtn").addEventListener("click", () => {
        openMenu.remove().classList;
    });
};


// Klick på "Godkänn"-cookies
acceptBtn.addEventListener("click", () => {
    cookies.remove();
});


// Klick på "Neka"-cookies
denyBtn.addEventListener("click", () => {
    cookies.remove();
});


// Animation för logotype
gsap.to("#logotype", {
    delay: 1,
    x: "100vw",
    duration: 1.25,
    ease: Linear.easeOut
});

gsap.to("#logotype", {
    delay: 2.25,
    opacity: 0
});

gsap.to("#logotype", {
    delay: 2.75,
    x: "-50px",
});

gsap.to("#logotype", {
    delay: 3.25,
    x: "0",
    duration: 0.5,
    opacity: 1
});