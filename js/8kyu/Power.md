# Codewars JavaScript Solutions

## Power

The goal is to create a function of two inputs `number` and `power`, that "raises" the `number` up to `power` (ie multiplies `number` by itself `power` times).

### Examples

```
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000
```

Note: `Math.pow` and some other `Math `functions like `eval()` and `**` are disabled.

### Solution

```
function numberToPower(number, power){
  if(power === 0) return 1;
  let newNumber = number;
  for(let i = 2; i <= power; i += 1){
    newNumber *= number;
  }
  return newNumber;
}
```
