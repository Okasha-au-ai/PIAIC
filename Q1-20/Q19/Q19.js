var guestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of great conversations and good food."));
}
console.log("The number of people invited to dinner is ".concat(guestList.length, "."));
