let endingNumber = +process.argv[2];
console.log("series of odd numbers is :");

const oddNumberSeries=function(end){
  for (index=0;index<=end;index++){
    if (index%2!=0){
      console.log(index);
    }
  }
}

oddNumberSeries(endingNumber);
