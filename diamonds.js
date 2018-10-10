const generateLine=function(character,length){
  let generatedLine="";
  for (characterNo=0;characterNo<length;characterNo++){
    generatedLine +=character;
  }
  return generatedLine;
}

const createFilledUpperPart=function(width){
  let upperPart ="";
  let symbol="*";
  let delimeter="";
  for(let lineNo=width;lineNo>=0;lineNo-=2){
    let spacesOnLeft="";
    spacesOnLeft+=generateLine(" ",((lineNo-1)/2));
    upperPart+= delimeter + spacesOnLeft + symbol;
    delimeter="\n";
    symbol+="**";
  }
  return upperPart;
}

const createFilledLowerPart=function(width){
  let spacesOnLeft=" ";
  let delimeter="";
  let lowerPart="";
  for(let lineNo=width-2;lineNo>=0;lineNo-=2){
    let symbol="*";
    symbol+=generateLine("*",(lineNo-1));
    lowerPart+=delimeter+spacesOnLeft+symbol;
    spacesOnLeft+=" ";
    delimeter="\n";
  }
  return lowerPart;
}

const createEmptyUpperPart=function(width){
  let symbol="*";
  let middleSpaces=" ";
  let delimeter="";
  let upperPart="";
  for (lineNo=width;lineNo>0;lineNo-=2){
    let spacesOnLeft="";
    spacesOnLeft+=generateLine(" ",((lineNo-1)/2));
    if (lineNo==width){
      upperPart+=spacesOnLeft+symbol+"\n";
    } else {
      upperPart+=delimeter+spacesOnLeft+symbol+middleSpaces+symbol;
      delimeter="\n";
      middleSpaces+="  ";
    }
  }
  return upperPart;
}

const createEmptyLowerPart=function(width){
  let lowerPart="";
  let spacesOnLeft=" ";
  let symbol="*";
  let upperPart="";
  for(let lineNo=width-2;lineNo>0;lineNo-=2){
    let middleSpaces=" ";
    middleSpaces+=generateLine("  ",((lineNo-1)/2)-1);
    if (lineNo==1){
      lowerPart+=spacesOnLeft+symbol;
    }
    else{
      lowerPart+=spacesOnLeft+symbol+middleSpaces+symbol+"\n";
      spacesOnLeft+=" ";
    }
  }
  return lowerPart;
}

const createAngledUpperPart=function(width){
  let middleSpaces=" ";
  let delimeter="\n";
  let upperPart="";
  for (lineNo=width;lineNo>1;lineNo-=2){
    let spacesOnLeft="";
    spacesOnLeft+=generateLine(" ",((lineNo-1)/2));
    if (lineNo==width){
      upperPart+=spacesOnLeft+"*"+delimeter;
    } else {
      upperPart+=spacesOnLeft+"/"+middleSpaces+"\\"+delimeter;
      middleSpaces+="  ";
    }
  }
  upperPart+="*"+generateLine(" ",(width-2))+"*";
  return upperPart;
}

const createAngledLowerPart=function(width){
  let spacesOnLeft=" ";
  let delimeter="";
  let lowerPart="";
  for (let lineNo=width-2;lineNo > 0;lineNo-=2){
    let middleSpaces=" ";
    middleSpaces+=generateLine("  ",((lineNo-1)/2)-1);
    if (lineNo==1){
      lowerPart+=spacesOnLeft+"*";
    }
    else{
      lowerPart+=spacesOnLeft+"\\"+middleSpaces+"/"+"\n";
      spacesOnLeft+=" ";
    }
  }
  return lowerPart;
}

const createDiamond=function(type,width){
  let angledDiamond = createAngledUpperPart(width) +"\n"+ createAngledLowerPart(width);
  let emptyDiamond = createEmptyUpperPart(width) + "\n" + createEmptyLowerPart(width);
  let filledDiamond = createFilledUpperPart(width)+"\n"+createFilledLowerPart(width);
  if (type=="angled"){
    return angledDiamond;
  }
  if (type=="empty"){
    return emptyDiamond;
  }
  if(type=="filled"){
    return filledDiamond;
  }
}

const main=function(type){
  let typeOfDiamond=process.argv[2];
  let width=+process.argv[3];
  if (width%2==0){
    width=width+1;
  }
  if (typeOfDiamond=="angled"){
    console.log(createDiamond("angled",width));
  }
  if (typeOfDiamond=="empty"){
    console.log(createDiamond("empty",width));
  }
  if (typeOfDiamond=="filled"){
    console.log(createDiamond("filled",width));
  }
}
main();
