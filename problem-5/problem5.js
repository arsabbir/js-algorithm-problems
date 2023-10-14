/**
  sum all the prime numbers up to and include the provide number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime

Example
sumAllPrime(10) should return 17
sumAllPrime(977) should return 73156

 */
function primeNumber(num) {
  let primeTotal = 0;
  for (let i = 2; i < num; i++) {
    for (let j = 2; j < num; j++) {

      if (i === j) primeTotal += i;
      if (i % j === 0) {
        break;
      }
    }
  }
  return primeTotal;
}

console.log(primeNumber(10));
