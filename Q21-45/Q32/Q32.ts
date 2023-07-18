let current_users: string[] = ['John', 'Alice', 'Eric', 'Sarah', 'Mike'];
let new_users: string[] = ['Peter', 'Eric', 'Mike', 'Linda', 'Jenny'];

for (let newUser of new_users) {
  let usernameTaken = false;

  for (let currentUser of current_users) {
    if (newUser.toLowerCase() === currentUser.toLowerCase()) {
      usernameTaken = true;
      break;
    }
  }

  if (usernameTaken) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${newUser}' is available.`);
  }
}
