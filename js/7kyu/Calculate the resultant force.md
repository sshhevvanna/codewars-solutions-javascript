# Codewars JavaScript Solutions

## Calculate the resultant force (7kyu)

Given two forces (F1 and F2 ) and the angle F2 makes with F1 find the resultant force R and the angle it makes with F1.

### input

Three values :

- F1
- F2 making an angle θ with F1
- angle θ

### output

An array consisting of two values :

- R (the resultant force)
- angle R makes with F1 (φ)

### notes

Units for each of the following are given as under :

- F1 = Newton
- F2 = Newton
- angle θ = degree
- R = Newton
- φ = degree

### Solution

```
solution = (force1, force2, theta) => {
    const r = theta * Math.PI/180;
    const x = force1 + force2 * Math.cos(r);
    const y = force2 * Math.sin(r);
    return [Math.hypot(x, y), Math.atan2(y, x) * 180 / Math.PI];
}
```
