# Codewars JavaScript Solutions

## Simple Fun #184: LCM from m to n (7kyu)

### Task

Your task is to find the smallest number which is evenly divided by all numbers between `m` and `n` (both inclusive).

### Example

For `m = 1, n = 2`, the output should be `2`.

For `m = 2, n = 3`, the output should be `6`.

For `m = 3, n = 2`, the output should be `6` too.

For `m = 1, n = 10`, the output should be `2520`.

### Input/Output

- `[input]` integer `m`
  `1 ≤ m ≤ 25`

- `[input]` integer `n`
  `1 ≤ n ≤ 25`

- `[output]` an integer

### Solution

```
      function mnLCM(m, n) {
        if (m === n) return m;

        let integer = 0,
          startNumber = 0,
          endNumber = 0,
          addend = 0;

        if (m > n) {
          startNumber = n;
          endNumber = m;
          addend = m * (m - 1);
          integer = addend;
        } else {
          startNumber = m;
          endNumber = n;
          addend = n * (n - 1);
          integer = addend;
        }

        while(integer >= 0) {
          let number = endNumber;

          while (number >= startNumber) {
            if (integer % number !== 0) break;
            if (integer % number === 0 && number === startNumber){
              return integer;
            }
            number -= 1;
          }

          integer += addend;
        }
      }
```
