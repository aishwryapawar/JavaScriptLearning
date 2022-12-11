console.log("=== Q 1 ===");
function aishwarya() {
  console.log(".......Good Morning........");
}
aishwarya();
function chetan() {
  console.log(".....Good Evening.....");
}
chetan();

console.log("=== Q 2 ===");
function personalDetails(fName, lName, cName) {
  console.log("My first name is ", fName);
  console.log("My Last Name is ", lName);
  console.log("My College Name is", cName);
}
personalDetails("Aishwarya", "Pawar", "SVERI");

console.log("=== Q 3 ===");
function swapValueDude(val1, val2) {
  console.log("Before Swap", val1, val2);
  var temp = val1;
  val1 = val2;
  val2 = temp;

  console.log("After Swap", val1, val2);
}
swapValueDude("Virat", "Anushka");
swapValueDude(1000, 2000);

console.log("=== Q 4 ===");

function addThreeValues(value1, value2, value3) {
  console.log("Addition of three parameters is ", value1 + value2 + value3);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
