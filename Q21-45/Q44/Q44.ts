function make_sandwich(...items: string[]): void {
  console.log("Sandwich Order:");
  console.log("Bread");

  for (let item of items) {
    console.log(item);
  }

  console.log("Bread");
  console.log("Enjoy your sandwich!\n");
}

// Calling the make_sandwich() function with different numbers of arguments
make_sandwich("Cheese", "Tomato", "Lettuce");
make_sandwich("Turkey", "Bacon");
make_sandwich("Ham", "Swiss", "Mustard", "Pickles", "Onions");
