# Codewars JavaScript Solutions

## Sum of differences in array

Your task is to sum the differences between consecutive pairs in the array in descending order.

### Example

```
[2, 1, 10]  -->  9
```

In descending order: `[10, 2, 1]`

Sum: `(10 - 2) + (2 - 1) = 8 + 1 = 9`

If the array is empty or the array has only one element the result should be `0` (`Nothing` in Haskell, `None` in Rust).

### Solution 1

```
function sumOfDifferences(arr) {
  if(arr.length < 2) return 0;
  arr.sort((a, b) => b - a);
  return arr[0] - arr[arr.length - 1];
}
```

### Solution 2

```
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
```
