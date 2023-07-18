function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let modifiedMagicians: string[] = [];

  for (let magician of magicians) {
    modifiedMagicians.push("the Great " + magician);
  }

  return modifiedMagicians;
}

// Creating an array of magician's names
let magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Calling the make_great() function with a copy of the magicianNames array
let greatMagicians: string[] = make_great([...magicianNames]);

// Calling the show_magicians() function to display both arrays
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nModified Magicians:");
show_magicians(greatMagicians);
