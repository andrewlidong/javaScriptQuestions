// Write a function isInside(array, ele) that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false

function isInside(array, ele) {
  if (array.indexOf(ele) > -1) return true;
  return false;
}
