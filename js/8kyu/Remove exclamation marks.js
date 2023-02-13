//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Solution #1
function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}

//Solution #2
function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}
