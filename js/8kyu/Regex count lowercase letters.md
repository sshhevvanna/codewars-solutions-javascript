# Codewars JavaScript Solutions

## Regex count lowercase letters

Your task is simply to count the total number of lowercase letters in a string.

### Examples

```
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
```

### Solution

```
const lowercaseCount = (str) =>
  str.split("").filter((char) => /[a-z]/.test(char)).length;
```
