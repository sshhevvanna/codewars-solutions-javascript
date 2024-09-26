# Codewars JavaScript Solutions

## Regexp Basics - is it a digit?

Implement `String#digit?` (in Java `StringUtils.isDigit(String)`), which should return `true` if given object is a digit (0-9), `false` otherwise.

### Solution 1

```
String.prototype.digit = function() {
  return Number(this) === parseFloat(this) && this.length === 1;
};
```

### Solution 2

```
String.prototype.digit = function() {
  return /^\d$/.test(this);
};
```

### Solution 3

```
String.prototype.digit = function() {
  return /^[0-9]$/.test(this);
};
```
