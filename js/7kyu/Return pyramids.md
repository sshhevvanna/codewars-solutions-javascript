# Codewars JavaScript Solutions

## Return pyramids (7kyu)

The task is very simple.

You must to return pyramids. Given a number `n` you print a pyramid with n floors

For example , given a `n=4` you must to print this pyramid:

```
   /\
  /  \
 /    \
/______\
```

Other example, given a` n=6` you must to print this pyramid:

```
     /\
    /  \
   /    \
  /      \
 /        \
/__________\
```

Another example, given a `n=10`, you must to print this pyramid:

```
         /\
        /  \
       /    \
      /      \
     /        \
    /          \
   /            \
  /              \
 /                \
/__________________\
```

Note: a line feed character is needed at the end of the string. Case `n=0` should so return `"\n"`.

### Solution

```
function pyramid(n) {
        let pyramid = "";

        if (n === 0) {
          return "\n";
        } else if (n === 1) {
          return "/\\\n";
        }

        for (let i = 1; i <= n; i += 1) {
          let pyramidLevel = "";
          let spaces = "";
          let spacesBetween = "";

          for (let g = 0; g < n - 1; g += 1) {
            spaces += " ";
          }

          for (let q = 0; q < n - i; q += 1) {
            spacesBetween += " ";
          }

          for (let j = 0; j <= i; j += 1) {
            if (j === 0 && i === 1) {
              pyramidLevel = pyramidLevel.concat("/");
            } else if (j === 0) {
              pyramidLevel = pyramidLevel.concat("/");
            } else if (j === i) {
              pyramidLevel += "\\\n";
            } else if (i === n) {
              pyramidLevel += "__";
            } else {
              pyramidLevel += "  ";
            }
          }

          if (i === 1) {
            pyramid = pyramid.concat(spaces, pyramidLevel);
          } else {
            pyramid = pyramid.concat(spacesBetween, pyramidLevel);
          }
        }

        return pyramid;
      }
```
