let startNumber=+process.argv[2];
let endingNumber=+process.argv[3];

console.log("series of odd number is:")

const oddNumbers=function (start,end){
  for(index=start;index<=end;index++){
    if (index%2!=0){
      console.log(index);
    }
  }
}

oddNumbers(startNumber,endingNumber);
