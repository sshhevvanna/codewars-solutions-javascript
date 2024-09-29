# Codewars JavaScript Solutions

## Logical calculator

### Your Task

Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

### Examples

1. booleans = `[True, True, False]`, operator = `"AND"`
   `True` `AND` `True` -> `True`
   `True` `AND` `False` -> `False`
   return `False`
2. booleans = [`True`, `True`, `False`], operator = `"OR"`
   `True` `OR` `True` -> `True`
   `True` `OR` `False` -> `True`
   return `True`
3. booleans = [`True`, `True`, `False`], operator = `"XOR"`
   `True` `XOR` `True` -> `False`
   `False` `XOR` `False` -> `False`
   return `False`

### Input

1. an array of Boolean values `(1 <= array_length <= 50)`
2. a string specifying a logical operator: "`AND"`, `"OR"`, `"XOR"`

### Output

A Boolean value (`True` or `False`).

### Solution

```
function logicalCalc(array, op){
  let value = array[0];
  for(let i = 1; i < array.length; i += 1){
    if(op === "AND"){
      value = value && array[i];
    } else if(op === "OR"){
      value = value || array[i];
    } else {
      value = value ^ array[i];
    }
  }
  return Boolean(value);
}
```
