# Codewars JavaScript Solutions

---

## Two to One

Take 2 strings s1 and s2 including only letters from a to z.
Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:

```
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

### Solution 1

```
function longest(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  s1.push(...s2);
  let array = s1.sort();
  let newArr = [];
  for (let i = 0; i <= array.length - 1; i += 1) {
    if (array[i] != array[i + 1]) {
      newArr.push(array[i]);
    }
  }
  return newArr.join("");
}
console.log(longest("aretheyhere", "yestheyarehere"));
```

### Solution 2

```
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
```

### Solution 3

```
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}
```
