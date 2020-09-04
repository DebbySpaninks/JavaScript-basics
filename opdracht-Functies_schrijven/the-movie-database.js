const favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 135,
    stars: ["Puff", "Jackie", "Living Sneezes."]
};

// Oplossing met een for loop
const printMovie1 = function (movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. ");
    let starsString = "Stars: ";
    for (let i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i]; // uitgebreide syntax: starsString = starsString + movie.stars[i];
        if (i !== movie.stars.length -1) {
            starsString += ", ";
        }
    }
    console.log(starsString);
};

// Oplossing met een array.join
const printMovie2 = function (movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. ");
    console.log("Stars: " + movie.stars.join(", "));
};
printMovie1(favoriteMovie);
printMovie2(favoriteMovie);