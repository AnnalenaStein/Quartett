console.log("HERE WE ARE AGAIN");

//Hintergrundfarbe für Gruppen
const groupColors = {
    A: '#E63E3E',
    B: '#53DA41', 
    C: '#E29C45', 
    D: '#1E97E8',
    E: '#6764E7', 
    F: '#C77E3E', 
    G: '#9A47DB', 
    H: '#EFDA38',    
};

data.forEach(animal => {
    console.log(animal.name);
});

$(document).ready(function () {
    $.each(data, function (index, animal) {

        let color = groupColors[animal.group]

        let divBox = $(`<div class="card-wrapper">
            <div class="card-content">
            <div class="card-number" style="background: ${color};">
            ${animal.group}${animal.group_number}
        </div>
                <div class="card-title">${animal.name_german}</div>
                <img src="images/pictures/${animal.name_german}.webp" alt="Nilpferd" class="card-image" />
                <div class="card-trivia" style="background: ${color};">
                ${animal.trivia_german}
                </div>
                <div class="stat-icon">
                    <img src="images/icons/weight.jpg" alt="weight" />
                </div>
                <div class="stat-value">4500</div>


        
                <div class="stat-icon">
                    <img src="images/icons/length.jpg" alt="length" />
                </div>
                <div class="stat-value">400</div>


          
                <div class="stat-icon">
                    <img src="images/icons/age.jpg" alt="maximum age" />
                </div>
                <div class="stat-value">50</div>


       
                <div class="stat-icon">
                    <img src="images/icons/speed.jpg" alt="max speed" />
                </div>
                <div class="stat-value">35</div>


    
                <div class="stat-icon">
                    <img src="images/icons/offspring.jpg" alt="offspring count per cycle" />
                </div>
                <div class="stat-value">1</div>


             
                <div class="stat-icon">
                    <img src="images/icons/death.jpg" alt="casualties per year" />
                </div>
                <div class="stat-value">500</div>

            </div>


        </div>`);

        $('#wrapper').append(divBox);
    });


    $(document).ready(function () {
        // Extrahiere eindeutige Gruppennamen
        let uniqueGroups = data
            .map(animal => animal.groupname_german) // Gruppennamen extrahieren
            .filter((value, index, self) => self.indexOf(value) === index); // Doppelte entfernen
    
        // Erstelle HTML-Elemente für jede Gruppe
        uniqueGroups.forEach(groupname => {
            let groupElement = $(`<div class="group-name">${groupname}</div>`); // Neues Element
            $('aside').append(groupElement); // Füge es dem aside hinzu
        });
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
    document.querySelector('main').style.gridTemplateColumns = '1fr';
    document.querySelector('aside').style.display = 'none';
    wrapper.style.background = 'radial-gradient( #F1B05F, #65B0E1, #4D4C9F, #7A624D, #8C4EBC, #E3D77A, #DB5151, #84F375)';

}
   
   // Funktion zum Zurücksetzen der Reihenfolge
   function resetOrder() {
       // Setzt die Karten in ihre ursprüngliche Reihenfolge zurück
       wrapper.innerHTML = '';
       originalOrder.forEach(card => wrapper.appendChild(card));
       cards = Array.from(originalOrder); // Stellt sicher, dass `cards` auch die ursprüngliche Reihenfolge hat
       document.querySelector('main').style.gridTemplateColumns = '70px 1fr';
       document.querySelector('aside').style.display = 'grid';
       wrapper.style.background = 'linear-gradient(to bottom, #DB5151, #84F375, #F1B05F, #65B0E1, #4D4C9F, #7A624D, #8C4EBC, #E3D77A)';
   }
   
   // Toggle-Funktion zum Wechseln zwischen Zufällig und Aktuell
   function toggleOrder() {
       isRandomOrder = !isRandomOrder;
       const button = document.getElementById('shuffleButton'); // Button-Element auswählen
       if (isRandomOrder) {
           shuffleCards();
           button.innerText = 'sortieren';
       } else {
           resetOrder();
           button.innerText = 'mischen';
       }
   }

   // Event Listener für den Shuffle-Button
   document.getElementById('shuffleButton').addEventListener('click', toggleOrder);
});

//sortData(data, ['group', 'group_number']);