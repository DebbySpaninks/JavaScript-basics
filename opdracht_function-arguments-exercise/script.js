console.log('this script runs');

const paintWalls = (side, color) => {
    console.log('the ' + side + ' wall has been painted ' + color);
};
paintWalls('south', 'green');              // the south wall has been painted green
paintWalls('west', 'purple');              // the west wall has been painted purple
paintWalls();                              // the undefined wall has been painted undefined
