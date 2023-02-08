/*You will be given a list of strings. 
You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.*/

//Solution #1
function twoSort(s) {
  s = s.sort();
  let word = s[0].split("");
  let newString = word.map((char) => {
    if (char !== word[word.length - 1]) {
      return char + "***";
    } else {
      return char;
    }
  });
  return newString.join("");
}

//Solution #2
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
