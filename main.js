//Chiedere all'utente di inserire una parola

//Crea funzione per parola reverse
function reverse() {

    var parola = prompt("Inserisci una parola: ");
    console.log(parola);
    document.getElementById("user").innerHTML = "Il tuo nickname è : " + parola ;
    var parolArr = parola.split("");
    console.log(parolArr);
    var arrRev = parolArr.reverse("");
    console.log(arrRev);
    var parolaReverse = arrRev.join("");
    console.log(parolaReverse);

    // controlla se la parola è palindroma
    if (parola === parolaReverse) {
        console.log("Questa parola è palindroma!"); 
        document.getElementById("pali").innerHTML = "La tua parola è palindroma!"  
    } else {
        console.log("Questa parola non è palindroma");
        document.getElementById("pali").innerHTML = "La tua parola non è palindroma!"
    }
}
reverse();


//PARI E DISPARI

//chiedi all'untente pari o dispari
var pariDispari = prompt("p=pari, d=dispari: ");
switch (pariDispari) {
    case "p":
      console.log("Hai scelto pari.");
      document.getElementById("scelta").innerHTML =  "Hai scelto pari"
    break;
    case "d":
        console.log("Hai scelto dispari");
        document.getElementById("scelta").innerHTML = "Hai scelto dispari"
    break;
    default:
        console.log("Non hai inserito quanto richiesto!");
        document.getElementById("scelta").innerHTML = "Non hai inserito quanto richiesto"
    break;
}

// inserisci un numero da 1 a 5 
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log(numeroUtente);


// crea funzione per generare numeri
function numeroRandom() {
    var min = 1
    var max = 5
     numeroRan = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numeroRan);
}

numeroRandom ();

// sommiamo i due numeri

var sommaNum = numeroUtente + numeroRan;
console.log(sommaNum);

//dichiara chi ha vinto

function risultato() {
    if (sommaNum%2 == 0) {
        sommaNum = "p";
        console.log("La somma è pari!");
        document.getElementById("somma").innerHTML = "La somma del tuo numero con quello del computer da un numero pari."
    }else {
        sommaNum = "d";
        console.log("La somma è dispari!");
        document.getElementById("somma").innerHTML = "La somma del tuo numero con quello del computer da un numero dispari."
    }
    if (sommaNum === pariDispari) {
        console.log("Hai vinto");
        document.getElementById("risultato").innerHTML = "Hai vinto!"
    } else {
        console.log("Hai perso!");
        document.getElementById("risultato").innerHTML = "Hai perso!"
    }
}
risultato();