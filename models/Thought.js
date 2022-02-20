const { Schema, model } = require('mongoose');
const timestamp = require('../utils/index');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        require: "This is required",
        minlength: 1,
        maxlength: 280,
    },
    createAt: {
        type: Date,
        default: Date.now,
        get: datetime => timestamp(datetime)
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