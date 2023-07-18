let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

for (let guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversations and good food.`);
}

console.log(`The number of people invited to dinner is ${guestList.length}.`);
