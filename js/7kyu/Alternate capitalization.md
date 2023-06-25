# Codewars JavaScript Solutions

---

## Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.
Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!

### Solution 1

```
function capitalize(s) {
  s = s.split("");
  let evenStr = "";
  let oddStr = "";
  for (let i = 0; i <= s.length - 1; i += 1) {
    if (i % 2 === 0) {
      evenStr += s[i].toUpperCase();
      oddStr += s[i];
    } else {
      oddStr += s[i].toUpperCase();
      evenStr += s[i];
    }
  }

  return [evenStr, oddStr];
}
console.log(capitalize("codewarriors"));
```

### Solution 2

```
function capitalize(s) {
  const odd = s
    .split("")
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join("");
  const even = s
    .split("")
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join("");
  return [even, odd];
}
```
