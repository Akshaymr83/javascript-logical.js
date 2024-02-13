let arr=[-5,1,5,0,-7];
let N=arr.length;
let sum = 0;
let gain =[];
for(let i=0;i<N;i++){
    sum +=arr[i];
    gain.push(sum);

}
gain.sort();
console.log(gain[N-1]);
