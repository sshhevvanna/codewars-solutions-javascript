/*In this simple exercise, you will build a program that takes a value, integer, 
and returns a list of its multiples up to another value, limit . 
If limit is a multiple of integer, it should be included as well. 
There will only ever be positive integers passed into the function, not consisting of 0. 
The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

*/

//Solution #1
function findMultiples(integer, limit) {
  let arr = [];
  let newInt = integer;
  do {
    arr.push(newInt);
    newInt += integer;
  } while (newInt + integer <= limit + integer);
  return arr;
}

//Solution #2
function findMultiples(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) {
    result.push(i);
  }

  return result;
}

//Solution #3
const findMultiples = (i, l) => {
  let max = 0,
    r = [];
  while (max + i <= l) {
    max += i;
    r.push(max);
  }
  return r;
};
