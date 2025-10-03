// *************************Functions With Objects*********************
function callName() {
  console.log("A");
  console.log("M");
  console.log("A");
  console.log("N");
}

// callName();

// Add Two Number Function
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
// addTwoNumber(5, 7);

function addTwoNumber(number1, number2) {
  return number1 + number2;
}

// console.log(addTwoNumber(2,4));
// const result = addTwoNumber(5,9);
// console.log("Result:",result);

function loginUser(username = "Aman") {
  if (!username) {
    console.log("Please enter username");
  }
  return `${username} just Logged IN`;
}

// console.log(loginUser("Raman"));

function calculatePrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculatePrice(200, 300, 400, 2000, 1000, 8000));

const user = {
  name: "Aman Kumar",
  age: 21,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.name} and his age is ${anyObject.age}`);
}

// handleObject(user);
handleObject({
  name: "Sahil Kumar",
  age: 88,
});


// ************************Functions With Array Objects***************************
const myNewArray = [200, 400, 600, 900];

function returnSecondValue(getNewarray) {
  return getNewarray[2];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2, 4, 5, 6, 9]));
