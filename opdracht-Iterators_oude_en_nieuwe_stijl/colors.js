const colors = ["yellow", "blue", "red", "orange"];

// Oude stijl met while loop
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

// Oude stijl met for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Nieuwe stijl: array method (forEach)
colors.forEach((color) => console.log(color));

// 1. Mijn for loop neemt 3 regels in beslag en mijn while loop 5 regels.
// 2. Mijn forEach method (met een arrow function) heeft 1 regel.
// 3. Voordeel van Array method: makkelijker, leesbaarder en minder foutgevoelig.
//    Voordeel array method, uitleg Winc:
// -> je kunt niet meer verstrikt raken in een infinite loop.
// -> je hoeft niet meer bij te houden met een i, bij welke iteratie je bent.
// -> je hebt direct toegang tot het item waar je overheen loopt dmv het argument en de callback-functie 
//    die je de array-method geeft als argument.
// -> de naam "forEach" zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop.

//Looping through the properties of an object
const myColors = {
    a: "yellow",
    b: "blue",
    c: "red",
    d: "orange",
    e: "green",
};

for (x in myColors) {
    console.log(myColors[x]);
}

// Ben je nu aan het itereren? Ja, je bent aan het itereren over een OBJECT
// Array Methods zijn NIET beschikbaar op een object.