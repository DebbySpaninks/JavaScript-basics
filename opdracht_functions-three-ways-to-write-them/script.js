// function declaration
function squaredNumWithDeclaration(num1, num2) {
    let square = Math.sqrt((num1 * num1) + (num2 * num2));
    return square;
}
console.log(squaredNumWithDeclaration(2, 5));   // 5.385164807134504

// function expression
const squaredNumWithExpression = function (num1, num2) {
    let square = Math.sqrt((num1 * num1) + (num2 * num2));
    return square;
}
console.log(squaredNumWithExpression(2, 5));   // 5.385164807134504

// arrow function
const squaredNumWithArrow = (num1, num2) => Math.sqrt((num1 * num1) + (num2 * num2));
console.log(squaredNumWithArrow(2, 5));   // 5.385164807134504