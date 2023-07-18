let placesToVisit: string[] = ["Japan", "Italy", "New Zealand", "Egypt", "Brazil"];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Original order after sorting:", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

console.log("Original order after reverse sorting:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Original order after double reversal:", placesToVisit);

placesToVisit.sort();
console.log("Alphabetical order after sorting:", placesToVisit);

placesToVisit.sort().reverse();
console.log("Reverse alphabetical order after sorting:", placesToVisit);
