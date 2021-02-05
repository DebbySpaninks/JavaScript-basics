console.log('this script runs');

const paintWalls = (side, color) => {
    console.log('the ' + side + ' wall has been painted ' + color);
};
paintWalls('south', 'green');              // the wall has been painted green
paintWalls('west', 'purple');              // the wall has been painted purple
paintWalls();                              // undefined
