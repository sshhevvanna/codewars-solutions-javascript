# Codewars JavaScript Solutions

## Well of Ideas - Easy Version (8kyu)

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

### Solution 1

```
      function well(x) {
        let goodIdeas = 0;
        for (let i = 0; i < x.length; i += 1) {
          if (x[i] === "good") {
            goodIdeas += 1;
          }
          if (goodIdeas >= 3) {
            return "I smell a series!";
          }
        }

        return goodIdeas >= 1 ? "Publish!" : "Fail!";
      }
```

### Solution 2

```
const well = x => {
  const good_count = x.filter(x => x === 'good').length;
  return good_count < 1 ? 'Fail!' :
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}
```

### Solution 3

```
function well(x) {
  switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}
```
