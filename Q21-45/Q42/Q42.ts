function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

// Creating an array of magician's names
let magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Modifying the magicianNames array using the make_great() function
make_great(magicianNames);

// Calling the show_magicians() function to see the modified list
show_magicians(magicianNames);
