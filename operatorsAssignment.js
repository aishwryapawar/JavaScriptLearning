console.log("  = = = == == = == = = Q 1 = = = = == = = = = = =");
function squareOfWordLength(txt)
{
  console.log("Our String is",txt);
   var ourResult=txt.length*txt.length;
   console.log("String is",txt,"And its Length is ",txt.length,"square of length is",ourResult);
   return ourResult;
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


// var WordLengthSquare = function (text) {
//   var myresult=text.length*text.length;
//   console.log("the length is", text.length);
//   console.log("Squar of length is",myresult);
//   return myresult;
// };
// WordLengthSquare("Aishwarya");

console.log("  = = = == == = == = = Q 2 = = = = == = = = = = =");
function myFunction(mytext)
{
  var mytext="I am Angular Developer";
  var result=mytext.length/4;
    console.log("Length of string is",mytext.length);
    console.log("division is",result);
    console.log("multi is",mytext.length*4);
}
myFunction();


