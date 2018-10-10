let startingNumber=+process.argv[2];
let endingNumber=+process.argv[3];
let sum=0;

const evenSum=function(start,end){
  for (let index=start;index<=end;index++){
    if(index%2==0){
      sum+=index;
    }
  }
  return sum;
}

let answer=evenSum(startingNumber,endingNumber);
console.log("sum of even numbers is:",answer);
