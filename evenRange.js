// Write a function evenRange(start, end) that returns an array containing all even
// numbers between 'start' and 'end' in sequential order.
// Examples:
// evenRange(13, 20) => [ 14, 16, 18, 20 ]
// evenRange(4, 11) => [ 4, 6, 8, 10 ]
// evenRange(8, 5) => []

function evenRange(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) result.push(i);
  }

  return result;
}
