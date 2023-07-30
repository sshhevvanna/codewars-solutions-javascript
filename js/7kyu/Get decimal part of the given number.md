# Codewars JavaScript Solutions

## Get decimal part of the given number

Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not `Infinity`, `NaN`, or similar. Always return a positive decimal part.

### Examples

```
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
```

### Solution 1

```
     function getDecimal(n) {
       if(n == Math.ceil(n)){
         return 0;
       }

        n = n.toString();

        for (let i = 0; i < n.length; i += 1) {
          if (n[i] == ".") {
            return Number(n.slice(i, n.length));
          }
        }
      }
```

### Solution 2

```
function getDecimal(n){
  return Math.abs(n%1);
}
```
