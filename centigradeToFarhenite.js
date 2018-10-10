let tempInCentigrade=+process.argv[2];

const farenheitConverter=function(temperature){
  let temperatureInFarenheit=(temperature*1.8)+32;
  return temperatureInFarenheit;
}

let answer=Math.floor(farenheitConverter(tempInCentigrade));
console.log("The temperature in farenheit is ",answer);
