// let n= 5;
// let string ="";
// for(let i = 0; i< n ; i++){
//     for(let j =0 ; j< n;j++){
//         string +='*';
//     }
//     string+="\n";
// }
// console.log(string);

// // //////////////////////////////////////////////////////////////
// let l=5 ;
// let str="";
// for(let i=0;i<l;i++){
//     for(j=0 ;j<l;j++){
//         if(i === 0 || i === l-1){
//             str +="*";
//         }
//         else{
//            if(j===0 || j=== l-1){
//             str += "*";
//            }
//            else{
//             str +="";
//            }
//         }
//     }
//     str +="\n";
// }

// console.log(str);

let n=5;
let string ="";
for (let i =1 ;i <= n; i++){
    for(let j = 1;j <= n-i ; j++){
        string +=" ";
        }
        for (let k= 0;k< 2 * i -1; k++){
            string +="*";
        }
        string   +="\n";
        
}
console.log(string);



let nn = 5;
let stringg = "";
// External loop
for (let i = 0; i <= nn; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    stringg += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    stringg += "*";
  }
  stringg += "\n";
}
console.log(stringg);