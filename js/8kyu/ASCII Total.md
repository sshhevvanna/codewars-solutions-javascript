# Codewars JavaScript Solutions

## ASCII Total

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

### Examples:

```
uniTotal("a") == 97
uniTotal("aaa") == 291
```

### Solution

```
const uniTotal = (string) =>
  string.length > 0
    ? string.split("").reduce((accumulator, currentValue) => accumulator + currentValue.charCodeAt(), 0)
    : 0;
```
