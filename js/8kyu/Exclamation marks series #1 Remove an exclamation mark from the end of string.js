/*Description:
Remove an exclamation mark from the end of a string. 
For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"*/

//Solution #1
function remove(string) {
  return string[string.length - 1] === "!"
    ? string.slice(0, string.length - 1)
    : string;
}

//Solution #2
const remove = (s) => s.replace(/!$/, "");

//Solution #3
function remove(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}
