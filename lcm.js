let firstNumber=+process.argv[2];
let secondNumber=+process.argv[3];
let gcd=0;
let Lcm=0;
const lcm=function(number1,number2){
  for (let index=1;index<=number1;index++){
    if (number1 %index==0 && number2%index==0){
      gcd=index;
    }
  }
  Lcm=(number1*number2)/gcd;
  return Lcm;
}

answer=lcm(firstNumber,secondNumber);
console.log("LCM of",firstNumber,"&",secondNumber,"is",answer);
