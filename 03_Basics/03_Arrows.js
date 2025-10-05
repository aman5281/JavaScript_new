const user = {
  username: "Aman",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
  },
};

// user.welcomeMessage();
// user.username = "Sahil";
// user.welcomeMessage();


// +++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++
// const addOne = (num1, num2) => {
//   return num1 + num2;
// }

// const addOne = (num1, num2) =>  num1 + num2; //This is also known as an implicit function

const addTwo = (num1, num2) => ({username : "Aman Kumar"});

console.log(addTwo(3, 4));
