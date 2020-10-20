var anniUtente = prompt("Ciao, quanti anni hai?");

var kmUtente = prompt("Quanti chilometri vuoi percorrere?");

var prezzo = kmUtente * 0.21;

if (anniUtente < 18) {
    document.getElementById('prezzo').innerHTML = "L'importo del tuo biglietto è: € " + prezzo * 0.80;
}

else if (anniUtente > 64) {
    document.getElementById('prezzo').innerHTML = "L'importo del tuo biglietto è: € " + prezzo * 0.60;
}

else {
    document.getElementById('prezzo').innerHTML = "L'importo del tuo biglietto è: € " + prezzo;
}
