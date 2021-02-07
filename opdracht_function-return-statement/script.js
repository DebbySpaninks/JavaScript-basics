console.log('\n', '   -----   ', '\n');

// Opdracht: Checking if a nuber is big
// this function produces something
const isBiggerThan100 = function (number) {
    let result;
    if (number > 100) {
        result = 'true';
    } else
        if (number < 100) {
            result = 'false';
        }
    return result;
}
console.log(isBiggerThan100(110));   // result = true
console.log(isBiggerThan100(90));    // result = false

// Opdracht: Bouncer at a club (check amount of people and there age)
// this function produces something
const haveAccessToClub = function (maxNum, currentNum, age) {
    let result;
    if (age < 18) {
        result = 'this is a club for adults';
    } else
        if (currentNum >= maxNum) {
            result = 'its too busy now, come back later';
        } else {
            result = 'come in';
        }
    return result;
}
console.log(haveAccessToClub(100, 99, 31));     // come in
console.log(haveAccessToClub(90, 20, 17));      // this is a club for adult
console.log(haveAccessToClub(110, 110, 20));    // its too busy now, come back later

// Opdracht: Calculating the average
// this function produces something
const numbers = [1, 3, 6, 4, 5];
const calculateAverage = numbers.reduce(function (total, number) {
    return total + Math.round(number / 5);      // total = hele array numbers
}, 0);
console.log(calculateAverage);

// call the function multiple times with different arguments


