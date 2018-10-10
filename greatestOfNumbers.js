let firstNumber=+process.argv[2];
let secondNumber=+process.argv[3];
let thirdNumber=+process.argv[4];

const greatestNumber=function(number1,number2,number3){
  let  greatest=Math.max(number1,number2,number3);
  return greatest;
}

answer=greatestNumber(firstNumber,secondNumber,thirdNumber);
console.log("Greatest number is",answer);
