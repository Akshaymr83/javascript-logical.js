const arr =[1,5,7,1];
const N= arr.length;
const k=6;
let count='';

for( let i=0 ; i<=N; i++){
    for( let j=i+1 ; j<=N ;j++){
    
    if(arr[i] +arr[j]===6){
        count++;

    }
    
  }
   
}
    console.log(count) ;


