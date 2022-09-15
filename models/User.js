const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

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
},
{
    //how the schema knows it can use virtuals and getters
    toJSON: {
      virtuals: true,
    },
    //id: false
  }
);

 // get total count of friends for each user
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

//creates User model using the User Schema
const User = model('User', UserSchema);

//export the User model
module.exports = User;