let limit=+process.argv[2];
let answer=1;

const product=function(end){
  for (let index=1;index<=end;index++){
    answer*=index;
  }
  return answer;
}

console.log("Product of first",limit,"numbers is",product(limit));
