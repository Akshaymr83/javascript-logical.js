// 
const prompt = require('prompt-sync')();

let P = prompt('Enter principle: ');
let T = parseInt(prompt('Enter time of period: '));
let R = parseFloat(prompt('Enter rate of interest: '));

let CP = P * (1 + R / 100) ** T;
console.log(CP);
