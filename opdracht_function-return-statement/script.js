console.log('\n', '   -----   ', '\n');

// Opdracht: Checking if a number is big
// this function produces something
const isBiggerThan100 = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};
console.log(isBiggerThan100(110));   // true
console.log(isBiggerThan100(90));    // false

// shorter function: checking if number is big
const isBiggerThanOption2 = function (number) {
    return number > 100;
};
console.log(isBiggerThanOption2(110));   // true
console.log(isBiggerThanOption2(90));    // false

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
};
console.log(haveAccessToClub(100, 99, 31));     // come in
console.log(haveAccessToClub(90, 20, 17));      // this is a club for adult
console.log(haveAccessToClub(110, 110, 20));    // its too busy now, come back later

// Opdracht: Calculating the average
// this function produces something
const calculateAverage = function (num1, num2, num3, num4, num5) {
    const total = num1 + num2 + num3 + num4 + num5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;
};
console.log(calculateAverage(1, 2, 3, 4, 5));    // 3
console.log(calculateAverage(6, 5, 12, 2, 3));   // 6


