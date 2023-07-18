var personName = "John Doe";
// Lowercase
var lowercaseName = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);
// Uppercase
var uppercaseName = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);
// Titlecase
function toTitleCase(name) {
    return name.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
}
var titlecaseName = toTitleCase(personName);
console.log("Titlecase:", titlecaseName);
