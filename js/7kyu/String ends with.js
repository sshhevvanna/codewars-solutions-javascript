/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

//Solution #1
function solution(str, ending) {
  if (ending === "") {
    return true;
  }
  return str.slice(-ending.length) === ending;
}

//Solution #2
function solution(str, ending) {
  return str.endsWith(ending);
}

//Solution #3
function solution(str, ending) {
  return ending < 1 ? true : str.slice(-ending.length) == ending;
}
