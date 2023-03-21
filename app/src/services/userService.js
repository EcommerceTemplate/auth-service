const userRepository = require('../repositories/userRepository');

module.exports = {

    createUser: body => userRepository.createUser(body)
};