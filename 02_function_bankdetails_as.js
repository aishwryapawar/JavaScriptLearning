console.log("==========Bank Details=========");

function bankDetails(bankName,accountNumber,locaion,pinCode)
{
    console.log("This is my Account Details...",bankName,accountNumber,locaion,pinCode);
}
bankDetails("CITI Bank",3456782345,"Pune",431202);
bankDetails("Axis Bank",7856782345,"Mumbai",441202);
bankDetails("HDFC Bank",8956782345,"Pune",631202);


var foo=1;
function myFun()
{
    console.log(foo);
    var foo=2;
}
myFun();