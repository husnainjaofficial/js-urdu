//   #  Primitive DataTypes


//  7 Types :  String,  Number,  Boolean,   Null,   Undefined,   BigInt,    Symbol


const number = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)


const bigNumber = 2366329236269278345n
// console.log(bigNumber);



//  #   Reference / Non-Primitive DataTypes


// 3 Types  : Arrays,   Objects,   Functions

const Heroes = ["BA56", "FZ45", "Riz17"];
let myObject = {
    Name : "Husnain",
    Age : 19,
}
const myFunction = function(){
   console.log("Hello World");
}
console.log(myFunction);
