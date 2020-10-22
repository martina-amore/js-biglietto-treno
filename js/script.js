// QUANDO SI PREME IL BOTTONE GENERA
var generaButton = document.getElementById('generaButton');
generaButton.addEventListener('click', function(){

    // FAR APPARIRE IL SECONDO BLOCCO
    document.getElementById("bottomTitle").style.display = "block";
    document.getElementById("ticketBox").style.display = "block";

    // DICHIARAZIONE VARIABILI
    var nomeUtente = document.getElementById('nomeCognome').value;
    var kmUtente = document.getElementById('km').value;
    var anniUtente = document.getElementById('age').value;
    var PREZZO = 0.21 * kmUtente;
    var PREZZO_MIN18 = (PREZZO - (PREZZO * 0.20)).toFixed(2);
    var PREZZO_OVER65 = (PREZZO - (PREZZO * 0.40)).toFixed(2);
    var PREZZO_FIXED = PREZZO.toFixed(2);

    // CONDIZIONI PER FAR APPARIRE UN DIFFERENTE PREZZO
    if (anniUtente == 'minorenne') {
        document.getElementById('offerta').innerHTML = "Sconto Minorenne";
        document.getElementById('costoBiglietto').innerHTML = "€ " + PREZZO_MIN18;
    }

    else if (anniUtente == 'over65') {
        document.getElementById('offerta').innerHTML = "Sconto Over65";
        document.getElementById('costoBiglietto').innerHTML = "€ " + PREZZO_OVER65;
    }

    else {
        document.getElementById('offerta').innerHTML = "Prezzo Standard";
        document.getElementById('costoBiglietto').innerHTML = "€ " + PREZZO_FIXED;
    }

    // FAR APPARIRE NOME UTENTE
    document.getElementById('nomeUtente').innerHTML = nomeUtente;

    // FAR APPARIRE NUMERO RANDOM CARROZZA FINO A 20 INCLUSO
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 20 + 1);

    // FAR APPARIRE NUMERO RANDOM BIGLIETTO DA 90000 A 99999
    document.getElementById('codiceCP').innerHTML = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;

}
);

// QUANDO SI PREME IL BOTTONE ANNULLA
var annullaButton = document.getElementById('annullaButton');
annullaButton.addEventListener('click', function(){

    // RESETTARE VALORI SETTANDOLI SU NULL
    document.getElementById('nomeCognome').value = null;
    document.getElementById('km').value = null;
    document.getElementById('age').value = 'minorenne';
    document.getElementById('nomeUtente').innerHTML = null;
    document.getElementById('offerta').innerHTML = null;
    document.getElementById('carrozza').innerHTML = null;
    document.getElementById('codiceCP').innerHTML = null;
    document.getElementById('costoBiglietto').innerHTML = null;

}
);
