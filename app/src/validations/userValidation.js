const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email().required(),
    avatar: Joi.string(),
    role: Joi.string().valid('user', 'admin').required(),
    isVerified: Joi.boolean().default(false)
});

module.exports = userSchema;
