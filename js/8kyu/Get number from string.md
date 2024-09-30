# Codewars JavaScript Solutions

## Get number from string

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

```
getNumberFromString(s)
```

### Solution

```
function getNumberFromString(s) {
  let num = s.split("").filter((char) => /\d/.test(Number(char))).join("");
  num = num.toString().replaceAll(" ", "");
  return Number(num);
}
```
