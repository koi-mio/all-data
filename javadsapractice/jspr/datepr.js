let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(typeof myDate);
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.getFullYear());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getTime());
console.log(myDate.getUTCDay());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2024, 0, 23);
let mycreatetime = new Date(12, 34);
console.log(mycreatetime.toISOString());
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
