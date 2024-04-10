# Codewars JavaScript Solutions

## Pisano Period (7kyu)

The Fibonacci numbers are the numbers in the integer sequence:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, ...`

Defined by the recurrence relation

```
Fib(0) = 0
Fib(1) = 1
Fib(2) = 1
Fib(i) = Fib(i-1) + Fib(i-2)
```

For any integer n, the sequence of Fibonacci numbers Fib(i) taken modulo n is periodic. The Pisano period, denoted Pisano(n), is the length of the period of this sequence.

For example, the sequence of Fibonacci numbers modulo 3 begins:

`0, 1, 1, 2, 0, 2, 2, 1, 0, 1, 1, 2, 0, 2, 2, 1, 0, 1, 1, 2, 0, 2, 2, 1, ...`

This sequence has period 8. The repeating patter is `0, 1, 1, 2, 0, 2, 2, 1` So `Pisano(3) = 8`

Your task is to write the Pisano function that takes an integer `n` and outputs the length of pisano period.

### Solution

```
      function pisano(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;

        const array = [0, 1];
        let originalArray = [];
        let counter = 2;

        for (let i = 1; ; i += 1) {
          let number = array[i - 1] + array[i];

          if (number >= n) {
            number -= n;
          }

          if (number === 0 && originalArray.length === 0) {
            originalArray = [...array];
          }

          if (counter === originalArray.length) {
            const slicedArray = array.slice(-originalArray.length);

            if (
              slicedArray.toString() === originalArray.toString() &&
              array.length > originalArray.length
            ) {
              return array.length - originalArray.length;
            }
            counter = 0;
          }

          array.push(number);
          counter += 1;
        }
      }
```
