const tellFortune = function (jobTitle, geoLocation, namePartner, numberOfKids) {
    let future = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + namePartner + " with " + numberOfKids + " kids.";
    console.log(future);
};
tellFortune("Electriciën", "The Netherlands", "Marie", 2);
tellFortune("Caretaker", "France", "Ann", 5);
tellFortune("Mechanic", "Russia", "Jo", 3);