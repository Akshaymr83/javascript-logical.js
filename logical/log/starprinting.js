let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing stars - corrected indentation
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
