# Codewars JavaScript Solutions

---

## Sorting Arrays

Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1

```
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
```

Example 2

```
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
```

Each element in the arrays will start with a unique letter so there will only be a single match for each element.

### Solution 1

```
      function sortArray(a1, a2) {
        let array = [];
        for (let i = 0; i < a1.length; i += 1) {
          for (let j = 0; j < a2.length; j += 1) {
            if (a1[i][0] === a2[j][0]) {
              array.push(a2[j]);
            }
          }
        }
        return array;
      }
```

### Solution 2

```
const sortArray = (a1, a2) => a1.map( v => a2.find( w => v[0]===w[0] ) );
```
