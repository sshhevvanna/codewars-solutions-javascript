# Codewars JavaScript Solutions

---

## Super Duper Easy

Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

### Solution 1

```
function problem(x){
return x !== Number(x)? 'Error' : x \* 50 + 6;
}
```

### Solution 2

```
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;
```
