const calculateSupply = function (age, amountPerDay) {
    const maxAge = 100;
    const totalSupply = amountPerDay * 365 * (maxAge - age);
    let message = "You will need " + totalSupply + " chocolate bars to last you until the ripe old age of " + maxAge;
    console.log(message);
};
calculateSupply(37, 2);
calculateSupply(37, 1);
calculateSupply(37, 3);