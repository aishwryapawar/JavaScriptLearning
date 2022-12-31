//type conversion
var numAdd=10+40;
var strAdd="Aish" + 10;
console.log(`strAdd is: ${strAdd}`);


console.log(
  ` + operator can do the the type conversion as well from string to number `
);
var numStr = "100";
var num = +numStr;
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = +numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);

//implicite conversion 1st type of typeconversion

console.log(`== comparison ${20=="20"}`);

var mynum=77;
console.log(`My number value ${mynum} and its type is : ${typeof mynum}`);
var strnum=mynum.toString();
console.log(`strnum value ${strnum} and it is ${typeof strnum}`);