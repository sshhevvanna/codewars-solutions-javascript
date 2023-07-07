# Codewars JavaScript Solutions

---

## Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples
`"www.codewars.com#about" --> "www.codewars.com"`
`"www.codewars.com?page=1" -->"www.codewars.com?page=1"`

### Solution 1
```
function removeUrlAnchor(url) {
  url = url.split("");

  if (url.includes("#")) {
    let anchor = url.indexOf("#");
    return url.splice(0, anchor).join("");
  } else {
    return url.join("");
  }
}
```
### Solution 2
```
function removeUrlAnchor(url) {
  return url.replace(/#.*/gi, "");
}
```