// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "12345kkk";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email : "amankumar33@gmail.com",
  fullname : {
    userFullName:{
      firstName : "Aman",
      lastName : "Kumar",
    }
  }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: 'a', 2: 'e'};
const obj2 = {3: 'a', 4: 'e'};
const obj3 = {5: 'a', 6: 'e'};

// const obj4 = Object.assign({},obj1,obj2,obj3);

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

const user = [
  {
    id : 1,
    email : "amankumar2003.in@gmail.com"
  },
  {
    id : 2,
    email : "amankumar2003.in@gmail.com"
  },
  {
    id : 3,
    email : "amankumar2003.in@gmail.com"
  },
]

user[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isLoggedIn'));


