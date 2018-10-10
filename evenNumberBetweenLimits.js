startingNumber=+process.argv[2];
endingNumber=+process.argv[3];
console.log("the series of even number is:");

const evenNumberBetweenLimit=function(start,end){
  let evenNumberSeries="";
  for (let index=start;index<=end;index++){
    if(index%2==0){
    evenNumberSeries=evenNumberSeries + index +"\n";
    }
  }
  return evenNumberSeries;
}

let series=evenNumberBetweenLimit(startingNumber,endingNumber);
console.log(series);
