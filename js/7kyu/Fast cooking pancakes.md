# Codewars JavaScript Solution

## Fast cooking pancakes (7kyu)

You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake one minute on each side. What is the minimum time you need to cook `n` pancakes, if you can put on the frying pan only `m` pancakes at a time? `n` and `m` are positive integers between 1 and 1000.

### Solution

```
function cookPancakes(n, m) {
  return n > m ? Math.ceil(n * 2 / m) : 2;
}
```
