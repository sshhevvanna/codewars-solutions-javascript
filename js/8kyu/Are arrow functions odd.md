# Codewars JavaScript Solutions

## Are arrow functions odd?

Time to test your basic knowledge in functions! Return the odds from a list:

```
[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
```

### Solution

```
const odds = (values) => values.filter((number) => number % 2 !== 0);
```
