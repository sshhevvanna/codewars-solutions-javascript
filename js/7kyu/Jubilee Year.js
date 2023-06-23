/*A Jubilee Year is celebrated in Santiago de Compostela whenever July 25, the day of Santiago the Elder, falls on a Sunday.

For example, as of 2018 we know the last Jubilee year was 2010 and the next is going to be 2021.

Your task is to create the function isJubilee() that will tell us whether a given year was/is a Jubilee Year or not. 
For this kata, we're just interested in years from 1900 to 2099 (both included), 
so don't expect your function to receive any input out of that range.

Example:

  isJubilee(2020);  // <-- returns false  because 2020/07/25 is Saturday
  isJubilee(2021);  // <-- returns true   because 2021/07/25 is Sunday*/

//Solution #1
function isJubilee(year) {
  if (year === 1880) {
    return true;
  }

  if (year > 1880) {
    let answer = 0;
    while (year > 1880) {
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 12 === 1880 ? (answer += 1) : (year = year - 12);

      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 11 === 1880 ? (answer += 1) : (year = year - 11);

      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 11 === 1880 ? (answer += 1) : (year = year - 11);

      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 11 === 1880 ? (answer += 1) : (year = year - 11);

      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 11 === 1880 ? (answer += 1) : (year = year - 11);

      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 11 === 1880 ? (answer += 1) : (year = year - 11);

      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 11 === 1880 ? (answer += 1) : (year = year - 11);

      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 11 === 1880 ? (answer += 1) : (year = year - 11);

      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 11 === 1880 ? (answer += 1) : (year = year - 11);

      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 5 === 1880 ? (answer += 1) : (year = year - 5);
      year - 6 === 1880 ? (answer += 1) : (year = year - 6);
      year - 11 === 1880 ? (answer += 1) : (year = year - 11);
    }
    return answer !== 0 ? true : false;
  } else if (year < 1880) {
    let answer = 0;
    while (year < 1880) {
      year + 11 === 1880 ? (answer += 1) : (year = year + 11);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);

      year + 11 === 1880 ? (answer += 1) : (year = year + 11);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);

      year + 11 === 1880 ? (answer += 1) : (year = year + 11);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);

      year + 11 === 1880 ? (answer += 1) : (year = year + 11);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);

      year + 11 === 1880 ? (answer += 1) : (year = year + 11);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);

      year + 11 === 1880 ? (answer += 1) : (year = year + 11);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);

      year + 11 === 1880 ? (answer += 1) : (year = year + 11);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);

      year + 11 === 1880 ? (answer += 1) : (year = year + 11);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);

      year + 11 === 1880 ? (answer += 1) : (year = year + 11);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);

      year + 12 === 1880 ? (answer += 1) : (year = year + 12);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
      year + 5 === 1880 ? (answer += 1) : (year = year + 5);
      year + 6 === 1880 ? (answer += 1) : (year = year + 6);
    }
    return answer !== 0 ? true : false;
  }
}

console.log(isJubilee(3));

//Solution #2
const isJubilee = (year) => new Date(year, 6, 25).getDay() == 0;
