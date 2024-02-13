const prompt=require('prompt-sync')()

let num1 =prompt ("enter the first number :");
let num2 =prompt ('enter the second number : ');
let temp;
temp=num1;
num1=num2;
num2=temp;

console.log(`The Swapped value is  ${num1}`);
console.log(`The Swapped value  is ${num2}`);