console.log("HERE WE ARE AGAIN");

data.forEach(animal => {
    console.log(animal.name);
});

$(document).ready(function () {
    $.each(data, function (index, animal) {
        let divBox = $(`<div class="card-wrapper">
            <div class="card-content">
                <div class="card-number">${animal.group}${animal.group_number}</div>
                <div class="card-title">${animal.name_german}</div>
                <img src="images/pictures/${animal.name_german}.webp" alt="Nilpferd" class="card-image" />
                <div class="card-trivia">
                ${animal.trivia_german}
                </div>
                <div class="stat-icon">
                    <img src="images/icons/weight.jpeg" alt="weight" />
                </div>
                <div class="stat-value">4500</div>


        
                <div class="stat-icon">
                    <img src="images/icons/length.jpeg" alt="length" />
                </div>
                <div class="stat-value">400</div>


          
                <div class="stat-icon">
                    <img src="images/icons/age.jpeg" alt="maximum age" />
                </div>
                <div class="stat-value">50</div>


       
                <div class="stat-icon">
                    <img src="images/icons/speed.jpeg" alt="max speed" />
                </div>
                <div class="stat-value">35</div>


    
                <div class="stat-icon">
                    <img src="images/icons/offspring.jpeg" alt="offspring count per cycle" />
                </div>
                <div class="stat-value">1</div>


             
                <div class="stat-icon">
                    <img src="images/icons/death.jpeg" alt="casualties per year" />
                </div>
                <div class="stat-value">500</div>

            </div>


        </div>`);

        $('#wrapper').append(divBox);
    });


// Toggle- und Shuffle-Logik nach dem Laden der Karten initialisieren
let isRandomOrder = false;
const wrapper = document.getElementById('wrapper');
const originalOrder = Array.from(wrapper.children); // Kopie der ursprünglichen Reihenfolge
let cards = Array.from(wrapper.children); // Aktuelle Karten

// Funktion zum Mischen
function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    wrapper.innerHTML = '';
    cards.forEach(card => wrapper.appendChild(card));
}

// Funktion zum Zurücksetzen
function resetOrder() {
    wrapper.innerHTML = '';
    originalOrder.forEach(card => wrapper.appendChild(card));
    cards = Array.from(originalOrder);
}

// Toggle-Funktion
function toggleOrder() {
    isRandomOrder = !isRandomOrder;
    if (isRandomOrder) {
        shuffleCards();
        document.getElementById('shuffleButton').innerText = "sortieren"; // Button-Text auf "Sort" ändern
    } else {
        resetOrder();
        document.getElementById('shuffleButton').innerText = "mischen"; // Button-Text auf "Shuffle" ändern
    }
}

// Event Listener für den Shuffle-Button
document.getElementById('shuffleButton').addEventListener('click', toggleOrder);
});