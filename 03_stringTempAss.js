console.log(" = = = = Assignment no 2 = = = =");
var stringHandsOn = function () {};
stringHandsOn();
console.log(" = = = = Q 1  String = = = =");

var txt = "      Hey you are doing good, keep it up      ";
console.log(txt);

console.log(" = = = = Q 2 Length = = = =");

console.log("Length of string is", txt.length);
console.log("Length of string is", txt);

console.log(" = = = = Q 3 remove extra spaces = = = =");
console.log("length of string  is", txt.length);
console.log("Length of string is", txt);

console.log(" = = = = Q 4 remove spaces count = = = =");

var resultt = txt.trim();
console.log("Removing leading and trailing extra spaces", resultt);
console.log(
  "After Removing leading and trailing extra spaces length is",
  resultt.length
);

console.log(" = = = = Q 5 satrt end char = = = =");
var text = "Hey you are doing good, keep it up";
var tttt = text.charAt(0);
var ttt = text.charAt(33);
console.log(
  "First Character of String is ",
  tttt,
  "Last Character of String is",
  ttt
);

console.log(" = = = = Q 6 string count = = = =");

console.log("length of string  is", text.length);

console.log(" = = = = Q 7 find good = = = =");
var indexOff = text.indexOf("good");
console.log("character of", indexOff);

console.log(" = = = = Q 8 substring Slice = = = =");
var res = text.slice(22);
console.log("AftER slice is=======", res);

console.log(" = = = = Q 9 string ends with = = = =");
var inc = text.includes("up");
console.log("is there up is last string", inc);

console.log(" = = = = Q 10 string ends with = = = =");

var inc = text.includes("Hey");
console.log("is there up is start string", inc);
