let startingNumber=+process.argv[2];
let endingNumber=+process.argv[3];
let sum=0;

const oddSum=function(start,end){
  for (index=start;index<=end;index++){
    if(index%2!=0){
      sum+=index;
    }
  }
  return sum;
}

let answer=oddSum(startingNumber,endingNumber);
console.log("Sum of odd numbers in series is",answer);
