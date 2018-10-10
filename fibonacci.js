let numberOfTermsRequired=+process.argv[2];
console.log("Required terms of fibonacci serires are:");

const fibonaciSeries=function(number){
  let lastSecondTerm=0;
  console.log(lastSecondTerm);
  let previousTerm=1;
  console.log(previousTerm);
  
  for (index=0;index<number-2;index++){
    let currentTerm= previousTerm + lastSecondTerm ;
    lastSecondTerm = previousTerm;
    previousTerm = currentTerm; 
    console.log(currentTerm);
  }
}

fibonaciSeries(numberOfTermsRequired);


//let numberOfTerms= 20;
//let firstTerm = 0;
//console.log("fibonacci_series_is");
//console.log(firstTerm);
//let lastSecond = 1;
//let previousNumber = 0;
//let currentNumber = 0;
//let indexNumber = 1;
//while (indexNumber<numberOfTerms){
//  currentNumber = lastSecond + previousNumber;
//  lastSecond = previousNumber;
//  previousNumber = currentNumber;
//  console.log(currentNumber);
//  indexNumber=indexNumber+1;
//}
