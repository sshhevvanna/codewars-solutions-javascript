/*Complete the function that takes a non-negative integer n as input, 
and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]*/

//Solution #1
function powersOfTwo(n) {
  let arr = [];
  let num = 2;

  if (n === 0) {
    return [1];
  } else {
    arr = [1, 2];
  }

  while (n >= 2) {
    arr.push(num * 2);
    num = num * 2;
    n -= 1;
  }

  return arr;
}
console.log(powersOfTwo(4));

//Solution #2
function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i += 1) {
    result.push(Math.pow(2, i));
  }
  return result;
}
