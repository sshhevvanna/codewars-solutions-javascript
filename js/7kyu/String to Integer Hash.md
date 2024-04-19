# Codewars JavaScript Solutions

## String to Integer Hash (7 kyu)

Your mission is to implement Java's "public int hashCode()" method for any string, which takes in a string and converts it into an integer hash.

The function in general form for a string `s` of length `n` is:

`hashCode(s) = s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]`

Where `^` denotes exponentiation. As Java uses 32-bit integers to hold the hash value, all values should be kept as such.

e.g `hashCode("hello world")` should return `1794106052`.

### Solution

```
function hashCode(s) {
    let hash;
    for(let i = 0; i < s.length; i += 1)
          hash = Math.imul(31, hash) + s.charCodeAt(i);

    return hash;
}
```
