# Codewars JavaScript Solutions

---

## Data Reverse

A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

`11111111 00000000 00001111 10101010
(byte1) (byte2) (byte3) (byte4)`
should become:

`10101010 00001111 00000000 11111111
(byte4) (byte3) (byte2) (byte1)`
The total number of bits will always be a multiple of `8`.

The data is given in an array as such:

`[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]`

### Solution

```
      function dataReverse(data) {
        let newArr = [];
        let num = 0;

        let answer = [];

        for (let i = 0; i <= data.length - 1; i += 1) {
          if (num !== 7) {
            num += 1;
            newArr.push(data[i]);
          } else {
            newArr.push(data[i]);
            answer.push(newArr);
            newArr = [];
            num = 0;
          }
        }

        return answer.reverse().flat();
      }

```
