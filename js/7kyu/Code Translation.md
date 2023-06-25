# Codewars JavaScript Solutions

---

## Tap Code Translation

Tap code is a way to communicate using a series of taps and pauses for each letter. In this kata, we will use dots `.` for the taps and whitespaces for the pauses.

The number of taps needed for each letter matches its coordinates in the following polybius square (note the `c/k` position). Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

```
1 2 3 4 5
1 A B C\K D E
2 F G H I J
3 L M N O P
4 Q R S T U
5 V W X Y Z
```

### Input:

A lowercase string of a single word (no whitespaces or punctuation, only letters).

### Output:

The encoded string as taps and pauses.

### Examples

```
text = "dot"
"D" = (1, 4) = ". ...."
"O" = (3, 4) = "... ...."
"T" = (4, 4) = ".... ...."

output: ". .... ... .... .... ...."

"example" -> ". ..... ..... ... . . ... .. ... ..... ... . . ....."
"more" -> "... .. ... .... .... .. . ....."
```

Happy coding!

### Solution 1

```
function tapCodeTranslation(text) {
        const row1 = ["a", "b", "c", "d", "e"];
        const row2 = ["f", "g", "h", "i", "j"];
        const row3 = ["l", "m", "n", "o", "p"];
        const row4 = ["q", "r", "s", "t", "u"];
        const row5 = ["v", "w", "x", "y", "z"];

        let message = "";
        let newText = "";
        const lastIndex = newText.length - 1;

        for (let i = 0; i < text.length; i += 1) {
          if (text[i] == "k") {
            newText += "c";
          } else {
            newText += text[i];
          }
        }

        for (char of newText) {
          let index = 0;
          if (row1.includes(char)) {
            message += ". ";
            index += row1.indexOf(char);
            for (let i = 0; i <= index; i += 1) {
              message += ".";
            }
              message += " ";
          } else if (row2.includes(char)) {
            message += ".. ";
            index += row2.indexOf(char);
            for (let i = 0; i <= index; i += 1) {
              message += ".";
            }
              message += " ";
          } else if (row3.includes(char)) {
            message += "... ";
            index += row3.indexOf(char);
            for (let i = 0; i <= index; i += 1) {
              message += ".";
            }
              message += " ";
          } else if (row4.includes(char)) {
            message += ".... ";
            index += row4.indexOf(char);
            for (let i = 0; i <= index; i += 1) {
              message += ".";
            }
              message += " ";
          } else {
            message += "..... ";
            index += row5.indexOf(char);
            for (let i = 0; i <= index; i += 1) {
              message += ".";
            }
              message += " ";
          }
        }
        return message.slice(0, message.length-1);
      }

```

### Solution 2

```
function tapCodeTranslation(text) {
  let o = {'a':". .",
          'b': ". ..",
          'c':'. ...',
           'k':'. ...',
          'd':'. ....',
          'e':'. .....',
          'f': '.. .',
          'g':'.. ..',
          'h':'.. ...',
          'i':'.. ....',
          'j':'.. .....',
          'l':'... .',
          'm':'... ..',
          'n':'... ...',
          'o':'... ....',
          'p':'... .....',
          'q':'.... .',
          'r':'.... ..',
          's':'.... ...',
          't':'.... ....',
          'u':'.... .....',
          'v':'..... .',
          'w':'..... ..',
          'x':'..... ...',
          'y':'..... ....',
          'z':'..... .....'};
  return text.split('').map(a=>o[a]).join(' ');
}
```
