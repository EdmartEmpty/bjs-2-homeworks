"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b**2) - 4*a*c;
    console.log(discriminant);
  if (discriminant === 0){ 
   arr[0] =  -b/(2*a);
  
  };
if (discriminant > 0){
  arr[0] = (-b + Math.sqrt(discriminant) )/(2*a);
  arr[1] = (-b - Math.sqrt(discriminant) )/(2*a);
} 
return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentInMonths =  (percent/ 100) / 12;
  let bodyCredit = amount - contribution;
  let paymentPerMonth = bodyCredit * (percentInMonths + (percentInMonths / (((1 + percentInMonths)**countMonths) - 1)));
  let result = paymentPerMonth*countMonths;
  return +result.toFixed(2);
  
}
