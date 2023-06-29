# Codewars JavaScript Solutions

---

## Highest and Lowest

In this little assignment you are given a string of space separated numbers,
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")and have to return the highest and lowest number.

### Examples

```
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

### Notes

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

### Solution 1

```
function highAndLow(numbers) {
  let arr = [];
  let answer = [];
  numbers = numbers.split(" ");
  numbers.forEach((num) => {
    num = Number(num);
    arr.push(num);
  });

  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  answer.push(max);
  answer.push(min);
  return answer.join(" ");
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
```

### Solution 2

```
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
```
