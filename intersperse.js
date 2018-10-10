let givenString=process.argv[2];

const makeIntersperse=function(string){
  let intersperse="";
  let limit=string.length;
  for (let index=0;index<limit-1;index++){
    intersperse+=string[index]+",";
  }
  intersperse+=string[limit-1];
  return intersperse;
}

console.log(makeIntersperse(givenString));

