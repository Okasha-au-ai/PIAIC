let personName: string = "John Doe";

// Lowercase
let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);

// Uppercase
let uppercaseName: string = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);

// Titlecase
function toTitleCase(name: string): string {
  return name.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}

let titlecaseName: string = toTitleCase(personName);
console.log("Titlecase:", titlecaseName);
