# Codewars JavaScript Solutions

## Simple string characters

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

```
Solve("*'&ABCDabcde12345") = [4,5,5,3].
--the order is: uppercase letters, lowercase, numbers and special characters.
```

More examples in the test cases.

Good luck!

### Solution

```
function solve(s){
 let upperCaseLetters = 0;
 let lowerCaseLetters = 0;
 let numbers = 0;
 let specialCharacters = 0;

 for(let i = 0; i < s.length; i += 1){
   if(/[A-Z]/.test(s[i])){
     upperCaseLetters += 1;
   } else if(/[a-z]/.test(s[i])){
     lowerCaseLetters += 1;
   } else if(/\d/.test(s[i])){
     numbers += 1;
   } else {
     specialCharacters += 1;
   }
 }
  return [upperCaseLetters, lowerCaseLetters, numbers, specialCharacters];
}
```
