/*1. Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"*/

/*function oddOrEven(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum % 2 === 0 ? "even" : "odd";
}*/

/*2. Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)
Note: The function accepts an integer and returns an integer.*/

/*function squareDigits(num) {
  let newNumber = [];
  let array = num.toString().split("");
  array.forEach((number) => {
    number = number ** 2;
    newNumber.push(number);
  });
  return parseInt(newNumber.join(""));
}
console.log(squareDigits(3212));
console.log(squareDigits(2112));*/
