var animals = ['Dog', 'Cat', 'Rabbit'];
// Printing the names of each animal
console.log("Printing animal names:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Printing statements about each animal
console.log("\nPrinting statements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet."));
}
// Printing a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
