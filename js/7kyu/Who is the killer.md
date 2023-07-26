# Codewars JavaScript Solutions

---

## Who is the killer?

Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

### Task

Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

`{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}`
and also a list of the names of the dead people:

`['Lucas', 'Bill']`
return the name of the one killer, in our case `'James'` because he is the only person that saw both `'Lucas'` and `'Bill'`

### Solution 1

```
      function killer(suspectInfo, dead) {
        let num = 0;

        for (key in suspectInfo) {
          let people = suspectInfo[key];

          for (let i = 0; i < dead.length; i += 1) {
            if (people.includes(dead[i])) {
              num += 1;
              if (num == dead.length) {
                return key;
              }
            }
          }
        }
      }


```

### Solution 2

```
function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
      return name;
    }
  }
}
```
