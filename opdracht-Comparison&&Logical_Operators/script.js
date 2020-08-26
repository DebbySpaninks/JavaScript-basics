const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 20;

if (age >= 18) {
  console.log("Je bent 18 jaar of ouder, kom maar binnen");
} else {
  console.log(
    "Je bent jonger dan 18 jaar, je wordt vriendelijk verzocht buiten te blijven"
  );
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting op je biertje!");
}

if (isFemale) {
  console.log("Je bent een vrouw");
} else {
  console.log(
    "Ladiesnight is alleen voor vrouwen, je kunt wel tickets kopen voor een andere dag"
  );
}

if (driverStatus === "bob") {
  console.log("Jij bent de bob en mag rijden");
} else {
  console.log("Jij moet lopend naar huis of de bob brengt je weg");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Jouw naam is Sarah of Bram, je krijgt één gratis biertje");
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

//Hieronder de beknopte oplossing van Winc
/* 
  if (totalAmount >= 100) {
  console.log("gratis flesje champagne.");
} else if (totalAmount > 50) {
  console.log("gratis portie nachos");
} else if (totalAmount > 25) {
  console.log("gratis (vega)bitterballen");
} else {
  console.log("Helaas geen korting, maar leuk dat je er bent");
}
*/
