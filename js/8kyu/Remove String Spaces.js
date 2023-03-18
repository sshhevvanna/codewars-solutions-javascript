//Simple, remove the spaces from the string, then return the resultant string.

//Solution 1
function noSpace(x) {
  return x.split(" ").join("");
}

//Solution 2
function noSpace(x) {
  return x.replace(/\s/g, "");
}
