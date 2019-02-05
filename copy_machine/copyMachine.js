// Write a function copyMachine(element, num) that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine(element, num) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    result.push(element);
  }

  return result;
}
