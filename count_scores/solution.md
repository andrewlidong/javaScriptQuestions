# Count Scores

```js
const countScores(people) {
    const returnObj = {};

    for (let i = 0; i < people.length; i++) {
        let tempPerson = people[i];
        let name = tempPerson.name;
        let score = tempPerson.score;

        if (!returnObj[name]) {
            returnObj[name] = score;
        } else {
            returnObj[name] += score;
        }
    }

    return returnObj;
}
```