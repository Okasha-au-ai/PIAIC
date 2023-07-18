let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Printing the names of each animal
console.log("Printing animal names:");
for (let animal of animals) {
  console.log(animal);
}

// Printing statements about each animal
console.log("\nPrinting statements about each animal:");
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

// Printing a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
