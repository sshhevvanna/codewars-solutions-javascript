# Codewars JavaScript Solution

## Powers of i (7kyu)

`i` is the imaginary unit, it is defined by `i² = -1`, therefore it is a solution to `x²+1=0`.

### Your Task

Complete the function `pofi` that returns `i` to the power of a given non-negative integer in its simplest form,
as a string (answer may contain `i`).

### Solution 1

```
      function pofi(n) {
        while (n > 3) {
          n -= 4;
        }

        switch (n) {
          case 0:
            return "1";
          case 1:
            return "i";
          case 2:
            return "-1";
          case 3:
            return "-i";
        }
      }
```

### Solution 2

```
function pofi(n) {
    return ["1", "i", "-1", "-i"][n % 4];
    }
```
