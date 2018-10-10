let upperLimit=+process.argv[2];
console.log("series of even numbers is: ");

const evenNumberSeries=function (limit){
  for (index=0;index<=limit;index ++){
    if (index%2==0){
      console.log(index);
    }
  }
}

evenNumberSeries(upperLimit);
