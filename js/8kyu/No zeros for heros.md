# Codewars JavaScript Solutions

## No zeros for heros

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

```
1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
```

Zero alone is fine, don't worry about it. Poor guy anyway.

### Solution 1

```
function noBoringZeros(n) {
  if(n === 0){
    return 0;
  } else {
    let arr = n.toString().split("");
    const i = arr.findLastIndex((int) => int !== "0");
    const num = arr.slice(0, i + 1).join("");
    return Number(num);
  }
}
```

### Solution 2

```
function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}
```

### Solution 3

```
function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10
  }
  return n
}
```
