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

/*21.Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.
Note: input will never be an empty string.*/

/*function fakeBin(x) {
  let array = x.split("");
  let newArray = [];
  array.forEach((number) => {
    newArray.push(number >= 5 ? "1" : "0");
  });
  return newArray.join("");
}

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

console.log(fakeBin("45385593107843568"));*/

/*22. You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.*/
/*function check(a, x) {
  return a.includes(x);
}

const check = (a,x) => a.includes(x);
*/

/*23. Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]*/
/*function stringToArray(string) {
  return string.split(" ");
}*/

/*24. You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.*/
/*function otherAngle(a, b) {
  return 180-a-b;
}

const otherAngle = (a, b) => 180 - a - b
*/

/*25.Code as fast as you can! You need to double the integer and return it.*/
/*function doubleInteger(i) {
  return i * 2;
}*/

/*26.Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined*/

/*function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let i = 0; i <= arrayOfSheep.length - 1; i += 1) {
    if (arrayOfSheep[i] === true) {
      sum += 1;
    }
  }
  return sum;
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}*/

/*27. Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]*/
/*function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i += 1) {
    z.push(i * x);
  }
  return z;
}
console.log(countBy(1, 10));
console.log(countBy(2, 5));*/
