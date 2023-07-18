let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
let guestUnableToAttend: string = "Ada Lovelace"; // Guest who can't make it

for (let guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversations and good food.`);
}

console.log(`Unfortunately, ${guestUnableToAttend} is unable to attend the dinner.`);
