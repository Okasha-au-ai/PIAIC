let names: string[] = ["Alice", "Bob", "Charlie", "Dave"];
let message: string = "Hello, {name}! Hope you're having a great day.";

for (let name of names) {
  let personalizedMessage: string = message.replace("{name}", name);
  console.log(personalizedMessage);
}
