let colors = ["yellow", "blue", "red", "orange"];
/* Met While Loop
while (colors) {
    console.log(colors);
    colors++;
}
*/

/* Met For Loop
for (colors; colors.length; colors++) {
    console.log(colors);
}
*/

// Array (forEach) method
colors.forEach(element => console.log(element));

//Looping through the properties of an object
const object = {
    a: "yellow",
    b: "blue",
    c: "red",
    d: "orange",
    e: "green",
};

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

/*
1. Mijn For Loop neemt 3 regels in beslag en mijn While Loop 4 regels.
2. Mijn forEach method neemt 1 regel in beslag.
3. Voordeel van Array method t.o.v. for loop of while loop:
makkelijker, leesbaarder en minder foutgevoelig.
Welke methode vind je makkelijker leesbaar en waarom?
While loop omdat deze meer gedetailleerd is. Meer uitgeschreven.
4. Je kunt geen array method gebruiken op een object. Stel je hebt een object met 45 properties.
Hoe kun je toch die 45 properties console.loggen met een loop?
Looping through the properties of an object (gebruik Google)
Probeer deze code uit en gebruik een object van 5 properties.
Ben je nu aan het itereren? Ja
*/