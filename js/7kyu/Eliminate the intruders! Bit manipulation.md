# Codewars JavaScript Solutions

---

## Eliminate the intruders! Bit manipulation

### Task

You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

`function eliminateUnsetBits(number);`

### Examples

```
eliminateUnsetBits("11010101010101") -> 255 (= 11111111)
eliminateUnsetBits("111") -> 7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0
```

### Solution

```
      function eliminateUnsetBits(number) {
        let arr = number.split("").filter((x) => x > 0);
        let factors = [];
        let newArr = [];
        for (let i = 0; i < arr.length; i += 1) {
          factors.push(2 ** i);
        }
        for (let i = 0; i < arr.length; i += 1) {
          newArr.push(arr[i] * factors[i]);
        }
        return newArr.reduce((total, value) => total + value, 0);
      }
```
