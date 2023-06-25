# Codewars JavaScript Solutions

---

## Alternate case

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper.
E.g: Hello World -> hELLO wORLD

### Solution 1

```
      function alternateCase(s) {
        let str = "";
        s = s.split("");
        for (char of s) {
          char === char.toLowerCase()
            ? (char = char.toUpperCase())
            : (char = char.toLowerCase());

          str += char;
        }
        return str;
      }

      console.log(alternateCase("abc"));

```

### Solution 2

```
function alternateCase(s) {
  return s.split('').map(function(el) {
    return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
  }).join('');
}
```
