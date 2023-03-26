const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const status = require('http-status');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default: 'default-avatar-url.jpg'
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//method for encrypt password
UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}
//method for validate password
UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
