# Codewars JavaScript Solutions

## Be Concise II - I Need Squares

You are given a program `squaresOnly` that accepts an array of natural numbers up to and including `100` (and including `0`) of `length >= 1`, `array`, and returns a new array containing only square numbers that have appeared in the input array.

Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:

1. There are a lot of handy built-in `Array` methods in Javascript that you may have never heard of even after completing a basic course in Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new built-in methods offered by ES6, the newest specification of Javascript at the time of writing.

2. Don't you think the `array` parameter is a bit wordy? `;)`

Good luck! :D

### Solution 1

```
const squaresOnly = (arr) => arr.filter(n => Math.sqrt(n) % 1 === 0);
```

### Solution 2

```
function squaresOnly(array) {
  return array.filter(n => Number.isInteger(Math.sqrt(n)))
}
```
