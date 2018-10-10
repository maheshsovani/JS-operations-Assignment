let principleAmount=+process.argv[2];
let rateOfInterest=+process.argv[3];
let period=+process.argv[4];

const simpleInterest=function(principle,rate,time){
  let interest=(principle*rate*time)/100;
  return interest;
}

let answer=simpleInterest(principleAmount,rateOfInterest,period);
console.log("Simple Interest is",answer);
