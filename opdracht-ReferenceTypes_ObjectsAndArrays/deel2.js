//Deel 2 Arrays
const colors = ["groen", "blauw", "rood"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
colors.push("geel");
console.log(colors);
colors.push(5);
console.log(colors);
colors.push({ Greeting: "Hi ik ben een object" });
console.log(colors);
console.log(colors[colors.length - 1].Greeting);

