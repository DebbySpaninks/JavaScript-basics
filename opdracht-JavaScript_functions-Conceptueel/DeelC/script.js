//Deel C: gebruik een return statement

//Optie 1
const calculateDiscountedPriceOptieEen = function (totalAmount, discount) {
  console.log(Math.round(totalAmount - discount));
};
calculateDiscountedPriceOptieEen(50, 2.5); //zonder cijfers (hiertussen) is output NaN (not a number)

//Optie 2
const calculateDiscountedPriceOptieTwee = function (totalAmount, discount) {
  return Math.round(totalAmount - discount); //Na return kun je geen code meer uitvoeren
};
console.log(calculateDiscountedPriceOptieTwee(50, 2.5));