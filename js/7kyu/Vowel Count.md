# Codewars JavaScript Solutions

---

## Vowel Count

Return the number (count) of vowels in the given string.
We will consider `a`, `e`, `i`,`o`, `u` as vowels for this Kata (but not `y`).
The input string will only consist of lower case letters and/or spaces.

### Solution

```
function getCount(str) {
  let total = 0;
  let regexp = /[aeiou]/gi;
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (str[i].match(regexp)) {
      total += 1;
    }
  }
  return total;
}
```
