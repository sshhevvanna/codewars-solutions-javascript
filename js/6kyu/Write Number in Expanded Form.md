# Codewars JavaScript Solutions

---

## Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

```
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

```

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

### Solution

```

function expandedForm(num) {
  let string = num.toString();
  let array = [];
  let newArray = [];
  for (i = 0; i <= string.length - 1; i += 1) {
    let newNum = Number(string[i]);
    let divisor = 10 ** (string.length - 1 - i);
    array.push(newNum * divisor);
  }
  console.log(array);
  array.forEach((num) => {
    if (num === array[array.length - 1] && num !== 0) {
      return newArray.push(" + " + num);
    }
    if (num === 0) {
      return num === null;
    }
    if (num === array[0]) {
      return newArray.push(num);
    }
    newArray.push(" + " + num);
  });
  return newArray.join("");
}
console.log(expandedForm(10240));
```
