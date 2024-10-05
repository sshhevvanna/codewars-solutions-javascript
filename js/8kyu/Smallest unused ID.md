# Codewars JavaScript Solutions

## Smallest unused ID

Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!

### Solution 1

```
function nextId(ids){
  ids.sort((a, b) => a - b);
  if(ids[0] !== 0) return 0;
  for(let i = 0; i < ids.length; i += 1){
    if(ids[i] + 1 !== ids[i + 1] && ids[i] !== ids[i + 1]){
      return ids[i] + 1;
    }
  }
  return ids[ids.length - 1] + 1;
}
```

### Solution 2

```
function nextId(ids){
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}
```
