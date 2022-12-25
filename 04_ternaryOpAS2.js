console.log("= = =  = = = =  AS 2....Assignment of ternary operator = =  = === = ==  ==");
console.log("==============Q 1 Greater number ================");

var greaternum=function(num1,num2)
{
    var resultGreterNumIs =num1>num2?"Greater":"not greater";
    console.log(`Result of Greater number is ${resultGreterNumIs}`);
}
greaternum(10,-10);
greaternum(800,899);


console.log("==============Q 2 Even Odd number ================");
var eonum=function(val)
{
    var resultEvenOdd = val%2?"True" :"False";
    console.log(`Number is ${resultEvenOdd}`);
}
eonum(29);
eonum(44);
eonum(0);
eonum(101);

console.log("==============Q 3 Length is  Even Odd  ================");
var eonumLength=function(value)
{ 
    var len=value.length;
    var resultEvenOddLength = len%2?"Even" :"Odd";
    console.log(`Length is ${resultEvenOddLength}`);
}
eonumLength("JavaScript");
eonumLength("Developer");
eonumLength("Google");
