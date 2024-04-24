'use strict';


//- definisco una variabile firstName e le assegno il valore di un prompt;

const firstName = prompt('Inserisci il tuo nome');

//- definisco una variabile lastName e le assegno il valore di un prompt;

const lastName = prompt('Inserisci il tuo cognome');

//- definisco una variabile favouriteColor e le assegno il valore di un prompt;

const favouriteColor = prompt('Inserisci il tuo colore preferito');

//-definisco una variabile myNumber (21) che poi diventerà un numero casuale

const myNumber = '21'//todo: generazione numero casuale

//- definisco una variabile password e le assegno la concatenazione di firstName + lastName + favouriteColor + myNumber il valore di un prompt;

const myPassword = firstName + lastName + favouriteColor + myNumber;


//- inserisco all'interno del dom il valore di password

const htmlElement = document.getElementById('password');
htmlElement.innerHTML = myPassword;


//Bonus 1: visualizzare le informazioni anche nella console del browser;

console.log(myPassword);
 






console.log ('sono correttamente incluso nel file html')