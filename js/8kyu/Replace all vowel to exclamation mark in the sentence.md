# Codewars JavaScript Solutions

## Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

### Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

### Examples

```
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
```

### Solution 1

```
  function replace(s) {
    let newStr = "";
    for (let i = 0; i < s.length; i += 1) {
      if (/[aeoiu]/gi.test(s[i])) {
        newStr += "!";
      } else {
        newStr += s[i];
      }
    }
    return newStr;
  }
```

### Solution 2

```
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')
}
```
