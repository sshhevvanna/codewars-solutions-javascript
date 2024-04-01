# Codewars JavaScript Solutions

## Measuring Average Speed

Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

Average Speed is calculated by dividing distance by time. Given two strings as input the first of which indicates a codewarrior's `distance` travelled (in metres or kilometres) and the second indicating the `time` it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour rounded to the nearest integer.

For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

So for example given the input values of distance & time `"3km"` and `"5min"` we should return a speed value of `"22mph"`.

### Solution

```
      function calculateSpeed(distance, time) {
        if (distance.includes("km")) {
          // The \D regex metacharacter matches any non-digit character in a string
          distance = distance.replace(/[\D]/g, "");
          distance = Number(distance) * 1000;
        } else {
          distance = distance.replace(/[\D]/g, "");
        }

        if (time.includes("min")) {
          time = time.replace(/[\D]/g, "");
          time = Number(time) * 60;
        } else {
          time = time.replace(/[\D]/g, "");
        }

        return `${Math.round((distance / time) * 2.23694)}mph`;
      }
```
