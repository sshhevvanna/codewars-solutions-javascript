/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

//Solution #1
function accum(s) {
  let arr = [];
  let newArr = [];
  let si = [];
  s = s.toLowerCase().split("");

  for (let i = 0; i <= s.length - 1; i += 1) {
    if (s[i] === s[i + 1]) {
      si.push(s[i].toUpperCase());
    } else {
      si.push(s[i]);
    }
  }

  for (let i = 0; i <= si.length - 1; i += 1) {
    arr.push(i + 1);
  }

  for (let i = 0; i <= arr.length - 1; i += 1) {
    let times = arr.indexOf(arr[i]);

    while (times >= 0) {
      newArr.push(si[i]);
      times -= 1;
    }
  }

  for (let i = 0; i < newArr.length - 1; i += 1) {
    if (newArr[i] !== newArr[i + 1]) {
      newArr[i] = newArr[i] + "-";
    }
  }

  let newArray = newArr.map((char) => char.toLowerCase());

  for (let i = 0; i <= newArray.length - 1; i += 1) {
    if (newArray[i] === newArray[0]) {
      newArray[i] = newArray[i].toUpperCase();
    } else if (
      newArray[i - 1] === newArray[i - 2] ||
      newArray[i] === newArray[2] ||
      newArray[i] === newArray[5]
    ) {
      newArray[i] = newArray[i].toLowerCase();
    } else if (newArray[i].toUpperCase() !== newArray[i - 1].toUpperCase()) {
      newArray[i] = newArray[i].toUpperCase();
    }
  }

  return newArray.join("");
}
console.log(accum("NyffsGeyylB"));

//Solution #2
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

//Solution #3
function accum(str) {
  let res = [];
  for (let i = 0; i < str.length; i += 1) {
    let row = "";
    for (let j = 0; j < i + 1; j += 1) {
      row += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    res.push(row);
  }
  return res.join("-");
}
