# Codewars JavaScript Solutions

## Find the Squares

### Problem

Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

### Examples

9 --> "25-16"

5 --> "9-4"

7 --> "16-9"

### Solution

```
     const findSquares = (num) => {
        let multiplier1 = 0;
        let multiplier2 = 1;

        for (let i = 0; i <= num; i += 1) {
          if (multiplier2 ** 2 - multiplier1 ** 2 !== num) {
            multiplier1 += 1;
            multiplier2 += 1;
          } else {
            return `${multiplier2 ** 2}-${multiplier1 ** 2}`;
          }
        }
      };

      console.log(findSquares(1));
```
