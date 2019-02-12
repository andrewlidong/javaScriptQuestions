# From Me to You

```js
const fromMeToYou(sentence) {
    sentence = sentence.split(' ');
    const result = [];

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === "me") {
            result.push('you');
        } else {
            result.push(sentence[i]);
        }
    }

    return result.join(' ');
}
```