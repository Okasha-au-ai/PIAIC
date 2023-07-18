var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Japan", "Italy", "New Zealand", "Egypt", "Brazil"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
console.log("Original order after sorting:", placesToVisit);
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original order after reverse sorting:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Original order after double reversal:", placesToVisit);
placesToVisit.sort();
console.log("Alphabetical order after sorting:", placesToVisit);
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order after sorting:", placesToVisit);
