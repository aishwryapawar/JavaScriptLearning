console.log("Function Expression");
console.log("= = = = = = = = =  Q 1 Square of numbers = = = = = = = = =");
var square=function(num)
{
    console.log("Square of",num,"is",num*num);
}
square(2);
square(7);
square(5);

console.log("= = = = = = = = =  Q 2 type of Function = = = = = = = = = =");

console.log("type of Square is",typeof square);
console.log("= = = = = = = = =  Q 3 Calculate area of rectangle = = = = =");
var rectangle=function(length,width)
{
  console.log("Area of rectangle is",length*width);
}
rectangle(499,917);

console.log("= = = = = = = = =  Q 3 Calculate area of rectangle = = = = =");

function swap_values(num1,num2)
{
    console.log("Before Swap",num1,num2);
   var temp=num1;
   num1=num2;
   num2=temp;
   console.log("After Swap",num1,num2);    
}
swap_values("Virat","Anushka");
swap_values(1000,2000);
console.log("= = = = = = = = =  Q 4 String = = = = =");
var fname="JavaScript the most popular language";
console.log("Total character of length is",fname.length);
console.log("Index of Character S is",fname.indexOf("S"));
console.log("index of string 'lang' is",fname.indexOf("lang"));

var totalLength=fname.length;
console.log("Last Character is ",fname.charAt(totalLength-1));
console.log("Last Character is ",fname.charAt(totalLength-3));

