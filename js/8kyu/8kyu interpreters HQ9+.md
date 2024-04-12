# Codewars JavaScript Solutions

## 8kyu interpreters: HQ9+ (8 kyu)

You task is to implement an simple interpreter for the notorious esoteric language [HQ9+](https://esolangs.org/wiki/HQ9+) that will work for a single character input:

- If the input is `'H'`, return `'Hello World!'`
- If the input is `'Q'`, return the input
- If the input is `'9'`, return the full lyrics of [99 Bottles of Beer](https://www.99-bottles-of-beer.net/lyrics.html). It should be formatted like this:

```
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.
...
...
...
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
```

- For everything else, don't return anything (return `null` in C#, `None` in Rust, and `""` in Haskell).

(`+` has no visible effects so we can safely ignore it.)

### Solution

```
     function HQ9(code) {
        let song = "";

        for (let i = 99; i > 2; i -= 1) {
          song = song.concat(
            `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${
              i - 1
            } bottles of beer on the wall.\n`
          );
        }

        song = song.concat(
          `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
        );

        switch (code) {
          case "H":
            return "Hello World!";

          case "Q":
            return code;

          case "9":
            return song;

          default:
            return null;
        }
      }

```
