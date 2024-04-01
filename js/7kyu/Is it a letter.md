# Codewars JavaScript Solutions

## Is it a letter? (7kyu)

Write a function, `isItLetter` or `is_it_letter` or `IsItLetter`, which tells us if a given character is a letter or not.

### Solution 1

```
function isItLetter(character) {
// \p{L} matches a single code point in the category "letter"
// flag 'u' enables the support of Unicode in regular expressions
  return /[\p{L}]/iu.test(character);
}
```

### Solution 2

```
function isItLetter(character) {
  return /[a-z]/i.test(character);
}
```

### Solution 3

```
function isItLetter(character) {
    const charCode = character.charCodeAt(0);
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}
```

### Solution 4

```
function isItLetter(character) {
    return character.toUpperCase() !== character.toLowerCase();
}
```
