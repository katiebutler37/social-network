const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtals: true,  
        getters: true
      },
      //id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

 const Thought = model("Thought", ThoughtSchema);

 module.exports = Thought;