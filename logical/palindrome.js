// const prompt=require('prompt-sync')()
// const st=prompt('enter a string: ');
// let strtwo=str.reverse();
// if(str=strtwo){
//     console.log('the string is palindrome');
// }
// else{
//     console.log(' no palindrome');
// }
const prompt = require('prompt-sync')();
const str = '4354';

// Convert the string to an array, reverse it, and then join it back to form a reversed string
let strTwo = str.split('').reverse().join('');

if (str === strTwo) {
    console.log('The string is a palindrome');
} else {
    console.log('Not a palindrome');
}
