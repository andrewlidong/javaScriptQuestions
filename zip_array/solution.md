# Abbreviate

```js
const removeVowels = word => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newWord = '';

    for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
            newWord += word[i];
        }
    }

    return newWord;
}

const abbreviate = sentence => {
    sentence = sentence.split(' ');
    let result = []

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].length <= 4) {
            result.push(sentence[i]);
        } else {
            result.push(removeVowels(sentence[i]));
        }
    }

    return result.join(' ');
}
```