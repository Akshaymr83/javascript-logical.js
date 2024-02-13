const prompt=require('prompt-sync')()

const x=prompt('enter a number :');
let a=0;
let b=1;
for (i=0;i<=x;i++){

    console.log(a);
    let next=a+b;
    a=b;
    b=next;
}