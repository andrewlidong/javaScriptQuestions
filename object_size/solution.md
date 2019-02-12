# Object Size

```js
const objectSize = object => {
  let count = 0;

  for (let key in object) {
    count ++;
  }

  return count;
}

```