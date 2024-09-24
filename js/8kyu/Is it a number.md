# Codewars JavaScript Solutions

## Is it a number?

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

```
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
```

should return false:

```
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
```

### Solution 1

```
function isDigit(s) {
        const arr = s.split(" ");
        let dot = 0;
        let minus = 0;
        let symbol = 0;
        let str = arr.join("");

        if (arr.length !== 1 || Boolean(arr[0]) === false) return false;

        for (let i = 0; i < str.length; i += 1) {
          if (!"0123456789".includes(str[i])) {
            if (str[i] === ".") {
              dot += 1;
            } else if (str[i] === "-" && i === 0) {
              minus += 1;
            } else {
              symbol += 1;
            }
          }

          if (dot >= 2 || minus >= 2 || symbol >= 1) return false;
        }

        return true;
      }
```

### Solution 2

```
function isDigit(s) {
  return parseFloat(s) === Number(s)
}
```
