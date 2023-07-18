function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  // Creating an array of magician's names
  let magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  // Calling the show_magicians() function with the magicianNames array
  show_magicians(magicianNames);
  