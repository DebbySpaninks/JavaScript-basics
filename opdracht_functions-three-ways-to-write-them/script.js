// function declaration
function squaredNumWithDeclaration(num1, num2) {
    const num1Squared = num1 * num1;
    const num2Squared = num2 * num2;
    const sum = num1Squared + num2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
}
console.log(squaredNumWithDeclaration(2, 5));   // 841

// function expression
const squaredNumWithExpression = function (num1, num2) {
    const num1Squared = num1 * num1;
    const num2Squared = num2 * num2;
    const sum = num1Squared + num2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};
console.log(squaredNumWithExpression(2, 5));   // 841

// shorter function expression
const squaredNumWithExpressionShorter = function (num1, num2) {
    const sum = num1 * num1 + num2 * num2;
    return sum * sum;
};
console.log(squaredNumWithExpressionShorter(2, 5));   // 841

// arrow function
const squaredNumWithArrow = (num1, num2) => {
    const num1Squared = num1 * num1;
    const num2Squared = num2 * num2;
    const sum = num1Squared + num2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};
console.log(squaredNumWithArrow(2, 5));   // 841


// shorter arrow function 
const squaredNumWithArrowShorter = (num1, num2) => {
    const sum = num1 * num1 + num2 * num2;
    return sum * sum;
};
console.log(squaredNumWithArrowShorter(2, 5));   // 841