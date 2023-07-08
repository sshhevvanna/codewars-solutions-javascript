# Codewars JavaScript Solutions

---

## Cubes in the box

Your job is to write a function `f(x,y,z)` to count how many cubes of any size can fit inside a `x*y*z` box. For example, a `2*2*3` box has 12 `1*1*1` cubes, 2 `2*2*2` cubes, so a total of `14` cubes in the end. See the animation below for a visual description of the task!

Notes:
`x,y,z` are strictly positive and will not be too big.

### Solution

```
      function f(x, y, z) {
        const volume = x * y * z;
        let side = 2,
          total = 0,
          step = 1,
          m = 0,
          n = 0,
          k = 0;

        while (volume >= side ** 3) {
          while (side + (step - 1) <= x) {
            m += 1;
            step += 1;
          }
          step = 1;
          while (side + (step - 1) <= y) {
            n += 1;
            step += 1;
          }
          step = 1;
          while (side + (step - 1) <= z) {
            k += 1;
            step += 1;
          }
          total += k * m * n;

          side += 1;
          step = 1;

          k = 0;
          m = 0;
          n = 0;
        }

        return (total += volume);
      }
      console.log(f(3, 2, 4));
```
