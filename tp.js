// function sum_Of_Cubes(n) {
//   var sumn = 0;

//   for (var i = 1; i <= 5; i++) {
//     sumn += Math.pow(i, 3);
//   }
//   return sumn;
// }

// console.log(sum_Of_Cubes(3));
// console.log(sum_Of_Cubes(4));


// for (var i = 1; i <= 5; i++) {
//   sumn += Math.pow(i, 3);
// }

// var i=1;
// while (i<=5) {
//   console.log(i);
//   i++;
//   if (i<=5) {
//    console.log(i*i*i);
//     continue;
//   }

  
// }



console.log(`###1 . Write count the total no of vowels in the given string`)

console.log((`"I Am Very Good IT Developer"`));
var sentence = "I Am Very Good IT Developer";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is : ${counter}`);
console.log(`----------------------------------------`);
 
console.log(`###2 . "Sum of cube of no 1 to 5`)
function addition(num1,num2,num3,num4,num5) {
    
    var s=num1*num1*num1+num2*num2*num2+num3*num3*num3+num4*num4*num4+num5*num5*num5
    console.log(`Sum of cube of no 1 to 5= ${s}`)
}
addition(1,2,3,4,5)
console.log(`----------------------------------------`);