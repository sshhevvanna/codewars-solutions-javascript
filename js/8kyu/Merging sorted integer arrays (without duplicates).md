# Codewars JavaScript Solutions

## Merging sorted integer arrays (without duplicates)

Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

### Solution 1

```
function mergeArrays(a, b) {
  const array = [...a, ...b].sort((a, b) => a - b);
  const newArray = [];
  for(let i = 0; i < array.length; i += 1){
    if(array[i] !== array[i + 1]){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
```

### Solution 2

```
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b)=>a-b);
}
```
