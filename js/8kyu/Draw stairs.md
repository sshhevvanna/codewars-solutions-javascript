# Codewars JavaScript Solutions

## Draw stairs

Given a number `n`, draw stairs using the letter `"I"`, `n` tall and `n` wide, with the tallest in the top left.

For example `n = 3` result in:

```
"I\n I\n  I"
```

or printed:

```
I
 I
  I
```

Another example, a 7-step stairs should be drawn like this:

```
I
 I
  I
   I
    I
     I
      I
```

### Solution

```
function drawStairs(n) {
  let string = "";
  for(let i = 1; i < n; i += 1){
    string += "I\n";
    for(let j = 0; j < i; j += 1){
      string += " ";
    }
  }
  return string + "I";
}
```
