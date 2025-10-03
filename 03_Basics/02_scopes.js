let a = 300;

if (true) {
  let a = 10;
  const b = 19;
  // var c = 22;
  console.log("Inner Result :", a);
}

console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Aman";

  function two() {
    const website = "Mdn for javascript";
    console.log(username);
  }
  // console.log(website);
  two();
}

one();


// ************************** INTERESTING ******************************
console.log(addOne(5)); // it is allowed
function addOne(num){   // It is called as a function.
  return num + 1;
}


console.log(addTwo(5)); // it is not allowed in it bcz of the expression function
const addTwo = function(num){  //It is also called as an expression.
  return num + 2;
}

