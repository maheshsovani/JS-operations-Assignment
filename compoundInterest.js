let principleAmount=+process.argv[2];
let rateOfInterest=+process.argv[3];
let timePeriod=+process.argv[4];

const compoundInterest=function (principle,rate,period){
  let amount=principle*(Math.pow((1+(rate/100)),period));
  let interest=amount-principle;
  return Math.floor(interest);
}

answer=compoundInterest(principleAmount,rateOfInterest,timePeriod);
console.log("compound interest is ",answer); 
