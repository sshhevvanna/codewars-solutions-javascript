# Codewars JavaScript Solutions

## Reversing Words in a String

You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

```
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
```

Happy coding!

### Solution

```
      function reverse(string) {
        const array = string.split(" ").reverse();
        const result = [];
        for (let i = 0; i < array.length; i += 1)
          if (array[i] !== " ") {
            result.push(array[i]);
          }
        return result.join(" ");
      }
```
