/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters 
and your task is to convert that string to either lowercase only or uppercase only based on:
make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!*/

function solve(s) {
  s = s.split("");
  let sumOfLowLetters = 0;
  for (let i = 0; i <= s.length - 1; i += 1) {
    if (s[i] === s[i].toLowerCase()) {
      sumOfLowLetters += 1;
    }
  }
  s = s.join("");
  return sumOfLowLetters >= s.length / 2 ? s.toLowerCase() : s.toUpperCase();
}
