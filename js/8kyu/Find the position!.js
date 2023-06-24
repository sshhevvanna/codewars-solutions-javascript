/*When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"*/

//Solution #1
function position(letter) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < alphabet.length; i += 1) {
    if (alphabet[i] === letter) {
      return `Position of alphabet: ${i + 1}`;
    }
  }
}

//Solution #2
function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}
