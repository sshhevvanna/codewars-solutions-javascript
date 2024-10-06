# Codewars JavaScript Solutions

## Enumerable Magic #2 - True for Any?

Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

### Solution 1

```
function any(arr, fun){
  for(let i = 0; i < arr.length; i += 1){
    if(fun(arr[i])){
      return true;
    }
  }
  return false;
}
```

### Solution 2

```
const any = (arr, fun) => arr.some(fun);
```
