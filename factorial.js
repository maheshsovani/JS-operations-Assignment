let givenNumber=+process.argv[2];
let result=1;

const factorial=function(number){
  for (index=number;index>0;index--){
    result=result*index;
  }
  return result;
}

console.log("Factorial of",givenNumber,"is",factorial(givenNumber));
