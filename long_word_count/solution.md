# Long Word Count

```js
const longWordCount = str => {
  let count = 0;
  strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 7) {
      count ++;
    }
  }

  return count;
}
```