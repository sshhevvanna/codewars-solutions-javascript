/*You will be given an array and a limit value. 
You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.
You can assume all values in the array are numbers.*/

//Solution #1
function smallEnough(a, limit) {
  return a.every((num) => num <= limit);
}

//Solution #2
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}

//Solution #3
function smallEnough(a, limit) {
  for (let i of a) {
    if (i > limit) return false;
  }
  return true;
}
