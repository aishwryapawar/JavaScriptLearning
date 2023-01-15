console.log(
  "================= Assignment of Tricky num ======================="
);
console.log("=============== Q 1 Total number of vowels =================");

var sentence = "I am Very Good IT Developer ";
var count = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    console.log(char);
    count = count + 1;
  }
}
console.log(`Total number of vowels are ${count}`);

console.log(
  "=============== Q 2 Sum of Cube from 1 to 5 number ================="
);

var sumOfCube=function(n1,n2,n3,n4,n5)
{
  var result=n1*n1*n1 + n2*n2*n2 + n3*n3*n3+n4*n4*n4+n5*n5*n5;
  console.log(`Sum Of Cube of 1 to 5 numbers is ${result}`);
}
sumOfCube(1,2,3,4,5);


console.log(
    "=============== Q 3  ================="
  );

var str1=" Hard Work Always Pay Back";
var str2=" Soon I will be Angular IT Champ";

for (let index = 0; index < str1.length; index++) {
    if(index%2!=0)
   // console.log(index);  
    var char=str1.charAt(index);
    console.log(char);
}

// for (let index = 0; index < str2.length; index++) {
//   if(index%2!=0)
//  // console.log(index);  
//   var char=str2.charAt(index);
//   console.log(char);
// }