/*Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]*/

function towerBuilder(nFloors) {
  let array = [];
  let newArr = [];
  let answer = [];
  let numOfChar = 0;
  let symbol = "*";

  for (let i = 1; i <= nFloors * 2; i += 1) {
    array.push(i);
  }

  array.forEach((num) => {
    if (num % 2 !== 0) {
      newArr.push(num.toString());
    }
  });

  newArr.forEach((char) => {
    let x = "";
    for (let i = char; i >= 0; i -= 1) {
      if (i >= 1) {
        x += symbol;
      }
    }
    answer.push(x);
  });

  let arr = answer.map((char) => {
    if (char.length !== answer[answer.length - 1].length) {
      for (
        let i = char.length;
        i <= answer[answer.length - 1].length - 1;
        i += 2
      ) {
        char = " " + char + " ";
      }
    }
    return char;
  });

  return arr;
}
console.log(towerBuilder(3));
