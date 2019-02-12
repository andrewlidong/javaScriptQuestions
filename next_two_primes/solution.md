# Next Two Primes

```js
const isPrime = num => {
  if (num < 2) return false

  for (i = 2; i <num; i++) {
    if (num % i === 0) return false
  }

  return true;
}

const nextTwoPrimes = num => {
  const result = [];

  for (let i = num + 1; result.length < 2; i++) {
    if (isPrime(i)) result.push(i);
  }

  return result;
}
```