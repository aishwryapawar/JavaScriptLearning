function display() {
  console.log("My name is Aishwarya");
  console.log("My Sir name is Anup");
}
display();

function show() {
    console.log("My college name is SVERIs coe pandharpur");

}
show();

function showDetails(myName) {
 console.log("My Full Name is ",myName);
}
showDetails("Aishwarya Kambar");
showDetails("Chetan");
showDetails("Rajesh");

function rajuBhaiya(paisa) {
console.log("Going in market",paisa);
console.log("purchase fresh vegitables",paisa);
console.log("come back",paisa);
return "Bag Of Vegitables";
}
var bgOfVegiables=rajuBhaiya(100);
console.log(bgOfVegiables);

function swapValue(value1,value2)
{
    console.log("Before Swap",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap",value1,value2);

}
swapValue(100,200);
swapValue(2,4);
swapValue("Aishu","Chetan");
swapValue("you","me");