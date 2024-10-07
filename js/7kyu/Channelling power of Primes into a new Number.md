# Codewars JavaScript Solutions

## Channelling power of Primes into a new Number

Let's look on natural numbers (counting from 1) and mark each number as 1 if it is prime and 0 otherwise.

`1 2 3 4 5 6 7 8 ...`

`0 1 1 0 1 0 1 0 ...`

For given number `n` output an integer whose bits are exactly bits of sequence above up to (including) `n`. Consider little-endian order.

`n` <= 10 000.

### Example

Let `n` be 9.

`1  2  3  4  5  6  7  8  9` - naturals

`0  1  1  0  1  0  1  0  0` - "prime" bits

`1  2  4  8 16 32 64 128 256` - corresponding powers of two

So `channelling_powers(9)` equals `2 + 4 + 16 + 64 = 86`.

### Solution

```
function channellingPrimes(n) {
  let sum = 0n;
  let poweredNumber = 1n;

  for(let i = 1; i <= n; i += 1){
    for(let j = 1; j <= i; j += 1){
      if(i !== 1 && j === i) {
        sum += poweredNumber;
      }
      
      if(i % j === 0 && j !== 1){
        break;
      }
    }
    poweredNumber *= 2n;
  }
  return sum;
}
```
