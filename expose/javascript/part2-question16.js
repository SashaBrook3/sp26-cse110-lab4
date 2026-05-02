let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2 
};
// Given the above Object, write a for...in loop that will iterate through it 
// and print out the value of the property if the property starts with the 
// letter r, or if the value of that property is an odd number.
for (const property in statistics) {
    if (property[0] == 'r' || ((statistics[property] % 2) === 1)) {
        console.log(statistics[property]);
    }
}