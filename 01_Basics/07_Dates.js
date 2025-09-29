// Date

let myDate = new Date()
// console.log(myDate); //2025-09-23T07:58:19.992Z
// console.log(myDate.toString()); //Tue Sep 23 2025 13:28:19 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2025-09-23T07:58:19.992Z
// console.log(myDate.toDateString()); //Tue Sep 23 2025
// console.log(myDate.toLocaleDateString()); //23/9/2025
// console.log(myDate.toTimeString()) //13:28:19 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 14, 30);
// console.log(myCreatedDate.toLocaleString()); //23/1/2023, 2:30:00 pm

let myCreatedDate = new Date("01-14-2025");
// console.log(myCreatedDate.toLocaleString()); //14/1/2025, 12:00:00 am

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
  weekday: 'long'
})

