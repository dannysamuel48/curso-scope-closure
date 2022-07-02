//Lo que sucede es que el lo ve como var nameOfDog;  //Undefined 
// console.log(nameOfDog);
// var nameOfDog = 'Mia';
// console.log(nameOfDog);

var Mia; //undefined asi lo asigna al llamarlo con el console.log
nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${Mia}`);
}

var Mia = 'Preciosa';
