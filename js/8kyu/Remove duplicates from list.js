/*Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.*/

function distinct(a) {
  let newArr = [];
  for (let i = 0; i <= a.length - 1; i += 1) {
    if (newArr.includes(a[i]) === false) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}
