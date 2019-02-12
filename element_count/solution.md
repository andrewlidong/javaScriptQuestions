# Element Count

```js
function elementCount(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (!obj[el]) {
            obj[el] = 1;
        } else {
            obj[el] += 1;
        }
    }

    return obj;
}
```