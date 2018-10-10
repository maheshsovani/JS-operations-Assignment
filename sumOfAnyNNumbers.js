let startingNumber=+process.argv[2];
let endingNumber=+process.argv[3];
let sum =0;

const specificSum=function(start,end){
  for (let index=start;index<=end;index++){
    sum+=index;
  }
  return sum;
}

let answer=specificSum(startingNumber,endingNumber);
console.log("sum of numbers is",answer);
