function signUp(users, username, password) {
    const user = users.find(user => user.username == username);
    if (user != null)
        return;
        
    users.push({
        username: username,
        password: password
    });
}

function signIn(users, username, password) {
    const user = users.find(user => user.username == username && user.password == password);
    if (user != null)
        return true;
        
    return false;
}

function changePassword(users, username, oldPassword, password) {
    const user = users.find(user => user.username == username && user.password == oldPassword);
    if (user == null)
        return;

    user.password = password;
}

function deleteUser(users, username) {
    const index = users.findIndex(user => user.username === username);
    if (index == -1)
        return;

    users.splice(index, 1)
}

module.exports = {
    signUp: signUp,
    signIn: signIn,
    changePassword: changePassword,
    deleteUser: deleteUser
}