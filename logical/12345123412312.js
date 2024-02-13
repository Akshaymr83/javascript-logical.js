
const prompt = require('prompt-sync')();
const x = 5;

for (let i = x; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}
