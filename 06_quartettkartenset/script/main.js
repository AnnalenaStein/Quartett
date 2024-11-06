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
});