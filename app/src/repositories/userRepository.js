const UserModel = require('../models/UserModel');

async function createUser(userData) {
    const user = new UserModel(userData);
    await user.save();
    return user;
}

async function findUserByUsername(username) {
    const user = await UserModel.findOne({ username });
    return user;
}

async function findUserByEmail(email) {
    const user = await UserModel.findOne({ email });
    return user;
}
async function findUserById(userId) {
    const user = await UserModel.findById(userId);
    return user;
}

async function updateUserById(userId, userData) {
    const user = await UserModel.findByIdAndUpdate(userId, userData, { new: true });
    return user;
}

async function deleteUserById(userId) {
    const user = await UserModel.findByIdAndDelete(userId);
    return user;
}

async function getAllUsers() {
    const users = await UserModel.find({});
    return users;
}


module.exports = {
    createUser,
    findUserByUsername,
    findUserByEmail,
    findUserById,
    updateUserById,
    deleteUserById,
    getAllUsers,
};
