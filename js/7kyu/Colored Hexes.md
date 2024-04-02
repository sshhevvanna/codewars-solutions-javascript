# Codewars JavaScript Solution

## Colored Hexes! (7kyu)

You're looking through different hex codes, and having trouble telling the difference between `#000001` and `#100000`

We need a way to tell which is red, and which is blue!

That's where you create hex color !!!

It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!

But, if multiple colors are of equal concentration, you should return their mix!

```
red + blue = magenta

green + red = yellow

blue + green = cyan

red + blue + green = white
```

One last thing, if the string given is empty, or has all 0's, return black!

### Examples:

```
codes = "087 255 054" -> "green"
codes = "181 181 170" -> "yellow"
codes = "000 000 000" -> "black"
codes = "001 001 001" -> "white"
```

### Solution

```
      function hexColor(codes) {
        codes = codes.split(" ");

        if (codes === "" || !/[123456789]/.test(codes)) {
          return "black";
        }

        const red = codes[0];
        const green = codes[1];
        const blue = codes[2];

        if (red === blue && blue === green) {
          return "white";
        } else if (red > green && red > blue) {
          return "red";
        } else if (green > red && green > blue) {
          return "green";
        } else if (blue > red && blue > green) {
          return "blue";
        } else if (red === blue) {
          return "magenta";
        } else if (green === red) {
          return "yellow";
        } else if (blue === green) {
          return "cyan";
        }
      }
```
