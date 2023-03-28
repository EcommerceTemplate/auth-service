const userRepository = require('../repositories/userRepository');
const UserModel = require('../models/user');

const createUser = async (body) => {
    try {
        const user = new UserModel(body);
        body.password = await user.encryptPassword(body.password);
        const newUser = await userRepository.createUser(body);
        if (!newUser) {
            throw new Error('Failed to create user');
        }
        return user;
    } catch (error) {
        throw error;
    }
};

const findUserByUsername = async (username) => {
    try {
        const user = await userRepository.findUserByUsername(username);
        return user;
    } catch (error) {
        throw error;
    }
};

const findUserByEmail = async (email) => {
    try {
        const user = await userRepository.findUserByEmail(email);
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = { createUser, findUserByUsername, findUserByEmail };