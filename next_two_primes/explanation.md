# Next Two Primes

### High level idea

First, write an isPrime function which determines whether a number is prime.  isPrime works by returning false for any number less than 2, and for anything greater iterates by one, checking at each iteration whether the number modulo the iterator is equal to 0.  Return true if we pass our iteration.  

In our main function, next two primes, initialize a results array, iterate from num + 1, until the length of the results is two, if the number is prime push it into results.  
