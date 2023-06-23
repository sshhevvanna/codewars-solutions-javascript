/*Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.*/

//Solution #1
function toBinary(n) {
  return Number(n.toString(2));
}

//Solution #2
function toBinary(n) {
  let str = "";
  while (n > 0) {
    if (n % 2 === 0) {
      str += "0";
      console.log(str);
      n = parseInt(n / 2);
      console.log(n);
    } else {
      str += "1";
      n = parseInt(n / 2);
    }
  }
  return Number(str.split("").reverse().join(""));
}
