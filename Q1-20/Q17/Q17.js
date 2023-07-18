var guestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela", "Marie Curie", "Leonardo da Vinci", "Amelia Earhart"];
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.");
console.log("We can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we're unable to invite you to dinner."));
}
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
guestList.length = 0;
console.log("Guest list after removing all names:", guestList);
