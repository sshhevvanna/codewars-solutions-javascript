/*Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

//Solution #1
function abbrevName(name) {
  name = name.split(" ");

  let firstName = name[0].toUpperCase();
  let lastName = name[1].toUpperCase();
  return firstName[0] + "." + lastName[0];
}

//Solution #2
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
