# Codewars JavaScript Solutions

## Move 10

Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

### Solution

```
function moveTen(s){
  let newString = "";
  for(let i = 0; i < s.length; i += 1){
    const charCode = s.charCodeAt(i);
    if(charCode + 10 < 123){
      newString += String.fromCharCode(charCode + 10);
    } else {
      newString += String.fromCharCode(charCode + 10 - 123 + 97);
    }
  }
  return newString;
}
```
