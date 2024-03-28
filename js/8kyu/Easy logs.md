# Codewars JavaScript Solutions

## Easy logs

Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: log x A + log x B.

### Solution

```
function logs(x , a, b){
    return (Math.log(a*b) / Math.log(x));
}
```
