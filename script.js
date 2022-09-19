// Hämta variabler
let menuBtn = document.getElementById("menuBtn");


// Klick på menyknappen
menuBtn.addEventListener("click", () => {
    console.log("Klick på meny-knappen");

    menuBtn.classList.toggle("menuOpen");
})