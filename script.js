// Hämta variabler
let sectionStart = document.getElementById("sectionStart");
let menuBtnText = document.getElementById("menuBtnText");
let menuBtnHamburger = document.getElementById("menuBtnHamburger");


// Klick på "Meny"-text
menuBtnText.addEventListener("click", () => {
    openMenu();
});


// Klick på hamburgermenyn
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

        <h2>Nyheter</h2>
        <h2>Funktioner</h2>
        <h2>Boka</h2>
    `;

    sectionStart.append(openMenu);

    // Klick på kryss för att stänga meny
    document.getElementById("closeMenuBtn").addEventListener("click", () => {
        location.reload();
    })
};