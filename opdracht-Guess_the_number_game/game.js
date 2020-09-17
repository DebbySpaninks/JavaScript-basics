// Guess the number game

let numberToBeGuessed = null; //prompt retourneert null als de invoer is geannuleerd
let name;
let guess;
const min = 0;
const max = 25;

// Stap 1 Begroet de gebruiker en vraag zijn/haar naam
while (name === undefined || name === null || name.length === 0) {
    name = prompt("Welkom! Wat is je naam?");
}

//Stap 2 Begroet de gebruiker met zijn/haar naam "Hey naam"
alert("Hey " + name + "!");

// Stap 3 Pak een willekeurig getal van 0 tot 25. Hint: gebruik Math.random()
//Math.floor(Math.random() --> retourneert willekeurige hele getallen)
numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min; // tussen 25 en 0
console.log("Pssst het nummer is: " + numberToBeGuessed);


// Stap 4 "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
while (guess !== numberToBeGuessed) {
    guess = parseInt(prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...")); //parseInt geeft cijfers terug zonder toevoegingen
    alert("Je gok is: " + guess);
    if (guess > numberToBeGuessed) {
        // Stap 5 Bij verkeerd nummer alert("Helaas dat is niet het juiste nummer. Probeer het nogmaals") 
        alert("Helaas, dat nummer was te hoog. Probeer het nogmaals:");
    } else if (guess < numberToBeGuessed) {
        alert("Helaas, dat nummer was te laag. Probeer het nogmaals:");
    } else {
        // Stap 6 Bij het juiste nummer alert("Gefeliciteerd! You guessed the number!")
        alert("Gefeliciteerd! You guessed the number!");
        // Stap 7 Bericht na afloop van het spel alert(Dag [naam]. Tot de volgende keer")
        alert("Dag " + name + ". Bedankt voor het spelen, tot de volgende keer!");
    }
}