# Codewars JavaScript Solutions

## Broken Counter

Our counter prototype is broken. Can you spot, what's wrong here?

### Solution

```
class Counter {
  constructor(value = 0){
    this.value = value;
  }

  getValue(){
    return this.value;
  }

  increase(){
    return this.value += 1;
  }

  reset(){
    return this.value = 0;
  }
}

```
