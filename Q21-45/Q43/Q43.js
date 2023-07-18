var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
// Creating an array of magician's names
var magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Calling the make_great() function with a copy of the magicianNames array
var greatMagicians = make_great(__spreadArray([], magicianNames, true));
// Calling the show_magicians() function to display both arrays
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nModified Magicians:");
show_magicians(greatMagicians);
