let givenNumber=+process.argv[2];

const isOdd=function(number){
  let OddNumber="is Not an Odd Number";
  if (number%2!=0){
    OddNumber="is an Odd Number";
  }
  return OddNumber;
}

console.log(givenNumber,isOdd(givenNumber));
