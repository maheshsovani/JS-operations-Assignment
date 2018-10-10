let input=process.argv[2];
let strip="";

const striper=function(string){
  for (let index=0;index<string.length;index++){
    if(input[index]==" " ){
      strip+="";
    }
    else{
      strip+=input[index];
    }
  }
  return strip;
}

console.log(striper(input));
