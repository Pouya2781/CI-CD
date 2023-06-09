const { signUp, signIn, changePassword, deleteUser } = require("./utils")

console.log("Started...");

const users = [{
    username: "pouya2781",
    password: "12345678"
}];

console.log(users);
console.log(signIn(users, "pouya2781", "12345678"));
console.log(signIn(users, "pouya2781", "12345677"));
changePassword(users, "pouya2781", "12345677", "98765432");
console.log(users);
changePassword(users, "pouya2781", "12345678", "98765432");
console.log(users);
signUp(users, "pouya2781", "12345679");
console.log(users);
signUp(users, "pouya2782", "12345679");
console.log(users);
deleteUser(users, "pouya2781");
console.log(users);
