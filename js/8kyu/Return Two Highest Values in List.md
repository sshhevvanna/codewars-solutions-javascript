# Codewars JavaScript Solutions

## Return Two Highest Values in List

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

### Examples:

```
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
```

### Solution

```
function twoHighest(arr) {
  if(arr.length <= 1){
    return arr;
  }
  arr.sort((a, b) => b - a);
  const newArr = [...new Set(arr)];
  return newArr[0] !== newArr[1] ? newArr.slice(0, 2) : newArr[0];
}
```
