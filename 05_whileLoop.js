console.log("================= While Loop Statement ================");
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log(
  " ========================= Assignment of while Loop Satement ===================== "
);
console.log("=======Q 1 Print number from 5 to 15 increment by 1 =========== ");

var i = 5;
while (i <= 15) {
  console.log(i);
  i = i + 1;
}

console.log(
  " =============== Q 2 Print number from 50 to 40 decrement by 1======================= "
);

var j = 50;
while (j >= 40) {
  console.log(j);
  j = j - 1;
}

console.log(
  " ============ Q 3 Print first 15 even numbers ================================ "
);
var a = 0;
while (a < 15) {
  if (a % 2 == 0) {
    console.log(a);
  }
  a = a + 1;
}

console.log(
  " ============ Q 4 Print first 10 odd numbers ================================ "
);
var b = 0;
while (b < 10) {
  if (b % 2 !== 0) {
    console.log(b);
  }
  b = b + 1;
}

console.log(" ================= Q 5 Print number  5 to 50 =================");
var c = 5;
while (c <= 50) {
  console.log(c);
  c = c + 5;
}

console.log(" ================= Q 6 Print number  10 to 100 =================");
var d = 10;
while (d <= 100) {
  console.log(d);
  d = d + 10;
}

console.log(" ================= Q 7 Print number  100 to 10 =================");
var e = 100;
while (e >= 10) {
  console.log(e);
  e = e - 10;
}
