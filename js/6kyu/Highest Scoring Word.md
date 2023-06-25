# Codewars JavaScript Solutions

---

## Highest Scoring Word

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.\*

### Solution

```
function high(x) {
  let array = x.split(" ");
  let newArr = [];
  let biggestNum = [];
  let answer = 0;
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  array.forEach((word) => {
    let sum = 0;
    for (let i = 0; i <= word.length - 1; i += 1) {
      sum += alphabet.indexOf(word[i]) + 1;
    }
    newArr.push(sum);
    biggestNum.push(sum);
  });

  newArr.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i <= biggestNum.length - 1; i += 1) {
    if (newArr[0] === biggestNum[i]) {
      answer = biggestNum.indexOf(biggestNum[i]);
    }
  }
  return array[answer];
}
console.log(high("man i need a taxi up to ubud"));
```
