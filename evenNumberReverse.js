let upperLimit=+process.argv[2];
let lowerLimit=+process.argv[3];
console.log("reverse series of even number is:");

const evenNumberReverse=function(number1,number2){
  for (index=number1;index>=number2;index--){
    if (index%2==0){
      console.log(index);
    }
  }
}

evenNumberReverse(upperLimit,lowerLimit);
