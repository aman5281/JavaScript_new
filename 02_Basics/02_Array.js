const marvel_heros = ["Ironman", "Spiderman", "Thor"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// const anotherArray = [1, 2, 3, [4, 5, 6, 7], 8, 6, [6, 8,[1, 4, 7]]];

// const anothernewArr = anotherArray.flat(4); // we can also define depth as infinity or also according to the depth of an array given.
// console.log(anothernewArr);





console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));
console.log(Array.from({name:"Aman"})); // interesting

let EnglishMarks = 70;
let MathsMarks = 100;
let ScienceMarks = 60;

console.log(Array.of(EnglishMarks, MathsMarks, ScienceMarks));

