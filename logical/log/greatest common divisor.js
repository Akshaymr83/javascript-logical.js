let a=12;
let b=24;
let div=[];
let n=div.length;
for (let i=0;i<=a;i++){
    if(a % i===0 || b % i===0 ){
        div.push(i);
        
    }
}
console.log(div[div.length-1]);
