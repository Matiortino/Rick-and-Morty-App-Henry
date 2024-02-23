const users = require("./users");

function registerUser(email, password) {
    users.push({ email, password });
}

function authenticateUser(email, password) {
    return users.some(user => user.email === email && user.password === password);
}

module.exports = { registerUser, authenticateUser };
