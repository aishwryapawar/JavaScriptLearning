console.log("=============================== AS if else stmt ==============================");
console.log("=============================== Q1 Evven Odd ==================================");
function isEvenOrOdd(num) 
{
    if (typeof num == "number") 
    {
        console.log(`Valid number ${num}`);
        if (num % 2 === 0) 
        {
            console.log(`Even number`);
        } 
        else 
        {
            console.log(`Odd Number`);
        }
    }
     else 
     {
        console.log(`Invalid number ${num}`);
    }
}isEvenOrOdd(2);
isEvenOrOdd(45);
isEvenOrOdd(13);
isEvenOrOdd(0);
isEvenOrOdd("70");

console.log("=================================== Q2 gretest number amng 3 =====================");

var gretestNumIs =function(num1,num2,num3)
{
    if(num1>num2)
    {
         console.log(`Number ${num1} is greatest than ${num2}`);        
    }
    else
    {
        console.log(`Number ${num2} is greatest than ${num1}`);
    }
    if(num2>num3)
    {
        console.log(`Number ${num2} is greatest than ${num2}`);
    }
    else
    {
        console.log(`Number ${num3} is greatest than ${num3}`);
    }
    if(num3>num1)
    {
        console.log(`Number ${num3} is greatest than ${num3}`);
    }
    else
    {
        console.log(`Number ${num1} is greatest than ${num1}`);
    }   
}
gretestNumIs(56,70,80);
gretestNumIs(-20,-90,0);