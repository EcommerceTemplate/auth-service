const userRepository = require('../repositories/userRepository');

const createUser = async (body) => {
    try {
        const user = await userRepository.createUser(body);
        if (!user) {
            throw new Error('Failed to create user');
        }
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = { createUser };