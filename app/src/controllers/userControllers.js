const userService = require('../services/userService');
const userSchema = require('../validations/userValidation');
const status = require('http-status');


exports.createUser = async (req, res, next) => {
    try {
        const { error } = userSchema.validate(req.body);
        if(error){
            res.status(422).send(status['400_MESSAGE']);
        }
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};
