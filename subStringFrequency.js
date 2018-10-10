let givenString=process.argv[2];
let stringToBeCompared=process.argv[3];

const frequencyCalculator=function(string,subString){
  let count=0;
  let upperLimit=string.length;
  let lowerLimit=subString.length;
  let patternToMatch="";

  for (index=0;index<=(upperLimit-lowerLimit);index++){
    for(index2=index;index2<index+lowerLimit;index2++){
      patternToMatch+=string[index2];
    }

    if(patternToMatch==subString){
      count++;
    }
    patternToMatch=""
  }
  return count;
}

let frequency=frequencyCalculator(givenString,stringToBeCompared)
console.log("Frequency of sub string is",frequency)
