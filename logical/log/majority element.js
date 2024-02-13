let arr = [2,1,2];
let n = arr.length;
let a = arr.sort();

for (let i = 0; i < n - 1; i++) {
    if (a[i] === a[i + 1]) {
        console.log(a[i]);
        break;
        
    }
    else{
        console.log(arr.toString())
    }
  
}
////////////////////////////////////

  
// }

// let arr = [2, 1, 2,2, 1, 4, 7,  6, 4, 6,6,6,6,6];
// let n = arr.length;
// let a = arr.sort(); 

// let Count2 = 0;
// let max;

// for (let i = 0; i < n - 1; i++) {
//     let Count = 1;
//     while (a[i] === a[i + 1]) {
//         Count++;
//         i++;
//     }

//     if (Count > Count2) {
//         Count2 = Count;
//         max = a[i];
//     }
// }

// console.log(max);
