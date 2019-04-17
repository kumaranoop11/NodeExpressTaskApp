const UserService = require('./userService');

export async function getAllUsers() {
    const users = await UserService.getAllUsers();
    return users;
}

export async function addUser(userName) {
    const user = await UserService.getUser(userName);
    return chat;
}

export async function updateUser(userName) {
    const user = await UserService.getUser(userName);
    const chat = await UserService.getChat(user);
    return chat;
}

export async function getUser(userName) {
    const user = await UserService.getUser(userName);
    return user;
}

export async function deleteUser(userName) {
    const user = await UserService.deleteUser(userName);
    return user;
}