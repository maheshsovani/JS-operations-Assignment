let input=process.argv[2];
let reverse="";
const reverser=function(string){
  for (let index=string.length-1;index >=0;index--){
    reverse+=string[index];
  }
  return reverse;
}
console.log(reverser(input));
