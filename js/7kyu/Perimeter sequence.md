# Codewars JavaScript Solutions

---

## Perimeter sequence

The blocksize is `a` by `a` and `a ≥ 1`.
What is the perimeter of the nth shape in the sequence `(n ≥ 1)` ?

### Solution
```
function perimeterSequence(a, n) {
  return n * 4 * a;
}
```