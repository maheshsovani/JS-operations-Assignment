let requiredPrimeNumber = + process.argv[2];

const nthPrime=function(number){
  let primeCount = 1;
  let divisor;
  let primeCandidate = 2;

  while(primeCount < number){
    let isPrime = true;
    primeCandidate++;
    for(divisor = 2 ; divisor <= Math.sqrt(primeCandidate) ;divisor++){
      if(primeCandidate % divisor == 0){
        isPrime =false;
      }
    }

    if(isPrime){
      primeCount++;
    }
  }
  return primeCandidate;
}

console.log("Required prime number is",nthPrime(requiredPrimeNumber));

