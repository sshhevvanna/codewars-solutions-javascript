# Codewars JavaScript Solutions

## Odd-Even String Sort

### DESCRIPTION:

Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

### Note:

0 is considered to be an even index.
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

```
S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
```

Even indices `0, 2, 4, 6,` so we have 'CdWr' as the first group
odd ones are `1, 3, 5, 7,` so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'

---

Enjoy.

### Solution 1

```
      function sortMyString(s) {
        let newString = "";

        for (let i = 0; i < s.length; i += 2) {
          newString += s[i];
        }

        newString += " ";

        for (let i = 1; i < s.length; i += 2) {
          newString += s[i];
        }

        return newString;
      }
```

### Solution 2

```
const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}

```

### Solution 3

```
function sortMyString(S) {
  let strEven = ''
  let strOdd = ''
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      strEven += S[i]
    }
    else {
      strOdd += S[i]
    }
  }
  return strEven + ' ' + strOdd
}
```
