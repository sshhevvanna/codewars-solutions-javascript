# Codewars JavaScript Solutions

## Mutate My Strings (7kyu)

I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

### Example:

```
stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
```

### Solution:

```
      function mutateMyStrings(stringOne, stringTwo) {
        let index = 0;
        let newStr = "";

        newStr += `${stringTwo.slice(0, index)}${stringOne.slice(
          index,
          stringOne.length
        )}\n`;

        while (newStr.slice(-stringTwo.length - 1) !== `${stringTwo}\n`) {
          index += 1;

          if (stringOne[index - 1] !== stringTwo[index - 1]) {
            newStr += `${stringTwo.slice(0, index)}${stringOne.slice(
              index,
              stringOne.length
            )}\n`;
          }
        }

        return newStr;
      }
```
