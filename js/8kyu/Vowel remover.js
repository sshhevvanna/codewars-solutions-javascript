/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata*/

//Solution #1
function shortcut(string) {
  let arr = string.split("");
  string = "";
  arr.forEach((char) => {
    if (char.match(/[aeiou]/g)) {
      string += "";
    } else {
      string += char;
    }
  });
  return string;
}

//Solution #2
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}
