let startingNumber=+process.argv[2];
let endingNumber=+process.argv[3];
let specificNo=+process.argv[4];
console.log("N Th Term Series is:");

const nthterm = function(start,end,position){
  for (index=start;index<=end;index+=position){
    console.log(index);
  }
}

nthterm(startingNumber,endingNumber,specificNo);
