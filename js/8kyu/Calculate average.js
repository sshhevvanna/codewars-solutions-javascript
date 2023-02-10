/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/

function findAverage(array) {
  let sum = 0;
  array.forEach((num) => (sum += num));
  return sum >= 1 ? sum / array.length : 0;
}
