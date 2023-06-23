//Simple, remove the spaces from the string, then return the resultant string.

//Solution 1
function noSpace(x) {
  return x.split(" ").join("");
}

//Solution 2
function noSpace(x) {
  return x.replace(/\s/g, "");
}

//Solution 3
function noSpace(x) {
  x = x.split(" ");
  let str = "";
  for (let i = 0; i < x.length; i += 1) {
    if (x[i] !== "") {
      str += x[i];
    }
  }
  return str;
}
