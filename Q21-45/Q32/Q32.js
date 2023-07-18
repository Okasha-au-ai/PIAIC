var current_users = ['John', 'Alice', 'Eric', 'Sarah', 'Mike'];
var new_users = ['Peter', 'Eric', 'Mike', 'Linda', 'Jenny'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    var usernameTaken = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var currentUser = current_users_1[_a];
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
