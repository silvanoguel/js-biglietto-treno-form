const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {
    const result = document.getElementById("result");
    // Ripulire il result
    result.className = "";

    // Prendere il valore dall input.
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;
    
    const userKmInput = document.getElementById("user-km");
    const userKm = userKmInput.value;
    
    console.log(userAge, userKm);

    // calcolo prezzo intero del biglietto
    const ticketPrice = (0.21 * userKm)
    console.log(ticketPrice);

    // calcolo prezzo biglietto con i 2 sconti
    // per minorenni
    const specialPrice1 = parseInt(ticketPrice - (ticketPrice * 0.2));
    // per over 65
    const specialPrice2 = parseInt(ticketPrice - (ticketPrice * 0.4));

     if (userAge < 18) {
        specialPrice1.toFixed(2);
        console.log (specialPrice1);
        document.getElementById("result").innerHTML =
        `Il costo del tuo biglietto è: ${specialPrice1.toFixed(2)} €`;
    } else if (userAge >= 65) {
        specialPrice2;
        console.log(specialPrice2)
        document.getElementById("result").innerHTML =
        `Il costo del tuo biglietto è: ${specialPrice2.toFixed(2)} €`;
    } else {
        ticketPrice;
        document.getElementById("result").innerHTML =
        `Il costo del tuo biglietto è: ${ticketPrice.toFixed(2)} €`;
    }

    // Ripulisco i campi di input
    userAgeInput.value = "";
    userKmInput.value = "";
    userNameInput.value = "";

});