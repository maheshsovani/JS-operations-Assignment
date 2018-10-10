let input=process.argv[2];
let numberOfVowels=0;
let vowels="aeiouAEIOU";

const vowelsCount=function(string){
  for (index=0;index<string.length;index++){
    for (index2=0;index2<vowels.length;index2++)
      if(string[index]==vowels[index2]){
        numberOfVowels++;
      }
  }
  return numberOfVowels;
}

console.log("number of vowels is", vowelsCount(input));
