# First Last Capitalize

```js
function updateWord(word) {
    let newWord = word[0].toUpperCase() + word.slice(1, -1).toLowerCase() + word[word.length - 1].toUpperCase();
    return newWord;
}

function firstLastCap(sentence) {
    const result = [];
    sentence = sentence.split(' ');

    for (let i = 0; i < sentence.length; i++) {
        result.push(updateWord(sentence[i]));
    }

    return result.join(' ');
}
```