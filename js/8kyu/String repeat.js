/*Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

//Solution #1
function repeatStr(n, s) {
  let string = "";
  for (let i = 0; i <= n - 1; i += 1) {
    string += s;
  }
  return string;
}

//Solution #2
function repeatStr(n, s) {
  return s.repeat(n);
}

//Solution #3
function repeatStr(n, s) {
  let answer = "";
  while (n > 0) {
    answer += s;
    n -= 1;
  }
  return answer;
}
