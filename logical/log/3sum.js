let a = [1, 2, -2, 0, -1];
let n = a.length;
let newarr = [];

for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if (a[i] + a[j] + a[k] === 0) {
                newarr.push([a[i], a[j], a[k]]);
            }
        }
    }
}

console.log(newarr);
