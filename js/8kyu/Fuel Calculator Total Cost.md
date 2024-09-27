# Codewars JavaScript Solutions

## Fuel Calculator: Total Cost

In this kata you will have to write a function that takes `litres` and `pricePerLitre` (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

### Note

1 Dollar = 100 Cents

### Solution

```
function fuelPrice(litres, pricePerLitre) {
  let discount = Math.floor(litres / 2) * 5;
  if(discount === 0){
    discount = 1;
  } else if(discount > 25){
    discount = 25;
  }
  return Number(((pricePerLitre * 100 - discount) * litres / 100).toFixed(2));
}
```
