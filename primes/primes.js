// Using the `isPrime` function you made, write a function `firstNPrimes(n)` that
// returns an array of the first `n` prime numbers.
//
// Examples:
// firstNPrimes(0); // => []
// firstNPrimes(1); // => [2]
// firstNPrimes(4); // => [2, 3, 5, 7]


function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function firstNPrimes(n) {
  let primesArr = [];
  let num = 2;

  while (primesArr.length < n) {
    if (isPrime(num)) primesArr.push(num);
    num++;
  }

  return primesArr;
}
