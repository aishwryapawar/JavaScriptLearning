//equal to '===' and '==' example
var num1=10;
var num2="10";
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof "100");

var resultE=num1==num2?"Equal to" : "Not Equal to";
console.log(`num1==num2==> ${resultE}`);


var resultEEE=num1===num2?"Equal to" : "Not Equal to";
console.log(`num1===num2===> ${resultEEE}`);

//ssc marks greater than equal to 35 those pass other are fail

var sscMarks = 34;
var resultPassOrFail = sscMarks >= 35 ? "Pass" : "Fail";
console.log(`Result is ${resultPassOrFail}`);

var sscResult = function (sscMarks) {
  var result = (sscMarks >= 35 && ! (sscMarks > 100)) ? "Pass" : "Fail";
  return result;
};
console.log(`Result is ${sscResult(89)}`);
console.log(`Result is ${sscResult(33)}`);
console.log(`Result is ${sscResult(35)}`);

