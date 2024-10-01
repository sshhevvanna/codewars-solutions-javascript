# Codewars JavaScript Solutions

## Freudian translator

You probably know that number 42 is _"the answer to life, the universe and everything"_ according to Douglas Adams' _"The Hitchhiker's Guide to the Galaxy"_. For Freud, the answer was quite different...

In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

Now, basically, when a person hears about Freud, s/he hears _"sex"_ because for Freud, everything was related to, and explained by sex.

In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.

### Solution 1

```
const toFreud = (string) => string.length > 0
  ? new Array(string.split(" ").length).fill("sex").join(" ")
  : "";
```

### Solution 2

```
const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')
```
