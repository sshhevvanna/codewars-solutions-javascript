# Codewars JavaScript Solutions

## Digital Synesthesia (7 kyu)

### Setup

[Sysnesthesia](https://en.wikipedia.org/wiki/Synesthesia) is a nuerological phenomenon where a person may experience a sensory impulse as if it had been from a different sense. For example, hearing music as if seeing a series of colors.

Today we will be creating a function to mimic a synesthetic experience. The function will receive a string representing music, and return an array of strings representing colors.

To represent music as a string, we will be using the [ABC music notation](https://en.wikipedia.org/wiki/ABC_notation). This notation is a whole language, but all you need to know for this kata is that it is comprised of all ASCII characters. In it's simplest usage, "ABCEFG" is an ascending scale.

To represent color as a string, we will use standard CSS hex notation, e.g. `#FFFFFF` for white. Letters are upper case.

### Task

Starting from the begining of the input string, for every three ASCII characters, include the associated color in the returned array. If the input string is not evenly divisible by three, ignore any trailing characters. Empty and null input should return an empty array.

I define a color as being associated with three ASCII characters when each pair of hexidecimal digits in the color match the hexidecimal ASCII values of the respective characters. For example, `#414243` is associated with the notes ABC.

### Solution

```
function MusicToColor(music) {
  if (!music) return [];
  const chunks = music.match(/.{1,3}/gi) || [];
  return chunks
    .filter((c) => c.length === 3)
    .map((chunk) => {
      let hex = "#";
      for (const char of chunk) {
        hex += char.charCodeAt().toString(16);
      }
      return hex.toUpperCase();
    });
}
```
