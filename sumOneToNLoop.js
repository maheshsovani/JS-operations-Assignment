let endingNumber=+process.argv[2];
let sum=0;

const sumLoop=function(limit){
  for (index=0;index<=limit;index++){
    sum+=index;
  }
  return sum;
}
let answer=sumLoop(endingNumber);
console.log("Sum of first",endingNumber,"numbers is",answer);
