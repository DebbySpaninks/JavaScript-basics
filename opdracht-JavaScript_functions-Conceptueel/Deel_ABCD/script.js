//Deel A: Schrijf je eerste functie

/*Make a Cheese Sandwich
  Get one slice of bread
  Add cheese
  Put a slice of bread on top
 */
const sandwichCheese = function () {
    console.log("Take one slice of bread");
    console.log("Add cheese");
    console.log("Put a slice of bread on top");
}
sandwichCheese();

//Deel B: Schrijf een functie met een argument
const makeSandwich = function (topping) { //function declaration
    console.log("Take one slice of bread");
    console.log("Add " + topping); //topping = argument
    console.log("Put a slice of bread on top");
    console.log("There you go a sandwich with " + topping);
};
makeSandwich("ham"); //function Call
makeSandwich("egg");

//Deel C: Gebruik een return statement
const calculateDiscountedPrice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount); //return statement
}
console.log(calculateDiscountedPrice(10, 2.8));

//Deel D: Gebruik meerdere return statements
const calculateDiscountedPriceTwo = function (totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    } else {
        return totalAmount;
    }
}
console.log(calculateDiscountedPriceTwo(28, 2.8));
console.log(calculateDiscountedPriceTwo(20, 2.8));