# Codewars JavaScript Solutions

## Enumerable Magic #4 - True for None?

Create a method none? (JS `none`) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

### Solution

```
function none(arr, fun){
  for (let i = 0; i < arr.length; i += 1){
    if (fun(arr[i])){
       return false;
    }
  }
  return true;
}
```
