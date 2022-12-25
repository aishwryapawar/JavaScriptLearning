console.log(
  "======================= AS 1....Assignment Marriage Boy Nd Girl ================================"
);
console.log("==============Q 1 Male Marriage ================");

function maleMarriageEligibility(gender, age, boyName) {
  var rmale =
    gender ="male" && age >= 21
      ? ` Hey ${boyName} your are Eligible for Marriage`
      : `Sorry  ${boyName} your are not Eligible for Marriage`;
  console.log(`${rmale}`);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");


console.log("==============Q 2 Female Marriage ================");

function femaleMarriageEligibility(gender, age, girlName) {
  var rfemale =
    gender ="female" && age >= 18
      ? ` Hey ${girlName} your are Eligible for Marriage`
      : `Sorry  ${girlName} your are not Eligible for Marriage please wait`;
  console.log(`${rfemale}`);
} 
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");