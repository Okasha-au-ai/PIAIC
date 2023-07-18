let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela", "Marie Curie", "Leonardo da Vinci", "Amelia Earhart"];

console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.");
console.log("We can only invite two people for dinner.");

while (guestList.length > 2) {
  let removedGuest: string = guestList.pop()!;
  console.log(`Sorry, ${removedGuest}, we're unable to invite you to dinner.`);
}

for (let guest of guestList) {
  console.log(`Dear ${guest}, you are still invited to dinner.`);
}

guestList.length = 0;

console.log("Guest list after removing all names:", guestList);
