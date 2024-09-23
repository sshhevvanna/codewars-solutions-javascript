# Codewars JavaScript Solutions

## SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes

### Objective

Preloaded for you is a `class Dog`:

```
class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}
```

You are then given a working `class Labrador` as your initial code.

```
class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}
```

Shorten it so that it meets the strict character count requirements for this Kata.

Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D

### Solution 1

```
/* master is the sixth argument to the class constructor of Dog so assuming that you initially attempted to pass the arguments to super like this: super(name, age, gender, master), it would set this.species to master instead of this.master. */

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender);
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.loyal = true;
    this.master = master;
  }
}
```

### Solution 2

```
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}
```
