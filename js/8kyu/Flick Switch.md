# Codewars JavaScript Solutions

## Flick Switch

### Task

Create a function that always returns `True/true` for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

### Examples

```
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
```

### Notes

- "flick" will always be given in lowercase.
- A list may contain multiple flicks.
- Switch the boolean value on the same element as the flick itself.

### Solution 1

```
      function flickSwitch(arr) {
        let value = true;
        let newArr = [];
        arr.map((el) => {
          if (el !== "flick") {
            newArr.push(value);
          } else {
            value === true ? (value = false) : (value = true);
            newArr.push(value);
          }
        });
        return newArr;
      }
```

### Solution 2

```
function flickSwitch(arr){
  let flag = true
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'flick'){
      flag == false ? flag = true : flag = false
    }
    arr[i] = flag
  }
  return arr
}
```

### Solution 3

```
function flickSwitch(arr){
  let returning = true;
    return arr.map( (v) => {
      return (v === "flick") ? returning = !returning : returning;
    })
}
```
