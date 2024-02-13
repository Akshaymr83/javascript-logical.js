let a=[1,2,-2,0,-1]
let n=a.length;
let newarr=[];
for (let i=0; i<=n;i++){
    if(a[i] +a[i+1]+a[i+2]===0){
  
        newarr.push(a[i],a[i+1],a[i+2])
    }
}
console.log(newarr);