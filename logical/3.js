const prompt=require('prompt-sync')()
const number=prompt('enter a number');
//  let fact=1;
//  for(i=1;i<=number;i++){
//     fact*=i;
    
//  }
//  console.log('fact');

if(number<1){
    console.log("no factorial");

}
else if(number===0){
  
    
    console.log('no factorial');
}
else{
    let fact=1;
    for(i=1;i<=number;i++){
        fact*=i;
}
console.log(fact);
}