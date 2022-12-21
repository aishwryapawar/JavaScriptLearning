console.log("= = = = = = = = Arithmatic operation = = = = = = = =");
console.log("- - - - - - - - Addition - - - - - - -  -");
var num1 = 10;
var num2 = 5;
var addResult = num1 + num2;
console.log(`Addition is : ${addResult}`);

console.log("- - - - - - - - Substraction - - - - - - -  -");
var subResult = num1 - num2;
console.log(`Substraction is : ${subResult}`);

console.log("- - - - - - - - Multiplication - - - - - - -  -");
var multiResult = num1 * num2;
console.log(`Multiplication is : ${multiResult}`);

console.log("- - - - - - - - Division - - - - - - -  -");
var divResult = num1 / num2;
console.log(`Division is : ${divResult}`);

console.log("- - - - - - - - Modulous - - - - - - -  -");
var modResult = num1 % num2;
console.log(`modolus  is : ${modResult}`);

var result = num1 % 2;
console.log(`result is ${result}`);

var mresult = 20 % 3;
console.log(`mresult is ${mresult}`);

console.log("= = = = = = = = Assignment  operation = = = = = = = =");

var num1 = 10;
var num2 = 7;
num1 += num2;
console.log(`compound addition is ${num1}`);

console.log(`compound substraction is ${(num1 -= num2)}`);

console.log(`============ Unary Operators =================`);
var num3 = 10;
var increresult = ++num3;
console.log(`Increment value by 1 ${increresult}`);

var num4=10;
var decresult = --num4;
console.log(`Decrement value by 1 ${decresult}`);

console.log(`============ Comparison Operators =================`);
var num1 = 10;
var num2 = 5;
var num3 = 10;
var result = num1 > num2;
console.log(`> Operator - Greater than ${result}`);
console.log(`> Operator - Greater than ${num1>num3}`);
var result = num1 < num2;
console.log(`< Operator - Less than ${result}`);
var result = num1 >= num3;
console.log(`>= Operator - Greater than equal ==> ${result}`);
var result = num1 <= num3;
console.log(`<= Operator - Less than equal ==> ${result}`);
console.log(`Check even or ODD: ${11%2}`);
