console.log(" ========================== break and continue statement =========================");
console.log("print num 0 to 10 but break in num 5");
var i=0;
while (i<=10) {
    console.log(i);
    if (i==5) {
      break;       
    }
    i++;
}

for (let index = 0; index < 20; index++) {
    console.log(index);
    if (i>=12) {
        break;
    }    
}