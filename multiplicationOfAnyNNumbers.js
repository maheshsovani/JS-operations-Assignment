let startingNumber=+process.argv[2];
let endingNumber=+process.argv[3];
let multiplication=1;

const multiplicationSeries=function(number1,number2){
  for (let index=number1;index<=number2;index++){
    multiplication=index*multiplication;
  }
  return multiplication;
}

answer=multiplicationSeries(startingNumber,endingNumber);
console.log("Multiplication of series is",answer);
