const prompt=require('prompt-sync')()
const number=prompt('enter a number: ');
if(number<1){
    console.log(`No Factorial for ${number}`);
}
else if(number==0){
    console.log('Factorial of 0 is 1');

}
else{
    let fact=1;
    for(i=1;i<=number;i++){
        fact *= i;
    }
    console.log(fact);
}