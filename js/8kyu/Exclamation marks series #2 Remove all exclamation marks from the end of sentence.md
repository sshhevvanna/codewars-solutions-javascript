# Codewars JavaScript Solutions

## Exclamation marks series #2: Remove all exclamation marks from the end of sentence

### Description:

Remove all exclamation marks from the end of sentence.

### Examples

```
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
```

### Solution 1

```
      function remove(s) {
        const string = s.split("");
        let i = 1;
        while (string[string.length - i] === "!") {
          string[string.length - i] = "";
          i += 1;
        }
        return string.join("");
      }
```

### Solution 2

```
const remove = s => s.replace(/!+$/, '');
```

### Solution 3

```
function remove(s){
  //coding and coding....
  while (s[s.length - 1] === '!') {
    s = s.slice(0, -1);
  }
  return s;
}
```
