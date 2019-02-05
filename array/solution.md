# logEach, capitalizeWords, maxValue

```js
const logEach = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(i + ': ' + array[i]);
    }
}

const capWords = words => {
    const arr = [];
    for (let i = 0; i < words.length; i++) {
        arr.push(words[i].toUpperCase());
    }
    return arr;
}

const maxValue = array => {
    if (array.length === 0) return null;
    let largest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (largest < array[i]) largest = array[i];
    }

    return largest;
}
```