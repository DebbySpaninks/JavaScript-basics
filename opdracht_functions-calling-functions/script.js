console.log('\n', '   -----   ', '\n');

// 2 functions, one that greets and another that checks if person is adult
const isPersonAdult = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};
console.log(isPersonAdult(17));
console.log(isPersonAdult(18));

const greet = function (age) {
    if (age === true) {
        return 'Hello there';
    } else {
        return 'Hey kiddo';
    }
};
console.log(greet(isPersonAdult(11)));
console.log(greet(isPersonAdult(21)));

console.log('\n', '   -----   ', '\n');

// VAT calculations exercise 1
// function to calculate VAT
const calcVAT = function (basePrice, VATPercentage) {
    console.log('entering calcVAT');
    return basePrice * (VATPercentage / 100);
};

// function to calculate price including VAT
const calcPriceIncludingVAT = function (basePrice, VATPercentage) {
    console.log('entering calcPriceIncludingVAT');
    const VAT = calcVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};
console.log(calcPriceIncludingVAT(1000, 21)); // 1210
console.log(calcPriceIncludingVAT(2, 9)); // 2.18

console.log('\n', '   -----   ', '\n');

// VAT calculations exercise 2
// function to calculate the baseprice
const calcBasePrice = function (priceWithVAT, VATPercentage) {
    console.log('entering calcBasePrice');
    const basePrice = priceWithVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

// function to calculate the baseprice and VAT
const calcBasePriceAndVAT = function (priceWithVAT, VATPercentage) {
    console.log('entering calcBasePriceAndVAT');
    const basePrice = calcBasePrice(priceWithVAT, VATPercentage);
    const VAT = priceWithVAT - basePrice;

    return [basePrice, VAT];
};
console.log(calcBasePriceAndVAT(1210, 21));   // [1000, 210]
console.log(calcBasePriceAndVAT(2.18, 9)); // [2, 0.18]
