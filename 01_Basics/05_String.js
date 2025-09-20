const name = "Aman Kumar";
const age = 22;

// console.log(name + age + "value");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("Aman-Sahil-com");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('S'));

const newString = gameName.substring(0, 4); //we cannot give -ve value in it
console.log(newString);

const anotherString = gameName.slice(0, 4); //we can use -ve value
console.log(anotherString);

const newStringOne = "    Aman    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.linkedin.com/in/aman-kumar-a19b23222/";
console.log(url.replace('//', '-'));
console.log(url.includes("aman"));


console.log(gameName.split('-'));



