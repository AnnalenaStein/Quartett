console.log("HERE WE ARE AGAIN");

data.forEach(animal => {
    console.log(animal.name);
});

$(document).ready(function () {
    $.each(data, function (index, animal) {
        let divBox = $(`<div class="card-wrapper">
            <div class="card-content">
                <div class="card-number">F2</div>
                <div class="card-title">${animal.name_german}</div>
                <img src="images/f2.jpg" alt="Nilpferd" class="card-image" />
                <div class="card-trivia">
                    Ihr Schweiß ist rötlich gefärbt, was sie wie blutende Tiere aussehen lässt.
                </div>

       
                <div class="stat-icon">
                    <img src="images/icons/weight.png" alt="weight" />
                </div>
                <div class="stat-value">4500</div>


        
                <div class="stat-icon">
                    <img src="images/icons/length.png" alt="length" />
                </div>
                <div class="stat-value">400</div>


          
                <div class="stat-icon">
                    <img src="images/icons/age.png" alt="maximum age" />
                </div>
                <div class="stat-value">50</div>


       
                <div class="stat-icon">
                    <img src="images/icons/speed.png" alt="max speed" />
                </div>
                <div class="stat-value">35</div>


    
                <div class="stat-icon">
                    <img src="images/icons/offspring.png" alt="offspring count per cycle" />
                </div>
                <div class="stat-value">1</div>


             
                <div class="stat-icon">
                    <img src="images/icons/death.png" alt="casualties per year" />
                </div>
                <div class="stat-value">500</div>

            </div>


        </div>`);
						
        $('#wrapper').append(divBox);
    });
});