let firstNumber=+process.argv[2];
let secondNumber=+process.argv[3];
let result=0;

const gcd=function(number1,number2){
  for (index=1;index<=number1;index++){
    if (number1%index ==0 && number2%index ==0){
      result=index;
    }
  }
  return result; 
}

Gcd=gcd(firstNumber,secondNumber);
console.log("GCD of ",firstNumber,"&",secondNumber,"is",Gcd);
