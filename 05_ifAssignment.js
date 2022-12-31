console.log("============================Assignment of If Statement ============================================");
console.log("=========================== Que 1 voting age for eligible or not eligible =========================");
var voteEligibility= function(age)
{
    
   if(age<=0 || age>120)
   {
      console.log(`Your Age is ${age} Invalid data`);
   }
   if(age>=18 && age<=120)
    {
       console.log(`Your Age is ${age} You can vote `);
    }
    
   if(age<18)
   {
      console.log(`Your Age is ${age} You can not vote `);
   }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
console.log("=========================== Que 2 Grade System =========================");

var gradeCalculation=function(marks)
{
   if(marks>=90)
   {
    console.log(`Funtastic marks  ${marks}, Your Grade is A+`);
   }    
   if(marks>=75 && marks<=90)
   {
      console.log(`Excellent Marks ${marks} your grade is A`);
   }
   if(marks>=50 && marks<=75)
   {
      console.log(`Good Marks ${marks}, Your Grade is B`);
   }
   if(marks>=35 && marks<=50)
   {
      console.log(`Marks is ${marks}, Your Grade is C, Need Improvement`);
   }
   if(marks=0 || marks<0 || marks>=100)
   {
      console.log(`Please Provide the valid marks`);
   }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(98);
gradeCalculation(49);