var firstName; // Undefined
firstName = 'Danny';
console.log(firstName);

var lastName = 'Yefreilee'; // Se declaro y asigno
lastName = 'Dailin'; // re-asignar
console.log(lastName); //Mostramos

var SecondName = 'Danny'; //Asignamos
var SecondName = 'Ana'; //Re-asignamos
console.log(SecondName); //Mostramos

// LET Se puede Re-asignar, pero no se puede Re-declarar

let fruit = 'Apple'; //Declarar y asignar
fruit = 'Kiwi'; //Re-asignar
console.log(fruit);
// let fruit = 'Banana'; //NO SE PUEDE RE-DECLARAR

// const  // NO SE PUEDE RE-ASIGNAR NI RE-DECLARAR
const animal = 'dog'; // Se declara y se asigna
// animal = 'cat'; // No Se puede re-asigna
// const animal = 'Snake'; // No se puede Re-declarar
console.log(animal);

const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

/*En este caso no estamos re-asignando ni re-declarando
sino que estamos haciendo la referencia que existe sobre un arreglo
con los metodos push y pop */
