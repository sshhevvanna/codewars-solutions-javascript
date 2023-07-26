# Codewars JavaScript Solutions

---

## Vowel one

Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

### Examples:

`vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"`

### Solution 1

```
      function vowelOne(s) {
        let newString = "";

        for (let i = 0; i < s.length; i += 1) {
          if (s[i].match(/[aeiou]/gi)) {
            newString += "1";
          } else {
            newString += "0";
          }
        }

        return newString;
      }
```

### Solution 2

```
function vowelOne(s){
  return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
}
```

### Solution 3

```
function vowelOne(s){
  s = s.toLowerCase()
  const arr = ['a', 'e', 'i', 'o', 'u']
  let result = ''
  for (el of s) {
    arr.includes(el) ? result += '1' : result += '0'
  }
  return result
}

```
