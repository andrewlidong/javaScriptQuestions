# Decode String

```js
const decode_string = str {
    const decoded = '';
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ']') {
            while (stack[stack.length - 1] !== '[' && stack.length !== 0) {
                decoded = stack.pop() + decoded;
            }
            stack.pop();

            let repeats = Number(stack.pop());
            let decodedSoFar = decoded.slice();

            while (repeats > 1) {
                decoded += decodedSoFar;
                repeats --;
            }

            if (stack.length === 0) {
                break;
            } else {
                stack.push(str[i]);
            }
        }
    }

    return decoded;
}
```