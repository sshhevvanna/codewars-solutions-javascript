# Codewars JavaScript Solutions

## Grasshopper - Order of operations

You are running the calculation 2 + 2 _ 2 + 2 _ 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

### Solution

```
const orderOperations = () => (2 + 2) * (2 + 2) * 2;
```
