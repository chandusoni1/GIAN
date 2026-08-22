// if condition

// if (condition) {

// }

//checking for even and odd
let num = parseInt(prompt("enter any number"));
if (num % 2 == 0) {
  console.log(num + "is even number");
} else {
  console.log(num + "is odd no.");
}

//checking for positive and negetive
let num = parseInt(prompt("enter any number"));
if (num >= 0) {
  console.log(num + "is positive number");
} else {
  console.log(num + "is negetive no.");
}

// print greatest no.
let num_1 = parseInt(prompt("entre any integer"));
let num_2 = parseInt(prompt("entre any integer"));

if (num_1 > num_2) {
  console.log(num_1 + "is gretest");
} else if (num_1 < num_2) {
  console.log(num_2 + "is gretest");
} else {
  console.log("both number are same");
}

//print gretest no. out of three

let num_1 = parseInt(prompt("enter any integer")); // parseint converts the string in to number becuase ,  prompt statement in javascript return a string
let num_2 = parseInt(prompt("enter any integer"));
let num_3 = parseInt(prompt("enter any integer"));

if (num_1 > num_2 && num_1 > num_3) {
  // && operator checks both statemnt are true or not
  console.log(num_1 + "is gretest");
} else if (num_2 > num_1 && num_2 > num_3) {
  console.log(num_2 + "is the gretest");
} else {
  console.log(num_3 + "is the gretest");
}

