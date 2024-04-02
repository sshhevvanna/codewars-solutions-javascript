# Codewars JavaScript Solution

## Holiday II - Plane Seating (7kyu)

Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.

### Solution

```
      function planeSeat(a) {
        const number = Number(a.slice(0, a.length - 1));
        const letter = a.slice(-1);
        let seat = "";

        if (
          a.length > 3 ||
          number > 60 ||
          number < 1 ||
          !/[abcdefghk]/gi.test(letter)
        ) {
          return "No Seat!!";
        }

        if (number < 21) {
          seat += "Front-";
        } else if (number < 41) {
          seat += "Middle-";
        } else {
          seat += "Back-";
        }

        if (/[abc]/gi.test(letter)) {
          seat += "Left";
        } else if (/[def]/gi.test(letter)) {
          seat += "Middle";
        } else {
          seat += "Right";
        }

        return seat;
      }
```
