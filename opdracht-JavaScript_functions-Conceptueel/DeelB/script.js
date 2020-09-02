//Deel B: schrijf een functie met een argument
const makeSandwich = function (topping) { //function declaration
  console.log("Get one slice of bread");
  console.log("Add " + topping + " to sandwich"); //topping is an argument
  console.log("Put a slice of bread on top");
  console.log("There you go, a sandwich with " + topping);
};

makeSandwich("ham"); //call the function
makeSandwich("egg"); //call the function