# Codewars JavaScript Solutions

## Sum of Multiples

### Your Job

Find the sum of all multiples of `n` below `m`

### Keep in Mind

- `n` and `m` are natural numbers (positive integers)
- `m` is excluded from the multiples

### Examples

```
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
```

### Solution 1

```
function sumMul(n,m){
  if(n >= m) return "INVALID";
  let i = Math.floor(m / n);
  if(i === m / n){
    i -= 1;
  }
  let sum = 0;
  while(i > 0){
    sum += n * i;
    i -= 1;
  }
  return sum;
}
```

### Solution 2

```
function sumMul(n,m){
  if (n >= m) return "INVALID";

var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}
```
