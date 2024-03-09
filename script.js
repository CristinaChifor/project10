// exercitiul 1 -varsta

let age = 30;
console.log (`Varsta mea este ${age}`);
console.log (age);

// exercitiul 2- suma a doua numere.
let numberA= 5;
let numberB = 8;
let sum = numberA + numberB;
console.log (sum);
console.log (`Rezultatul sumei dintre ${numberA} plus ${numberB} este ${sum}`);

// exercitiul 3 conversie din C in Fh

let gradeC = 10;
let gradeF= (gradeC * 9/5) +32;
console.log (`Conversia dintre C si Fh este egala cu ${gradeF}`);


// exercitiul 4 Atribuire de caracter

const myName = "Cristina";
console.log (`Hello ${myName}`);

// Exerctiul 5 Numar par/ impar

let checkedNumber = 24;
let reminder = checkedNumber % 2;
let isEven = reminder == 0;
console.log (`Number ${checkedNumber} is even: ${isEven}`);

checkedNumber = 25;
reminder = checkedNumber % 2;
isEven = reminder == 0;
console.log (`Number ${checkedNumber} is even: ${isEven}`);

// Exercitiul 6 date Boolean

let studentTrue = true;
console.log(`I am a student is ${studentTrue}`);

// Exercitiul 7 Concatenare

let firstName = "Cristina";
let lastName = "Chifor";
let separator = " ";
let fullName = firstName + separator + lastName;
console.log (`Numele meu complet este ${fullName}`);

// Exercitiul 8 Restul impartirii

let numberE = 19;
let numberF = 4;
let moduloResults = numberE % numberF;
console.log(`Restul impartirii lui ${numberE} la ${numberF} este egal cu ${moduloResults}.`);


// Exercitiul 9 Declară o variabilă și atribuie-i valoarea undefined, apoi afișează rezultatul.

let name;
console.log(`Numele variabilei este ${name}`);

// Exercitiul 10 Calculeaza aria unui dreptunghi

let lungime = 10;
let latime = 8;
let aria = lungime * latime;
console.log (`Aria dreptunghiului este ${aria}`);

// Pag 2 de exercitii

// Exercitiul 1

let number1 = 20;
let number2 = 20;
let number3 = 21;

let firstCompareResult = number1 == number2;
console.log(`${number1} == ${number2} => ${firstCompareResult}`);

let firstCompareResult2 = number1 == number3;
console.log(`${number1} == ${number3} => ${firstCompareResult2}`);