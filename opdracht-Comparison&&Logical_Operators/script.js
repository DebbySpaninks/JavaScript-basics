const age = 17;
const isFemale = true;
const driverStatus = "bob";
const nameMale = "Bram";
const nameFemale = "Sarah";
const totalAmount = 20;

if (age > 17) {
  console.log("Je bent 18 jaar of ouder, kom maar binnen");
} else {
  console.log(
    "Je bent jonger dan 18 jaar, je wordt vriendelijk verzocht buiten te blijven"
  );
}

if (isFemale == true) {
  console.log("Je bent een vrouw");
} else {
  console.log(
    "Ladiesnight is alleen voor vrouwen, je kunt wel tickets kopen voor een andere dag"
  );
}

if (driverStatus == "bob") {
  console.log("Jij bent de bob en mag rijden");
} else {
  console.log("Jij moet lopend naar huis of de bob brengt je weg");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Helaas geen korting voor jou!");
}

if (nameMale === "Bram" || nameFemale === "Sarah") {
  console.log("Jij bent 50 jaar en krijgt vandaag één gratis biertje");
} else {
  console.log("Geen gratis biertje voor jou!");
}

if (totalAmount > 25 && totalAmount <= 50) {
  console.log("Je krijgt (vega)bitterballen gratis!");
} else if (totalAmount > 50 && totalAmount < 100) {
  console.log("Je krijgt een portie nachos gratis!");
} else if (totalAmount >= 100) {
  console.log("Je krijgt een flesje champagne gratis!");
} else {
  console.log("Meer geld uitgeven, dan pas krijg je iets gratis");
}
