const { Schema, model } = require('mongoose');

var validateEmail = function(email) {
    var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return re.test(email)
};

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

//creates User model using the User Schema
const User = model('User', UserSchema);

//export the User model
module.exports = User;