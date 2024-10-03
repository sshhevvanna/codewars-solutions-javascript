# Codewars JavaScript Solutions

## They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?

### Task

Give you two strings: `s1` and `s2`. If they are opposite, return `true`; otherwise, return `false`. Note: The result should be a boolean value, instead of a string.

The `opposite` means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return `false`/`False`.

### Examples (input -> output)

```
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false
```

### Solution

```
function isOpposite(s1, s2){
  if(s1 === "" && s2 === "") return false;
  s1 = s1.split("").map((char) => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join("");
  return s1 === s2;
}
```
