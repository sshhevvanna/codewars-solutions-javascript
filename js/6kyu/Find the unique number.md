# Codewars JavaScript Solutions

---

## Find the unique number

There is an array with some numbers. All numbers are equal except for one. Try to find it!

```
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
```

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

### Solution

```
function findUniq(arr) {
  let unique = 0;
  let matches = arr.filter((num) => num == arr[0]);
  if (matches.length === 1) {
    unique = arr[0];
  } else {
    unique = arr.find((num) => num !== arr[0]);
  }
  return unique;
}
console.log(findUniq([0, 2, 2]));
```
