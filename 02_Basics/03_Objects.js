// Singleton
// Object.create

// Object Literals

const mySym = Symbol("Key1");

const JsUser = {
  name: "Aman",
  "Full name": "Aman Kumar",
  [mySym]: "MyKey1",
  age: 22,
  email: "amankumar@gmail.com",
  location: "Punjab",
  isLoggedIn: false,
  LastLoggedIn: ["Monday", "Saturday", "Sunday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Sahil@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "Sahil@microsoft.com";
// console.log(JsUser);

JsUser.greetings = function () {
  console.log("Hello Js User");
};

JsUser.greetingtwo = function () {
  console.log(`Hello Js User, ${this.name}`);
};

console.log(JsUser.greetings());
console.log(JsUser.greetingtwo());
