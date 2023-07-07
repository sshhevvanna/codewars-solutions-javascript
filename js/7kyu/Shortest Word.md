# Codewars JavaScript Solutions

---

## Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

### Solution

```
function findShort(s) {
  s = s.split(" ");
  let shortest = s[0].length;
  for (let i = 0; i <= s.length - 1; i += 1) {
    if (s[i].length < shortest) {
      shortest = s[i].length;
    }
  }
  return shortest;
}
```
