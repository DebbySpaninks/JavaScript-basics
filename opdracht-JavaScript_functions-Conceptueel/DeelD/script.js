//Deel D: gebruik meerdere return statements
//Optie 1
const calculateDiscountedPriceClone = function (totalAmount, discount) {
  if (totalAmount > 25) {
    console.log(Math.round(totalAmount - discount));
  } else {
    console.log(totalAmount);
  }
};
calculateDiscountedPriceClone(50, 7.5);
calculateDiscountedPriceClone(20, 2.5);

//Optie 2
const calculateDiscountedPriceCloneOptieTwee = function (totalAmount, discount) {
  if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
  } else {
    return totalAmount;
  }
};
console.log(calculateDiscountedPriceCloneOptieTwee(50, 7.5));
console.log(calculateDiscountedPriceCloneOptieTwee(20, 2.5));