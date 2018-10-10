let givenNumber=+process.argv[2];

const square=function(number){
  let answer=number*number;
  return answer;
}

console.log("Square of",givenNumber,"is",square(givenNumber));
