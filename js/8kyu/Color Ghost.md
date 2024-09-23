# Codewars JavaScript Solutions

## Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

```
ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
```

### Solution

```
      class Ghost {
        constructor() {
          const colors = ["white", "yellow", "purple", "red"];
          const randomNumber = Math.floor(Math.random() * 4);
          this.color = colors[randomNumber];
        }
      }
```
