# Codewars JavaScript Solutions

## Wilson primes (8kyu)

[Wilson primes](https://en.wikipedia.org/wiki/Wilson_prime) satisfy the following condition. Let `P` represent a prime number.

Then,
`((P-1)! + 1) / (P * P)`
should give a whole number.

Your task is to create a function that returns `true` if the given number is a **Wilson prime**.

### Solution

```
      function amIWilson(p) {
        return p === 5 || p === 13 || p === 563;
      }
```
