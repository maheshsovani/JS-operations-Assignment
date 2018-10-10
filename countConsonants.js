let input=process.argv[2];
let numberOfConsonants=0;
let consonants="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

const consonantCount=function(string){
  for (index=0;index<string.length;index++){
    for (index2=0;index2<consonants.length;index2++)
      if(string[index]==consonants[index2]){
        numberOfConsonants++;
      }
  }
  return numberOfConsonants;
}

console.log("number of consonants is", consonantCount(input));
