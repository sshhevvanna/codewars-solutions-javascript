# Codewars JavaScript Solutions

---

## String Reordering

The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is `-999 < key < 999`. The dictionaries' keys & values will always be strings and will always not be empty.

### Example

```
Input:

List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
```

### Solution 1

```
      function sentence(list) {
        let string = "";
        let arr = [];
        for (item of list) {
          for (key in item) {
            arr.push(key);
          }
        }

        arr = arr.sort((a, b) => a - b);

        for (let i = 0; i < arr.length; i += 1) {
          for (item of list) {
            for (key in item) {
              if (arr[i] == key && arr[i] === arr[arr.length - 1]) {
                string += item[key];
              } else if (arr[i] == key) {
                string += item[key] + " ";
              }
            }
          }
        }

        return string;
      }
```

### Solution 2

```
      const sentence = (list) =>
        list
          .sort((a, b) => Object.keys(a) - Object.keys(b))
          .map((item) => Object.values(item))
          .join(" ");
```
