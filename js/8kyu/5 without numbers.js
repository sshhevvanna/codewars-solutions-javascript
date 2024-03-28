/*Write a function that always returns 5
Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
Good luck :)*/

//Solution #1
function unusualFive() {
  let string = "everyone is dumb...";
  return string.split("").indexOf("o");
}

//Solution #2
function unusualFive() {
  return "hello".length;
}
