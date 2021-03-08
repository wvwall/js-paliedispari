//Chiedere all'utente di inserire una parola

//Crea funzione per parola reverse
function reverse() {

    var parola = prompt("Inserisci una parola: ");
    console.log(parola);
    var parolArr = parola.split("");
    console.log(parolArr);
    var arrRev = parolArr.reverse("");
    console.log(arrRev);
    var parolaReverse = arrRev.join("");
    console.log(parolaReverse);

    // controlla se la parola è palindroma
    if (parola === parolaReverse) {
        console.log("Questa parola è palindroma!");    
    } else {
        console.log("Questa parola non è palindroma");
    }
}

reverse();

//Controllare se parola inserita è palindroma