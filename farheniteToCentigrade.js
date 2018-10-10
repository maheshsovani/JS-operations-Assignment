let givenTemperture=+process.argv[2];

const farheniteToCentigrade=function(tempCentigrade){
  result=Math.floor((tempCentigrade-32 )/1.8);
  return result;
}

answer=farheniteToCentigrade(givenTemperture);
console.log("temperature in farhenite is",answer);
