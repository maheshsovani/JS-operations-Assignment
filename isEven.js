let givenNumber=+process.argv[2];

const isEven=function(number){
  let evenNumber="is Not an Even Number";
  if (number%2==0){
    evenNumber="is an Even Number";
  }
  return evenNumber;
}

console.log(givenNumber,isEven(givenNumber));
