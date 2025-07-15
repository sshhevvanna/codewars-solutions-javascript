# Codewars JavaScript Solutions

## Bet payout calculator

You are in charge of handling a series of bets based on coin flips, write a script that accepts the following params:

### probHeads: an array containing the win multiplier for Heads and the ammount of money currently on Heads

### probTails: an array containing the win multiplier for Tails and the ammount of money currently on Tails

### outcome: a string, either "Heads" or "Tails" that represents the winning bet

and return the proper string out of these 3:

```
"The outcome is [X], In total I have to pay [Y]$ to the winner, I broke even!"
"The outcome is [X], In total I have to pay [Y]$ to the winner, of which [Z]$ from my own pockets"
"The outcome is [X], In total I have to pay [Y]$ to the winner, I have pocketed [Z]$ !"
```

you pocket all the money in the losing side of the bet, but have to pay out all the money in the winning side multiplied by the multiplier.

All numbers should be printed with 2 decimal values, for example:

```
10.00$
5.35$
945.10$
```

### Solution

```
function calculatePayout(betHeads, betTails, outcome) {
        const headsPayout = (betHeads[0] * betHeads[1]).toFixed(2);
        const tailsPayout = (betTails[0] * betTails[1]).toFixed(2);
        const headsDiff = (betTails[1] - betHeads[0] * betHeads[1]).toFixed(2);
        const tailsDiff = (betHeads[1] - betTails[0] * betTails[1]).toFixed(2);
        const negHeadsDiff = (-(
          betTails[1] -
          betHeads[0] * betHeads[1]
        )).toFixed(2);
        const negTailsDiff = (-(
          betHeads[1] -
          betTails[0] * betTails[1]
        )).toFixed(2);

        if (outcome === "Heads") {
          if (betTails[1] === betHeads[0] * betHeads[1]) {
            return `The outcome is ${outcome}, In total I have to pay ${betTails[1].toFixed(
              2
            )}$ to the winner, I broke even!`;
          }

          return headsDiff > 0
            ? `The outcome is Heads, In total I have to pay ${headsPayout}$ to the winner, I have pocketed ${headsDiff}$ !`
            : `The outcome is Heads, In total I have to pay ${headsPayout}$ to the winner, of which ${negHeadsDiff}$ from my own pockets :(`;
        }

        if (outcome === "Tails") {
          if (betHeads[1] === betTails[0] * betTails[1]) {
            return `The outcome is ${outcome}, In total I have to pay ${betHeads[1].toFixed(
              2
            )}$ to the winner, I broke even!`;
          }

          return tailsDiff > 0
            ? `The outcome is Tails, In total I have to pay ${tailsPayout}$ to the winner, I have pocketed ${tailsDiff}$ !`
            : `The outcome is Tails, In total I have to pay ${tailsPayout}$ to the winner, of which ${negTailsDiff}$ from my own pockets :(`;
        }

        return "I'm bad at math!";
      }
```
