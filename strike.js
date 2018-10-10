let givenString=process.argv[2];
let characterToBeStriked=process.argv[3];
let output="";

const striker=function(string,character){
for (let index=0; index<string.length; index++){
  if (string[index]==character){
    output+="-";
  } else{
    output+=givenString[index];
    }
}
return output;
}

console.log(striker(givenString,characterToBeStriked));


