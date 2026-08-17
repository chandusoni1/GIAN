// swaping of two number using two variables

let a = 120;
let b = 520;
let c = a; // this vaiable used to store the value of a otherwise both valuee get same
a = b;
b = c;
console.log("value of a " + a, "value of b" + b);

// swapping of two numbers without using third variables

let a = 150;
let b = 550;

a = a + b;
b = a - b;
a = a - b;
console.log("value of a" + a, "value of b" + b);

//caluculate simple interest

let p = prompt("entre the principle amount");
let r = prompt("enter the rate per annaum");
let t = prompt("enter time period");
let si = 0;
si = (p * r * t) / 100;
console.log(si);

//area of circle
let A = 0;
let r = prompt("enter the radius");
A = 3.14 * r * r;
console.log(A);

// area of rectangle
let A = 0;
let w = prompt("enter the widht of a rectangle");
let h = prompt("enter the hight of the rectangle");
A = w * h;
console.log(A);
