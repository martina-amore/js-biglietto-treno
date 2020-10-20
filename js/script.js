var anniUtente = prompt("Ciao, quanti anni hai?");

var kmUtente = prompt("Quanti chilometri vuoi percorrere?");

var prezzo = kmUtente * 0.21;

var prezzoMin18 = (prezzo - (prezzo * 0.20));

var prezzoOver65 = (prezzo - (prezzo * 0.40));

var prezzoMin18Fix = prezzoMin18.toFixed(2);

var prezzoOver65Fix = prezzoOver65.toFixed(2);

if (anniUtente < 18) {
    document.getElementById('risultato').innerHTML = "L'importo del tuo biglietto è: € " + prezzoMin18Fix;
}

else if (anniUtente > 64) {
    document.getElementById('risultato').innerHTML = "L'importo del tuo biglietto è: € " + prezzoOver65Fix;
}

else {
    document.getElementById('risultato').innerHTML = "L'importo del tuo biglietto è: € " + prezzo;
}

// console.log(prezzoMin18Fix);
// console.log(prezzoOver65Fix);
