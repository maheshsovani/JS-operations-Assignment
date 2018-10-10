let givenString=process.argv[2];

const checkPalindrome=function(string){
  let isPalindrome="";
  for (let index=string.length-1;index >=0;index--){
    isPalindrome+=string[index];
  }
  if(string==isPalindrome){
    console.log("given String Is Palindrome");
  } else {
    console.log("given String IS Not A Palindrome");
  }
}

checkPalindrome(givenString);
