# Codewars JavaScript Solutions

---

## Trimming a string

Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious.
Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
You can mutate the Fighter objects.
Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
`declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"`

Lew attacks Harry; Harry now has 3 health.
Harry attacks Lew; Lew now has 6 health.
Lew attacks Harry; Harry now has 1 health.
Harry attacks Lew; Lew now has 2 health.
Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

```
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
```

### Solution

```
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let f1 = {};
  let f2 = {};

  if (fighter1.name === firstAttacker) {
    f1 = fighter1;
    f2 = fighter2;
  } else {
    f2 = fighter1;
    f1 = fighter2;
  }

  while (fighter1.health > 0 || fighter2.health > 0) {
    f2.health -= f1.damagePerAttack;
    if (f2.health <= 0) {
      return f1.name;
    }
    f1.health -= f2.damagePerAttack;
    if (f1.health <= 0) {
      return f2.name;
    }
  }
}

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")
);
```
