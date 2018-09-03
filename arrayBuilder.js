// Write a function `arrayBuilder` that takes in a count object and returns
// an array filled with the appropriate numbers of elements. The order of
// the elements in the array does not matter, but repeated elements should be
// grouped.
//
// Examples:
// arrayBuilder({'a': 3, 'b': 0, 'c': 2}); //=> [ 'a', 'a', 'a', 'c', 'c' ]
// arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
// arrayBuilder({}); //=> []

function arrayBuilder(obj) {
  let result = [];

  for (let key in obj) {
    let end = obj[key];

    for (let i = 1; i <= end; i++) {
      result.push(key);
    }
  }

  return result;
}
