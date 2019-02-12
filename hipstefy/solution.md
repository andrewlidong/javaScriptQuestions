# Hipstefy

```js
const hipsterfy = sentence => {
  const vowels = "aeiou".split("");
  const sentenceArr = sentence.split(" ");
  const results = [];

  for (let i = 0; i < sentenceArr.length; i++) {
    let temp = sentenceArr[i].split("").reverse();
    let count = 0;
    let tempArr = [];

    for (let j = 0; j < temp.length; j++) {
      if (vowels.includes(temp[j] && count === 0)) {
        count ++;
        continue;
      }
      else {
        tempArr.push(temp[j]);
      }
    }
    temp = tempArr.reverse().join("");
    results.push(temp);
  }
  return results.join(" ");

}
```