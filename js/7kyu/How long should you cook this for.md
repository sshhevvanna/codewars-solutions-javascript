# Codewars JavaScript Solutions

## How long should you cook this for? (7kyu)

You've purchased a ready-meal from the supermarket.

The packaging says that you should microwave it for 4 minutes and 20 seconds, based on a 600W microwave.

Oh no, your microwave is 800W! How long should you cook this for?!

### Input

You'll be given 4 arguments:

1. needed power
   The power of the needed microwave.
   Example: `"600W"`

2. minutes
   The number of minutes shown on the package.
   Example: `4`

3. seconds
   The number of seconds shown on the package.
   Example:` 20`

4. power
   The power of your microwave.
   Example: `"800W"`

### Output

The amount of time you should cook the meal for formatted as a string.
Example: `"3 minutes 15 seconds"`

Note: the result should be rounded up.

`59.2 sec --> 60 sec --> return "1 minutes 0 seconds"`

### Solution

```
      function cookingTime(neededPower, minutes, seconds, power) {
        neededPower = Number(neededPower.slice(0, neededPower.length - 1));
        power = Number(power.slice(0, power.length - 1));

        const time = minutes * 60 + seconds;
        const powerDifferencePercentage = Math.abs(
          100 - (100 / power) * neededPower
        );
        let neededTime = 0;

        if (power > neededPower) {
          neededTime =
            Math.ceil(time - (time / 100) * powerDifferencePercentage);
        } else {
          neededTime =
            Math.ceil(time + (time / 100) * powerDifferencePercentage);
        }

        let neededMinutes = Math.floor(neededTime / 60);
        let neededSeconds = Math.round(neededTime - neededMinutes * 60);

        if(neededSeconds >= 60){
          neededMinutes += 1;
          neededSeconds -= 60;
        }

        return `${neededMinutes} minutes ${neededSeconds} seconds`;
      }
```
