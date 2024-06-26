# Codewars JavaScript Solutions

## Enumerable Magic #1 - True for All? (8kyu)

### Task

Create a method all which takes two params:

- a sequence
- a function (function pointer in C)

and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

### Example

```
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
```

### Solution 1

```
function all( arr, fun ){
  for(let i = 0; i < arr.length; i += 1){
    if (fun(arr[i]) == false) {return false};
  }
  return true;
}
```

### Solution 2

```
function all( arr, fun ){
  return arr.every(fun)
}
```
