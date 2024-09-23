# Codewars JavaScript Solutions

## Parse float

Write function `parseF` which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

### Solution

```
function parseF(s) {
  const num = parseFloat(s);
  return isNaN(num) ? null : num;
}

```
