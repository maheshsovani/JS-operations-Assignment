let endingNumber=+process.argv[2];
let sum=0;

const seriesSum=function(limit){
  sum=(limit*(limit+1)/2);
  return sum;
}

let answer=seriesSum(endingNumber);
console.log("Sum of first",endingNumber,"is:",answer);
