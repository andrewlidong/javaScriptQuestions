# Every Other Word

```js
function everyOtherWord(sentence) {
    sentence = sentence.split(' ');
    const result = [];

    for (let i = 0; i < sentence.length; i = i + 2) {
        result.push(sentence[i]);
    }

    return result;
}
```