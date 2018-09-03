// Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns the sum of
// the first `n` prime numbers.
//
// Examples:
// sumOfNPrimes(0); // => 0
// sumOfNPrimes(1); // => 2
// sumOfNPrimes(4); // => 17

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function firstNPrimes(n) {
  let primes = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num++;
  }

  return primes;
}

function sumOfNPrimes(n) {
  let sum = 0;
  let primes = firstNPrimes(n);

  for (let i = 0; i < primes.length; i++) {
    sum += primes[i];
  }

  return sum;
}
