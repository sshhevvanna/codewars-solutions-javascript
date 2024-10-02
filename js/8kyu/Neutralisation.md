# Codewars JavaScript Solutions

## Neutralisation

Given two strings comprised of `+` and `-`, return a new string which shows how the two strings interact in the following way:

- When positives and positives interact, they _remain positive_.
- When negatives and negatives interact, they _remain negative_.
- But when negatives and positives interact, they _become neutral_, and are shown as the number `0`.

### Worked Example

```
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
```

### Examples

```
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
```

### Notes

The two strings will be the same length.

### Solution

```
function neutralise(s1, s2) {
  s1 = s1.split("");
  for(let i = 0; i < s1.length; i += 1){
    if(s1[i] !== s2[i]){
      s1[i] = 0;
    }
  }
  return s1.join("");
}
```
