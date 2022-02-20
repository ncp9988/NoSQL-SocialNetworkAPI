const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        require: "This is required",
        length: [1,280],
        // Must be between 1 and 280 characters

    },
    createAt: {
        type: Date,
        default: Date.now,
        //Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        require: 'Username is required',
    },
    reactions: {
        //Array of nested documents created with the reactionSchema

    }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;