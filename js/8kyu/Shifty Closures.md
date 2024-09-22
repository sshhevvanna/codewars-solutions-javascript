# Codewars JavaScript Solutions

## Shifty Closures

Functional closures can get overly attached. Set them straight!

Why doesn't greetAbe() actually greet Abe?

### Solution

```
function greet(name) {
  return function () {
    return "Hello, " + name + "!";
  };
}

const greetAbe = greet("Abe");
const greetBen = greet("Ben");

```
