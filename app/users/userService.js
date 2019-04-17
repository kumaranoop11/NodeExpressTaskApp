const User = require('../user/UserModel');

export function getAllUsers(username) {
    return User.find({}).exec();    
}

export async function addUser(userName, password) {
    let newUser = new User(userName, password);
    let addedUser = await newUser.save();
    return addedUser;
}

export async function updateUser(userId, newEmail, newPassword) {
    let updatedUser = User.findOneAndUpdate({_id: userId}, {$set:{email: newEmail, password:newPassword}}, {new: true});
    return updatedUser;
}

export async function getUser(userName) {
    return User.findOne({email: userName});
}

export async function deleteUser(userName) {
    let deletedUser = User.deleteOne({email: userName});
    return deletedUser;
}