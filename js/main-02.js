// Abbiamo 3 div
// Un div conterrà numeri pari, uno numeri dispari, un altro la somma dei numeri
// Chiediamo all'utente di inserire numeri finchè il numero è diverso da 0
// Stampiamo nel div dei numeri pari i numeri che sono pari, 
// nel div dei numeri dispari quelli dispari 
// e nel div della somma la somma dei numeri

// 1) Creo un array vuoto
const listaNumeri = [];

// 2) Creo la variabile che conterrà la somma valorizzata a 0
let somma = 0;

let numeroInserito = 0;

do {

    const numeroUtente = prompt('Inserisci un numero');
    numeroInserito = parseInt(numeroUtente);

    if (numeroInserito != 0) {

        listaNumeri.push(numeroInserito);
        somma += numeroInserito;
    }

} while (numeroInserito != 0);

separazionePariDispari(listaNumeri);
printInPage('sum', somma);

// Funzione separazionePariDispari
// Partendo da un array di numeri li divide fra pari e dispari e li stampa in pagina
//
// arrayNumeri -> un array di numeri interi
function separazionePariDispari(arrayNumeri) {

    // Creo un ciclo per iterare i singoli numeri presenti nell'array
    for (let i = 0; i < arrayNumeri.length; i++) {

        let testo = arrayNumeri[i] + '<br>';

        // Verifico quali numeri sono pari e quali sono dispari
        let numeroPari = isEven(arrayNumeri[i]);
        if (numeroPari == true) {

            // Stampo in pagina i numeri
            printInPage('green', testo);

        } else {

            // Stampo in pagina i numeri
            printInPage('red', testo);
        }
    }
}

// Funzione printInPage
// Inserisce in punti specifici del codice HTML la stringa che gli passo
//
// id -> ID dell'elemento in cui scrivere
// text -> Il testo da scrivere
function printInPage(id, text) {
    let content = document.getElementById(id).innerHTML;
    content = content + text;
    document.getElementById(id).innerHTML = content;
}

// Funzione isEven
// Controlla se un numero è pari o dispari
//
// numero -> un numero intero
// return -> true se numero è pari, false se numero è dispari
function isEven(numero) {
    let risultato = false;
    if (numero % 2 == 0) {
        risultato = true;
    }
    return risultato;
}