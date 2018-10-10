let endingNumber=+process.argv[2];
console.log("series of reverse odd numbers is:");

const oddNumberReverse=function(end){
  for(index=end;index>=0;index--){
    if (index %2 !=0){
      console.log(index);
    }
  }
}

oddNumberReverse(endingNumber);
