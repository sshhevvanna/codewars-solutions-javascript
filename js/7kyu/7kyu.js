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

/*3.You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"*/

/*function getMiddle(s) {
  if (s.length % 2 === 0) {
    if (s.length === 2) {
      return s;
    } else {
      s = s.substr(s.length / 2 - 1, 2);
    }
  } else {
    if (s.length === 1) {
      return s;
    } else {
      s = s.substr(s.length / 2, 1);
    }
  }
  return s;
}
console.log(getMiddle("middle"));
console.log(getMiddle("abcdeffedcba"));
console.log(getMiddle("testing"));
console.log(getMiddle("A"));*/

/*4. In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: 
if the parameter percent is 2 you have to convert it to 0.02.*/
/*function nbYear(p0, percent, aug, p) {
  for (let years = 0; p0 < p; years += 1) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}
console.log(nbYear(1500, 5, 100, 5000));*/

/*5. The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) 
stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/

/*function openOrSenior(data) {
  return data.map(function (item) {
    if (item[0] >= 55 && item[1] > 7) {
      return "Senior";
    }
    return "Open";
  });
}*/

/*6. Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455. */

/*function sumTwoSmallestNumbers(numbers) {  
  let sum = 0;
  let array = numbers.sort((a, b) => a - b);
  return sum = array[0] + array[1];
}*/

/*7. Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.*/

/*function friend(friends) {
  let myFriends = [];
  friends.forEach((name) => {
    if (name.length === 4) {
      myFriends.push(name);
    }
  });
  return myFriends;
}

const friend = friends => friends.filter(friend => friend.length == 4);
*/

/*8. Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.*/

/*function getSum(a, b) {
  let array = [];
  let sum = 0;

  if (a === b) {
    return a;
  } else {
    if (a < b) {
      for (let i = a; i <= b; i += 1) {
        array.push(i);
      }
      array.forEach((num) => {
        sum += num;
      });
    } else {
      for (let i = b; i <= a; i += 1) {
        array.push(i);
      }
      array.forEach((num) => {
        sum += num;
      });
    }
  }
  return sum;
}

console.log(getSum(102, 120));*/

/*9. The game
In this game, there are 21 sticks lying in a pile. Players take turns taking 1, 2, or 3 sticks. 
The last person to take a stick wins. For example:

21 sticks in the pile

Bob takes 2  -->  19 sticks left
Jim takes 3  -->  16 sticks
Bob takes 3  -->  13 sticks
Jim takes 1  -->  12 sticks
Bob takes 2  -->  10 sticks
Jim takes 2  -->   8 sticks
Bob takes 3  -->   5 sticks
Jim takes 3  -->   2 sticks
Bob takes 2  -->  Bob wins!
Your task
Create a robot that will always win the game. Your robot will always go first. 
The function should take an integer and returns 1, 2, or 3.

Note: The input will always be valid (a positive integer)*/
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function makeMove(sticks) {
  if (sticks <= 21 && sticks >= 8) {
    return getRandomIntInclusive(1, 3);
  } else if (sticks === 7 || sticks === 3) {
    return 3;
  } else if (sticks === 6 || sticks === 2) {
    return 2;
  } else if (sticks === 5 || sticks === 1) {
    return 1;
  }
}
