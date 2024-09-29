// JavaScript Document
console.log("hi");




// Hamburger menu
var menuButton = document.querySelector(".hamburger");
var navUl = document.querySelector("nav");

menuButton.addEventListener("click", openMenu);

function openMenu() {
    navUl.classList.toggle("toonMenu");
}



// Like hartje
var heartButtons = document.querySelectorAll(".like");

for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].onclick = addToFavorites;
}

function addToFavorites(event) {
    let clickedHeart = event.target;
    let theFish = clickedHeart.closest("article");

    theFish.classList.toggle("liked");
}

// Filterfunctie
document.getElementById('datum-select').addEventListener('change', function() {
    // Haal de geselecteerde datum op uit het select menu
    let geselecteerdeDatum = this.value;

    // Haal alle artikelen (films) op
    let films = document.querySelectorAll('article');

    films.forEach(function(film) {
        // Haal de datum op uit het data-date attribuut van de film
        let filmDatums = film.getAttribute('data-dates').split(',');

        // Als de geselecteerde datum overeenkomt met de film datum, toon de film, anders verberg hem
        if (geselecteerdeDatum === "" || filmDatums.includes(geselecteerdeDatum)) {
            film.classList.remove('hidden');
        } else {
            film.classList.add('hidden');
        }
    });
});