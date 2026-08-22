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
let n = parseInt(prompt("enter any digit"));// parseInt  is used to covert srtings in to number
for (i = 1; i <= n; i++) {
  console.log(i); // this will print the counting of n natural number
  sum += i; // this will sum the natural numbers and stored under variable name sum 
}
console.log("sum of " + n + " natural numbers" + sum); // sum will print out of loop , so it can print once , if we use it under the loop then sum is also print n number of times
