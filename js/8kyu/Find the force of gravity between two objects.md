# Codewars JavaScript Solutions

## Find the force of gravity between two objects (8kyu)

Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

### input

Two arrays are given :

- arr_val (value array), consists of 3 elements

1. 1st element : mass of obj 1
2. 2nd element : mass of obj 2
3. 3rd element : distance between their centers

- arr_unit (unit array), consists of 3 elements

1. 1st element : unit for mass of obj 1
2. 2nd element : unit for mass of obj 2
3. 3rd element : unit for distance between their centers

- mass units are :

1. kilogram (kg)
2. gram (g)
3. milligram (mg)
4. microgram (μg)
5. pound (lb)

- distance units are :

1. meter (m)
2. centimeter (cm)
3. millimeter (mm)
4. micrometer (μm)
5. feet (ft)

### Note

value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

`μ` copy this from here to use it in your solution

### Solution

```
      const solution = (arr_val, arr_unit) => {
        for (let i = 0; i < arr_val.length; i += 1) {
          switch (arr_unit[i]) {
            case "g":
              arr_val[i] *= 0.001;
              break;
            case "mg":
              arr_val[i] *= 0.000001;
              break;
            case "μg":
              arr_val[i] *= 0.000000001;
              break;
            case "lb":
              arr_val[i] *= 0.453592;
              break;
            case "cm":
              arr_val[i] *= 0.01;
              break;
            case "mm":
              arr_val[i] *= 0.001;
              break;
            case "μm":
              arr_val[i] *= 0.000001;
              break;
            case "ft":
              arr_val[i] *= 0.3048;
              break;
          }
        }

        const G = 6.67 * 10 ** -11;

        return G * ((arr_val[0] * arr_val[1]) / arr_val[2] ** 2);
      };
```
