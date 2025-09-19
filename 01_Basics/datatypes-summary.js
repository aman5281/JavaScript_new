//  Primitive 
// 7 Types : String, Number, Boolean, Null, undefined, Symbol, Big Int

const score = 100;
const scoreValue = 100.56;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 234499237393329733030822222n;

// Reference (Non-Primitive)
// Arrays, objects, Functions

const heros = ["Shaktiman", "Batman", "Doga"];

let myObj = {
  name:"Aman",
  age : 20,
}

const myFunction = function(){
  console.log("hello World");
}

console.log(typeof bigNumber);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
