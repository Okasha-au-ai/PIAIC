var guestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
var guestUnableToAttend = "Ada Lovelace"; // Guest who can't make it
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of great conversations and good food."));
}
console.log("Great news! We have found a bigger dinner table.");
guestList.unshift("Marie Curie"); // Add a new guest to the beginning of the array
guestList.splice(Math.ceil(guestList.length / 2), 0, "Leonardo da Vinci"); // Add a new guest to the middle of the array
guestList.push("Amelia Earhart"); // Add a new guest to the end of the array
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of great conversations and good food."));
}
