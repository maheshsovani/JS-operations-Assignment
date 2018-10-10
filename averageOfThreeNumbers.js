let firstNumber=+process.argv[2];
let secondNumber=+process.argv[3];
let thirdNumber=+process.argv[4];

const average=function(number1,number2,number3){
  let result=(number1+number2+number3)/3;
  return result;
}

answer=average(firstNumber,secondNumber,thirdNumber);
console.log("Average of given numbers is",answer);
