# Capitalize Vowels

```js
const capVowels = string => {
    const vowels = 'aeiouAEIOU'.split('');
    let result = '';

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            result += string[i].toUpperCase();
        } else {
            result += string[i].toLowerCase();
        }
    }

    return result;
}
```