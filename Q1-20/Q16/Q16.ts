let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
let guestUnableToAttend: string = "Ada Lovelace"; // Guest who can't make it

for (let guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversations and good food.`);
}

console.log("Great news! We have found a bigger dinner table.");

guestList.unshift("Marie Curie"); // Add a new guest to the beginning of the array
guestList.splice(Math.ceil(guestList.length / 2), 0, "Leonardo da Vinci"); // Add a new guest to the middle of the array
guestList.push("Amelia Earhart"); // Add a new guest to the end of the array

for (let guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversations and good food.`);
}
