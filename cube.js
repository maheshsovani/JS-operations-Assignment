let number=+process.argv[2];

const cubeOfNumber=function(number1){
  let cube=number1*number1*number1;
  return cube;
}

console.log("Cube of ",number,"is",cubeOfNumber(number));
