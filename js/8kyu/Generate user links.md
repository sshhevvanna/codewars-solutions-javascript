# Codewars JavaScript Solutions

## Generate user links

Your task is to create userlinks for the url, you will be given a username and must return a valid link.

### Example

```
generate_link('matt c')
http://www.codewars.com/users/matt%20c
```

### reference

use this as a reference [encoding](http://www.w3schools.com/tags/ref_urlencode.asp)

### Solution

```
const generateLink = (user) =>
  `http://www.codewars.com/users/${encodeURIComponent(user)}`;
```
