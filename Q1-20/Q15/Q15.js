var guestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
var guestUnableToAttend = "Ada Lovelace"; // Guest who can't make it
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of great conversations and good food."));
}
console.log("Unfortunately, ".concat(guestUnableToAttend, " is unable to attend the dinner."));
