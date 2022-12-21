var fname="Aishwarya";
console.log(" Given string is ",fname);

console.log(" Given string is ",fname.charAt(3));

console.log(" Given string is ",fname.length);

var totalLength = fname.length;
console.log("Char at last index",fname.charAt(totalLength-1));
console.log(" = = = == = =  = = =concatination = = = =   = = ==  ==");

var fname="Aishwarya";
var mname="Rajesh";
var lname="Pawar";

var result = fname+lname;
console.log("result string is",result);
var result=fname.concat(mname,lname);
console.log("Conatinatin of string is",result);


var greet="Good Morning";
var indexOf = greet.indexOf("M");
console.log("character of",indexOf);

var indexOff = greet.indexOf("nin");
console.log("character of",indexOff);

var replacestr = greet.replace("Morning","Everning");
console.log("replance substring",replacestr);

console.log("replance our substring",greet.replace("Eve","Mor"));

console.log("String is in upper case",greet.toUpperCase());
console.log("String is in lower case",greet.toLowerCase());

var greeting="Good Evening";
console.log("Include string",greeting.includes("Good"));


var great="Good Morning";
console.log("Current String Length is",great.length);
var resultt=great.trim();
console.log("After trim method length of string is",resultt.length);

var resultt=great.trimStart();
console.log("After Start trim method length of string is",resultt);

var resultt=great.trimEnd();
console.log("After End trim method length of string is",resultt);

var resultt=great.slice(0,6);
console.log("AftER slice is",resultt);

var resultt=great.slice(-5);
console.log("AftER slice is",resultt);

console.log("Afeter new one",greet.slice(-3));


console.log("Afeter new one",greet.slice(-3,-1));

var stud="Aish|Shree|Chet|Bunny|Kaddy";
var re=stud.split("|");
console.log("Split String",re);