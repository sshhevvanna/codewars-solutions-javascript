# Codewars JavaScript Solutions

## Simple Change Machine

Your task is to create a change machine.

The machine accepts a single coins or notes, and returns change in 20p and 10p coins. The machine will try to avoid returning its exact input, but will otherwise return as few coins as possible. For example, a 50p piece should become two 20p pieces and one 10p piece, but a 20p piece should become two 10p pieces.

The machine can exclusively process these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned unprocessed. For example, if you were to put a £20 note into the machine, it would be returned to you and not broken into change. (Note that £1 is worth 100p.)

This change machine is programmed to accept and distribute strings rather than numbers. The input will be a string containing the coin or note to be processed, and the change should be returned as one string with the coin names separated by single spaces with no commas. The values of the string should be in descending order. For example, an input of `"50p"` should yield the exact string `"20p 20p 10p"`.

### Solution 1

```
function changeMe(moneyIn) {
        const money = ["£5", "£2", "£1", "50p", "20p"];
        const change = [];
        let value = 0;
        let change20P = 0;
        let change10P = 0;

        if (money.includes(moneyIn)) {
          if (moneyIn[0] === "£") {
            value = Number(moneyIn.slice(1)) * 100;
          } else {
            value = Number(moneyIn.slice(0, moneyIn.length - 1));
          }

          change20P = Math.floor(value / 20);

          if (change20P > 1) {
            while (change20P > 0) {
              change.push("20p");
              change20P -= 1;
            }
          }

          if (value - change.length * 20 > 0) {
            change10P = (value - change.length * 20) / 10;

            while (change10P > 0) {
              change.push("10p");
              change10P -= 1;
            }
          }

          return change.join(" ");
        }
        return moneyIn;
      }
```

### Solution 2

```
function changeMe(moneyIn) {
        switch (moneyIn) {
          case "£5":
            return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p";
          case "£2":
            return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p";
          case "£1":
            return "20p 20p 20p 20p 20p";
          case "50p":
            return "20p 20p 10p";
          case "20p":
            return "10p 10p";
          default:
            return moneyIn;
        }
      }
```
