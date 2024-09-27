# Codewars JavaScript Solutions

## Sort My Textbooks

HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive

### Solution 1

```
    function sorter(textbooks) {
        for (let i = 0; i < textbooks.length - 1; i += 1) {
          const char1 = textbooks[i][0].toLowerCase();
          const char2 = textbooks[i + 1][0].toLowerCase();

          if (!/[a-zA-Z]/.test(char1) || textbooks[i] === textbooks[i + 1]) {
            textbooks[i] = textbooks[i];
          } else if (char1 === char2) {
            let j = 0;
            let shortWord = "";
            let longWord = "";
            while (
              textbooks[i][j].toLowerCase() ===
                textbooks[i + 1][j].toLowerCase() &&
              shortWord === ""
            ) {
              j += 1;

              if (
                (j === textbooks[i].length - 1 &&
                  textbooks[i][j].toLowerCase() ===
                    textbooks[i + 1][j].toLowerCase()) ||
                (j === textbooks[i + 1].length - 1 &&
                  textbooks[i][j].toLowerCase() ===
                    textbooks[i + 1][j].toLowerCase())
              ) {
                if (textbooks[i].length > textbooks[i + 1].length) {
                  shortWord = textbooks[i + 1];
                  longWord = textbooks[i];
                } else {
                  shortWord = textbooks[i];
                  longWord = textbooks[i + 1];
                }
              }
            }

            const newChar1 = textbooks[i][j].toLowerCase();
            const newChar2 = textbooks[i + 1][j].toLowerCase();
            if (shortWord !== "") {
              textbooks[i] = shortWord;
              textbooks[i + 1] = longWord;
            } else if (
              newChar1.charCodeAt() > newChar2.charCodeAt() ||
              !/[a-zA-Z]/.test(newChar2)
            ) {
              const book = textbooks[i];
              textbooks[i] = textbooks[i + 1];
              textbooks[i + 1] = book;

              if (i === 0) {
                i -= 1;
              } else {
                i -= 2;
              }
            }
          } else if (
            char1.charCodeAt() > char2.charCodeAt() ||
            !/[a-zA-Z]/.test(char2)
          ) {
            const book = textbooks[i];
            textbooks[i] = textbooks[i + 1];
            textbooks[i + 1] = book;
            if (i === 0) {
              i -= 1;
            } else {
              i -= 2;
            }
          }
        }

        return textbooks;
      }
```

### Solution 2

Quick explanation: if `a` comes after `b` alphabetically (ignoring case), it returns 1 and the sort() method moves `a` after `b` in the resulting sorted array.

If `a` comes before `b` alphabetically (ignoring case), it returns -1. THis tells the sorting algorithm that the elements should be reordered with `a` appearing before `b` in the sorted array.

If `a` and `b` are equal (ignoring case), it returns `0`. The sort() method keeps `a` and `b` in their current order or switches them arbitrarily while ensuring that they remain adjacent to each other in the sorted array.

```
function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 :
                                  a.toLowerCase() < b.toLowerCase() ? -1  : 0)
}
```
