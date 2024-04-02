# Codewars JavaScript Solutions

## Turn any word into a beef taco (7kyu)

If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

### Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

### NOTE

We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.

### Solution

```
     function tacofy(word) {
        let taco = ["shell"];

        word = word
          .toLowerCase()
          .split("")
          .filter((char) => /[aeioutlcgs]/gi.test(char))
          .forEach((char) => {
            switch (char) {
              case "a":
              case "e":
              case "i":
              case "o":
              case "u":
                taco.push("beef");
                break;

              case "t":
                taco.push("tomato");
                break;

              case "l":
                taco.push("lettuce");
                break;

              case "c":
                taco.push("cheese");
                break;

              case "g":
                taco.push("guacamole");
                break;

              case "s":
                taco.push("salsa");
                break;
            }
          });

        taco.push("shell");

        return taco;
      }
```
