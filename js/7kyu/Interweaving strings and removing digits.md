# Codewars JavaScript Solutions

## Interweaving strings and removing digits (7kyu)

Your friend Rick is trying to send you a message, but he is concerned that it would get intercepted by his partner. He came up with a solution:

1. Add digits in random places within the message.

2. Split the resulting message in two. He wrote down every second character on one page, and the remaining ones on another. He then dispatched the two messages separately.

Write a function interweave(s1, s2) that reverses this operation to decode his message!

Example 1: interweave("hlo", "el") -> "hello" Example 2: interweave("h3lo", "el4") -> "hello"

Rick's a bit peculiar about his formats. He would feel ashamed if he found out his message led to extra white spaces hanging around the edges of his message...

### Solution

```
      function interweave(s1, s2) {
        const message = s1.split("");
        let indexS1 = 0;
        let indexS2 = 0;

        message.map((el) => {
          message.splice(indexS1 + 1, 0, s2[indexS2]);
          indexS1 += 2;
          indexS2 += 1;
        });

        return message.filter((char) => !/[\p{N}]/giu.test(char)).join("");
      }
```
