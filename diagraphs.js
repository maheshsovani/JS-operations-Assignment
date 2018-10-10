let inputString=process.argv[2];

const diagraphs=function(string){
  for (let index=0;index<string.length;index++){
    if(string[index]==string[index+1]){
      console.log(string[index]+string[index+1]);
    }
  }
}

diagraphs(inputString);

