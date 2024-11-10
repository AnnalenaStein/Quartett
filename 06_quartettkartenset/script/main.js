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



   // Mischen und wieder sortieren
   let isRandomOrder = false;
   const wrapper = document.getElementById('wrapper');
   const originalOrder = Array.from(wrapper.children); // Kopie der ursprünglichen Reihenfolge der Karten
   let cards = Array.from(wrapper.children); // Aktuelle Karten
   
   //mischen
   function shuffleCards() {
    cards = gmynd.shuffleArray(cards); // Nutze gmynd zum Mischen
    wrapper.innerHTML = ''; // Entfernt alle Karten
    cards.forEach(card => wrapper.appendChild(card)); // Fügt die Karten in zufälliger Reihenfolge hinzu
}
   
   // Funktion zum Zurücksetzen der Reihenfolge
   function resetOrder() {
       // Setzt die Karten in ihre ursprüngliche Reihenfolge zurück
       wrapper.innerHTML = '';
       originalOrder.forEach(card => wrapper.appendChild(card));
       cards = Array.from(originalOrder); // Stellt sicher, dass `cards` auch die ursprüngliche Reihenfolge hat
   }
   
   // Toggle-Funktion zum Wechseln zwischen Zufällig und Aktuell
   function toggleOrder() {
       isRandomOrder = !isRandomOrder;
       if (isRandomOrder) {
           shuffleCards();
       } else {
           resetOrder();
       }
   }

   // Event Listener für den Shuffle-Button
   document.getElementById('shuffleButton').addEventListener('click', toggleOrder);
});

//sortData(data, ['group', 'group_number']);