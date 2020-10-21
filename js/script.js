var generaButton = document.getElementById('generaButton');
generaButton.addEventListener('click', function(){

    document.getElementById("bottomTitle").style.display = "block";
    document.getElementById("ticketBox").style.display = "block";

    var nomeUtente = document.getElementById('nomeCognome').value;
    var kmUtente = document.getElementById('km').value;
    var anniUtente = document.getElementById('age').value;
    var PREZZO = 0.21 * kmUtente;
    var PREZZO_MIN18 = (PREZZO - (PREZZO * 0.20));
    var PREZZO_OVER65 = (PREZZO - (PREZZO * 0.40));
    var PREZZO_FIXED = PREZZO.toFixed(2);
    var PREZZO_MIN18FIXED = PREZZO_MIN18.toFixed(2);
    var PREZZO_OVER65FIXED = PREZZO_OVER65.toFixed(2);

    if (document.getElementById('age').value == 'minorenne') {
        document.getElementById('offerta').innerHTML = "Sconto Minorenne";
        document.getElementById('costoBiglietto').innerHTML = "€ " + PREZZO_MIN18FIXED;
    }

    else if (document.getElementById('age').value == 'over65') {
        document.getElementById('offerta').innerHTML = "Sconto Over65";
        document.getElementById('costoBiglietto').innerHTML = "€ " + PREZZO_OVER65FIXED;
    }

    else if (document.getElementById('age').value == 'standard'){
        document.getElementById('offerta').innerHTML = "Prezzo Standard";
        document.getElementById('costoBiglietto').innerHTML = "€ " + PREZZO_FIXED;
    }

document.getElementById('nomeUtente').innerHTML = nomeUtente;
document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 20 + 1);
document.getElementById('codiceCP').innerHTML = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;


}
);
