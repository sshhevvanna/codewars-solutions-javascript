// 1. You were camping with your friends far away from home, but when it's time to go back,
// you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average,
// your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump <= mpg * fuelLeft) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft;
// };

// 2.A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a couple of powerful dragons!
// Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)
// function hero(bullets, dragons) {
//   return bullets / 2 >= dragons;
// }

// const hero = (bullets, dragons) => dragons * 2 <= bullets;

// 3. Introduction
// The first century spans from the year 1 up to and including the year 100,
// the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//   if (year <= 100) {
//     return 1;
//   } else if (year % 100 === 0) {
//     return year / 100;
//   } else if (year + 1 - year >= 1) {
//     return Math.floor(year / 100) + 1;
//   }
//   return Math.floor(year / 100);
// }
// console.log(century(1705));
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(2000));
// console.log(century(89));

// const century = (year) => Math.ceil(year / 100);

// function century(year) {
//   if (year % 100 != 0) {
//     return Math.floor(year / 100) + 1;
//   }
//   return year / 100;
// }
// console.log(century(1805));
// console.log(century(1801));
// console.log(century(1800));
// console.log(century(1799));
// console.log(century(1798));
// console.log(century(1));
// console.log(century(101));

// 4. Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// A few ways to square a number:
// 1 number * number
// 2 Math.pow(number, 2)
// 3 number **2

// function squareSum(numbers) {
//   let sum = 0;
//   numbers.forEach((number) => {
//     sum += number * number;
//   });
//   return sum;
// }

// function squareSum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] ** 2;
//   }
//   return sum;
// }
// console.log(squareSum([1, 2]));
// console.log(squareSum([0, 3, 4, 5]));
// console.log(squareSum([]));

// 5. Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// function grow(x) {
//   let result = 1;
//   x.forEach((number) => {
//     result *= number;
//   });
//   return result;
// }
// console.log(grow([1, 2, 3]));

// const grow = (x) => {
//   let res = 1;
//   for (let i = 0; i < x.length; i++) {
//     res *= x[i];
//   }
//   return res;
// };

// 6. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June),
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Constraint:
// 1 <= month <= 12
// const quarterOf = (m) => Math.ceil(m / 3);

// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1;
//   } else if (month <= 6) {
//     return 2;
//   } else if (month <= 9) {
//     return 3;
//   } else if (month <= 12) {
//     return 4;
//   }
// };

// const quarterOf = (month) => {
//   switch (month) {
//     case 1:
//     case 2:
//     case 3:
//       return 1;

//       break;

//     case 4:
//     case 5:
//     case 6:
//       return 2;

//       break;

//     case 7:
//     case 8:
//     case 9:
//       return 3;

//       break;

//     default:
//       return 4;

//       break;
//   }
// };

// 7. Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
// function digitize(n) {
//   return n.toString().split("").reverse().map(Number);
// }
// console.log(digitize(35231));

// 8. Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//       break;
//     case "-":
//       return value1 - value2;
//       break;
//     case "/":
//       return value1 / value2;
//       break;
//     case "*":
//       return value1 * value2;
//       break;
//   }
// }

// 9. All of the animals are having a feast! Each animal is bringing one dish.
// There is just one rule: the dish must start and end with the same letters as the animal's name.
// For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns
// true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters.
// beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.
// They will not contain numerals.
// function feast(beast, dish) {
//   return (
//     beast.charAt([0]) == dish.charAt([0]) &&
//     dish.charAt([dish.length - 1]) == beast.charAt([beast.length - 1])
//   );
// }

// 10. You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
// const areaOrPerimeter = function (l, w) {
//   if (l === w) {
//     return l * w;
//   }
//   return (l + w) * 2;
// };

// const areaOrPerimeter = function (l, w) {
//   return l == w ? l * w : 2 * (l + w);
// };

// 11. Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.
// Sum Numbers
// function sum(numbers) {
//   "use strict";
//   let result = 0;
//   if (numbers.length === 0) {
//     return 0;
//   }
//   numbers.forEach((number) => {
//     result += number;
//   });
//   return result;
// }

/*12. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/
/*function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(-42));*/

/*13. Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.*/
/*function booleanToString(b) {
  return b.toString();
}

function booleanToString(b){
  return b ? 'true' : 'false';
}
*/

/*14. Timmy & Sarah think they are in love, but around where they live, 
they will only know once they pick a flower each. 
If one of the flowers has an even number of petals 
and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower 
and return true if they are in love and false if they aren't.*/

/*function lovefunc(flower1, flower2) {
  return (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  );
}

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
*/

/*15. There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!*/

/*let sum = 0;
let students = 0;
function betterThanAverage(classPoints, yourPoints) {
  classPoints.forEach((score) => {
    sum += score;
  });
  students = classPoints.length;
  sum = sum / students;
  console.log(students);
  console.log(sum);
  return yourPoints > sum ? true : false;
}
console.log(betterThanAverage([2, 3], 5));*/

/*16. Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

1. The split() method splits a String object into an array of string by separating the string into sub strings.
2. The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
3. The join() method joins all elements of an array into a string. */

/*function solution(str) {
  return str.split("").reverse().join("");
}

const solution = str => str.split('').reverse().join('');

const solution = s => [...s].reverse().join('');

let newString = "";
function solution(str) {
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newString += str[i];
  }
  return newString;
}
console.log(solution("Hello, world"));

function sol(str) {
  if (str === "") return "";
  else return sol(str.substr(1)) + str.charAt(0);
}
console.log(sol("Hello, world"));

function sol(str) {
  return str === "" ? "" : sol(str.substr(1)) + str.charAt(0);
}
console.log(sol("Hello, world"));
*/

/*17. There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free*/

/*function mango(quantity, price){
  quantity = quantity - Math.floor(quantity/3);
return quantity * price;
}

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}
*/

/*18. Your task is to make two functions ( max and min, or maximum and minimum, etc., 
  depending on the language ) that receive a list of integers as input, 
  and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.*/

/*var min = function(list){
   return Math.min(...list);
}

var max = function(list){
   return Math.max(...list);
}

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}

var min = function(list){
    var min =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur<min) min=cur;
    }
    return min;
}

var max = function(list){
    var max =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur>max) max=cur;
    }
    return max;
}
*/

/*19. Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]*/
/*const reverseSeq = n => {
  let array = [];
  for(let i = n; i > 0; i -= 1){
    array.push(i);
  }
  return array;
};*/

/*20. Summation
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.
For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/

/*var summation = function (num) {
  let array = [];
  let sum = 0;
  for(let i = num; i > 0; i -= 1) {
    array.push(i);
  }
  array.forEach((num)=> {
    sum += num;
  })
  return sum;
}

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}
*/
