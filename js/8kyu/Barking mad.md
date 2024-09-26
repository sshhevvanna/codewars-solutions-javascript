# Codewars JavaScript Solutions

## Barking mad

Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

```
snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
```

Use method prototypes to enable all Dogs to bark.

### Solution 1

```
function Dog (breed) {
  this.breed = breed;
  this.bark = function(){
    return "Woof";
  }
}

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");
```

### Solution 2

```
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
```
