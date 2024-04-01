# Codewars JavaScript Solutions

## Simple Fun #21: Number Of Clans (7kyu)

### Task

Let's call two integers A and B friends if each integer from the array divisors is either a divisor of both A and B or neither A nor B. If two integers are friends, they are said to be in the same clan. How many clans are the integers from 1 to k, inclusive, broken into?

### Example

For `divisors = [2, 3] and k = 6`, the output should be `4`

The numbers 1 and 5 are friends and form a clan, 2 and 4 are friends and form a clan, and 3 and 6 do not have friends and each is a clan by itself. So the numbers 1 through 6 are broken into 4 clans.

### Input/Output

- `[input]` integer array `divisors`

A non-empty array of positive integers.

Constraints: `2 ≤ divisors.length < 10, 1 ≤ divisors[i] ≤ 10`.

- `[input]` integer `k`

A positive integer.

Constraints: `5 ≤ k ≤ 50`.

- [output] an integer

### Solution

```
  function numberOfClans(divisors, k) {
        const uniqueDivisors = [...new Set(divisors)];
        let dividends = [];
        let total = 0;
        let allMutual = 0;
        let noneMutual = 0;

        while (k > 0) {
          dividends.push(k);
          k -= 1;
        }

        for (let i = 0; i < dividends.length; i += 1) {
          let notDivisors = 0;
          let mutualDivisors = [];

          for (let j = 0; j < uniqueDivisors.length; j += 1) {
            if (dividends[i] % uniqueDivisors[j] !== 0) {
              notDivisors += 1;
            } else {
              mutualDivisors.push(uniqueDivisors[j]);
            }
          }

          if (
            notDivisors === 0 &&
            allMutual === 0 &&
            /[\p{N}]/u.test(dividends[i])
          ) {
            allMutual += 1;
            dividends[i] = "";
            mutualDivisors = [];
          } else if (
            notDivisors === uniqueDivisors.length &&
            (noneMutual === 0) & /[\p{N}]/u.test(dividends[i])
          ) {
            noneMutual += 1;
            dividends[i] = "";
            mutualDivisors = [];
          } else if (
            notDivisors === uniqueDivisors.length ||
            notDivisors === 0
          ) {
            dividends[i] = "";
            mutualDivisors = [];
          } else {
            for (let g = 1; g < dividends.length; g += 1) {
              let noneMutualCounter = 0;

              for (let q = 0; q < uniqueDivisors.length; q += 1) {
                if (
                  (dividends[g] % uniqueDivisors[q] === 0 &&
                    !mutualDivisors.includes(uniqueDivisors[q])) ||
                  (dividends[g] % uniqueDivisors[q] !== 0 &&
                    mutualDivisors.includes(uniqueDivisors[q]))
                ) {
                  noneMutualCounter += 1;
                }
              }

              if (noneMutualCounter === 0) {
                dividends[g] = "";
              }
            }

            total += 1;
          }

          mutualDivisors = [];
          dividends[i] = "";
        }

        return total + allMutual + noneMutual;
      }

```
