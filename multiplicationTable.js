let number=+process.argv[2];
let tableLength=+process.argv[3];
let table=0;
console.log("Multiplication table is:")

const multiplicationTable=function(number1,limit){
  for (let index=1;index<=limit;index++){
    table=index*number1;
    console.log(number1,"X",index, "=",table);
  }
}

multiplicationTable(number,tableLength);
