//for loop basically gives counting

// print first 10 natural numbers
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// print sum of 10 natural numbers
let sum = 0; // sum initialize
for (i = 0; i <= 10; i++) {
  sum += i; // (+) is an arithmatic operator used for addition, sum stores the addded value ,eg -  i=1 ,(0+1=1),sum = 1,i=2(1+2=3), sum=3....
}
console.log(sum);

// print n natural number with its sum valued

let sum = 0; // intialize the sum
let n = parseInt(prompt("enter any digit")); // parseInt  is used to covert srtings in to number
for (i = 1; i <= n; i++) {
  console.log(i); // this will print the counting of n natural number
  sum += i; // this will sum the natural numbers and stored under variable name sum
}
console.log("sum of " + n + " natural numbers" + sum); // sum will print out of loop , so it can print once , if we use it under the loop then sum is also print n number of times

// print cube of n natural number

let cube = 0; // initialize cube
let n = parseInt(prompt("enter any digit")); // parseInt is used to covert string to number
for (i = 0; i <= n; i++) {
  cube = i * i * i; // it can 3 times the i values
}
console.log("cube of " + n + " is " + cube);

// cube tabel
let cube = 0; // initialize cube
let n = parseInt(prompt("enter any digit")); // parseInt is used to covert string to number
for (i = 0; i <= n; i++) {
  cube = i * i * i; // it can 3 times the i values

  console.log("cube of " + i + " is " + cube);
} // this will print the cube table
